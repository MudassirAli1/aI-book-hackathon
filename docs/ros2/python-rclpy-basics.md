---
title: Python RCLPY Basics
sidebar_position: 3
---

# Python RCLPY Basics

## Learning Objectives

- Understand the fundamentals of using Python with ROS 2
- Learn how to create ROS 2 nodes using rclpy
- Identify the basic components of a ROS 2 Python node
- Recognize how to implement publishers and subscribers in Python

## Concept Explanation

RCLPY is the Python client library for ROS 2, providing the necessary tools and interfaces to create ROS 2 nodes in Python. It allows developers to leverage Python's simplicity and extensive ecosystem while building robotic applications that communicate using ROS 2's messaging system.

With RCLPY, you can create nodes that publish data to topics, subscribe to data from topics, provide services, and call services. The library handles the underlying communication protocols, allowing developers to focus on implementing robot behaviors and functionality.

## Real-World or Human Analogy

Think of RCLPY like a Python-based toolkit for building communication systems. Just as you might use Python libraries to create web applications that communicate over HTTP, RCLPY provides the tools to create robotic applications that communicate using ROS 2's messaging system.

## Simple Example (Code or Logic)

```
Basic RCLPY Node Example:

import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.get_clock().now().nanoseconds
        self.publisher_.publish(msg)

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Visual Explanation (Text-Based Diagram)

```
[Python Application]  -->  [RCLPY Library]  -->  [ROS 2 Middleware]
       |                       |                       |
[Node Definition]         [Node Interface]         [Communication]
[Publisher/Subscriber]    [Topic/Service API]      [DDS Implementation]
[Message Types]           [Parameter System]       [Network Protocols]
       |                       |                       |
[User Code]          -->  [ROS 2 Client Library]  -->  [ROS 2 Ecosystem]
[Robot Logic]              [Python Bindings]          [Other Nodes]
```

## Summary / Recap

RCLPY is the Python client library for ROS 2. It enables creating ROS 2 nodes using Python. It provides interfaces for publishers, subscribers, and services. It handles underlying communication protocols.