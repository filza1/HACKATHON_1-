---
title: Jetson
sidebar_position: 2
---

# Chapter 25: Jetson

## Purpose

Explain edge deployment on Jetson-class devices.

## What You Will Learn

- Why robots often need on-device inference.
- How power and thermal limits shape deployment.
- How to think about edge-first robotics architecture.

## Chapter Overview

Jetson devices are built for embedded AI and robotics workloads. They are
important because many robots cannot depend on cloud connectivity for real-time
behavior. Perception, control, and autonomy often need to run close to the
sensors and actuators.

The design tradeoff is simple but strict: the robot needs enough compute to do
useful work, but it also needs to remain power-efficient and thermally stable.
That is why deployment planning is part of robotics engineering, not just an
afterthought.

## Core Ideas

- **Edge compute** keeps inference local.
- **Latency** improves when the robot does not need to round-trip to the cloud.
- **Power limits** determine how much work can run at once.
- **Thermal design** affects sustained performance.

Jetson is the bridge between high-level robotics software and real hardware
deployment. It is where simulation ideas become operating systems, drivers, and
robot-side inference pipelines.

## Practical Example

A mobile robot can run object detection, local navigation, and status reporting
on a Jetson device. If network access is unavailable, the robot still functions
because the critical intelligence is already on board.

## Diagram

```mermaid
flowchart LR
  A["Sensors"] --> B["Jetson"]
  B --> C["Inference"]
  C --> D["Robot Action"]
```

## Key Takeaway

Jetson makes edge robotics practical by putting AI computation on the robot
itself.

## Hands-On Project

Draft a Jetson deployment target profile.

## Diagrams

- Edge deployment stack

## References

- Jetson docs
