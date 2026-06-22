---
title: Llms For Robotics
sidebar_position: 2
---

# Chapter 17: Llms For Robotics

## Purpose

Explain how large language models can support planning, reasoning, and interaction in robotics.

## What You Will Learn

- Where LLMs help robotics.
- Where LLMs should not be trusted alone.
- How language can improve task decomposition.

## Chapter Overview

LLMs are useful in robotics because they can interpret instructions, generate plans, summarize context, and help coordinate behavior. They are not a replacement for control or safety systems.

## Core Ideas

The best use of LLMs in robotics is as a reasoning or orchestration layer above lower-level perception and actuation.

## Practical Example

A user asks for a task in plain language, and the robot breaks it into steps such as identify object, navigate, grasp, and deliver.

## Why It Matters

This chapter sets up the logic for later VLA and conversational robot chapters.

## Diagram

```mermaid
flowchart LR
  A["Text Instruction"] --> B["LLM Reasoning"]
  B --> C["Task Plan"]
  C --> D["Robot Modules"]
  D --> E["Physical Execution"]
```

## Key Takeaway

LLMs make robot interaction more flexible, but they need grounding in real robot systems.

## References

- [Large Language Models for Robotics: A Survey](https://arxiv.org/abs/2311.07226)

