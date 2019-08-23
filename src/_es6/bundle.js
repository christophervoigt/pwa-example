
import registerServiceWorker from './partials/registerServiceWorker';
import latestNews from './react/latestNews.jsx';

export default function bundle() {
  registerServiceWorker();
  latestNews();
}
