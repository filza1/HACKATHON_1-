---
id: 0002
title: physical ai book constitution
stage: constitution
date: 2026-06-20
surface: agent
model: gpt-5
feature: none
branch: master
user: lenovo
command: # Physical AI & Humanoid Robotics

## From Digital Intelligence to Embodied Intelligence

```
project-root/
│
├── docs/
│   ├── intro.md
│   │
│   ├── part-1-foundations/
│   │   ├── chapter-01-physical-ai.md
│   │   ├── chapter-02-embodied-intelligence.md
│   │   └── chapter-03-humanoid-robotics-landscape.md
│   │
│   ├── part-2-ros2/
│   │   ├── chapter-04-ros2-architecture.md
│   │   ├── chapter-05-nodes-topics-services.md
│   │   ├── chapter-06-rclpy-python.md
│   │   └── chapter-07-urdf.md
│   │
│   ├── part-3-simulation/
│   │   ├── chapter-08-gazebo.md
│   │   ├── chapter-09-unity.md
│   │   ├── chapter-10-sensors.md
│   │   └── chapter-11-digital-twins.md
│   │
│   ├── part-4-nvidia-isaac/
│   │   ├── chapter-12-isaac-sim.md
│   │   ├── chapter-13-isaac-ros.md
│   │   ├── chapter-14-vslam.md
│   │   └── chapter-15-navigation.md
│   │
│   ├── part-5-vla/
│   │   ├── chapter-16-whisper.md
│   │   ├── chapter-17-llms-for-robotics.md
│   │   ├── chapter-18-vision-language-action.md
│   │   └── chapter-19-conversational-robots.md
│   │
│   ├── part-6-humanoid-robotics/
│   │   ├── chapter-20-kinematics.md
│   │   ├── chapter-21-locomotion.md
│   │   ├── chapter-22-manipulation.md
│   │   └── chapter-23-human-robot-interaction.md
│   │
│   ├── part-7-hardware/
│   │   ├── chapter-24-workstations.md
│   │   ├── chapter-25-jetson.md
│   │   ├── chapter-26-realsense.md
│   │   └── chapter-27-robot-platforms.md
│   │
│   ├── part-8-capstone/
│   │   ├── chapter-28-architecture.md
│   │   ├── chapter-29-voice-to-action.md
│   │   ├── chapter-30-navigation.md
│   │   ├── chapter-31-object-detection.md
│   │   └── chapter-32-autonomous-humanoid.md
│   │
│   ├── appendices/
│   │   ├── appendix-a-installation.md
│   │   ├── appendix-b-linux.md
│   │   ├── appendix-c-ros2-cheatsheet.md
│   │   ├── appendix-d-gazebo-cheatsheet.md
│   │   └── appendix-e-isaac-cheatsheet.md
│
├── specs/
│   └── 001-physical-ai-book/
│       └── spec.md
│
├── plans/
│   └── 001-physical-ai-book/
│       └── plan.md
│
├── tasks/
│   └── 001-physical-ai-book/
│       └── tasks.md
│
├── memory/
│   └── constitution.md
│
├── docusaurus.config.ts
├── sidebars.ts
└── README.md
```

Create a constitution for an AI/Spec-Driven Book Creation project using Spec-Kit Plus, Codex, Docusaurus, and GitHub Pages. Prioritize reader value, clarity, and long-term quality. Follow Spec-Driven Development, require approved specifications, maintain synchronized documentation, use consistent structure and terminology, ensure accurate examples, and require Codex to follow specs, ask clarifying questions, and document major decisions and updates.
labels: [constitution,physical-ai,humanoid-robotics,docusaurus,github-pages]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md
  - .codex/rules/guidelines.md
  - history/prompts/constitution/0002-physical-ai-book-constitution.constitution.prompt.md
tests:
  - not run (documentation-only change)
---

## Prompt

# Physical AI & Humanoid Robotics

## From Digital Intelligence to Embodied Intelligence

```
project-root/
│
├── docs/
│   ├── intro.md
│   │
│   ├── part-1-foundations/
│   │   ├── chapter-01-physical-ai.md
│   │   ├── chapter-02-embodied-intelligence.md
│   │   └── chapter-03-humanoid-robotics-landscape.md
│   │
│   ├── part-2-ros2/
│   │   ├── chapter-04-ros2-architecture.md
│   │   ├── chapter-05-nodes-topics-services.md
│   │   ├── chapter-06-rclpy-python.md
│   │   └── chapter-07-urdf.md
│   │
│   ├── part-3-simulation/
│   │   ├── chapter-08-gazebo.md
│   │   ├── chapter-09-unity.md
│   │   ├── chapter-10-sensors.md
│   │   └── chapter-11-digital-twins.md
│   │
│   ├── part-4-nvidia-isaac/
│   │   ├── chapter-12-isaac-sim.md
│   │   ├── chapter-13-isaac-ros.md
│   │   ├── chapter-14-vslam.md
│   │   └── chapter-15-navigation.md
│   │
│   ├── part-5-vla/
│   │   ├── chapter-16-whisper.md
│   │   ├── chapter-17-llms-for-robotics.md
│   │   ├── chapter-18-vision-language-action.md
│   │   └── chapter-19-conversational-robots.md
│   │
│   ├── part-6-humanoid-robotics/
│   │   ├── chapter-20-kinematics.md
│   │   ├── chapter-21-locomotion.md
│   │   ├── chapter-22-manipulation.md
│   │   └── chapter-23-human-robot-interaction.md
│   │
│   ├── part-7-hardware/
│   │   ├── chapter-24-workstations.md
│   │   ├── chapter-25-jetson.md
│   │   ├── chapter-26-realsense.md
│   │   └── chapter-27-robot-platforms.md
│   │
│   ├── part-8-capstone/
│   │   ├── chapter-28-architecture.md
│   │   ├── chapter-29-voice-to-action.md
│   │   ├── chapter-30-navigation.md
│   │   ├── chapter-31-object-detection.md
│   │   └── chapter-32-autonomous-humanoid.md
│   │
│   ├── appendices/
│   │   ├── appendix-a-installation.md
│   │   ├── appendix-b-linux.md
│   │   ├── appendix-c-ros2-cheatsheet.md
│   │   ├── appendix-d-gazebo-cheatsheet.md
│   │   └── appendix-e-isaac-cheatsheet.md
│
├── specs/
│   └── 001-physical-ai-book/
│       └── spec.md
│
├── plans/
│   └── 001-physical-ai-book/
│       └── plan.md
│
├── tasks/
│   └── 001-physical-ai-book/
│       └── tasks.md
│
├── memory/
│   └── constitution.md
│
├── docusaurus.config.ts
├── sidebars.ts
└── README.md
```

## Response snapshot

Rewrote the constitution for the Physical AI / Humanoid Robotics book and synced the
plan, spec, tasks, and Codex guidance templates to reflect the chapter-based Docusaurus
workflow.

## Outcome

- ✅ Impact: Governance now matches the robotics book structure and publishing flow
- 🧪 Tests: Not run; documentation-only change
- 📁 Files: Constitution, templates, and Codex guidance updated; prompt record added
- 🔁 Next prompts: Create the book spec and plan under `specs/001-physical-ai-book/`
- 🧠 Reflection: The constitution now enforces chapter consistency, canonical terms,
  reproducibility, and synchronized publishing

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Not run
- Prompt variant (if applicable): standard
- Next experiment (smallest change to try): Draft `spec.md` for chapter 1-3 scope
