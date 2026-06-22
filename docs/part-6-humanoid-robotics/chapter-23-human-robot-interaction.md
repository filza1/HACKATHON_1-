---
title: Human-Robot Interaction
sidebar_position: 4
---

# Chapter 23: Human-Robot Interaction

## Purpose

Explain how humans and robots share space, intent, and responsibility.

## What You Will Learn

- Why safety and trust are central in HRI.
- How speech and social cues affect interaction.
- Why robot behavior must remain legible to people.

## Chapter Overview

Human-robot interaction studies how people perceive, understand, and work with
robots. In humanoid robotics, this topic matters even more because the robot
operates in the same spaces and workflows as humans.

The robot must not only be technically correct. It must behave in ways people
can interpret. A movement that is too fast, too ambiguous, or too close to a
person can create confusion or fear. A robot that communicates poorly may be
safe in theory but unusable in practice.

## Core Ideas

- **Safety** keeps people protected.
- **Trust** comes from predictable behavior.
- **Legibility** means the robot's intentions are easy to understand.
- **Social rules** shape acceptable behavior in shared environments.

Interaction can happen through speech, gestures, gaze, motion timing, and task
feedback. The better a robot can communicate what it is about to do, the easier
it is for a human to cooperate with it.

## Practical Example

If a humanoid is handing an object to a person, it should move in a way that
signals the handoff clearly. The person should know when to reach, when the
robot is holding still, and whether the handoff is complete. This turns a raw
motion into a collaborative action.

## Diagram

```mermaid
flowchart LR
  A["Human Intent"] --> B["Robot Interpretation"]
  B --> C["Robot Action"]
  C --> D["Human Feedback"]
  D --> B
```

## Key Takeaway

Human-robot interaction ensures that physical AI can operate around people in a
safe, useful, and understandable way.
- Task coordination with people
- UX for embodied systems

## Hands-On Project

Write an interaction policy for a robot sharing space with people.

## Diagrams

- Interaction policy flow

## References

- HRI references
