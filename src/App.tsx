import './styles/app.scss';
import NewsList from './NewsList';
import NavBar from './NavBar';
import { useState } from 'react';
import { News } from './services/fetchingNews';
import SingleNews from './SingleNews';
import './styles/_variables.scss'

function App() {
  const [mode, setMode] = useState(true);
  const [isSingleNews, setIsSingleNews] = useState(false);
  const [singleNews, setSingleNews] = useState<News>();

  const fullchangeIsSingleNews = (news: News) => {
    setIsSingleNews(true);
    setSingleNews(news);
  }
  const changeMode = () => {
    setMode(!mode)
  }
  const changeIsSingleNews = () => {
    setIsSingleNews(false)
  }
  const appClassname = 'app-body ' + (mode ? 'grey' : 'white')

  return (
    <div className={appClassname}>
      <NavBar mode={mode} changeIsSingleNews={() => changeIsSingleNews()} changeMode={() => changeMode()} />
      <div className='container'>
        { !isSingleNews ? 
          <NewsList mode={mode}  changeIsSingleNews={(news) => fullchangeIsSingleNews(news) }/>
          : <SingleNews mode={mode}  news={singleNews} />
        }
      </div>
    </div>
  )
}

export default App
