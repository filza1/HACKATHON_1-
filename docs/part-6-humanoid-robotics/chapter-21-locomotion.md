---
title: Locomotion
sidebar_position: 2
---

# Chapter 21: Locomotion

## Purpose

Explain the control and stability requirements for humanoid walking.

## What You Will Learn

- Why humanoid locomotion is harder than wheel-based motion.
- How balance, gait, and foot placement work together.
- Why locomotion needs continuous feedback and recovery.

## Chapter Overview

Locomotion is the ability of a robot to move itself through space. For a
humanoid, that means more than simply stepping forward. The robot must keep its
center of mass over its support surface, place each foot at the right time, and
recover when the ground is uneven or the body shifts unexpectedly.

This makes locomotion one of the most technically demanding parts of humanoid
robotics. A walking system has to coordinate sensors, motion planning, balance
control, and actuation in real time. A small mistake in timing or force can
produce a slip, a stumble, or a fall.

## Core Ideas

- **Balance** keeps the robot upright.
- **Gait planning** determines the order and timing of steps.
- **Support phases** decide which foot is bearing weight.
- **Recovery behavior** handles slips, pushes, and missed steps.

The point of locomotion is not only to move the robot. It is to move the robot
while preserving stability and future options. A humanoid that can take a step
but cannot recover from disturbance is not yet useful in the real world.

## Practical Example

Imagine a humanoid walking across a hallway and turning toward a door. It must
shift weight, lift one foot, place it precisely, transfer balance, and then
repeat the cycle until it reaches the target. If a person crosses the path, the
robot has to slow down or replan. That is why locomotion is a continuous loop
between sensing, prediction, and actuation.

## Diagram

```mermaid
flowchart LR
  A["Balance Estimation"] --> B["Gait Planner"]
  B --> C["Foot Placement"]
  C --> D["Motion Execution"]
  D --> E["Sensor Feedback"]
  E --> A
```

## Key Takeaway

Locomotion is the art of moving without falling. It is the foundation of
humanoid mobility and the basis for every task that depends on whole-body
movement.

## Hands-On Project

Map a walking cycle into a state diagram.

## Diagrams

- Balance and gait diagram

## References

- Locomotion references
