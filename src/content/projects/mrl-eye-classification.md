---
title: "MRL Eye Classification"
description: "Drowsiness detection with DenseNet121 + ViT — real-time webcam inference with temporal smoothing, audible alerts, and Arduino hardware buzzer."
tags: ["AI/ML"]
date: 2025
tech: ["PyTorch", "OpenCV", "CUDA", "DenseNet121", "ViT", "Arduino", "Python"]
demo: null
image: "/images/mrl-eye.svg"
---

Binary drowsiness classifier trained on the **MRL Eye Dataset** (~84,000 infrared eye images, 4 classes collapsed to open/closed). I trained both DenseNet121 and Vision Transformer (ViT) models; ViT was selected as the team's final model for superior accuracy.

## My contribution

- **Model training** — DenseNet121 (transfer learning from ImageNet, fine-tuned final classifier layers) and ViT, both achieving **>96% validation accuracy** on the binary open/closed split
- **Real-time inference pipeline** — Haar Cascade eye detection → crop → model inference at ~30 FPS on a GTX-class GPU, with temporal smoothing (rolling window of N frames) to suppress false positives
- **Alert system** — drowsiness triggers screen flash + system beep, plus an Arduino-wired hardware buzzer and LED that fire over serial when eyes stay closed beyond threshold
- **21 supporting scripts** — data augmentation, retrain iterations, quantization experiments, and benchmarking utilities

## Team context

4-person university team project. I owned the model training, inference pipeline, and hardware integration. A teammate handled the dataset preprocessing; another built the PyQt5 GUI wrapper. The final deployed model (ViT) came from the team's collective iteration — I trained the candidates, the team evaluated and picked.
