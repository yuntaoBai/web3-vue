/***
 * AbstractConnectorArguments
 ***/
export interface AbstractConnectorArguments {
  supportedChainIds?: number[]
}
/***
 * ConnectorUpdate
 ***/
export interface ConnectorUpdate<T = number | string> {
  provider?: any
  chainId?: T
  account?: null | string
}
/***
 * ConnectorEvent
 ***/
export enum ConnectorEvent {
  Update = 'web3Update',
  Error = 'web3Error',
  Deactivate = 'web3Deactivate'
}
