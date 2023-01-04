import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '133'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9d2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '582'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f5b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f45'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '84b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '943'),
    exact: true
  },
  {
    path: '/blog/2016/03/11/blog-post',
    component: ComponentCreator('/blog/2016/03/11/blog-post', 'a55'),
    exact: true
  },
  {
    path: '/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/blog/2017/04/10/blog-post-two', 'f30'),
    exact: true
  },
  {
    path: '/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/blog/2017/09/25/testing-rss', 'cf2'),
    exact: true
  },
  {
    path: '/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/blog/2017/09/26/adding-rss', '7b2'),
    exact: true
  },
  {
    path: '/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0', 'ca8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '87a'),
    exact: true
  },
  {
    path: '/help',
    component: ComponentCreator('/help', 'a82'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8b3'),
    routes: [
      {
        path: '/docs/code_of_conduct',
        component: ComponentCreator('/docs/code_of_conduct', '97c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/contributing',
        component: ComponentCreator('/docs/contributing', '33f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/deployment',
        component: ComponentCreator('/docs/deployment', 'a2d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/detection_models',
        component: ComponentCreator('/docs/detection_models', 'fce'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/developers',
        component: ComponentCreator('/docs/developers', 'e5a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/precision_agriculture',
        component: ComponentCreator('/docs/precision_agriculture', '39b'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '438'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
