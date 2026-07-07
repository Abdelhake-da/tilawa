import client from './client'

export const login = async (username, password) => {
  const res = await client.post('/auth/login/', { username, password })
  localStorage.setItem('access_token', res.data.access)
  localStorage.setItem('refresh_token', res.data.refresh)
  localStorage.setItem('user', JSON.stringify(res.data.user))
  return res.data.user
}

export const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('user')
  window.location.href = '/login'
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user')
  return userStr ? JSON.parse(userStr) : null
}

export const fetchMe = async () => {
  const res = await client.get('/auth/me/')
  localStorage.setItem('user', JSON.stringify(res.data))
  return res.data
}