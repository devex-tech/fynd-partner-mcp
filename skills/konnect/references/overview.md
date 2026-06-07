# Konnect — Overview

## What Is Fynd Konnect?

Fynd Konnect is a multi-channel commerce hub that enables seamless selling across marketplaces, webstores, and offline stores. It connects your Fynd Commerce account with external sales channels and backend systems, providing real-time inventory sync, unified order management, and automated fulfillment workflows.

> "Fynd Konnect is the ultimate growth engine for modern commerce" — centralize, automate, and scale across every channel.

## Key Differentiators

| Feature | Description |
|---------|-------------|
| **Real-Time Inventory Sync** | Stock levels auto-update across all channels — prevents overselling and missed sales |
| **Unified Order Management** | Control orders, cancellations, refunds from one dashboard |
| **Effortless Integration** | Connect ERP, WMS, POS, OMS via standardized REST APIs |
| **Unified Data & Insights** | Consistent reporting across all channels |
| **Scalability** | Manage thousands of SKUs, expand to new platforms easily |
| **Enhanced Accuracy** | Real-time sync eliminates manual entry errors |
| **Improved Customer Satisfaction** | Faster order processing and return handling |

## How Konnect Works

```
Customer places order on marketplace / webstore
        ↓
Fynd Konnect captures order → flows into Fynd Commerce → Seller Portal
        ↓
Konnect relays to backend (ERP / WMS / OMS / POS)
        ↓
Fulfillment automated → status synced back to all channels
```

1. **Order Placement** — Order captured from any connected channel
2. **Seamless Flow** — Data moves through Fynd Commerce + Seller Portal
3. **Backend Integration** — ERP/WMS/OMS receive updates automatically
4. **Channel Sync** — Inventory, pricing, order status stay consistent everywhere

## 6 Channel Types

| Type | What It Is | Examples |
|------|-----------|---------|
| **Marketplaces** | Third-party e-commerce platforms | Amazon, AJIO, Flipkart, Meesho, FirstCry, Limeroad, Nykaa, Trendyol |
| **Webstores** | Your brand's own online storefront | Fynd Commerce storefront |
| **ERP & WMS** | Backend business systems for inventory/orders | Unicommerce, SAP, Vinculum, Tally, Increff, Browntape, EasyEcom |
| **POS** | In-store point-of-sale systems | Ginesys |
| **Inventory Consumer** | Systems consuming inventory via FTP/SFTP | SFTP-based stock sync |
| **Custom** | Bespoke integrations for unique needs | Custom API integrations |

## Two Auth Models

| Model | Use When |
|-------|---------|
| **Company Auth** | One credential → manages all stores. Best for brands with centralized operations. |
| **Store Auth** | Per-store credentials. Best for franchises or locations with independent accounts. |

## Konnect Dashboard Sections

| Section | Purpose |
|---------|---------|
| **Channels** | Connect and manage all channel integrations |
| **Products** | Channel mapping, inventory snapshots, reconciliation |
| **Location** | Manage stores/warehouses, buffer stock per location |
| **Orders** | View and manage orders across channels |
| **Settings** | Account configuration |

## Base URLs

| Environment | URL |
|-------------|-----|
| **Sandbox (UAT)** | `https://{{aggregator_name}}.uat.fyndx1.de/` |
| **Production** | `https://{{aggregator_name}}.extensions.fynd.com/` |

Example: `https://api.konnect.uat.fyndx1.de/` (staging)

**Auth header for all APIs:** `x-access-token: <your_token>`
