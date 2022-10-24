export interface ISystemStoreState {
  userList: any[]
  userCount: number
}

export interface IGetPageListAction {
  pageUrl: string
  queryInfo?: {
    offset?: number
    size?: number
  }
}
