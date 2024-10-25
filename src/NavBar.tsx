import './styles/newsNavBar.scss';
import './styles/_variables.scss'

export interface NavProps {
  changeMode: () => void;
  changeIsSingleNews: () => void;
  mode: boolean
}

const NavBar = ( { changeMode, changeIsSingleNews, mode }: NavProps ) => {
  const navBarClass = 'news-navbar ' + (mode ? 'grey' : 'white')

  return (
    <div className={navBarClass}>
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
