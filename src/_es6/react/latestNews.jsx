
import React from 'react';
import ReactDOM from 'react-dom';

export default function latestNews() {
  const container = document.querySelector('[data-latest-news]');

  if (container) {
    fetch('/.netlify/functions/getNews')
    .then(response => response.json())
    .then(json => ReactDOM.render(<NewsList articles={json.articles}/>, container))
    .catch(error => console.error('Error:', error));
  }
}


const NewsList = ({ articles }) => {
  const news = [];
  const articles = this.props.articles;

  articles.forEach((article) => {
    const date = new Date(article.publishedAt)
    const dateString= date.toLocaleDateString('de-DE', { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit'});
    const timeSting = date.toLocaleTimeString('de-DE', { formatMatcher: 'best fit' });

    let image = '';
    if (article.urlToImage) {
      image = <img src={article.urlToImage} className='latestNews_articleImage'/>
    }

    news.push(
      <article className='latestNews_article'>
        <span className='latestNews_articleDate' aria-label='veröffentlicht am'>{`${dateString} - ${timeSting} Uhr`}</span>
        <h2 className='latestNews_articleTitle'>
          <a href={article.url} title={article.title}>{article.title}</a>
        </h2>
        {image}
        <p className='latestNews_articleDescription'>{article.description}</p>
      </article>
    );
  });

  return news;
}

NewsList.defaultProps = {
  articles: [],
}
