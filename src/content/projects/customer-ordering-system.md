---
title: "Customer Ordering System"
description: "Full-stack vertical-slice e-commerce — React 18 + Tailwind frontend, FastAPI backend, security middleware, and Playwright E2E. My project with team contributors."
tags: ["Full-Stack", "Frontend", "Backend"]
date: 2026
tech: ["React 18", "Vite", "Tailwind CSS", "FastAPI", "SQLAlchemy", "SQLite", "Playwright", "Python"]
github: "https://github.com/khairyKY/customer-ordering-system"
demo: null
image: "/images/customer-ordering.svg"
---
My CSE323 Software Engineering project — a full-stack vertical-slice e-commerce platform (COS). I own the checkout and shopping cart feature end-to-end. Built with React 18 + Vite + Tailwind CSS frontend, FastAPI + SQLAlchemy + SQLite backend. Team members contributed Payment, Tickets, and Auth features in their own vertical slices.

Key features I built: auto-populated product images, clickable product cards with quick-preview modal, terminal-style UI rebrand, unrolled print mode with PDF export, PII redaction middleware (strips emails/phones/credit cards from logs), PromptInjectionGuard blocking injection attacks before LLM touchpoints, and E2E tests with Playwright POM pattern.

This project pioneered a Test-Driven Prompting (TDP) workflow — human-led, AI-assisted development using structured prompt libraries and an `.ai/CONTEXT.md` brain file. See the docs/ for the full audit trail.
