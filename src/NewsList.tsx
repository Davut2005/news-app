import { useQuery } from "@tanstack/react-query"
import { Data, fetchNews, News } from "./services/fetchingNews";
import './styles/newsList.scss';
import './styles/_variables.scss'
import { dateToStr } from './services/dateToStr';

interface SingleNews {
  changeIsSingleNews: ( news: News ) => void;
  mode: boolean
}

const NewsList = ({ changeIsSingleNews, mode }: SingleNews) => {

  const { data, isLoading, isError } = useQuery<Data>( {
    queryKey: ['news'],
    queryFn: () => fetchNews()
  })    
  const containerClass = 'news-container ' + (mode ? 'grey' : 'white')
  const cardClass = 'news-card ' + (mode ? 'grey' : 'white')

  return (
    <div key={1}> 
      <div className={containerClass}>
      { data?.articles.map( (news: News) => {

        if ( news.urlToImage )
        
        return (
              
              <div className={cardClass} key={data.articles.indexOf(news)}>
                <img
                  src={news.urlToImage}
                  alt="not found" 
                  className="news-img"
                />
                <button onClick={() => changeIsSingleNews(news)} className="news-title">
                  <p> {news.author?.split(' ').slice(0,2).join(' ') || news.source.name} </p>
                  <p> {dateToStr(news.publishedAt)} </p>         
                </button>
              </div>             
        )})}
      </div>
    </div>
  )
}

export default NewsList
