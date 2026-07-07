import client from './client'

export const fetchMemorization = () => client.get('/quran/memorization/')
export const fetchMemorizationByStudent = (studentId) => client.get(`/quran/memorization/?student=${studentId}`)
export const createMemorization = (data) => client.post('/quran/memorization/', data)
export const deleteMemorization = (id) => client.delete(`/quran/memorization/${id}/`)

export const fetchReviews = () => client.get('/quran/reviews/')
export const fetchReviewsByStudent = (studentId) => client.get(`/quran/reviews/?student=${studentId}`)
export const createReview = (data) => client.post('/quran/reviews/', data)
export const deleteReview = (id) => client.delete(`/quran/reviews/${id}/`)

export const fetchNotes = () => client.get('/quran/notes/')
export const fetchNotesByStudent = (studentId) => client.get(`/quran/notes/?student=${studentId}`)
export const createNote = (data) => client.post('/quran/notes/', data)
export const deleteNote = (id) => client.delete(`/quran/notes/${id}/`)