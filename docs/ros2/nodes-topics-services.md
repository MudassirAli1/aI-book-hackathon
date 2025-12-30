---
title: Nodes, Topics, and Services
sidebar_position: 1
---

# Nodes, Topics, and Services

## Learning Objectives

- Define ROS 2 nodes, topics, and services
- Understand how these components enable communication in ROS 2
- Identify the use cases for topics vs. services

## Concept Explanation

ROS 2 (Robot Operating System 2) provides a framework for communication between different parts of a robot system. The three fundamental communication patterns are:

- **Nodes**: Independent processes that perform specific functions. Each node can publish data, subscribe to data, or provide services. Think of them as individual workers in a factory.
- **Topics**: A publish-subscribe communication mechanism. Nodes publish messages to a topic, and other nodes subscribe to that topic to receive the messages. This is asynchronous and many-to-many communication.
- **Services**: A request-response communication mechanism. A client node sends a request to a service, and a server node processes the request and sends back a response. This is synchronous and one-to-one communication.

## Real-World or Human Analogy

- **Nodes**: Like different departments in a company (e.g., Engineering, Sales, HR), each responsible for specific tasks.
- **Topics**: Like a company newsletter or bulletin board. Anyone interested can read the updates (subscribe), and relevant departments can post updates (publish). Information flows continuously.
- **Services**: Like asking the IT help desk for support. You make a specific request (e.g., "fix my computer"), and they provide a specific response (the fix). It's a direct interaction for a specific task.

## Simple Example (Code or Logic)

**Topic Example (Publisher-Subscriber):**

Publisher Node (Sensor):
```
Publish sensor_data to topic /sensor_readings
Loop:
  Read sensor value
  Publish value to /sensor_readings
```

Subscriber Node (Processor):
```
Subscribe to topic /sensor_readings
Callback function:
  Receive sensor_data
  Process data (e.g., log, filter)
```

**Service Example (Client-Server):**

Client Node (Controller):
```
Request service /add_two_ints
Send request: a=2, b=3
Wait for response
Receive response: sum=5
```

Server Node (Calculator):
```
Provide service /add_two_ints
Callback function:
  Receive request (a, b)
  Calculate sum = a + b
  Return response (sum)
```

## Visual Explanation (Text-Based Diagram)

**Topic Communication:**
```
[Publisher Node A]  ----publish---->  [Topic: /data_stream]
                                          |
                                          v
[Subscriber Node B] <---subscribe---  [Messages flowing]
[Subscriber Node C] <---subscribe---      |
                                          v
                                    [Many-to-Many, Asynchronous]
```

**Service Communication:**
```
[Client Node]  --request-->  [Service: /calculate]
                                 |
                                 v
                           [Server Node processes]
                                 |
                                 v
[Client Node]  <--response--  [Service: /calculate]
                                 |
                           [One-to-One, Synchronous]
```

## Summary / Recap

Nodes are the independent processes in ROS 2. Topics enable asynchronous, many-to-many communication via publish-subscribe. Services enable synchronous, one-to-one communication via request-response. Topics are used for continuous data streams (e.g., sensor data). Services are used for specific requests requiring a response (e.g., calculations, triggering actions).