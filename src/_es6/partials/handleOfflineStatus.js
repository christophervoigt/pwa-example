
export default function handleOfflineStatus() {
  function updateOnlineStatus() {
    if (navigator.onLine) {
      document.documentElement.classList.remove('-offline');
    } else {
      document.documentElement.classList.add('-offline');
    }
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  updateOnlineStatus();
}
