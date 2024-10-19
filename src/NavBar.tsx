
interface Props {
    totalNews: number | undefined
}

const NavBar = ( {totalNews: totalNews }: Props) => {
  return (
    <div>
        <h1>News</h1>
        <h3>{totalNews} + news are found</h3>        
    </div>
  )
}

export default NavBar
