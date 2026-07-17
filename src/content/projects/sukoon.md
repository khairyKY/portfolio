---
title: "Sukoon"
description: "Android CGM glucose viewer for Type 1 diabetes — Jetpack Compose, interactive time-ranged graphs, built from personal medical need."
tags: ["Frontend", "UI/UX"]
date: 2026
tech: ["Kotlin", "Jetpack Compose", "Room", "Material 3", "Coroutines"]
github: "https://github.com/khairyKY/sukoon"
demo: null
image: "/images/sukoon.png"
---

A native Android CGM companion app for the FreeStyle Libre 2, built to replace the stock sensor UI with something calmer and more useful. Born from my own daily need as a Type 1 diabetic — the name means "stillness" in Arabic.

## Why I built it

Existing CGM apps (Diabox, LibreLink) are cluttered, alarming, and designed around anxiety. Sukoon takes the opposite approach: a still-water/ripple design metaphor, colorblind-safe dual-encoded UI (color + texture), and language that reassures instead of panicking. "Calm and steady" instead of a flashing red number.

## Architecture

Clean-layered Kotlin with MVVM: `data/` (Room DB, preferences, sensor sources), `domain/` (metrics, units), `ui/` (Compose components, screens, navigation). Manual DI via `AppContainer`, ViewModels with `UiState` mappers, Coroutines/Flow throughout.

**Libre protocol** — clean-room implementation of the encrypted BLE/NFC protocol (ISO 15693 + key derivation), not forked from any existing open-source reader.

## Features

- **Real-time glucose graph** — hand-rolled Compose Canvas rendering (no chart library), with selectable time ranges (3h/6h/12h/24h)
- **MiniGraph sparkline** — compact glucose trend at a glance
- **Clinical metrics** — Time in Range, GMI, SD/CV, GVI, PGS computed in `GlucoseMetrics.kt`
- **Unit support** — mg/dL and mmol/L with live conversion
- **Insights screen** — 14-day trend analysis with plain-language summaries
- **SimulatedSource** — development mode without a real sensor
- **Onboarding** — medical disclaimer gate on first launch

Room DB with entities for readings, sensor sessions, calibrations, and events. ~3,400 lines of Kotlin across 32 source files. Early active development — 17 commits, 7 PRs merged, 31 open issues across 5 milestones.
