---
title: URDF for Humanoids
sidebar_position: 2
---

# URDF for Humanoids

## Learning Objectives

- Understand the basics of URDF (Unified Robot Description Format)
- Learn how to define humanoid robot structures using URDF
- Identify the key elements required for humanoid robot descriptions
- Recognize how URDF integrates with ROS 2 and simulation environments

## Concept Explanation

URDF (Unified Robot Description Format) is an XML-based format used to describe robot models in ROS. For humanoid robots, URDF becomes particularly important as it defines the complex structure of a robot with multiple limbs, joints, and sensors. A humanoid URDF typically includes descriptions for the torso, head, arms, and legs, with appropriate joints connecting these parts.

URDF files define the physical properties of each link (mass, inertia, visual and collision properties) and the kinematic properties of each joint (type, limits, axis). For humanoid robots, this includes special considerations for maintaining balance and enabling complex movements that mimic human motion.

## Real-World or Human Analogy

Think of URDF like a detailed blueprint or 3D model specification for a humanoid robot. Just as an architect creates detailed plans for a building specifying each component and how they connect, URDF specifies each part of the robot and how they're connected with joints.

## Simple Example (Code or Logic)

```
Basic Humanoid URDF Structure:
1. Define the base link (usually the torso)
2. Create links for each body part (head, arms, legs)
3. Define joints connecting the links
4. Specify visual and collision properties for each link
5. Add inertial properties for physics simulation

Example URDF snippet for a simple humanoid arm:
<link name="upper_arm">
  <visual>
    <geometry>
      <cylinder radius="0.05" length="0.3"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <cylinder radius="0.05" length="0.3"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="1.0"/>
    <inertia ixx="0.1" ixy="0" ixz="0" iyy="0.1" iyz="0" izz="0.1"/>
  </inertial>
</link>

<joint name="shoulder_joint" type="revolute">
  <parent link="torso"/>
  <child link="upper_arm"/>
  <axis xyz="0 1 0"/>
  <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
</joint>
```

## Visual Explanation (Text-Based Diagram)

```
[Humanoid Robot Model]
         |
         v
[URDF File (XML)]
         |
         v
[Links]  <--->  [Joints]  <--->  [Properties]
  |               |                |
[Torso]        [Revolute]      [Mass]
[Head]         [Prismatic]     [Inertia]
[Arms]         [Fixed]         [Visual]
[Legs]                         [Collision]
         |               |                |
         +---------------+----------------+
         |
         v
[ROS 2 Ecosystem]  <--->  [Simulation (Gazebo/Isaac Sim)]
[TF Tree]                  [Physics Engine]
[Robot State]              [Sensor Simulation]
```

## Summary / Recap

URDF is an XML format for describing robot models in ROS. For humanoid robots, it defines complex structures with multiple limbs. It specifies physical and kinematic properties of links and joints. It integrates with ROS 2 and simulation environments.