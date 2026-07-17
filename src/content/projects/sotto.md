---
title: "Sotto"
description: "Offline desktop voice dictation — Rust/Tauri with whisper.cpp (Vulkan GPU, 70x speedup), llama.cpp AI polish, and Harper grammar engine."
tags: ["Full-Stack", "AI/ML"]
date: 2026
tech: ["Rust", "Tauri v2", "ONNX Runtime", "whisper.cpp", "llama.cpp", "Vulkan"]
demo: null
image: "/images/sotto.svg"
# TODO: Replace with real screenshot
---
A desktop voice-dictation app that runs entirely offline — speak and it transcribes, polishes, and pastes into any application. No cloud dependency.

Built in Rust with Tauri v2. Transcription via whisper.cpp with ONNX Runtime and Vulkan GPU acceleration (70x speedup over CPU). AI polish via Qwen 2.5 1.5B running locally through a llama.cpp sidecar. Rule-based grammar correction via Harper engine. Features push-to-talk capture, dictation history with insights dashboard, and multiple themes.
