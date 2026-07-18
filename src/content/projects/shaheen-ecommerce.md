---
title: "Shaheen E-Commerce"
description: "Solo-rescued a live Laravel 12 e-commerce platform — 300+ commits (100% code ownership), 100+ PRs merged, 55+ production issues closed."
tags: ["Full-Stack", "Backend", "Infrastructure"]
date: 2025
tech: ["Laravel 12", "Livewire 3", "Filament 4", "Tailwind v4", "SQLite", "GitHub Actions", "Pest PHP"]
github: "https://github.com/shaheentireofficial/shaheentire-live"
demo: "https://shaheentire.com"
image: "/images/shaheen-ecommerce.png"
---

Solo-rescued a live multi-vendor marketplace — **300+ master commits (100% code ownership), 100+ PRs merged, 55+ issues closed.**

Delivered end-to-end across the full stack — Livewire 3 Volt components, Filament 4 admin panel, Blade templates, Alpine.js, and Tailwind v4:

- **Double VAT Leak:** Identified and purged a redundant 14% VAT overcharge in `ShippingRateService::vatFor()` that was silently bleeding client revenue.
- **Checkout Pipeline:** Re-architected a broken P0 Paymob checkout flow into strict DB transactions, unblocking the revenue pipeline.
- **Ops Rescue & Drift Checking:** Resolved a critical HTTP 500 deploy outage caused by 13,427 divergent server-edited lines. Deployed a 6-workflow CI/CD pipeline and a nightly drift checker.
- **Security:** Eliminated a P0 CSRF 419 error on logouts via event-delegation token refresh, dropping failure rates from 3 retries to first-click success.
- Enterprise SEO: 10 JSON-LD schemas, dynamic meta titles/descriptions, image sitemaps, multi-language hreflang routing
- Multi-region shipping rate matrix (4 size tiers, vendor-split) and intelligent tire-size cross-reference engine (2 up / 2 down)
- Google OAuth via Socialite, email verification via Resend with branded dark-mode templates, saved delivery addresses, avatar crop/zoom/rotate

