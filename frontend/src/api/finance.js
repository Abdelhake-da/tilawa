import client from './client'

export const fetchPayments = () => client.get('/finance/')
export const fetchPaymentsByStudent = (studentId) => client.get(`/finance/?student=${studentId}`)
export const createPayment = (data) => client.post('/finance/', data)
export const updatePayment = (id, data) => client.patch(`/finance/${id}/`, data)
export const deletePayment = (id) => client.delete(`/finance/${id}/`)