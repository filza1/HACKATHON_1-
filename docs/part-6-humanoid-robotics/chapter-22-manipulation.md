---
title: Manipulation
sidebar_position: 3
---

# Chapter 22: Manipulation

## Purpose

Explain how humanoid arms and hands interact with objects in the physical world.

## What You Will Learn

- How reaching, grasping, and transport differ.
- Why force and contact matter in manipulation.
- How perception and kinematics support object handling.

## Chapter Overview

Manipulation is the ability of a robot to change the environment through
contact. For a humanoid, this means using arms, wrists, and hands to reach for
objects, establish a stable grasp, move them safely, and release them at the
right place.

Unlike simple motion, manipulation depends on the object itself. Shape, weight,
surface texture, fragility, and pose all affect what the robot should do. A
glass, a box, and a tool all require different gripping strategies and control
responses.

## Core Ideas

- **Reach** gets the end effector near the target.
- **Grasp** creates a stable contact.
- **Transport** moves the object without losing control.
- **Release** ends the interaction safely.

Manipulation links perception to action. The robot has to detect the object,
estimate where it is, predict how it might move, and adapt to slippage or
unexpected resistance. That makes manipulation a problem of geometry, control,
and contact mechanics at the same time.

## Practical Example

A humanoid picking up a bottle from a table must first identify the bottle,
then align the hand, close the fingers with the right force, lift the object,
and carry it without tipping or dropping it. If the bottle is rotated or moved
by a human, the robot may need to regrasp or adjust its plan.

## Diagram

```mermaid
flowchart LR
  A["Perception"] --> B["Reach"]
  B --> C["Grasp"]
  C --> D["Transport"]
  D --> E["Release"]
  E --> A
```

## Key Takeaway

Manipulation is physical AI at the point of contact with the world.

## Hands-On Project

Design a grasp-and-place workflow for a small object.

## Diagrams

- Manipulation pipeline

## References

- Manipulation references
