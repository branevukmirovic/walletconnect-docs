// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'readme',
        {
          type: 'category',
          label: 'Migration from v1.x',
          items: [
            {
              type: 'doc',
              id: 'advanced/migration-from-v1.x/overview',
              label: 'Overview'
            },
            {
              type: 'category',
              label: 'Dapps',
              items: [
                'advanced/migration-from-v1.x/dapps/dapps',
                'advanced/migration-from-v1.x/dapps/dapp-checklist'
              ]
            },
            {
              type: 'category',
              label: 'Wallets',
              items: [
                'advanced/migration-from-v1.x/wallets/wallets',
                'advanced/migration-from-v1.x/wallets/wallet-checklist'
              ]
            },
            'advanced/migration-from-v1.x/what-changed-from-v1.0',
            'advanced/migration-from-v1.x/migration-faq',
            'advanced/migration-from-v1.x/explorer-submission'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['web3modal/about', 'web3wallet/about']
    },
    {
      type: 'category',
      label: 'Cloud',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['cloud/explorer', 'cloud/relay']
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: ['api/sign', 'api/auth', 'api/chat', 'api/push']
        },
        {
          type: 'category',
          label: 'Multi-Chain',
          items: [
            'advanced/multichain/overview',
            'advanced/multichain/chain-list',
            {
              type: 'category',
              label: 'Polkadot',
              items: [
                'web3modal/polkadot/dapp-integration-guide',
                'web3wallet/polkadot/wallet-integration-guide',
                'web3wallet/polkadot/namespaces-guide'
              ]
            }
          ]
        },
        'advanced/echo-server'
      ]
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'advanced/glossary',
        {
          type: 'category',
          label: 'RPC Reference',
          items: [
            'advanced/rpc-reference/everscale-rpc',
            'advanced/rpc-reference/ethereum-rpc',
            'advanced/rpc-reference/cosmos-rpc',
            'advanced/rpc-reference/solana-rpc',
            'advanced/rpc-reference/stellar-rpc',
            'advanced/rpc-reference/tezos-rpc',
            'advanced/rpc-reference/near-rpc',
            'advanced/rpc-reference/xrpl-rpc'
          ]
        },
        {
          type: 'category',
          label: 'Specs',
          collapsed: true,
          collapsible: true,
          items: [
            'specs/readme',
            {
              type: 'category',
              label: 'Client APIs',
              items: [
                {
                  type: 'category',
                  label: 'Sign API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/sign'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Auth API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/auth'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Chat API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/chat'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Push API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/push'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Core API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/core'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Meta-Clients API',
              items: [
                {
                  type: 'category',
                  label: 'Web3Inbox',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3inbox'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Web3Wallet',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3wallet'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Server APIs',
              items: [
                {
                  type: 'category',
                  label: 'Relay Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/relay'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Keys Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/keys'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Echo Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/echo'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Cast Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/cast'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'History Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/history'
                    }
                  ]
                }
              ]
            }
          ]
        },
        'advanced/faq'
      ]
    }
  ],
  web: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['web/about-web3modal', 'web/about-web3wallet']
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Modal',
          items: [
            {
              type: 'category',
              label: 'React',
              items: [
                'web/web3modal/react/introduction',
                {
                  type: 'category',
                  label: 'With Wagmi',
                  items: [
                    'web/web3modal/react/wagmi/installation',
                    'web/web3modal/react/wagmi/components',
                    'web/web3modal/react/wagmi/hooks',
                    'web/web3modal/react/wagmi/options',
                    'web/web3modal/react/wagmi/theming',
                    'web/web3modal/react/wagmi/custom-wallets',
                    'web/web3modal/react/wagmi/custom-chains',
                    {
                      type: 'link',
                      label: 'Example',
                      href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/nextjs-wagmi'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'With Sign API',
                  items: [
                    'web/web3modal/react/sign-api/installation',
                    'web/web3modal/react/sign-api/components',
                    'web/web3modal/react/sign-api/hooks',
                    'web/web3modal/react/sign-api/options',
                    'web/web3modal/react/sign-api/theming',
                    {
                      type: 'link',
                      label: 'Example',
                      href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/nextjs-sign'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'With Auth API',
                  items: [
                    'web/web3modal/react/auth-api/installation',
                    'web/web3modal/react/auth-api/components',
                    'web/web3modal/react/auth-api/hooks',
                    'web/web3modal/react/auth-api/options',
                    'web/web3modal/react/auth-api/theming',
                    {
                      type: 'link',
                      label: 'Example',
                      href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/nextjs-auth'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'HTML',
              items: [
                'web/web3modal/html/introduction',
                {
                  type: 'category',
                  label: 'With Wagmi',
                  items: [
                    'web/web3modal/html/wagmi/installation',
                    'web/web3modal/html/wagmi/components',
                    'web/web3modal/html/wagmi/actions',
                    'web/web3modal/html/wagmi/options',
                    'web/web3modal/html/wagmi/theming',
                    'web/web3modal/html/wagmi/custom-wallets',
                    'web/web3modal/html/wagmi/custom-chains',
                    {
                      type: 'link',
                      label: 'Example',
                      href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/html-wagmi'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'With Sign API',
                  items: [
                    'web/web3modal/html/sign-api/installation',
                    'web/web3modal/html/sign-api/actions',
                    'web/web3modal/html/sign-api/options',
                    'web/web3modal/html/sign-api/theming',
                    {
                      type: 'link',
                      label: 'Example',
                      href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/html-sign'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'With Auth API',
                  items: [
                    'web/web3modal/html/auth-api/installation',
                    'web/web3modal/html/auth-api/actions',
                    'web/web3modal/html/auth-api/options',
                    'web/web3modal/html/auth-api/theming',
                    {
                      type: 'link',
                      label: 'Example',
                      href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/html-auth'
                    }
                  ]
                }
              ]
            }
          ]
        },

        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'web/web3wallet/installation',
            'web/web3wallet/wallet-usage',
            'web/web3wallet/upgrade-guide'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Sign',
              collapsible: true,
              collapsed: true,
              items: [
                'web/sign/installation',
                'web/sign/dapp-usage',
                'web/sign/wallet-usage',
                'web/sign/smart-wallets'
              ]
            },
            {
              type: 'category',
              label: 'Auth',
              collapsible: true,
              collapsed: true,
              items: ['web/auth/installation', 'web/auth/dapp-usage', 'web/auth/wallet-usage']
            },
            {
              type: 'category',
              label: 'Push',
              collapsible: true,
              collapsed: true,
              items: ['web/push/installation', 'web/push/dapp-usage', 'web/push/wallet-usage']
            },
            {
              type: 'category',
              label: 'Chat',
              collapsible: true,
              collapsed: true,
              items: ['web/chat/installation', 'web/chat/usage']
            },
            {
              type: 'category',
              label: 'Core',
              collapsible: true,
              collapsed: true,
              items: ['web/core/pairing-api']
            }
          ]
        },
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          collapsed: true,
          items: ['web/providers/ethereum', 'web/providers/universal']
        },
        {
          type: 'category',
          label: 'WalletConnectModal',
          collapsible: true,
          collapsed: true,
          items: [
            'web/walletConnectModal/installation',
            'web/walletConnectModal/options',
            'web/walletConnectModal/actions',
            'web/walletConnectModal/theming'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'web/guides/examples-and-resources',
        'web/guides/nodejs',
        'web/guides/shared-core',
        'web/guides/typescript'
      ]
    }
  ],
  android: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'android/web3wallet/installation',
            'android/web3wallet/wallet-usage',
            'android/web3wallet/upgrade-guide'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsible: true,
          collapsed: true,
          items: ['android/web3inbox/installation', 'android/web3inbox/usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: [
            'android/sign/installation',
            'android/sign/dapp-usage',
            'android/sign/wallet-usage'
          ]
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: [
            'android/auth/installation',
            'android/auth/dapp-or-requester-usage',
            'android/auth/wallet-or-responder-usage'
          ]
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Dapp Usage',
              collapsible: true,
              collapsed: true,
              items: [['android/push/dapp-usage/getting-started']]
            },
            {
              type: 'category',
              label: 'Wallet Usage',
              collapsible: true,
              collapsed: true,
              items: ['android/push/wallet-usage/getting-started']
            }
          ]
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['android/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['android/chat/installation', 'android/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['android/core/installation', 'android/core/pairing', 'android/core/relay']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['android/guides/examples-and-resources', 'android/guides/mobile-linking']
    }
  ],
  ios: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'ios/web3wallet/installation',
            'ios/web3wallet/wallet-usage',
            'ios/web3wallet/upgrade-guide'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsed: true,
          collapsible: true,
          items: ['ios/web3inbox/installation', 'ios/web3inbox/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['ios/sign/installation', 'ios/sign/dapp-usage', 'ios/sign/wallet-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['ios/auth/installation', 'ios/auth/dapp-usage', 'ios/auth/wallet-usage']
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Dapp Usage',
              collapsible: true,
              collapsed: true,
              items: [['ios/push/dapp-usage/getting-started']]
            },
            {
              type: 'category',
              label: 'Wallet Usage',
              collapsible: true,
              collapsed: true,
              items: [['ios/push/wallet-usage/getting-started']]
            }
          ]
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['ios/echo/installation', 'ios/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['ios/chat/installation', 'ios/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: [
            'ios/core/installation',
            'ios/core/pairing-usage',
            'ios/core/networking-configuration'
          ]
        },
        {
          type: 'category',
          label: 'Router',
          collapsible: true,
          collapsed: true,
          items: ['ios/router/installation']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['ios/guides/examples-and-resources', 'ios/guides/mobile-linking']
    }
  ],
  reactnative: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['reactnative/overview']
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['reactnative/web3wallet/Installation', 'reactnative/web3wallet/wallet-usage']
        },
        {
          type: 'category',
          label: 'Web3Modal',
          collapsible: true,
          collapsed: true,
          items: [
            'reactnative/web3modal/installation',
            'reactnative/web3modal/dapp-usage',
            'reactnative/web3modal/options'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['reactnative/guides/tutorials']
    }
  ],
  flutter: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['flutter/installation', 'flutter/wallets/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/dapp-sign-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/dapp-auth-usage']
        }
      ]
    }
  ],
  unity: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['unity/sign/installation', 'unity/sign/dapp-usage', 'unity/sign/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['unity/core/pairing-api']
        }
      ]
    }
  ]
}
