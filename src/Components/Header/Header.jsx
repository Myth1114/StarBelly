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
          <MenusUlLi>Home</MenusUlLi>
          <MenusUlLi>Pages</MenusUlLi>
          <MenusUlLi>Menu</MenusUlLi>
          <MenusUlLi>Contact</MenusUlLi>
          <MenusUlLi>About Us</MenusUlLi>
          <Link to='/menu'>
            <MenusUlLi>Menu</MenusUlLi>
          </Link>
        </MenusUl>
        <div className='socialIcon'>
          <Button primary>Login</Button>
        </div>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
