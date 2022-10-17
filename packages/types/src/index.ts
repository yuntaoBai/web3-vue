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
  Update = 'Web3VueUpdate',
  Error = 'Web3VueError',
  Deactivate = 'Web3VueDeactivate'
}
