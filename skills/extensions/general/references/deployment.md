# General Extension — Deployment & Submission

## Prerequisites
- Cloud account (AWS / GCP / Azure)
- Docker installed
- Redis instance (for production session storage)
- Production domain (HTTPS)

## Production Environment Variables
```env
EXTENSION_API_KEY=<production_api_key>
EXTENSION_API_SECRET=<production_api_secret>
EXTENSION_BASE_URL=<https://your-domain.com>
REDIS_HOST=your-redis-host
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password
```

## Switch to Redis Storage (required for prod)

Replace SQLite with Redis in `server.js`:
```js
const RedisStorage = require('@gofynd/fdk-extension-javascript/express/storage/redis_storage');
const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

const fdkExtension = setupFdk({
  // ...
  storage: new RedisStorage(redisClient),
  access_mode: 'offline',
});
```

## Update Extension URL
After deploying, update the Extension Base URL in Partners Panel:
Partners → Extensions → your extension → Edit → Extension URL → save production URL.

---

## Review & Submission Checklist

### Documentation Required
- [ ] **Business Document**: Use case, target audience, user flows
- [ ] **Testing Document**: Step-by-step test guide for Fynd DX team
- [ ] **Technical Specification**: Languages, libraries, DB, hosting, APIs used
- [ ] **User Document**: Setup instructions, usage guide, troubleshooting steps
- [ ] **Support Info**: Contact, support hours, SLA

### Compliance & Legal
- [ ] Relevant use case aligned with Fynd platform goals
- [ ] Complies with Fynd Terms of Service
- [ ] Data compliance (GDPR / CCPA)
- [ ] All libraries properly licensed

### Security
- [ ] OAuth or token-based auth (no custom auth)
- [ ] Data encrypted in transit (HTTPS) and at rest
- [ ] Vulnerability scan (OWASP ZAP / Burp Suite)
- [ ] Code review for XSS, SQL injection, CSRF

### Technical
- [ ] Compatible with current Fynd Commerce version
- [ ] All APIs documented, versioned, rate-limited
- [ ] Errors handled gracefully
- [ ] Scalable (handles expected user volume)

### UI/UX
- [ ] Responsive layouts, consistent design
- [ ] WCAG 2.1 accessibility
- [ ] Matches Fynd marketplace branding guidelines
- [ ] Localization support

## Private Extension (skip marketplace review)
For private extensions (specific sellers only): Partners Panel → Extension → Add Seller Accounts directly.
Still follow the security and technical checklist.
