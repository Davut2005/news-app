import { News } from './services/fetchingNews'
import './styles/singleNews.scss';
import './styles/_variables.scss'
import { dateToStr } from './services/dateToStr';

interface SingleNews {
  news: News | undefined;
  mode: boolean
}

const SingleNews = ( {news,mode}: SingleNews) => {
  const bodyClass = 'body ' + (mode ? 'grey' : 'white')
  
  return (
    <div className={bodyClass}>
      <div className='details'>
        <h3>Published by: </h3>
        <h1 className='bordering'> {news?.author} </h1>
        <h3>Published at: </h3>
        <h4 className='bordering'>{dateToStr(news?.publishedAt)}</h4>
        <h4 className='h4'>{news?.content}</h4>
      </div>
      <div className='img-box'>
        <img className='img' src={news?.urlToImage}></img>
      </div>
    </div>
  )
}

export default SingleNews
