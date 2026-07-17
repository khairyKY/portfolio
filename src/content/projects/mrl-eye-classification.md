---
title: "MRL Eye Classification"
description: "Drowsiness detection with DenseNet121 + ViT — real-time webcam inference with temporal smoothing, audible alerts, and Arduino hardware buzzer."
tags: ["AI/ML"]
date: 2025
tech: ["PyTorch", "OpenCV", "CUDA", "DenseNet121", "ViT", "Arduino", "Python"]
demo: null
image: "/images/mrl-eye.svg"
# TODO: Replace with real screenshot
---
I trained DenseNet121 and Vision Transformer (ViT) models for binary drowsiness classification on the MRL Eye Dataset; ViT was selected as the team's final model for superior accuracy. Built the real-time webcam inference pipeline with Haar Cascade eye detection, temporal smoothing, and async inference. Drowsiness triggers screen flash, system beep, and an Arduino-wired hardware buzzer/LED alert. 21 supporting scripts covering augmentation, retrain iterations, quantization, and benchmarking.


