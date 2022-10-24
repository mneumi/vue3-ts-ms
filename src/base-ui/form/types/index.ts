type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholader?: any
  options?: any[]
  otherOptions?: any
}

export type colLayoutType = {
  span?: number
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: colLayoutType
  itemStyle?: { [index: string]: any }
}

export interface IFormData {
  [index: string]: string
}
