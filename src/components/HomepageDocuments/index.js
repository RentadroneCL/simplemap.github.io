import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const DocumentList = [
  {
    title: 'Browse Docs',    
    description: (
      <>
        Learn more using the documentation on this *site*.
      </>
    ),
  },
  {
    title: 'Join the community',    
    description: (
      <>
        Ask questions about the documentation and project Join Slack.
      </>
    ),
  },
  
];

function Document({Svg, title, description}) {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--center">
        <Svg className={styles.DocumentSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageDocuments() {
  return (
    <section className={styles.documents}>
      <div className="container">
        <div className="row">
          {DocumentList.map((props, idx) => (
            <Document key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

