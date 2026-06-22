---
title: Introduction
sidebar_position: 1
slug: /
---

# Physical AI & Humanoid Robotics

## Purpose

This book teaches how digital intelligence becomes embodied intelligence and how
that transition affects architecture, tooling, simulation, deployment, and
human interaction.

The central idea is that intelligence changes when it has to live inside a
body. A robot does not just answer questions or produce predictions. It senses
the world, maintains state, plans actions, executes movement, and reacts to
feedback from the environment. That is why this book treats physical AI as a
full stack problem rather than a single model problem.

## Learning Path

- Start with the foundations in Part 1.
- Learn ROS 2 in Part 2.
- Move through simulation, Isaac, and VLA systems.
- Finish with humanoids, hardware, and the capstone.

## What to Expect

- Stable chapter order.
- Canonical robotics terminology.
- Version-scoped examples and deployment assumptions.
- Appendices for setup and quick reference.

## What This Book Covers

The first part defines physical AI and embodied intelligence so the reader has
the correct mental model before touching tooling. The middle chapters build the
robotics infrastructure: ROS 2, simulation, NVIDIA Isaac, and multimodal robot
interaction. The later chapters focus on humanoid robotics, hardware, and the
final capstone system that connects everything into one autonomous pipeline.

## How to Use This Book

Read linearly the first time. Use the appendices later as a reference for setup
and troubleshooting.

## Book Map

```mermaid
flowchart LR
  A["Foundations"] --> B["ROS 2"]
  B --> C["Simulation"]
  C --> D["Isaac"]
  D --> E["VLA"]
  E --> F["Humanoid Robotics"]
  F --> G["Hardware"]
  G --> H["Capstone"]
```
