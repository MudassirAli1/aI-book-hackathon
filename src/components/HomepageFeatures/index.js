import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introduction to Physical AI',
    Svg: require('@site/static/img/icon-physical-ai.svg').default,
    description: (
      <>
        Explore the fundamentals of Physical AI. Understand the convergence of artificial intelligence and physical systems,
        including robotics, sensors, actuators, and real-world interaction.
      </>
    ),
    to: '/docs/intro/overview-physical-ai',
  },
  {
    title: 'ROS - Robot Nervous System',
    Svg: require('@site/static/img/icon-ros-system.svg').default,
    description: (
      <>
        Discover ROS 2 as the communication backbone of robotics. Master nodes, topics, services,
        and parameter systems that connect all robot components.
      </>
    ),
    to: '/docs/ros2/nodes-topics-services',
  },
  {
    title: 'Digital Twin - Simulation Environments',
    Svg: require('@site/static/img/icon-digital-twin.svg').default,
    description: (
      <>
        Create digital replicas of physical robots. Master Gazebo and Unity simulations
        for testing and validating robot behaviors in safe virtual environments.
      </>
    ),
    to: '/docs/digital-twin/gazebo-simulation-basics',
  },
  {
    title: 'AI Robot Brain - NVIDIA Isaac',
    Svg: require('@site/static/img/icon-ai-brain.svg').default,
    description: (
      <>
        Develop intelligent robot controllers using NVIDIA Isaac. Master SLAM, navigation,
        and perception systems for autonomous robot operation.
      </>
    ),
    to: '/docs/isaac/isaac-sim-overview',
  },
  {
    title: 'Vision-Language-Action Systems',
    Svg: require('@site/static/img/icon-vision-action.svg').default,
    description: (
      <>
        Integrate perception, cognition, and action. Build robots that process visual and linguistic
        inputs to perform complex real-world tasks autonomously.
      </>
    ),
    to: '/docs/vla/voice-command-to-action',
  },
  {
    title: 'Capstone - Autonomous Humanoid Robot',
    Svg: require('@site/static/img/icon-capstone.svg').default,
    description: (
      <>
        Synthesize all knowledge into a complete humanoid robot project. Implement full autonomy
        from perception to action in a physical system.
      </>
    ),
    to: '/docs/capstone/project-overview',
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div>
      <Link to={to} className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
