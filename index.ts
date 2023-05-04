import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@acala-network/api';

async function main() {
  const apiMainnet = new ApiPromise(options({
    provider: new WsProvider('wss://karura.api.onfinality.io/public-ws')
  }));
  const apiTestnet = new ApiPromise(options({
    provider: new WsProvider('wss://karura-testnet.aca-staging.network/rpc/karura/ws')
  }));
  await apiMainnet.isReady;
  await apiTestnet.isReady;

  console.log(apiMainnet.call.transactionPaymentApi)    // { queryInfo: [Getter], queryFeeDetails: [Getter] }
  console.log(apiTestnet.call.transactionPaymentApi)    // undefined
}

main()