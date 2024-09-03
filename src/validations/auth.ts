type registerBody = {
  email: string
  username: string
  date: number
  gender: string
  password: string
}

export const validateRegister = async (body: registerBody) => {
  const { email, username, date, gender, password } = body
}
