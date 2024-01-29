import HeaderMenu from './HeaderMenu.jsx';
import HeaderMessage from './HeaderMessage.jsx';

const Header = () => {
  return(
    <header className='header'>
      <HeaderMenu />
      <HeaderMessage />
    </header>
  )
};

export default Header;