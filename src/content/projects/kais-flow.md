---
title: "Kai's Flow"
description: "Productivity PWA — calendar time-blocking, task management, journal, Pomodoro timer. React 19 + Supabase with a botanical design system."
tags: ["Full-Stack", "Frontend"]
date: 2026
tech: ["React 19", "TypeScript", "Vite", "Supabase", "FullCalendar", "TanStack Query", "dnd-kit", "Zustand"]
github: "https://github.com/khairyKY/kais-flow"
demo: null
image: "/images/kais-flow.png"
---

A full life-management PWA built to replace Akiflow — calendar time-blocking, task management, journaling, reading library, focus timer, and weekly reviews, all wrapped in a botanical design system that changes with the seasons.

## What it does

26 feature modules covering the full productivity loop:

- **Today dashboard** — daily goal, top-3 tasks, ritual progress, terrarium streak, journal entry, and a "slipping" sidebar for neglected projects
- **Calendar** — FullCalendar integration with day/time grids, drag-to-schedule from an unscheduled task tray
- **Tasks** — drag-and-drop reordering (dnd-kit), recurrence rules (rrule), inbox capture, planning board
- **Routines** — morning/evening rituals with streak tracking via a `StreakTrellis` component
- **Projects & Perennials** — short-lived projects and long-lived areas (domains)
- **Journal** — daily freeform entries
- **Library** — reading list and notes
- **Focus mode** — Pomodoro timer and stopwatch
- **Voice capture** — quick audio-to-task capture
- **Seasons** — UI theme shifts with real meteorological seasons, pulling live weather from Open-Meteo for Cairo
- **Herbarium** — a botanical collection page (part of the garden metaphor)
- **Command bar + search** — keyboard-first navigation across all modules

## Architecture

~46,600 lines of TypeScript/TSX/CSS. React 19 with React Router v8 (route-level code splitting via `lazy()`), Zustand for client state, TanStack React Query for server state with IndexedDB persistence. Supabase handles auth, database, and realtime sync.

**Offline-first** — an outbox pattern (`lib/outbox.ts`) queues mutations when offline, replaying them on reconnect. PWA via `vite-plugin-pwa` with Workbox precaching.

## Design system

Custom CSS token system under `src/styles/tokens/` — colors, typography, spacing, effects, motion. Day/night theme toggle. Seasonal palettes (spring/summer/autumn/winter) derived from the real clock, with per-season background gradients and cherry blossom assets. The botanical metaphor runs deep: projects are "perennials", streaks grow a terrarium, and the garden flourishes as you stay consistent.

78 commits · Deployed on Cloudflare Workers/Pages via Wrangler
