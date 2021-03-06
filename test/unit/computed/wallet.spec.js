import { observable, useStrict } from 'mobx';
import ComputedWallet from '../../../src/computed/wallet';

describe('Computed Wallet Unit Tests', () => {
  let store;

  beforeEach(() => {
    useStrict(false);
  });

  describe('ComputedWallet()', () => {
    it('should work with empty store', () => {
      store = observable({});
      ComputedWallet(store);
      expect(store.computedBalance, 'to equal', '');
      expect(store.computedChannelsBalance, 'to equal', '');
    });

    it('should format balance and channel balance', () => {
      store = observable({
        balanceSatoshis: '1000',
        channelBalanceSatoshis: 10000,
      });
      ComputedWallet(store);
      expect(store.computedBalance.length, 'to equal', 5);
      expect(store.computedChannelsBalance.length, 'to equal', 6);
    });
  });
});
