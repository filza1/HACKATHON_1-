---
title: Robot Platforms
sidebar_position: 4
---

# Chapter 27: Robot Platforms

## Purpose

Survey robot body platforms and explain how the base shape determines capability.

## What You Will Learn

- Why platform choice matters before software design.
- How wheels, legs, and hybrid forms differ.
- How task requirements drive hardware selection.

## Chapter Overview

Robot platforms are the physical carriers of the software stack. The shape of
the body determines how the robot moves, how much it can carry, how much power
it needs, and how safely it can interact with the environment.

Some platforms optimize for speed and efficiency, while others optimize for
access to human spaces or manipulation ability. The right choice depends on the
task, not on novelty.

## Core Ideas

- **Wheeled platforms** are efficient and simple.
- **Legged platforms** handle human environments better.
- **Hybrid platforms** trade complexity for flexibility.
- **Payload and battery** directly limit what the robot can do.

The platform is not just hardware. It is a set of constraints that shapes every
later software decision.

## Practical Example

A warehouse robot may use wheels because the floor is flat and the routes are
predictable. A humanoid may be better when the task requires stairs, doors, or
human tools. Platform choice is therefore a systems decision.

## Diagram

```mermaid
flowchart LR
  A["Task Requirements"] --> B["Platform Choice"]
  B --> C["Body Design"]
  C --> D["Software Stack"]
```

## Key Takeaway

Choose the robot platform from the task backward, not the other way around.

## Hands-On Project

Select a platform for a specific robotics use case.

## Diagrams

- Platform comparison matrix

## References

- Platform vendor docs
