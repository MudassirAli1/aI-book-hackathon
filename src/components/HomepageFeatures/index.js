import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Physical AI concepts made simple and accessible. Learn complex robotics and AI topics with clear explanations and practical examples.
      </>
    ),
    to: '/docs/intro/overview-physical-ai',
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Concentrate on core concepts of Physical AI, Robotics, and Humanoid Systems while we provide structured learning pathways.
      </>
    ),
    to: '/docs/ros2/nodes-topics-services',
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Interactive learning experience built with modern web technologies. Engage with dynamic content and visualizations.
      </>
    ),
    to: '/docs/digital-twin/gazebo-simulation-basics',
  },
  {
    title: 'AI & Robotics Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn how AI algorithms control robotic systems. From perception to action in autonomous robots.
      </>
    ),
    to: '/docs/isaac/isaac-sim-overview',
  },
  {
    title: 'Real-world Applications',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Apply knowledge to build autonomous humanoid robots. Capstone projects that bring concepts to life.
      </>
    ),
    to: '/docs/capstone/project-overview',
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
