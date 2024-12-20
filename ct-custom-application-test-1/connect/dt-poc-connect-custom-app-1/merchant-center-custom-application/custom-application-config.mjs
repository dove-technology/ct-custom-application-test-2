import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Starter Typescript 0a1516',
  entryPointUriPath: '${env:ENTRY_POINT_URI_PATH}',
  // entryPointUriPath,
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    development: {
      initialProjectKey: 'ste-test-1',
    },
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}',
      url: '${env:APPLICATION_URL}',
    },
  },
  additionalEnv: {
    testVar: "test-value"
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/percentage.svg}',
  mainMenuLink: {
    defaultLabel: 'Dovetech - Welcome',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'discounts',
      defaultLabel: 'Dovetech - Discounts',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
