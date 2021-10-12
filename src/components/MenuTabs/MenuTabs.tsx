
import './style.sass'
import { NavLink } from 'react-router-dom';

const MenuTabs = () => {
  return (
    <header className="container-menu-tabs">
        <nav>
          <NavLink to="/proposals">Tab 1</NavLink>
          <NavLink to="/drinks">Tab 3</NavLink>
        </nav>
    </header>
  );
}

export default MenuTabs;
