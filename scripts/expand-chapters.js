const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const chapterFiles = [
  'docs/part-1-foundations/chapter-01-physical-ai.md',
  'docs/part-1-foundations/chapter-02-embodied-intelligence.md',
  'docs/part-1-foundations/chapter-03-humanoid-robotics-landscape.md',
  'docs/part-2-ros2/chapter-04-ros2-architecture.md',
  'docs/part-2-ros2/chapter-05-nodes-topics-services.md',
  'docs/part-2-ros2/chapter-06-rclpy-python.md',
  'docs/part-2-ros2/chapter-07-urdf.md',
  'docs/part-3-simulation/chapter-08-gazebo.md',
  'docs/part-3-simulation/chapter-09-unity.md',
  'docs/part-3-simulation/chapter-10-sensors.md',
  'docs/part-3-simulation/chapter-11-digital-twins.md',
  'docs/part-4-nvidia-isaac/chapter-12-isaac-sim.md',
  'docs/part-4-nvidia-isaac/chapter-13-isaac-ros.md',
  'docs/part-4-nvidia-isaac/chapter-14-vslam.md',
  'docs/part-4-nvidia-isaac/chapter-15-navigation.md',
  'docs/part-5-vla/chapter-16-whisper.md',
  'docs/part-5-vla/chapter-17-llms-for-robotics.md',
  'docs/part-5-vla/chapter-18-vision-language-action.md',
  'docs/part-5-vla/chapter-19-conversational-robots.md',
  'docs/part-6-humanoid-robotics/chapter-20-kinematics.md',
  'docs/part-6-humanoid-robotics/chapter-21-locomotion.md',
  'docs/part-6-humanoid-robotics/chapter-22-manipulation.md',
  'docs/part-6-humanoid-robotics/chapter-23-human-robot-interaction.md',
  'docs/part-7-hardware/chapter-24-workstations.md',
  'docs/part-7-hardware/chapter-25-jetson.md',
  'docs/part-7-hardware/chapter-26-realsense.md',
  'docs/part-7-hardware/chapter-27-robot-platforms.md',
  'docs/part-8-capstone/chapter-28-architecture.md',
  'docs/part-8-capstone/chapter-29-voice-to-action.md',
  'docs/part-8-capstone/chapter-30-navigation.md',
  'docs/part-8-capstone/chapter-31-object-detection.md',
  'docs/part-8-capstone/chapter-32-autonomous-humanoid.md',
];

