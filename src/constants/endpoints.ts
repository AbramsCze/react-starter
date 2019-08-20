export const Endpoints = {
  getUserList: '/user',
  getUserDetail: (userId: number) => `/user/${userId}`,
}

export default Endpoints
