
export default function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/sw.js');
  }
}