function titleFromFile(file) {
  const base = path.basename(file, '.md');
  return base
    .replace(/^chapter-\d+-/, '')
    .replace(/^appendix-[a-z]-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function section(title, body) {
  return `## ${title}\n\n${body.trim()}\n`;
}

function bullets(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function baseIntro(title, theme, focus) {
  return [
    `# ${title}`,
    '',
    section('Purpose', focus.purpose),
    section(
      'What You Will Learn',
      bullets(focus.learn).replace(/\n/g, '\n')
    ),
    section('Chapter Overview', focus.overview),
    section('Core Ideas', focus.core),
    section('Practical Example', focus.example),
    section('Why It Matters', focus.matter),
    section('Diagram', '```mermaid\n' + focus.diagram + '\n```'),
    section('Key Takeaway', focus.takeaway),
    section('References', bullets(focus.refs)),
  ].join('\n');
}

function focusFor(file, title) {
  const lower = title.toLowerCase();
  if (lower.includes('physical ai')) {
    return {
      purpose: 'Define physical AI and explain why intelligence changes once it must operate through a body in the real world.',
      learn: [
        'How physical AI differs from software-only AI.',
        'Why sensing, planning, and actuation must be designed together.',
        'How simulation and world models reduce deployment risk.',
      ],
      overview: 'Physical AI is the book\'s foundation: it is the shift from prediction-only systems to closed-loop systems that perceive, decide, and act in physical space.',
      core: 'The important parts are perception, a world model, planning, control, actuation, and safety. Every later chapter in the book extends one of these layers.',
      example: 'A voice command can become a route, a grasp, or a delivered object only if the system can understand the environment and execute physically correct motion.',
      matter: 'Without this framing, robotics looks like a pile of disconnected tools. With it, the reader can see why ROS 2, simulation, VLA, and humanoid control all belong in one stack.',
      diagram: `flowchart LR
  A["Sensors"] --> B["Perception"]
  B --> C["World Model"]
  C --> D["Reasoning and Planning"]
  D --> E["Control"]
  E --> F["Actuators"]
  F --> G["Physical World"]
  G --> A`,
      takeaway: 'Physical AI is intelligence that must survive contact with the real world, not just pass a benchmark.',
      refs: [
        '[Physical AI survey](https://arxiv.org/abs/2510.04978)',
        '[Embodied intelligence from simulators and world models](https://arxiv.org/abs/2507.00917)',
      ],
    };
  }
  if (lower.includes('embodied intelligence')) {
    return {
      purpose: 'Show how embodied intelligence emerges from continuous interaction between body, environment, and control.',
      learn: [
        'Why embodiment changes the meaning of intelligence.',
        'How feedback loops shape behavior.',
        'Why robots must learn from action outcomes.',
      ],
      overview: 'Embodied intelligence is the idea that a robot\'s body is not a container for intelligence; it is part of intelligence itself. Movement, perception, and environment all influence behavior.',
      core: 'The body creates constraints and opportunities. It changes what the robot can perceive, what it can afford to do, and how it should recover when things go wrong.',
      example: 'A wheeled robot and a biped robot can receive the same navigation goal but need very different control and recovery strategies because their bodies interact with the ground differently.',
      matter: 'This chapter explains why robotics evaluation must happen in context. A model that looks good in isolation can still fail when the environment responds back.',
      diagram: `flowchart LR
  A["Body"] --> B["Action"]
  B --> C["Environment"]
  C --> D["Perception"]
  D --> E["Internal State"]
  E --> F["Decision"]
  F --> B`,
      takeaway: 'Embodied intelligence is intelligence shaped by physical interaction, not abstract reasoning alone.',
      refs: [
        '[Embodied cognition](https://en.wikipedia.org/wiki/Embodied_cognition)',
        '[Learning Embodied Intelligence from Physical Simulators and World Models](https://arxiv.org/abs/2507.00917)',
      ],
    };
  }
  if (lower.includes('humanoid robotics landscape')) {
    return {
      purpose: 'Survey the current humanoid robotics field and explain why humanoids are both strategically important and technically difficult.',
      learn: [
        'Why humanoids are being built for human environments.',
        'What makes humanoid robots technically hard.',
        'Where humanoids fit among other robot formats.',
      ],
      overview: 'Humanoid robotics aims to create robots that can use the same spaces, tools, and workflows designed for humans. That makes the form factor attractive, but it also makes balance, manipulation, and safety much harder.',
      core: 'A humanoid must coordinate locomotion, arms, perception, and interaction under tight power and stability limits. That coordination is what separates a humanoid from a simple mobile manipulator.',
      example: 'A robot walking through a hallway, opening a door, and handing over an object is demonstrating the exact combination of mobility, dexterity, and interaction that motivates the humanoid form.',
      matter: 'This chapter gives the reader a realistic sense of the landscape before the book dives into the mechanics and systems that make humanoids possible.',
      diagram: `flowchart LR
  A["Human Tasks"] --> B["Tool Use"]
  A --> C["Mobility"]
  A --> D["Interaction"]
  B --> E["Humanoid Design"]
  C --> E
  D --> E`,
      takeaway: 'Humanoid robots exist because human spaces are built for human bodies, but that same fact makes the engineering problem much harder.',
      refs: [
        '[Humanoid robot](https://en.wikipedia.org/wiki/Humanoid_robot)',
        '[AI Robots and Humanoid AI: Review, Perspectives and Directions](https://arxiv.org/abs/2405.15775)',
      ],
    };
  }
  if (lower.includes('ros 2 architecture')) {
    return {
      purpose: 'Introduce ROS 2 as the communication and modularity layer for robot software.',
      learn: [
        'What nodes, packages, and workspaces do.',
        'Why middleware matters in robotics.',
        'How modular design reduces complexity.',
      ],
      overview: 'ROS 2 is the software backbone that lets robot systems grow without becoming unmanageable. It separates concerns so perception, planning, and control can be built as independent modules.',
      core: 'The main architecture concepts are nodes, topics, services, actions, executors, and packages. Together they create a distributed graph of robot behavior.',
      example: 'A camera node can publish images, a detector node can subscribe to them, and a motion node can consume the result without either module needing to know the internal implementation of the other.',
      matter: 'Without an architectural layer like ROS 2, robotics code tends to become tightly coupled, difficult to test, and expensive to extend.',
      diagram: `flowchart LR
  A["Node"] --> B["Topic"]
  C["Node"] --> B
  D["Service"] --> E["Node"]
  E --> F["Executor"]
  F --> G["Workspace"]`,
      takeaway: 'ROS 2 gives robotics a scalable software architecture instead of a collection of ad hoc scripts.',
      refs: [
        '[Robot Operating System](https://en.wikipedia.org/wiki/Robot_Operating_System)',
        '[ROS 2 documentation](https://docs.ros.org/)',
      ],
    };
  }
  if (lower.includes('nodes topics services')) {
    return {
      purpose: 'Explain the core ROS 2 communication patterns in a way the reader can use immediately.',
      learn: [
        'How nodes isolate robot behaviors.',
        'How topics move streaming data.',
        'How services and actions differ from topics.',
      ],
      overview: 'This chapter turns ROS 2 theory into working communication patterns. Once the reader understands these primitives, they can design sensor pipelines and command flows clearly.',
      core: 'Topics are best for continuous data, services for request-response calls, and actions for longer-running tasks with progress reporting.',
      example: 'A robot may publish LiDAR scans on a topic, ask a localization service for a map query, and run a navigation action to a goal with feedback.',
      matter: 'Good communication design is what prevents robot software from collapsing under complexity. It also makes debugging and integration much easier.',
      diagram: `flowchart LR
  A["Sensor Node"] --> B["Topic"]
  B --> C["Perception Node"]
  C --> D["Service"]
  D --> E["Planner Node"]
  E --> F["Action"]
  F --> G["Motion Node"]`,
      takeaway: 'ROS 2 communication primitives are the language of robot integration.',
      refs: [
        '[Robot Operating System](https://en.wikipedia.org/wiki/Robot_Operating_System)',
        '[ROS 2 docs](https://docs.ros.org/)',
      ],
    };
  }
  if (lower.includes('rclpy')) {
    return {
      purpose: 'Show how to build ROS 2 logic in Python using rclpy.',
      learn: [
        'How to create a ROS 2 node in Python.',
        'How to publish and subscribe to messages.',
        'How timers and callbacks drive robot behavior.',
      ],
      overview: 'rclpy is the Python client library for ROS 2. It is the easiest way to prototype robot logic because it makes node creation, message passing, and callback handling straightforward.',
      core: 'The main concepts are node lifecycle, publishers, subscribers, timers, parameters, and spinning the executor to process callbacks.',
      example: 'A monitoring node can subscribe to a camera feed, compute a simple metric every second, and publish status updates to the rest of the system.',
      matter: 'This chapter gives the reader a practical coding entry point before they move into more advanced robotics stacks.',
      diagram: `flowchart LR
  A["Python Node"] --> B["Publisher"]
  C["Topic"] --> A
  A --> D["Timer Callback"]
  D --> E["Status Message"]`,
      takeaway: 'rclpy lets Python developers participate directly in ROS 2 robotics systems.',
      refs: [
        '[ROS 2 docs](https://docs.ros.org/)',
        '[Robot Operating System](https://en.wikipedia.org/wiki/Robot_Operating_System)',
      ],
    };
  }
  if (lower.includes('urdf')) {
    return {
      purpose: 'Explain how URDF describes a robot\'s physical structure and motion relationships.',
      learn: [
        'How links and joints represent the robot body.',
        'Why kinematic structure matters.',
        'How URDF supports visualization and simulation.',
      ],
      overview: 'URDF is the canonical robot description format in the ROS ecosystem. It defines the robot\'s parts and how they connect, which is essential for visualization, planning, and simulation.',
      core: 'A good URDF captures geometry, joint limits, coordinate frames, and the hierarchy of the body. Once this model is correct, many downstream tools become usable.',
      example: 'A simple arm with a base link, shoulder joint, elbow joint, and wrist can be represented cleanly in URDF and then reused in simulation and motion planning.',
      matter: 'Robot software needs a shared structural model. URDF provides that shared source of truth.',
      diagram: `flowchart LR
  A["Base Link"] --> B["Joint"]
  B --> C["Link"]
  C --> D["Joint"]
  D --> E["End Effector"]`,
      takeaway: 'URDF turns a robot from an idea into a machine description that software can use.',
      refs: [
        '[URDF](https://en.wikipedia.org/wiki/URDF)',
        '[ROS 2 docs](https://docs.ros.org/)',
      ],
    };
  }
  if (lower.includes('gazebo')) {
    return {
      purpose: 'Use Gazebo to explain how robot behavior can be tested in simulation before hardware is involved.',
      learn: [
        'How worlds, models, and physics interact.',
        'Why simulation reduces risk.',
        'How sensor and actuator behavior can be exercised virtually.',
      ],
      overview: 'Gazebo provides a physics-aware environment for robot testing. It is valuable because it lets developers explore movement, perception, and control without risking broken hardware.',
      core: 'The simulator combines models, physics engines, sensors, and plugins. This makes it possible to test state changes, collisions, and control loops in a controlled way.',
      example: 'A robot can be placed in a simulated room, asked to move toward a target, and evaluated on whether its path planning, sensing, and control behave correctly.',
      matter: 'Simulation is the bridge between abstract algorithms and real deployment. Gazebo is one of the most important tools in that bridge.',
      diagram: `flowchart LR
  A["Robot Model"] --> B["Physics Engine"]
  B --> C["Sensor Simulation"]
  C --> D["Control Loop"]
  D --> A`,
      takeaway: 'Gazebo makes robot development safer, faster, and easier to debug.',
      refs: [
        '[Gazebo simulator](https://en.wikipedia.org/wiki/Gazebo_%28simulator%29)',
        '[Gazebo docs](https://gazebosim.org/docs/)',
      ],
    };
  }
  if (lower.includes('unity')) {
    return {
      purpose: 'Explain why Unity is useful for robotics visualization, simulation, and interactive environments.',
      learn: [
        'How Unity fits into robot workflows.',
        'Why richer visual environments are useful.',
        'How simulation can support testing and presentation.',
      ],
      overview: 'Unity is not a robotics middleware tool; it is a simulation and visualization environment. In robotics, that makes it useful for building rich scenes, custom UI, and interactive demos.',
      core: 'Unity is strongest when the project needs custom rendering, controlled environments, or a polished user experience around robot behavior.',
      example: 'A robot scene with obstacles, landmarks, and interactive goals can be built in Unity to test perception and navigation logic in a more visual setting.',
      matter: 'Not every robotics problem is about physics alone. Sometimes the team needs a stronger interface for evaluation, communication, or environment design.',
      diagram: `flowchart LR
  A["Unity Scene"] --> B["Robot Model"]
  B --> C["Sensors / Inputs"]
  C --> D["Behavior Logic"]
  D --> A`,
      takeaway: 'Unity is useful when robot systems need a more controlled or expressive simulation environment.',
      refs: [
        '[Unity Robotics Hub](https://github.com/Unity-Technologies/Unity-Robotics-Hub)',
      ],
    };
  }
  if (lower.includes('sensors')) {
    return {
      purpose: 'Explain how sensors turn the physical world into usable robot data.',
      learn: [
        'Common robot sensor types.',
        'Why calibration and noise matter.',
        'How sensors feed perception and control.',
      ],
      overview: 'Sensors are the robot\'s contact with reality. They provide the raw signals that make perception, localization, navigation, and manipulation possible.',
      core: 'Different sensors solve different problems: cameras for appearance, depth sensors for structure, IMUs for motion, and tactile sensors for contact.',
      example: 'A depth camera can help a robot detect a table edge, while an IMU helps stabilize its motion and understand orientation.',
      matter: 'Without reliable sensor handling, even a good AI model will make bad decisions because its inputs do not reflect reality accurately.',
      diagram: `flowchart LR
  A["Environment"] --> B["Sensors"]
  B --> C["Filtering"]
  C --> D["Perception"]
  D --> E["Robot Behavior"]`,
      takeaway: 'Sensors are not just input devices; they are the foundation of trustworthy robot behavior.',
      refs: [
        '[Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html)',
        '[RealSense](https://en.wikipedia.org/wiki/RealSense)',
      ],
    };
  }
  if (lower.includes('digital twins')) {
    return {
      purpose: 'Explain how digital twins mirror physical systems and support testing, monitoring, and maintenance.',
      learn: [
        'What makes a digital twin different from a static model.',
        'How live data keeps the twin aligned with reality.',
        'Why digital twins matter for robotics iteration.',
      ],
      overview: 'A digital twin is a living virtual counterpart of a physical system. In robotics, it helps developers test behavior, detect divergence, and understand how the system is changing over time.',
      core: 'The twin consists of the physical robot, the digital representation, and the data connection between them. The live link is what makes it a twin instead of just a simulation.',
      example: 'A robot arm in production can be mirrored in a digital twin to compare expected trajectories with actual sensor data and catch drift early.',
      matter: 'Digital twins make robotics more measurable. They also create a better path from simulation to deployment.',
      diagram: `flowchart LR
  A["Physical Robot"] <-->|"Sensor Data"| B["Digital Twin"]
  B --> C["Prediction / Analysis"]
  C --> A`,
      takeaway: 'A digital twin is valuable because it stays synchronized with the real machine and helps interpret what is happening.',
      refs: [
        '[Digital twin](https://en.wikipedia.org/wiki/Digital_twin)',
      ],
    };
  }
  if (lower.includes('isaac sim')) {
    return {
      purpose: 'Introduce Isaac Sim as a high-fidelity robotics simulation environment.',
      learn: [
        'How Isaac Sim fits into robotics workflows.',
        'Why fidelity matters for perception and deployment.',
        'How scene setup and asset handling support iteration.',
      ],
      overview: 'Isaac Sim is designed for robotics workflows that need realistic simulation, synthetic data, and close integration with robot tooling. It is especially useful when the team wants to bridge simulation and deployment.',
      core: 'Its strength is the combination of physics, rendering, sensors, and robotics support in one platform.',
      example: 'A mobile robot can be tested in a simulated room with depth sensors and navigation targets before the same pipeline is deployed to hardware.',
      matter: 'When robot behavior must work in the real world, simulation fidelity becomes a practical concern, not a cosmetic one.',
      diagram: `flowchart LR
  A["Scene Assets"] --> B["Isaac Sim"]
  B --> C["Sensors"]
  C --> D["Robot Policy"]
  D --> E["Evaluation"]`,
      takeaway: 'Isaac Sim is a production-grade bridge between robotics research and deployment-ready testing.',
      refs: [
        '[Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html)',
      ],
    };
  }
  if (lower.includes('isaac ros')) {
    return {
      purpose: 'Explain how Isaac ROS connects NVIDIA acceleration with the ROS 2 ecosystem.',
      learn: [
        'How Isaac ROS accelerates perception and robotics pipelines.',
        'Why ROS compatibility matters.',
        'How common utilities and packages reduce integration effort.',
      ],
      overview: 'Isaac ROS brings accelerated robot components into the ROS 2 world. That is valuable because it lets developers keep the familiar ROS structure while using NVIDIA-focused performance optimizations.',
      core: 'The important idea is not just speed. It is the ability to keep the system modular while improving throughput and latency.',
      example: 'A perception pipeline can use camera input, GPU-accelerated processing, and ROS 2 messaging without rewriting the whole robot stack.',
      matter: 'For robots that need edge performance, the combination of ROS 2 structure and GPU acceleration is a practical advantage.',
      diagram: `flowchart LR
  A["Sensors"] --> B["Isaac ROS Components"]
  B --> C["ROS 2 Graph"]
  C --> D["Robot Behavior"]`,
      takeaway: 'Isaac ROS helps robotics teams accelerate computation without abandoning ROS workflows.',
      refs: [
        '[Isaac ROS](https://nvidia-isaac-ros.github.io/)',
        '[Isaac ROS Common](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)',
      ],
    };
  }
  if (lower.includes('vslam')) {
    return {
      purpose: 'Explain how visual SLAM enables robots to localize and build maps at the same time.',
      learn: [
        'What localization and mapping are.',
        'Why vision-based SLAM matters indoors.',
        'How SLAM supports navigation and autonomy.',
      ],
      overview: 'VSLAM estimates where the robot is while also constructing a map of the environment. That makes it one of the core perception systems in autonomous robotics.',
      core: 'The system must detect features, track motion, integrate observations, and correct drift over time. If any of those fail, the map or localization becomes unreliable.',
      example: 'A robot exploring a new building can use VSLAM to understand hallway structure and keep track of its own position as it moves.',
      matter: 'Navigation depends on knowing both the world and the robot\'s place in it. VSLAM provides that foundation when GPS is unavailable.',
      diagram: `flowchart LR
  A["Camera Frames"] --> B["Feature Tracking"]
  B --> C["Pose Estimation"]
  C --> D["Map Update"]
  D --> E["Navigation"]`,
      takeaway: 'VSLAM gives robots spatial awareness in environments they have not seen before.',
      refs: [
        '[Simultaneous localization and mapping](https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping)',
      ],
    };
  }
  if (lower.includes('navigation')) {
    return {
      purpose: 'Explain how robots plan paths, avoid obstacles, and move toward goals.',
      learn: [
        'How localization, mapping, and planning fit together.',
        'Why navigation is more than route finding.',
        'How obstacle avoidance and goal tracking work.',
      ],
      overview: 'Navigation is the machinery that turns perception into movement. It combines maps, localization, path planning, and motion control into one autonomy loop.',
      core: 'A robot must know where it is, where it wants to go, what obstacles exist, and how to move safely through the environment.',
      example: 'A service robot can receive a destination, compute a path, replan if the corridor changes, and stop safely if a person walks into its route.',
      matter: 'Navigation is one of the clearest demonstrations that physical AI is not a text-only problem. The world pushes back.',
      diagram: `flowchart LR
  A["Localization"] --> B["Planner"]
  B --> C["Motion Controller"]
  C --> D["Robot Movement"]
  D --> A`,
      takeaway: 'Navigation is the practical bridge between sensing the world and moving through it safely.',
      refs: [
        '[Robot navigation](https://en.wikipedia.org/wiki/Robot_navigation)',
      ],
    };
  }
  if (lower.includes('whisper')) {
    return {
      purpose: 'Explain how Whisper turns speech into text for robot interaction.',
      learn: [
        'Why speech recognition matters in robotics.',
        'How Whisper supports voice interfaces.',
        'Why transcription errors must be handled carefully.',
      ],
      overview: 'Whisper provides a speech-to-text front end that can feed commands into a robot system. That makes it a useful component for voice control and conversational interaction.',
      core: 'The model is strong at multilingual transcription, but like all speech systems it can still mishear noise, accents, or ambiguous input.',
      example: 'A user says a command aloud, Whisper produces text, and the robot interprets that text as a task request.',
      matter: 'Voice is one of the most natural ways to interact with a robot, but it only works well when the system handles recognition and uncertainty correctly.',
      diagram: `flowchart LR
  A["Audio Input"] --> B["Whisper"]
  B --> C["Transcribed Text"]
  C --> D["Intent Parsing"]
  D --> E["Robot Action"]`,
      takeaway: 'Whisper is the speech layer that lets a robot hear the human operator.',
      refs: [
        '[OpenAI Whisper](https://github.com/openai/whisper)',
      ],
    };
  }
  if (lower.includes('llms for robotics')) {
    return {
      purpose: 'Explain how large language models can support planning, reasoning, and interaction in robotics.',
      learn: [
        'Where LLMs help robotics.',
        'Where LLMs should not be trusted alone.',
        'How language can improve task decomposition.',
      ],
      overview: 'LLMs are useful in robotics because they can interpret instructions, generate plans, summarize context, and help coordinate behavior. They are not a replacement for control or safety systems.',
      core: 'The best use of LLMs in robotics is as a reasoning or orchestration layer above lower-level perception and actuation.',
      example: 'A user asks for a task in plain language, and the robot breaks it into steps such as identify object, navigate, grasp, and deliver.',
      matter: 'This chapter sets up the logic for later VLA and conversational robot chapters.',
      diagram: `flowchart LR
  A["Text Instruction"] --> B["LLM Reasoning"]
  B --> C["Task Plan"]
  C --> D["Robot Modules"]
  D --> E["Physical Execution"]`,
      takeaway: 'LLMs make robot interaction more flexible, but they need grounding in real robot systems.',
      refs: [
        '[Large Language Models for Robotics: A Survey](https://arxiv.org/abs/2311.07226)',
      ],
    };
  }
  if (lower.includes('vision language action')) {
    return {
      purpose: 'Explain how vision, language, and action can be fused into a single robotic policy.',
      learn: [
        'What VLA systems are.',
        'How perception and language ground action.',
        'Why dataset quality matters.',
      ],
      overview: 'Vision-language-action systems take a visual observation and a language instruction and directly map them to robot actions. This makes them one of the most important recent directions in embodied AI.',
      core: 'The challenge is grounding: the model must understand what is in the image, what the instruction means, and what action is physically feasible.',
      example: 'If the robot sees a cup and hears "move the cup to the tray," the VLA layer should convert that instruction into a concrete manipulation plan.',
      matter: 'VLA is the bridge between modern multimodal AI and robot control.',
      diagram: `flowchart LR
  A["Camera / Vision"] --> B["VLA Model"]
  C["Language"] --> B
  B --> D["Action Tokens"]
  D --> E["Robot Control"]`,
      takeaway: 'VLA systems unify seeing, understanding, and acting in one model family.',
      refs: [
        '[Vision-language-action model](https://en.wikipedia.org/wiki/Vision-language-action_model)',
        '[VLA survey](https://arxiv.org/abs/2507.10672)',
      ],
    };
  }
  if (lower.includes('conversational robots')) {
    return {
      purpose: 'Show how robots can interact through dialogue while still operating safely in the physical world.',
      learn: [
        'How conversation and action connect.',
        'Why context matters in robot dialogue.',
        'Why conversational systems still need safety and grounding.',
      ],
      overview: 'A conversational robot does more than answer questions. It must understand requests, remember context, map language to physical tasks, and respond in a way that is useful to the human operator.',
      core: 'The conversation loop includes speech recognition, intent interpretation, task planning, execution, and a spoken response back to the user.',
      example: 'A person asks the robot to fetch an object, the robot clarifies the request if needed, and then reports progress while acting.',
      matter: 'Dialogue is a natural interface, but it only becomes meaningful when the robot can actually do something in the world.',
      diagram: `flowchart LR
  A["Speech"] --> B["Dialogue Manager"]
  B --> C["Task Planner"]
  C --> D["Robot Action"]
  D --> E["Spoken Response"]`,
      takeaway: 'Conversational robots combine language and physical behavior into one interactive system.',
      refs: [
        '[Human–robot interaction](https://en.wikipedia.org/wiki/Human%E2%80%93robot_interaction)',
      ],
    };
  }
  if (lower.includes('kinematics')) {
    return {
      purpose: 'Explain the geometric foundations of robot motion.',
      learn: [
        'How forward and inverse kinematics differ.',
        'Why joint relationships matter.',
        'How body geometry shapes reachable motion.',
      ],
      overview: 'Kinematics describes motion without focusing on force. For humanoids, it is the language used to reason about where limbs can move and how postures are represented.',
      core: 'The main idea is to map joint values to poses and, when needed, solve the reverse problem of finding joints that achieve a target pose.',
      example: 'If a robot hand must reach a shelf, kinematics tells us whether the pose is reachable and what joint configuration is required.',
      matter: 'Without kinematics, motion planning and manipulation are guesses rather than engineered solutions.',
      diagram: `flowchart LR
  A["Joint Angles"] --> B["Forward Kinematics"]
  B --> C["End Effector Pose"]
  C --> D["Inverse Kinematics"]
  D --> A`,
      takeaway: 'Kinematics turns robot motion into a solvable geometric problem.',
      refs: [
        '[Kinematics](https://en.wikipedia.org/wiki/Kinematics)',
        '[Robot kinematics](https://en.wikipedia.org/wiki/Robot_kinematics)',
      ],
    };
  }
  if (lower.includes('locomotion')) {
    return {
      purpose: 'Explain how humanoid walking and balance are controlled.',
      learn: [
        'Why locomotion is difficult for humanoids.',
        'How balance and gait planning work together.',
        'Why stability is the central problem.',
      ],
      overview: 'Locomotion is the ability to move from place to place. For humanoids, it is much harder than wheel-based movement because the robot must continuously manage balance and support.',
      core: 'A walking robot needs gait timing, center-of-mass control, contact planning, and recovery behavior when the ground is not as expected.',
      example: 'A humanoid stepping around an obstacle must shift weight, place feet carefully, and stay upright throughout the motion.',
      matter: 'Walking is one of the defining capabilities of a humanoid robot, so this chapter is central to the book\'s later capstone.',
      diagram: `flowchart LR
  A["Balance"] --> B["Gait Plan"]
  B --> C["Foot Placement"]
  C --> D["Motion Execution"]
  D --> A`,
      takeaway: 'Locomotion is the art of moving without falling.',
      refs: [
        '[Robot locomotion](https://en.wikipedia.org/wiki/Robot_locomotion)',
      ],
    };
  }
  if (lower.includes('manipulation')) {
    return {
      purpose: 'Explain how humanoid arms and hands interact with objects in the world.',
      learn: [
        'How grasping and reaching differ.',
        'Why force and contact matter.',
        'How manipulation supports real tasks.',
      ],
      overview: 'Manipulation is the part of robotics that changes the environment through contact. For humanoids, it is where perception, kinematics, force control, and planning all meet.',
      core: 'A manipulator must approach an object, align with it, apply a stable grasp, and then move it without losing control.',
      example: 'Picking up a bottle from a table requires pose estimation, hand alignment, grasp stability, and safe transport.',
      matter: 'Humanoid usefulness depends heavily on manipulation because human environments are full of objects designed to be handled.',
      diagram: `flowchart LR
  A["Perception"] --> B["Reach"]
  B --> C["Grasp"]
  C --> D["Transport"]
  D --> E["Release"]`,
      takeaway: 'Manipulation is physical AI at the point of contact with the world.',
      refs: [
        '[Robotics](https://en.wikipedia.org/wiki/Robotics)',
      ],
    };
  }
  if (lower.includes('human robot interaction')) {
    return {
      purpose: 'Explain how robots and people share space, intent, and responsibility.',
      learn: [
        'Why safety and trust are central in HRI.',
        'How speech and social cues affect interaction.',
        'Why robot behavior must remain understandable.',
      ],
      overview: 'Human-robot interaction studies how people perceive, communicate with, and work alongside robots. It matters especially for humanoids because their presence is much closer to the human workspace.',
      core: 'The interaction needs to be safe, predictable, legible, and socially acceptable. The robot must not just work; it must work in a way people can understand and trust.',
      example: 'A robot handing an object to a person needs to move in a way that makes its intent clear and does not startle the user.',
      matter: 'A technically capable robot that is difficult to understand or uncomfortable to approach will not be useful in many real settings.',
      diagram: `flowchart LR
  A["Human Intent"] --> B["Robot Interpretation"]
  B --> C["Robot Action"]
  C --> D["Human Feedback"]
  D --> B`,
      takeaway: 'HRI ensures physical AI can operate around people safely and productively.',
      refs: [
        '[Human–robot interaction](https://en.wikipedia.org/wiki/Human%E2%80%93robot_interaction)',
      ],
    };
  }
  if (lower.includes('workstations')) {
    return {
      purpose: 'Explain the workstation requirements for robotics development.',
      learn: [
        'Why robotics workstations need strong compute.',
        'How GPU, memory, and storage affect productivity.',
        'Why local development matters even with simulators.',
      ],
      overview: 'A robotics workstation is the main development machine for simulation, testing, debugging, and model work. It often does far more than a typical office computer.',
      core: 'The important hardware dimensions are CPU, GPU, RAM, storage, and thermal stability. If any of those are weak, robot development slows down.',
      example: 'Running simulation, perception pipelines, and model evaluation on the same machine is common in robotics, which is why workstation planning matters.',
      matter: 'The workstation is the base camp for the entire physical AI pipeline.',
      diagram: `flowchart LR
  A["CPU"] --> B["Simulation"]
  C["GPU"] --> D["Perception / AI"]
  E["RAM / Storage"] --> F["Iteration Speed"]
  B --> F
  D --> F`,
      takeaway: 'A good workstation is the difference between smooth robotics development and constant friction.',
      refs: [
        '[Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html)',
      ],
    };
  }
  if (lower.includes('jetson')) {
    return {
      purpose: 'Explain edge deployment on Jetson-class devices.',
      learn: [
        'Why edge compute matters for robots.',
        'How power and thermal limits shape deployment.',
        'What changes when inference moves onto the robot.',
      ],
      overview: 'Jetson devices are designed for robot-side inference and control. They matter because a robot often needs to run perception and decision-making near the sensors rather than sending everything to the cloud.',
      core: 'The main tradeoff is compute versus power. Edge devices must stay fast enough for real-time use while remaining efficient and thermally stable.',
      example: 'A robot can run local vision inference and navigation on Jetson so that it continues to function even when connectivity is poor.',
      matter: 'This chapter explains how a laboratory prototype becomes a deployable physical system.',
      diagram: `flowchart LR
  A["Sensors"] --> B["Jetson"]
  B --> C["Inference"]
  C --> D["Robot Action"]`,
      takeaway: 'Jetson makes on-robot intelligence practical at the edge.',
      refs: [
        '[Jetson Modules](https://developer.nvidia.com/embedded/jetson-modules)',
      ],
    };
  }
  if (lower.includes('realsense')) {
    return {
      purpose: 'Explain how depth cameras support robot perception and spatial understanding.',
      learn: [
        'What depth sensing adds beyond RGB images.',
        'How 3D perception helps navigation and manipulation.',
        'Why calibration matters.',
      ],
      overview: 'Realsense-style depth sensors provide structured 3D information that robots can use to estimate distances, detect obstacles, and understand object placement.',
      core: 'Depth data helps transform flat images into spatial reasoning, which is crucial for human environments.',
      example: 'A robot can estimate the distance to a chair or table, then plan a path around it or a grasp toward it.',
      matter: 'Better spatial perception means safer, more useful robot behavior.',
      diagram: `flowchart LR
  A["Depth Camera"] --> B["Point Cloud / Depth Map"]
  B --> C["Scene Understanding"]
  C --> D["Navigation or Manipulation"]`,
      takeaway: 'Depth cameras are one of the simplest ways to give robots 3D awareness.',
      refs: [
        '[RealSense](https://en.wikipedia.org/wiki/RealSense)',
      ],
    };
  }
  if (lower.includes('robot platforms')) {
    return {
      purpose: 'Survey robot body platforms and explain how the base shape determines the robot\'s capabilities.',
      learn: [
        'Why platform choice matters.',
        'How wheels, legs, and hybrid forms differ.',
        'How task requirements drive hardware design.',
      ],
      overview: 'Robot platforms are the physical embodiments that carry the software stack. The choice of platform determines how the robot moves, senses, balances, and interacts.',
      core: 'A platform is not just a chassis. It defines constraints on motion, payload, battery life, safety, and task fit.',
      example: 'A warehouse platform may prioritize efficient wheeled motion, while a humanoid platform prioritizes tool use and access to human spaces.',
      matter: 'This chapter ties the software and robotics concepts back to actual machine design.',
      diagram: `flowchart LR
  A["Task Needs"] --> B["Platform Choice"]
  B --> C["Body Design"]
  C --> D["Software Stack"]`,
      takeaway: 'Platform choice should follow the task, not the other way around.',
      refs: [
        '[Humanoid robot](https://en.wikipedia.org/wiki/Humanoid_robot)',
        '[Robot locomotion](https://en.wikipedia.org/wiki/Robot_locomotion)',
      ],
    };
  }
  if (lower.includes('architecture')) {
    return {
      purpose: 'Present the full capstone system architecture and show how all previous chapters connect.',
      learn: [
        'How the final system is divided into modules.',
        'How data and control flow through the stack.',
        'How the book turns into one integrated robot.',
      ],
      overview: 'This chapter is the structural summary of the book. It shows how sensing, speech, language, navigation, manipulation, and hardware fit together into one coherent humanoid system.',
      core: 'The architecture should separate perception, language understanding, planning, control, and safety while keeping the interfaces explicit.',
      example: 'A spoken command can be routed through voice recognition, task planning, navigation, and manipulation without collapsing into one monolithic program.',
      matter: 'The capstone architecture proves that the earlier chapters were building toward a real integrated system, not isolated topics.',
      diagram: `flowchart LR
  A["Voice / Vision Inputs"] --> B["Task Orchestration"]
  B --> C["Navigation"]
  B --> D["Manipulation"]
  B --> E["Safety Layer"]
  C --> F["Mobile Base"]
  D --> G["Arms and Hands"]`,
      takeaway: 'A good robot architecture makes complex behavior understandable and maintainable.',
      refs: [
        '[Isaac ROS](https://nvidia-isaac-ros.github.io/)',
      ],
    };
  }
  if (lower.includes('voice to action')) {
    return {
      purpose: 'Explain how a spoken request becomes a robot action.',
      learn: [
        'How voice commands are interpreted.',
        'Why clarification and confirmation matter.',
        'How action planning follows language understanding.',
      ],
      overview: 'Voice to action is the pipeline that transforms a human request into a robot behavior. It combines speech recognition, intent parsing, task planning, and execution.',
      core: 'The robot should not just hear words. It needs to know what the words mean in context and how to map them to safe physical behavior.',
      example: 'If the user says "go to the desk," the system must identify the desk, compute a route, and move there safely.',
      matter: 'This is one of the clearest examples of Physical AI becoming a practical interface.',
      diagram: `flowchart LR
  A["Speech"] --> B["Transcription"]
  B --> C["Intent"]
  C --> D["Plan"]
  D --> E["Action"]`,
      takeaway: 'Voice becomes useful only when it can trigger grounded physical action.',
      refs: [
        '[OpenAI Whisper](https://github.com/openai/whisper)',
      ],
    };
  }
  if (lower.includes('object detection')) {
    return {
      purpose: 'Explain how object detection lets the robot identify things in the scene.',
      learn: [
        'What object detection does.',
        'Why detection supports manipulation and navigation.',
        'How recognition feeds higher-level decisions.',
      ],
      overview: 'Object detection identifies instances of semantic objects in images or video. In robotics, that becomes the basis for grasping, inspection, and task completion.',
      core: 'The robot needs to know not only that an object exists but also where it is and how it relates to the rest of the scene.',
      example: 'A robot can detect a bottle on a table, estimate its location, and plan a grasp or delivery action around it.',
      matter: 'Perception becomes actionable only when the system can identify specific targets in the environment.',
      diagram: `flowchart LR
  A["Camera Input"] --> B["Detector"]
  B --> C["Object Labels / Boxes"]
  C --> D["Task Planning"]`,
      takeaway: 'Object detection turns raw vision into robot-relevant structure.',
      refs: [
        '[Object detection](https://en.wikipedia.org/wiki/Object_detection)',
      ],
    };
  }
  if (lower.includes('autonomous humanoid')) {
    return {
      purpose: 'Close the book by showing how the complete autonomous humanoid system operates end to end.',
      learn: [
        'How the final stack integrates.',
        'Why fallback and degraded modes matter.',
        'How the system should be evaluated as a whole.',
      ],
      overview: 'The autonomous humanoid is the final synthesis of the book: a robot that can hear, see, think, move, and interact while staying within safety and hardware limits.',
      core: 'The system only works if perception, language, navigation, manipulation, and control are all connected through clean interfaces.',
      example: 'A humanoid can receive a spoken request, locate the relevant object, navigate to it, grasp it, and report completion.',
      matter: 'This final chapter transforms the book from a set of topics into a single operational concept.',
      diagram: `flowchart LR
  A["Voice"] --> B["Planning"]
  C["Vision"] --> B
  B --> D["Navigation"]
  B --> E["Manipulation"]
  D --> F["Mobility"]
  E --> G["Hands / Arms"]`,
      takeaway: 'An autonomous humanoid is the integrated result of physical AI, not a single model or component.',
      refs: [
        '[Humanoid robot](https://en.wikipedia.org/wiki/Humanoid_robot)',
        '[Vision-language-action model](https://en.wikipedia.org/wiki/Vision-language-action_model)',
      ],
    };
  }

  return {
    purpose: `Introduce the topic of ${title} and connect it to the rest of the physical AI stack.`,
    learn: [
      'What the chapter is about.',
      'Why the topic matters in robotics.',
      'How it connects to the capstone system.',
    ],
    overview: `This chapter explains ${title} as one of the building blocks of the full physical AI system described in the book.`,
    core: 'The chapter focuses on the conceptual role, the practical role, and the integration role of the topic.',
    example: 'Use the chapter to describe a robot task where this topic becomes important in practice.',
    matter: 'Even when a topic looks narrow, it contributes to the full physical AI pipeline.',
    diagram: `flowchart LR
  A["${title}"] --> B["Robot System"]
  B --> C["Physical AI"]`,
    takeaway: `The reader should leave this chapter with a clear mental model of ${title}.`,
    refs: ['[Robot Operating System](https://en.wikipedia.org/wiki/Robot_Operating_System)'],
  };
}

for (const rel of chapterFiles) {
  const abs = path.join(root, rel);
  const current = fs.readFileSync(abs, 'utf8');
  const title = titleFromFile(rel);
  const focus = focusFor(rel, title);
  const sidebarPositionMatch = current.match(/sidebar_position:\s*(\d+)/);
  const sidebarPosition = sidebarPositionMatch ? sidebarPositionMatch[1] : '1';
  const chapterNumber = rel.match(/chapter-(\d+)-/)?.[1] ?? '1';
  const output = [
    '---',
    `title: ${title}`,
    `sidebar_position: ${sidebarPosition}`,
    '---',
    '',
    baseIntro(`Chapter ${chapterNumber}: ${title}`, 'chapter', focus),
    '',
  ].join('\n');
  fs.writeFileSync(abs, output, 'utf8');
}

console.log(`Expanded ${chapterFiles.length} chapter files.`);
