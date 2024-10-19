import { useQuery } from "@tanstack/react-query"
import { Data, fetchNews, News } from "./services/fetchingNews";
import './styles/newsList.scss';

interface SingleNews {
  changeIsSingleNews: ( news: News ) => void;
}

const NewsList = ({ changeIsSingleNews }: SingleNews) => {

  const { data, isLoading, isError } = useQuery<Data>( {
    queryKey: ['news'],
    queryFn: () => fetchNews()
  })    


  return (
    <div key={1}> 
      <div className="news-container">
      { data?.articles.map( (news: News) => {

        if ( ![10,15,17].includes( data?.articles.indexOf(news) ))
        
        return (
              
              <div className="news-card" key={data.articles.indexOf(news)}>
                <img
                  src={news.urlToImage}
                  alt="not found" 
                  className="news-img"
                />
                <button onClick={() => changeIsSingleNews(news)} className="news-title">
                  <p> {news.author?.split(' ').slice(0,2).join(' ')} </p>
                  <p> {news.publishedAt} </p>         
                </button>
              </div>             
        )})}
      </div>
    </div>
  )
}

export default NewsList
