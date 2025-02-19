export const useNotification = (message) => {
  Notification.requestPermission(permissions => {
    if (permissions === 'granted') {
        new Notification(message);
    } else {
        alert(message)
    }
  })
}