export type IAccount = {
  name: string
  password: string
}

export type ILoginResult = {
  id: number
  name: string
  token: string
}

export type ITimeStamp = string

export type IRole = {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export type IDepartment = {
  id: number
  name: string
  parentId: number | null
  createAt: Date
  updateAt: Date
  leader: string
}

export type IUserInfo = {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: IRole
  department: IDepartment
}
