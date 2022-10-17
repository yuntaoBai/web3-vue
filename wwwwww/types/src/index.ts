export interface AbstractConnectorArguments {
  supportedChainIds?: number[]
}

export interface ConnectorUpdate<T = number | string> {
  provider?: any
  chainId?: T
  account?: null | string
}

export enum ConnectorEvent {
  Update = 'Web3VueUpdate',
  Error = 'Web3VueError',
  Deactivate = 'Web3VueDeactivate'
}
