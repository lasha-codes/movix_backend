export type registerBody = {
  email: string
  username: string
  date: number
  gender: string
  password: string
}

export type loginBody = {
  usernameOrEmail: string
  password: string
}
