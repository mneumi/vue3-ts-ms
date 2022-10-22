export const accountRules = {
  name: [
    { required: true, message: "用户名必传", trigger: "blur" },
    { pattern: /^[a-zA-Z0-9]{5,10}$/, message: "用户名长度在5-10", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码必传", trigger: "blur" },
    { pattern: /^[a-zA-Z0-9]{5,}$/, message: "密码长度在5位以上", trigger: "blur" },
  ],
}

export const phoneRules = {
  phone: [
    { required: true, message: "手机号必传", trigger: "blur" },
    { pattern: /^1[0-9]{10}$/, message: "请输入11位正确手机号", trigger: "blur" },
  ],
  verifyCode: [
    { required: true, message: "验证码必传", trigger: "blur" },
    { pattern: /^[0-9]{6}$/, message: "验证码长度6位", trigger: "blur" },
  ],
}
