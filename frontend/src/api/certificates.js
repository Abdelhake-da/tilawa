import client from './client'

export const fetchCertificates = () => client.get('/certificates/')
export const fetchCertificatesByStudent = (studentId) => client.get(`/certificates/?student=${studentId}`)
export const createCertificate = (data) => client.post('/certificates/', data)
export const approveCertificate = (id) => client.patch(`/certificates/${id}/approve/`)
export const rejectCertificate = (id) => client.patch(`/certificates/${id}/reject/`)
export const downloadCertificatePdf = (id) => client.get(`/certificates/${id}/pdf/`, { responseType: 'blob' })