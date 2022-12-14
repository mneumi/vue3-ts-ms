import type { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: {
    padding: "10px 40px",
  },
  colLayout: {
    span: 8,
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      rules: [],
      placeholader: "请输入用户名",
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholader: "请输入密码",
    },
    {
      field: "sport",
      type: "select",
      label: "喜欢的运动",
      placeholader: "请选择喜欢的运动",
      options: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" },
      ],
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      placeholader: "请选择创建的时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
}
