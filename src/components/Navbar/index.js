import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './index.scss'

function Navbar () {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar__logo" />
      </Link>

      <Link to="/create-post" className="navbar__btn">Create</Link>
    </header>
  )
}

export default Navbar