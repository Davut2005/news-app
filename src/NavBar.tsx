import './styles/newsNavBar.scss'

export interface NavProps {
  changeMode: () => void;
  changeIsSingleNews: () => void;
}

const NavBar = ( { changeMode, changeIsSingleNews }: NavProps ) => {
  return (
    <div className="news-navbar">
      <div className="header"> 
        <button className='login' onClick={() => changeIsSingleNews()}>Latest News</button>
      </div>
      <div className="search-bar"></div>
      <div>
        <button className='login'><h4>LogIn</h4></button>  
      </div>  
      <div className="form-check form-switch">
        <form className='checkingMode'>
          <input
            onChange={() => changeMode()}
            className=" form-check-input"
            type="checkbox"
            role="switch"
            size={50}            
          />
        </form>
      </div>   
    </div>
  )
}

export default NavBar
