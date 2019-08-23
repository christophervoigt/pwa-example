
import registerServiceWorker from './partials/registerServiceWorker';
import handleOfflineStatus from './partials/handleOfflineStatus';
import latestNews from './react/latestNews.jsx';

export default function bundle() {
  registerServiceWorker();
  handleOfflineStatus();
  latestNews();
}
