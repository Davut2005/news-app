import './styles/app.scss';
import NewsList from './NewsList';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useState } from 'react';
import { News } from './services/fetchingNews';

function App() {
  const [mode, setMode] = useState(true);
  const [isSingleNews, setIsSingleNews] = useState(true);
  const [singleNews, setSingleNews] = useState<News>()

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

  return (
    <div className='app-body'>
      <NavBar changeIsSingleNews={() => changeIsSingleNews} changeMode={() => changeMode()} />
      <div className='container'>
        <SideBar />
        <NewsList changeIsSingleNews={(news) => fullchangeIsSingleNews(news) }/>
      </div>
    </div>
  )
}

export default App
