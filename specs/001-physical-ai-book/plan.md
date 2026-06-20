# Implementation Plan: Physical AI & Humanoid Robotics Book

**Branch**: `001-physical-ai-book` | **Date**: 2026-06-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-physical-ai-book/spec.md`

## Summary

Build a chapter-based Docusaurus book titled _Physical AI & Humanoid Robotics:
From Digital Intelligence to Embodied Intelligence_. The book will progress from
core concepts to ROS 2, simulation, NVIDIA Isaac, Vision-Language-Action
systems, humanoid robotics, hardware platforms, and a capstone autonomous
humanoid project. The implementation must prioritize educational clarity,
canonical terminology, versioned examples, and long-term maintainability for
future editions.

The book will be maintained as documentation-first content, with Spec-Kit Plus
governing the workflow and Codex used for structured drafting, review, and
updates. Docusaurus will serve as the publishing layer and GitHub Pages as the
deployment target.

## Technical Context

**Language/Version**: Markdown for content, TypeScript for Docusaurus config  
**Primary Dependencies**: Docusaurus, GitHub Pages, Spec-Kit Plus, Codex  
**Storage**: Markdown files in git; no application database  
**Testing**: Docusaurus build, link validation, navigation consistency checks  
**Target Platform**: Static documentation site on GitHub Pages  
**Project Type**: Documentation site / book  
**Performance Goals**: Fast static page loads, predictable navigation, no broken links  
**Constraints**: Content must remain spec-driven, version-scoped, and synchronized  
**Scale/Scope**: 32 chapters plus appendices, intro, and publishing metadata

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The plan MUST satisfy the constitution before content work begins:

- Reader value comes first for every chapter, appendix, and diagram.
- The approved spec is the source of truth for scope and terminology.
- Part order, chapter numbering, sidebar labels, and file paths stay aligned.
- Robotics examples and hardware assumptions must be versioned or explicitly scoped.
- New terms appear in the spec before they appear in chapter prose.
- Docs, spec, plan, tasks, README, Docusaurus config, and sidebars stay synchronized.
- Any major publishing or architecture decision is documented before implementation.

## Project Structure

### Documentation and Governance

```text
specs/001-physical-ai-book/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md

docs/
├── intro.md
├── part-1-foundations/
├── part-2-ros2/
├── part-3-simulation/
├── part-4-nvidia-isaac/
├── part-5-vla/
├── part-6-humanoid-robotics/
├── part-7-hardware/
├── part-8-capstone/
└── appendices/

