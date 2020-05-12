
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/muta-docs2/',
  component: ComponentCreator('/muta-docs2/'),
  exact: true,
  
},
{
  path: '/muta-docs2/blog',
  component: ComponentCreator('/muta-docs2/blog'),
  exact: true,
  
},
{
  path: '/muta-docs2/blog/consensus-cangshu',
  component: ComponentCreator('/muta-docs2/blog/consensus-cangshu'),
  exact: true,
  
},
{
  path: '/muta-docs2/blog/tags',
  component: ComponentCreator('/muta-docs2/blog/tags'),
  exact: true,
  
},
{
  path: '/muta-docs2/blog/tags/consensus',
  component: ComponentCreator('/muta-docs2/blog/tags/consensus'),
  exact: true,
  
},
{
  path: '/muta-docs2/blog/tags/overlord',
  component: ComponentCreator('/muta-docs2/blog/tags/overlord'),
  exact: true,
  
},
{
  path: '/muta-docs2/index1',
  component: ComponentCreator('/muta-docs2/index1'),
  exact: true,
  
},
{
  path: '/muta-docs2/showcase/',
  component: ComponentCreator('/muta-docs2/showcase/'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/:route',
  component: ComponentCreator('/muta-docs2/docs/:route'),
  
  routes: [
{
  path: '/muta-docs2/docs/arch',
  component: ComponentCreator('/muta-docs2/docs/arch'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/built_in_service',
  component: ComponentCreator('/muta-docs2/docs/built_in_service'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/config',
  component: ComponentCreator('/muta-docs2/docs/config'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/contribute',
  component: ComponentCreator('/muta-docs2/docs/contribute'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/crypto',
  component: ComponentCreator('/muta-docs2/docs/crypto'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/dex',
  component: ComponentCreator('/muta-docs2/docs/dex'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/doc1',
  component: ComponentCreator('/muta-docs2/docs/doc1'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/doc2',
  component: ComponentCreator('/muta-docs2/docs/doc2'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/doc3',
  component: ComponentCreator('/muta-docs2/docs/doc3'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/faq',
  component: ComponentCreator('/muta-docs2/docs/faq'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/getting_started',
  component: ComponentCreator('/muta-docs2/docs/getting_started'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/graphql',
  component: ComponentCreator('/muta-docs2/docs/graphql'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/intro',
  component: ComponentCreator('/muta-docs2/docs/intro'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/js_sdk',
  component: ComponentCreator('/muta-docs2/docs/js_sdk'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/mdx',
  component: ComponentCreator('/muta-docs2/docs/mdx'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/multi_node_deploy',
  component: ComponentCreator('/muta-docs2/docs/multi_node_deploy'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/network',
  component: ComponentCreator('/muta-docs2/docs/network'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/overlord',
  component: ComponentCreator('/muta-docs2/docs/overlord'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/resources',
  component: ComponentCreator('/muta-docs2/docs/resources'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/roadmap',
  component: ComponentCreator('/muta-docs2/docs/roadmap'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/service_dev',
  component: ComponentCreator('/muta-docs2/docs/service_dev'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/service_eg',
  component: ComponentCreator('/muta-docs2/docs/service_eg'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/storage',
  component: ComponentCreator('/muta-docs2/docs/storage'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/support',
  component: ComponentCreator('/muta-docs2/docs/support'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/team',
  component: ComponentCreator('/muta-docs2/docs/team'),
  exact: true,
  
},
{
  path: '/muta-docs2/docs/transaction_pool',
  component: ComponentCreator('/muta-docs2/docs/transaction_pool'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
