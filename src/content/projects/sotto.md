---
title: "Sotto"
description: "Offline desktop voice dictation — Rust/Tauri with whisper.cpp (Vulkan GPU, 70x speedup), llama.cpp AI polish, and Harper grammar engine."
tags: ["Full-Stack", "AI/ML"]
date: 2026
tech: ["Rust", "Tauri v2", "ONNX Runtime", "whisper.cpp", "llama.cpp", "Vulkan"]
github: "https://github.com/khairyKY/sotto"
demo: null
image: "/images/sotto.png"
---

A desktop voice-dictation app that runs **entirely offline** — hold a hotkey, speak, and Sotto transcribes, polishes, and pastes clean text into any application. No cloud, no subscription, no data leaving your machine.

## How it works

Sotto chains three stages in a single pipeline:

1. **Capture** — global push-to-talk hotkey (Right Ctrl, rebindable) records audio via `cpal`, with a cancel/retry escape hatch.
2. **Transcribe** — NVIDIA Parakeet v3 int8 model running through ONNX Runtime with Vulkan GPU acceleration (70x faster than CPU).
3. **Polish** — two tiers: short phrases get instant rule-based cleanup via Harper grammar engine; longer dictations route to Qwen 2.5 1.5B (Q4_K_M) running locally through a llama.cpp sidecar with full GPU offload.

The polished text is injected directly into the focused application via Windows keystroke simulation.

## Architecture

Single Rust crate, ~11,500 lines of code across 16 backend modules and a vanilla HTML/CSS/JS frontend. Key modules: `asr.rs` (transcription), `llm.rs` (sidecar management), `polish.rs` (two-tier routing), `hotkey.rs` (global capture), `inject.rs` (clipboard + keystroke paste), `stats.rs` (usage analytics).

Models (~2.1 GB) download on first launch from GitHub Releases and are stored in a configurable directory.

## Features

- **Insights dashboard** — words dictated, WPM average, per-app breakdown, streak calendar
- **Dictation history** — re-copy or re-polish any past take
- **Overlay pill** — transparent always-on-top indicator, color-coded by state (lilac = listening, amber = transcribing, gold = polishing, blush = error)
- **Custom dictionary & snippets** — expansion shortcuts for repeated phrases
- **"Marshmallow" design language** — cream/lilac palette, Newsreader + Hanken Grotesk typography, light/dark/system themes
- **Auto-updater** — minisign-signed delta updates (~4 MB) via GitHub Releases
- **Launch at login** with minimized start and single-instance guard

v0.3.3 · 30 commits · NSIS installer for Windows x64