sidebars.ts
docusaurus.config.ts
README.md
.specify/
history/prompts/
```

### Book Structure Decision

The book will use a stable part/chapter architecture with one chapter per core
concept or workflow and appendices reserved for setup and reference material.
The chapter names below are the canonical publishing structure for this edition.

## Delivery Milestones

### Milestone 1: Information Architecture and Governance

**Goal**: Lock the book structure, terminology, publishing workflow, and file
layout before writing substantive chapter content.

**Exit Criteria**:

- Approved spec and plan match the same chapter roadmap.
- Docusaurus directory structure is finalized.
- Sidebar and navigation strategy is defined.
- Content template for chapters is agreed.

### Milestone 2: Foundations and ROS 2

**Goal**: Draft the foundational chapters that teach physical AI, embodied
intelligence, and ROS 2.

**Exit Criteria**:

- Chapters 1-7 are drafted in order.
- Canonical terms are fixed.
- Intro and part-level transitions are coherent.

### Milestone 3: Simulation, Isaac, and Navigation Stack

**Goal**: Draft the simulation and robotics stack chapters.

**Exit Criteria**:

- Chapters 8-15 are drafted.
- Sim-to-real workflow and environment assumptions are documented.
- Example scopes are versioned and reproducible at the intended level.

### Milestone 4: VLA, Humanoids, and Hardware

**Goal**: Draft the perception-to-action, humanoid robotics, and hardware
chapters.

**Exit Criteria**:

- Chapters 16-27 are drafted.
- Workstation, Jetson, sensor, and cloud alternatives are clearly separated.
- Hardware architecture guidance is consistent across chapters.

### Milestone 5: Capstone and Publishing Readiness

**Goal**: Complete the capstone and prepare the book for Docusaurus and GitHub
Pages.

**Exit Criteria**:

- Chapters 28-32 are drafted.
- Appendices are complete.
- Navigation, links, and page structure pass build validation.

## Content Architecture

### Module 1: Physical AI Foundations

**Chapters**: 1-3  
**Purpose**: Establish the conceptual frame for embodied intelligence and the
robotics landscape.

**Objectives**

- Define physical AI and embodied intelligence.
- Explain why robotics requires a different mental model than pure software.
- Give the reader the map of the field before introducing tools.

**Learning Outcomes**

- Reader can explain what makes intelligence embodied.
- Reader can distinguish robots, agents, simulation, and deployment contexts.
- Reader can identify the major categories of humanoid robotics systems.

**Chapters and Subchapters**

- Chapter 1: Physical AI
  - Why the term matters
  - Digital vs embodied intelligence
  - Scope of the book
- Chapter 2: Embodied Intelligence
  - Perception, planning, and action loop
  - Feedback and control intuition
  - Why the body changes the task
- Chapter 3: Humanoid Robotics Landscape
  - Human-like robots and form factors
  - Industry and research overview
  - What this book covers and excludes

**Dependencies and Prerequisites**

- No robotics tooling required.
- Assumes general programming literacy and curiosity about AI systems.

**Hands-on Projects**

- Compare digital-only and embodied workflows.
- Build a concept map of the robotics stack.

**Code Examples**

- Minimal conceptual pseudocode for sense-plan-act loops.
- No hardware-specific code yet.

**Exercises**

- Define physical AI in your own words.
- Classify five robotics examples by embodiment level.

**Diagrams and Illustrations**

- Sense-plan-act loop.
- Field map of humanoid robotics domains.

**References and Resources**

- Foundational robotics and embodied AI readings.
- High-level industry overviews.

### Module 2: ROS 2 Core

**Chapters**: 4-7  
**Purpose**: Introduce the middleware and development patterns that support
robotics software architecture.

**Objectives**

- Explain ROS 2 architecture and concepts.
- Teach nodes, topics, services, and actions.
- Introduce Python-based ROS 2 development and robot description files.

**Learning Outcomes**

- Reader can reason about ROS 2 communication patterns.
- Reader can write and read simple ROS 2 Python nodes.
- Reader understands how URDF represents a robot.

**Chapters and Subchapters**

- Chapter 4: ROS 2 Architecture
  - Middleware overview
  - Nodes and execution model
  - Package and workspace concepts
- Chapter 5: Nodes, Topics, and Services
  - Publish/subscribe
  - Request/response
  - Actions and when to use them
- Chapter 6: rclpy in Python
  - Basic node structure
  - Timers, parameters, logging
  - Message passing examples
- Chapter 7: URDF
  - Robot description fundamentals
  - Links, joints, frames
  - Modeling consistency and validation

**Dependencies and Prerequisites**

- Depends on Module 1 vocabulary.
- Reader needs a basic Python environment for examples.

**Hands-on Projects**

- Build a hello-world ROS 2 publisher/subscriber.
- Create a minimal robot description.

**Code Examples**

- Python ROS 2 node.
- Topic publisher/subscriber example.
- URDF/Xacro snippets.

**Exercises**

- Map a control task to topics, services, or actions.
- Identify errors in a sample URDF.

**Diagrams and Illustrations**

- ROS 2 graph with nodes and topics.
- Robot frame tree.

**References and Resources**

- Official ROS 2 documentation.
- ROS 2 message and package references.

### Module 3: Simulation, Sensors, and Digital Twins

**Chapters**: 8-11  
**Purpose**: Teach simulation-first development and how virtual systems reduce
risk before deployment.

**Objectives**

- Use simulation as a learning and validation environment.
- Compare Gazebo and Unity for robotics workflows.
- Introduce sensors and digital twin thinking.

**Learning Outcomes**

- Reader can explain why simulation is a prerequisite for many robotics tasks.
- Reader can differentiate simulation fidelity from deployment readiness.
- Reader can design a sim-to-real workflow at a high level.

**Chapters and Subchapters**

- Chapter 8: Gazebo
  - World and model basics
  - Physics, sensors, and plugins
  - Launching and testing scenarios
- Chapter 9: Unity
  - Why Unity in robotics
  - Visualization and interaction workflows
  - Prototyping environments
- Chapter 10: Sensors
  - Camera, depth, IMU, LiDAR concepts
  - Sensor noise and calibration
  - Virtual sensor simulation
- Chapter 11: Digital Twins
  - What makes a useful digital twin
  - Synchronization and validation
  - Sim-to-real transfer strategy

**Dependencies and Prerequisites**

- Depends on ROS 2 basics and URDF.
- Assumes a workstation capable of running at least one simulator.

**Hands-on Projects**

- Simulate a simple mobile robot.
- Compare sensor outputs across simulated runs.

**Code Examples**

- Launch file for simulator startup.
- Sensor configuration examples.
- Digital twin state sync pseudocode.

**Exercises**

- Identify sources of simulation drift.
- Compare Gazebo and Unity tradeoffs for a given use case.

**Diagrams and Illustrations**

- Sim-to-real loop.
- Sensor pipeline diagram.

**References and Resources**

- Gazebo docs.
- Unity robotics and simulation docs.
- Sensor vendor reference material.

### Module 4: NVIDIA Isaac Stack

**Chapters**: 12-15  
**Purpose**: Introduce Isaac Sim, Isaac ROS, visual SLAM, and navigation as a
high-performance robotics stack.

**Objectives**

- Explain where Isaac fits in the robotics development lifecycle.
- Connect simulation, perception, mapping, and navigation.
- Prepare readers for deployment-oriented workflows.

**Learning Outcomes**

- Reader can explain how Isaac Sim and Isaac ROS differ.
- Reader can describe the role of VSLAM in mobile robotics.
- Reader understands the navigation stack at a conceptual level.

**Chapters and Subchapters**

- Chapter 12: Isaac Sim
  - Simulation workflows
  - Scene setup and asset handling
  - Validation and iteration
- Chapter 13: Isaac ROS
  - ROS integration patterns
  - Accelerated perception pipeline
  - Deployment considerations
- Chapter 14: VSLAM
  - Mapping and localization concepts
  - Sensor fusion intuition
  - Failure modes and recovery
- Chapter 15: Navigation
  - Planning and motion control
  - Localization-to-navigation pipeline
  - Recovery behaviors

**Dependencies and Prerequisites**

- Depends on Modules 1-3.
- Assumes readers understand simulation and ROS 2 message flow.

**Hands-on Projects**

- Run a simulated robot through a mapped environment.
- Prototype a navigation flow from sensor input to motion command.

**Code Examples**

- Isaac configuration example.
- Navigation launch and parameter examples.
- VSLAM pipeline wiring examples.

**Exercises**

- Trace the data flow from camera to localization to navigation.
- Identify where simulated assumptions may break in real hardware.

**Diagrams and Illustrations**

- Perception-to-navigation stack.
- Localization and planning architecture.

**References and Resources**

- NVIDIA Isaac documentation.
- Navigation and localization references.

### Module 5: Vision-Language-Action and Conversational Robotics

**Chapters**: 16-19  
**Purpose**: Move from perception and control into language-enabled action and
human interaction.

**Objectives**

- Introduce speech recognition and large language model usage in robotics.
- Explain vision-language-action systems.
- Show how dialogue and intent can become robot actions.

**Learning Outcomes**

- Reader can explain how language interfaces with robot behavior.
- Reader can distinguish speech, reasoning, and action layers.
- Reader can identify where guardrails are required in conversational robots.

**Chapters and Subchapters**

- Chapter 16: Whisper
  - Speech-to-text pipeline
  - Latency and accuracy tradeoffs
  - Integration points with robotics
- Chapter 17: LLMs for Robotics
  - Planning with language models
  - Prompting and tool use
  - Safety and determinism boundaries
- Chapter 18: Vision-Language-Action
  - Multimodal grounding
  - Action selection from perception and language
  - Evaluation patterns
- Chapter 19: Conversational Robots
  - Intent handling
  - Turn-taking and dialog state
  - Human-robot interaction basics

**Dependencies and Prerequisites**

- Depends on ROS 2, perception, and navigation concepts.
- Assumes readers understand that LLM output is not inherently reliable.

**Hands-on Projects**

- Voice command to robot intent prototype.
- Multimodal task selection demo.

**Code Examples**

- Speech-to-text integration example.
- Prompt-to-tool routing pseudocode.
- VLA pipeline sketch.

**Exercises**

- Design a fallback strategy for ambiguous commands.
- Compare deterministic control with language-mediated control.

**Diagrams and Illustrations**

- Voice-to-action chain.
- Human intent to robot execution diagram.

**References and Resources**

- Whisper documentation and model references.
- LLM safety and robotics interaction readings.

### Module 6: Humanoid Robotics

**Chapters**: 20-23  
**Purpose**: Introduce the mechanics of humanoid robots and the control
problems they raise.

**Objectives**

- Explain kinematics, locomotion, manipulation, and interaction.
- Connect physical form factors to software requirements.
- Prepare the reader for the capstone architecture.

**Learning Outcomes**

- Reader can reason about humanoid joint chains and motion constraints.
- Reader can describe why locomotion and manipulation are distinct planning problems.
- Reader can identify interaction concerns unique to humanoid platforms.

**Chapters and Subchapters**

- Chapter 20: Kinematics
  - Forward and inverse kinematics
  - Joint limits and coordinate frames
  - Motion planning foundations
- Chapter 21: Locomotion
  - Biped and multi-modal movement
  - Balance and stability concepts
  - Gait planning overview
- Chapter 22: Manipulation
  - Grasping and arm control
  - End-effectors and task space
  - Coordination with perception
- Chapter 23: Human-Robot Interaction
  - Physical safety and social cues
  - Task coordination with people
  - UX for embodied systems

**Dependencies and Prerequisites**

- Depends on modules 1-5.
- Assumes familiarity with coordinate frames and basic control concepts.

**Hands-on Projects**

- Plan a reachable arm movement.
- Model a simple humanoid balance scenario.

**Code Examples**

- Kinematics calculations.
- Motion planning configuration examples.
- Interaction state machine sketch.

**Exercises**

- Solve a joint-space to task-space mapping problem.
- Identify failure cases in a humanoid manipulation scenario.

**Diagrams and Illustrations**

- Kinematic chain diagram.
- Balance and support polygon illustration.

**References and Resources**

- Robotics kinematics references.
- Human-robot interaction guidelines.

### Module 7: Hardware Platforms and Deployment

**Chapters**: 24-27  
**Purpose**: Translate the software stack into practical deployment choices for
workstations, edge compute, sensors, and robot platforms.

**Objectives**

- Define the hardware architecture for development and deployment.
- Compare workstation, Jetson edge, and cloud-assisted options.
- Integrate cameras, depth sensors, and robot bases into the stack.

**Learning Outcomes**

- Reader can design a baseline robotics compute stack.
- Reader can distinguish dev workstation needs from edge deployment needs.
- Reader can choose sensors and robot platforms based on project goals.

**Chapters and Subchapters**

- Chapter 24: Workstations
  - Development machine requirements
  - CPU, GPU, memory, storage, and OS considerations
  - Simulation and build workflow sizing
- Chapter 25: Jetson
  - Edge compute strategy
  - Inference and power constraints
  - Deployment patterns
- Chapter 26: Realsense
  - Depth and RGB integration
  - Calibration and data flow
  - Perception pipeline placement
- Chapter 27: Robot Platforms
  - Mobile bases, arms, and humanoid platforms
  - Tradeoffs in cost, capability, and maintainability
  - Platform selection criteria

**Dependencies and Prerequisites**

- Depends on perception, simulation, and navigation chapters.
- Assumes readers understand the difference between training, simulation, and deployment hardware.

**Hands-on Projects**

- Specify a development workstation bill of materials.
- Draft a Jetson deployment target profile.
- Sketch a sensor integration topology.

**Code Examples**

- Device configuration examples.
- Deployment manifest snippets.
- Sensor pipeline configuration.

**Exercises**

- Compare workstation-only vs workstation-plus-Jetson architectures.
- Choose a platform for three different robot product scenarios.

**Diagrams and Illustrations**

- Hardware architecture stack.
- Edge vs cloud deployment boundary diagram.

**References and Resources**

- Vendor hardware documentation.
- Jetson deployment references.
- Sensor calibration resources.

### Module 8: Capstone Autonomous Humanoid

**Chapters**: 28-32  
**Purpose**: Combine the full stack into an end-to-end project that demonstrates
voice-to-action, planning, navigation, object detection, manipulation, and human
interaction.

**Objectives**

- Provide a complete reference architecture for an autonomous humanoid robot.
- Show how the earlier chapters assemble into a coherent system.
- Present a realistic path from prototype to integrated demo.

**Learning Outcomes**

- Reader can describe the full capstone system architecture.
- Reader can trace data from voice input to robot action.
- Reader can understand integration boundaries and failure points.

**Chapters and Subchapters**

- Chapter 28: Architecture
  - System overview
  - Module boundaries
  - Data and control flow
- Chapter 29: Voice to Action
  - Speech input to intent
  - Planning and command routing
  - Safety checks and fallbacks
- Chapter 30: Navigation
  - Movement planning
  - Localization and obstacle handling
  - Recovery and supervision
- Chapter 31: Object Detection
  - Perception pipeline
  - Detection to action mapping
  - Scene interpretation
- Chapter 32: Autonomous Humanoid
  - End-to-end demo story
  - Integration checkpoints
  - Future edition extension points

**Dependencies and Prerequisites**

- Depends on all prior modules.
- Assumes a validated stack or a simulated substitute for unavailable hardware.

**Hands-on Projects**

- Build a staged autonomous humanoid demo plan.
- Integrate voice, navigation, and perception into one architecture.

**Code Examples**

- Orchestration pseudocode.
- Launch sequencing examples.
- Safety/fallback policy examples.

**Exercises**

- Map system failures to mitigation strategies.
- Design a degraded mode for missing sensors or unavailable hardware.

**Diagrams and Illustrations**

- Full system architecture diagram.
- End-to-end voice-to-action sequence.
- Sim-to-real deployment map.

**References and Resources**

- Robotics integration guides.
- Capstone validation checklists.

## Chapter Standards

Every chapter and appendix will follow the same internal pattern:

1. Why it matters
2. Prerequisites
3. Core concepts
4. Guided example or walkthrough
5. Hands-on exercise
6. Common mistakes and failure modes
7. Summary and references

This standard keeps the book maintainable across future editions and makes it
easier to compare chapters for consistency.

## Dependencies and Execution Order

### Phase Dependencies

- **Phase 1: Governance and structure** must finish before drafting chapter prose.
- **Phase 2: Foundations** depends on Phase 1.
- **Phase 3: Simulation and Isaac** depends on Phase 2.
- **Phase 4: VLA, humanoids, and hardware** depends on Phase 3.
- **Phase 5: Capstone and publishing** depends on all prior phases.

### Cross-Cutting Dependencies

- Canonical terminology must be finalized before chapter drafting continues.
- Hardware assumptions must be fixed before any executable example is written.
- Diagrams should be drafted alongside chapters, not after them.
- Navigation files must be updated whenever chapter names or order changes.

## Week-by-Week Roadmap

### Weeks 1-2: Project Setup and Governance

- Finalize spec, plan, and chapter architecture.
- Create content directories and Docusaurus skeleton.
- Define chapter template and review checklist.

### Week 3: Intro and Physical AI Fundamentals

- Draft `docs/intro.md`.
- Draft chapters 1-3.
- Lock canonical terms for physical AI and embodied intelligence.

### Weeks 4-5: ROS 2 Core

- Draft chapters 4-7.
- Add ROS 2 diagrams and example snippets.
- Review terminology consistency and prerequisite flow.

### Weeks 6-7: Gazebo, Unity, Sensors, Digital Twins

- Draft chapters 8-11.
- Add sim-to-real workflow and sensor diagrams.
- Identify environment assumptions and example versions.

### Weeks 8-9: Isaac Sim and Isaac ROS

- Draft chapters 12-13.
- Map integration between simulation and acceleration stack.
- Add deployment-oriented examples.

### Week 10: VSLAM and Navigation

- Draft chapters 14-15.
- Validate navigation pipeline diagrams and failure modes.

### Weeks 11-12: Whisper and LLMs for Robotics

- Draft chapters 16-17.
- Establish guardrails for language-mediated control.
- Add prompt and routing examples.

### Week 13: Vision-Language-Action and Conversational Robots

- Draft chapters 18-19.
- Show how multimodal reasoning becomes actionable robotics behavior.

### Weeks 14-15: Kinematics and Locomotion

- Draft chapters 20-21.
- Add motion planning illustrations and exercises.

### Week 16: Manipulation and Human-Robot Interaction

- Draft chapters 22-23.
- Cover safety, coordination, and user interaction constraints.

### Week 17: Workstations

- Draft chapter 24.
- Define the development baseline for the book's examples.

### Week 18: Jetson Deployment

- Draft chapter 25.
- Capture edge deployment and power/performance tradeoffs.

### Week 19: Realsense and Robot Platforms

- Draft chapters 26-27.
- Clarify sensor integration and platform selection criteria.

### Weeks 20-21: Capstone Architecture and Voice-to-Action

- Draft chapters 28-29.
- Integrate prior modules into a single reference design.

### Week 22: Capstone Navigation and Object Detection

- Draft chapters 30-31.
- Expand the end-to-end flow and fallback handling.

### Week 23: Autonomous Humanoid Closeout

- Draft chapter 32.
- Add future edition notes and system-level summary.

### Week 24: Appendices and Publishing Readiness

- Draft installation, Linux, ROS 2, Gazebo, and Isaac appendices.
- Update sidebar and Docusaurus config.
- Run build and link validation.

## Publishing Workflow

1. Approve spec and plan.
2. Draft chapter content in module order.
3. Review every chapter for terminology, prerequisites, and example scope.
4. Sync `docs/`, `sidebars.ts`, and `docusaurus.config.ts`.
5. Validate Docusaurus build and internal links.
6. Publish to GitHub Pages.

## Risks and Mitigations

- **Risk**: Robotics software versions change during authoring.
  - **Mitigation**: Lock supported versions per chapter and record assumptions.
- **Risk**: Simulation examples do not transfer to physical hardware.
  - **Mitigation**: Use explicit sim-to-real notes and call out failure modes.
- **Risk**: The capstone becomes too broad.
  - **Mitigation**: Keep the capstone architecture modular and staged.
- **Risk**: Navigation drifts from the document structure.
  - **Mitigation**: Treat sidebar and config updates as part of each content change.

## Validation and Definition of Done

- Every chapter exists in the approved directory structure.
- Each chapter states purpose, prerequisites, and learning outcomes.
- Every executable example includes version or environment scope.
- The book builds cleanly under Docusaurus.
- The sidebar and routes match the chapter hierarchy.
- GitHub Pages deployment produces no broken links or orphaned pages.

