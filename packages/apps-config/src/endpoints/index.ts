// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from '../types';
import type { LinkOption } from './types';

import { defaultT } from '../util';
import { createCustom, createDev, createOwn } from './development';
import { prodChains } from './production';
// import { createKusamaRelay, createPolkadotRelay } from './productionRelays';
import { testChains } from './testing';
import { expandEndpoints } from './util';
// import { createRococoRelay, createWestendRelay } from './testingRelays';

export { CUSTOM_ENDPOINT_KEY } from './development';

export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    ...createCustom(t),
    // {
    //   isDisabled: false,
    //   isHeader: true,
    //   isSpaced: true,
    //   text: t('rpc.header.polkadot.relay', 'Polkadot & parachains', { ns: 'apps-config' }),
    //   textBy: '',
    //   value: ''
    // },
    // ...createPolkadotRelay(t, firstOnly, withSort),
    // {
    //   isDisabled: false,
    //   isHeader: true,
    //   text: t('rpc.header.kusama.relay', 'Kusama & parachains', { ns: 'apps-config' }),
    //   textBy: '',
    //   value: ''
    // },
    // ...createKusamaRelay(t, firstOnly, withSort),
    // {
    //   isDisabled: false,
    //   isHeader: true,
    //   isSpaced: true,
    //   text: t('rpc.header.westend.relay', 'Test Westend & parachains', { ns: 'apps-config' }),
    //   textBy: '',
    //   value: ''
    // },
    // ...createWestendRelay(t, firstOnly, withSort),
    // {
    //   isDisabled: false,
    //   isHeader: true,
    //   text: t('rpc.header.rococo.relay', 'Test Rococo & parachains', { ns: 'apps-config' }),
    //   textBy: '',
    //   value: ''
    // },
    // ...createRococoRelay(t, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.live', 'Live networks', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, prodChains, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.test', 'Test networks', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, testChains, firstOnly, withSort),
    {
      isDevelopment: true,
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...createDev(t),
    ...createOwn(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
