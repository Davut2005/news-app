import { useQuery } from "@tanstack/react-query"
import { Data, fetchNews, News } from "./services/fetchingNews";
import './styles/app.scss'
import NavBar from "./NavBar";

const NewsList = () => {

  const { data, isLoading, isError } = useQuery<Data>( {
    queryKey: ['news'],
    queryFn: () => fetchNews()
  })    


  return (
    <div key={1}>
      <NavBar totalNews={data?.totalResults} />  
      <div className="news-container">
      { data?.articles.map( (news: News) => {
        console.log(news);
        
        return (
            <>  
              <div className="news-card" key={data.articles.indexOf(news)}>
                <img
                  src={news.urlToImage}
                  alt="not found" 
                  className="news-img"
                />
                <div className="news-title">
                  <h4> 
                    {news.author} + {news.publishedAt}
                  </h4>
                </div>
              </div>             
            </>
        )})}
      </div>
    </div>
  )
}

export default NewsList
