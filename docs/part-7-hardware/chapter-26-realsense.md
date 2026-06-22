---
title: Realsense
sidebar_position: 3
---

# Chapter 26: Realsense

## Purpose

Explain how depth cameras support robot perception and spatial understanding.

## What You Will Learn

- What depth sensing adds beyond RGB images.
- How 3D perception supports navigation and manipulation.
- Why calibration and sensor placement matter.

## Chapter Overview

Depth cameras give a robot a richer understanding of the world than a flat
image alone. Instead of only seeing color and texture, the robot can estimate
distance, shape, and spatial layout. That makes depth sensing especially useful
for navigation, object detection, and grasp planning.

In practice, depth sensors help the robot decide what is close, what is far,
and what is reachable. They also help the robot distinguish surfaces, obstacles,
and free space. That is why they are common in physical AI systems that must
operate around people and furniture.

## Core Ideas

- **Depth maps** turn pixels into geometry.
- **Point clouds** represent 3D structure.
- **Calibration** keeps the sensor aligned with the robot model.
- **Placement** affects what the robot can see.

The best sensor data is not just accurate; it is aligned with the task. A
camera mounted too low, too high, or in a poor angle can make a good system
look broken.

## Practical Example

A robot approaching a table can use a depth camera to estimate the table edge,
measure the bottle position, and choose a safe grasp point. Without depth, the
same task becomes much more fragile.

## Diagram

```mermaid
flowchart LR
  A["Depth Camera"] --> B["Depth Map / Point Cloud"]
  B --> C["Scene Understanding"]
  C --> D["Navigation or Manipulation"]
```

## Key Takeaway

Depth cameras turn visual input into spatial reasoning.

## Hands-On Project

Sketch a depth-camera perception pipeline.

## Diagrams

- Sensor integration diagram

## References

- Sensor documentation
