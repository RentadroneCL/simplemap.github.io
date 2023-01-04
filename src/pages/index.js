import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
      </div>
    </header>
  );
}



// The export function below could be improved by applying align="center", etc to one single class. Comment by @HectorBastidasRentadrone
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section>
          <div> 
            <div>
              <h3 class="title">Vision</h3> 
              <p align="center"> Our goal is to become a global open source leader in geospatial imaging processing and analysis
                 for any activity that contributes to having a better planet for all human beings. </p>
            </div>
            <div>
              <h3 class="title">Mission</h3>
              <p align="center"> Develop open source solutions for geospatial data processing that supports data driven decision-making processes for managers in the construction, operation and maintenance of any renewable energy power generation plant and agricultural crops in any of its stages and, in this way, helping our customers and partners to improve their production and sustainability by using our tools. </p>
            </div>
            <div>
              <h3 class="title">Community statement</h3>
              <p align="center"> Simplemap.io Developers is an initiative started by <a href="https://simplemap.io/">Simplemap.io</a> (former Rentadrone.cl) to establish an inclusive community of AI researchers for the development and exchange of best practices of geospatial data processing and machine learning algorithm applied to for UAV imagery.
                  A part of our workload is dedicated to open source and side projects. You can spot team members in user groups or as conference speakers as wel
              </p>
            </div>
          </div>
        </section>
        <HomepageFeatures />
        <section>
          <div> 
            <div>
              <h3 class="featureTitle">Browse Docs</h3>
              <p align="center"> Learn more using the <a href="docs/developers">documentation on this site</a>. </p>
            </div>
            <div>
              <h3 class="featureTitle">Join the community</h3>
              <p align="center"> Ask questions about the documentation and project <a href="https://join.slack.com/t/rentadronecl/shared_invite/zt-dvgh8er7-hsv4p_jf75dsgkyGE1dHuw">Join Slack</a>. </p>
            </div>            
          </div>
        </section>
               
      </main>
    </Layout>
  );
  
}

