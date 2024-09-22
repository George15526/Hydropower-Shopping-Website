import './Navbar_category.scss';

const Navbar_category = () => {
  return (
    <div className="navbar_category">
        <div className="navbarContainer">
            <div className="categorySort">
                <ul className='allList'>
                    <span className="category">
                        <div>
                            <span className="categoryName">麵包</span>
                        </div>
                    </span>
                    <span className="category">
                        <div>
                            <span className="categoryName">司康</span>
                        </div>
                    </span>
                    <span className="category">
                        <div>
                            <span className="categoryName">餅乾</span>
                        </div>
                    </span>
                    <span className="category">
                        <div>
                            <span className="categoryName">奶酪</span>
                        </div>
                    </span>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar_category;