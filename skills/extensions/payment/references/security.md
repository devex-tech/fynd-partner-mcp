# Payment Extension — Security & Checksum

## Why Checksum?

Fynd uses HMAC-SHA256 checksums to verify that API requests are authentic — they actually came from Fynd and haven't been tampered with. Your Extension API Secret is the signing key.

Two directions:
1. **Verifying incoming requests** (`initiatePaymentSession`, `initiateRefundSession`) — Fynd sends a checksum header, you verify it
2. **Generating checksum for outgoing requests** (`updatePaymentSession`, `updateRefundSession`) — you sign the body and pass it in the request

---

## Checksum Generation / Verification

### JavaScript
```javascript
const crypto = require("node:crypto");

function generateChecksum(requestPayload, extensionApiSecret) {
  const message = JSON.stringify(requestPayload);  // stringify the body dict
  const encodedBytes = Buffer.from(message, 'utf-8');
  const hmac = crypto.createHmac('sha256', extensionApiSecret).update(encodedBytes);
  return hmac.digest('hex').toString();
}

// Verify incoming request:
const receivedChecksum = req.headers['checksum'];
const expectedChecksum = generateChecksum(req.body, process.env.EXTENSION_API_SECRET);
if (receivedChecksum !== expectedChecksum) {
  return res.status(401).json({ error: 'Invalid checksum' });
}

// Generate for outgoing request:
const checksum = generateChecksum({ status: 'complete', gid: gid }, process.env.EXTENSION_API_SECRET);
```

### Python
```python
import hmac
import hashlib
import json

def generate_checksum(payload: dict, secret: str) -> str:
    message = json.dumps(payload, separators=(',', ':'))
    hmac_obj = hmac.new(secret.encode('utf-8'), message.encode('utf-8'), hashlib.sha256)
    return hmac_obj.hexdigest()

# Verify:
received = request.headers.get('checksum')
expected = generate_checksum(request.json(), os.environ['EXTENSION_API_SECRET'])
if received != expected:
    return jsonify({'error': 'Invalid checksum'}), 401
```

### Java
```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public static String generateChecksum(String payload, String secret) throws Exception {
    Mac hmac = Mac.getInstance("HmacSHA256");
    SecretKeySpec keySpec = new SecretKeySpec(secret.getBytes("UTF-8"), "HmacSHA256");
    hmac.init(keySpec);
    byte[] hash = hmac.doFinal(payload.getBytes("UTF-8"));
    StringBuilder hex = new StringBuilder();
    for (byte b : hash) { hex.append(String.format("%02x", b)); }
    return hex.toString();
}
```

**Critical**: Use `JSON.stringify` / `json.dumps` with minimal separators and no extra whitespace. The exact byte representation must match.

---

## Encrypting Merchant Credentials

**Always encrypt gateway credentials before storing in your DB.** Use AES-256-GCM.

### JavaScript (AES-256-GCM)
```javascript
const crypto = require('crypto');

function encrypt(secretKey, msg) {
  const key = Buffer.from(secretKey, 'hex');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('AES-256-GCM', key, iv);
  const encrypted = Buffer.concat([cipher.update(msg, 'utf-8'), cipher.final()]);
  return {
    enc_iv: iv.toString('hex'),
    gateway_secret: encrypted.toString('hex'),
    authTag: cipher.getAuthTag().toString('hex'),
  };
}

function decrypt(secretKey, { enc_iv, gateway_secret, authTag }) {
  const key = Buffer.from(secretKey, 'hex');
  const iv = Buffer.from(enc_iv, 'hex');
  const ct = Buffer.from(gateway_secret, 'hex');
  const decipher = crypto.createDecipheriv('AES-256-GCM', key, iv);
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  const decrypted = Buffer.concat([decipher.update(ct), decipher.final()]);
  return JSON.parse(decrypted.toString('utf-8'));
}
```

Use `EXTENSION_API_SECRET` (or a separate encryption key) as `secretKey`. Never store plaintext gateway secrets.

---

## Security Checklist

- [ ] Verify checksum on every incoming `initiatePaymentSession` request
- [ ] Verify checksum on every incoming `initiateRefundSession` request
- [ ] Generate checksum for `updatePaymentSession` body
- [ ] Generate checksum for `updateRefundSession` body
- [ ] Encrypt merchant gateway credentials with AES-256-GCM before saving
- [ ] Validate credentials before saving to DB (test a small API call)
- [ ] Show audit trail on config page (when creds were last updated, by whom)
- [ ] Never log or expose raw credentials in logs/errors
