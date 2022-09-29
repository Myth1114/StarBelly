import React from 'react'
import { Link } from 'react-router-dom'
// import './header.css'
import {
  HeaderContainer,
  Nav,
  StarBelly,
  MenusUl,
  MenusUlLi,
  Button,
} from './header.styles'
const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <StarBelly>
          <h2>StarBelly</h2>
        </StarBelly>
        <MenusUl>
          <Link to='/'>
          <MenusUlLi>Home</MenusUlLi>
          </Link>
          <Link to='/menu'>
            <MenusUlLi>Menu</MenusUlLi>
          </Link>
          <MenusUlLi>Pages</MenusUlLi>
          <Link to='contact'>
          <MenusUlLi>Contact</MenusUlLi>
          </Link>
          <MenusUlLi>About Us</MenusUlLi>
          
        </MenusUl>
        <div className='socialIcon'>
          <Button primary>Login</Button>
        </div>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
