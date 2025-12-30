// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction to Physical AI',
      items: ['intro/overview-physical-ai', 'intro/importance-of-humanoid-robots'],
    },
    {
      type: 'category',
      label: 'ROS 2 – Robot Nervous System',
      items: ['ros2/nodes-topics-services', 'ros2/urdf-for-humanoids', 'ros2/python-rclpy-basics'],
    },
    {
      type: 'category',
      label: 'Digital Twin – Gazebo & Unity',
      items: ['digital-twin/gazebo-simulation-basics', 'digital-twin/unity-visualization', 'digital-twin/sensor-simulation-lidar-camera-imu'],
    },
    {
      type: 'category',
      label: 'AI Robot Brain – NVIDIA Isaac',
      items: ['isaac/isaac-sim-overview', 'isaac/isaac-ros-integration', 'isaac/slam-and-navigation'],
    },
    {
      type: 'category',
      label: 'Vision-Language-Action Systems',
      items: ['vla/voice-command-to-action', 'vla/llm-planning-for-robots', 'vla/multimodal-interaction'],
    },
    {
      type: 'category',
      label: 'Capstone – Autonomous Humanoid Robot',
      items: ['capstone/project-overview', 'capstone/system-architecture', 'capstone/step-by-step-implementation', 'capstone/expected-outcome', 'capstone/learning-goals'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
