---
title: Physical Ai
sidebar_position: 1
---

# Chapter 01: Physical Ai

## Purpose

Define physical AI and explain why intelligence changes once it must operate through a body in the real world.

## What You Will Learn

- How physical AI differs from software-only AI.
- Why sensing, planning, and actuation must be designed together.
- How simulation and world models reduce deployment risk.

## Chapter Overview

Physical AI is the book's foundation: it is the shift from prediction-only systems to closed-loop systems that perceive, decide, and act in physical space.

## Core Ideas

The important parts are perception, a world model, planning, control, actuation, and safety. Every later chapter in the book extends one of these layers.

## Practical Example

A voice command can become a route, a grasp, or a delivered object only if the system can understand the environment and execute physically correct motion.

## Why It Matters

Without this framing, robotics looks like a pile of disconnected tools. With it, the reader can see why ROS 2, simulation, VLA, and humanoid control all belong in one stack.

## Diagram

```mermaid
flowchart LR
  A["Sensors"] --> B["Perception"]
  B --> C["World Model"]
  C --> D["Reasoning and Planning"]
  D --> E["Control"]
  E --> F["Actuators"]
  F --> G["Physical World"]
  G --> A
```

## Key Takeaway

Physical AI is intelligence that must survive contact with the real world, not just pass a benchmark.

## References

- [Physical AI survey](https://arxiv.org/abs/2510.04978)
- [Embodied intelligence from simulators and world models](https://arxiv.org/abs/2507.00917)

