import client from './client'

export const fetchAttendance = () => client.get('/attendance/')
export const fetchAttendanceByStudent = (studentId) => client.get(`/attendance/?student=${studentId}`)
export const createAttendance = (data) => client.post('/attendance/', data)
export const updateAttendance = (id, data) => client.patch(`/attendance/${id}/`, data)
export const deleteAttendance = (id) => client.delete(`/attendance/${id}/`)