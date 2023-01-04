import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Photovoltaic Fault Detector',
    Svg: require('@site/static/img/solar-panel.svg').default,
    description: (
      <>
        Based in model detector YOLOv.3, this repository contains four detector model with their weights and the explanation of how to use these models.
      </>
    ),
  },
  {
    title: 'Precision Agriculture (AI  Agro)',
    Svg: require('@site/static/img/hoja.svg').default,
    description: (
      <>
        Set of Machine Learning Algorithms developed with the aim of determining health states of different types of crops.
      </>
    ),
  },
  {
    title: 'Web-API',
    Svg: require('@site/static/img/servidor.svg').default,
    description: (
      <>
        API specification for deploy the detection models, this repository contains a performant, production-ready reference implementation.
      </>
    ),
  },
  {
    title: 'UI',
    Svg: require('@site/static/img/ventana-de-navegación.svg').default,
    description: (
      <>
        Production-ready reference implementation of an administration tool, which gives you easy access to the EXIF meta-data of an image, generate .geojson and more.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 class="featureTitle">{title}</h3>
        <p class="description">{description}</p>
      </div>
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

