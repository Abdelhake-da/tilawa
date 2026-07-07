import client from './client'

// Teachers
export const fetchTeachers = () => client.get('/students/teachers/')
export const createTeacher = (data) => client.post('/students/teachers/', data)
export const updateTeacher = (id, data) => client.patch(`/students/teachers/${id}/`, data)
export const deleteTeacher = (id) => client.delete(`/students/teachers/${id}/`)

// Guardians
export const fetchGuardians = () => client.get('/students/guardians/')
export const createGuardian = (data) => client.post('/students/guardians/', data)

// Students
export const fetchStudents = () => client.get('/students/students/')
export const fetchStudent = (id) => client.get(`/students/students/${id}/`)
export const createStudent = (data) => client.post('/students/students/', data)
export const updateStudent = (id, data) => client.patch(`/students/students/${id}/`, data)
export const deleteStudent = (id) => client.delete(`/students/students/${id}/`)

// Transfers
export const fetchTransfers = () => client.get('/students/transfers/')
export const createTransfer = (data) => client.post('/students/transfers/', data)
export const approveTransfer = (id) => client.patch(`/students/transfers/${id}/approve/`)
export const rejectTransfer = (id) => client.patch(`/students/transfers/${id}/reject/`)