---
title: Embodied Intelligence
sidebar_position: 2
---

# Chapter 02: Embodied Intelligence

## Purpose

Show how embodied intelligence emerges from continuous interaction between body, environment, and control.

## What You Will Learn

- Why embodiment changes the meaning of intelligence.
- How feedback loops shape behavior.
- Why robots must learn from action outcomes.

## Chapter Overview

Embodied intelligence is the idea that a robot's body is not a container for intelligence; it is part of intelligence itself. Movement, perception, and environment all influence behavior.

## Core Ideas

The body creates constraints and opportunities. It changes what the robot can perceive, what it can afford to do, and how it should recover when things go wrong.

## Practical Example

A wheeled robot and a biped robot can receive the same navigation goal but need very different control and recovery strategies because their bodies interact with the ground differently.

## Why It Matters

This chapter explains why robotics evaluation must happen in context. A model that looks good in isolation can still fail when the environment responds back.

## Diagram

```mermaid
flowchart LR
  A["Body"] --> B["Action"]
  B --> C["Environment"]
  C --> D["Perception"]
  D --> E["Internal State"]
  E --> F["Decision"]
  F --> B
```

## Key Takeaway

Embodied intelligence is intelligence shaped by physical interaction, not abstract reasoning alone.

## References

- [Embodied cognition](https://en.wikipedia.org/wiki/Embodied_cognition)
- [Learning Embodied Intelligence from Physical Simulators and World Models](https://arxiv.org/abs/2507.00917)

