import client from './client'

export const fetchNotifications = () => client.get('/notifications/')
export const fetchUnreadCount = () => client.get('/notifications/unread_count/')
export const markAsRead = (id) => client.patch(`/notifications/${id}/`, { is_read: true })
export const markAllRead = () => client.patch('/notifications/mark_all_read/')
export const deleteNotification = (id) => client.delete(`/notifications/${id}/`)