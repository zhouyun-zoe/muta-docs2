module.exports = {
  docs: {
    介绍: ['docs_zh/intro','docs_zh/concept'],
    安装与部署: ['docs_zh/getting_started','docs_zh/config','docs_zh/multi_node_deploy'],
    开发: ['docs_zh/dev_overview','docs_zh/service_dev','docs_zh/dex'],
    深入Muta: ['docs_zh/transaction_pool','docs_zh/overlord','docs_zh/network','docs_zh/storage','docs_zh/crypto'],
    接口: ['docs_zh/graphql'],
    SDK: ['docs_zh/js_sdk'],
    常见问题: ['docs_zh/faq'],
    贡献说明: ['docs_zh/contribute']
  },

  support: [
    'support/support',
    'support/team',
    'support/roadmap',
    'support/resources',
  ],
  tutorial: [
    {
      type: 'category',
      label: 'Create Your First Muta Chain',
      items: ['tutorial/first-chain/before-create','tutorial/first-chain/setup','tutorial/first-chain/compile-run','tutorial/first-chain/interact'],
    },
    {
      type: 'category',
      label: 'Build a Private Network with Muta',
      items: ['tutorial/private-network/private-before','tutorial/private-network/private-key','tutorial/private-network/private-config','tutorial/private-network/private-run'],
    },
  ],

  docs_en: {
    Intro: ['docs_en/intro']
  }
};