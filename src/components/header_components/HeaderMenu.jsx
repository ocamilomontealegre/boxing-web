const HeaderMenu = () => {
  return(
    <div className="h-nav-container">
      <div>
        <a className='h-nav-icon' href="#"><span>FIGHT</span>CLUB</a>
      </div>
      <div className="h-nav-menu">
        <nav>
          <ul>
            <li><a href="#">Workouts</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default HeaderMenu;