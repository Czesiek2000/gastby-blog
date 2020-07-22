import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = styled.div `
  background-color: #252126;
  padding: 15px;
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={ props.to } style={{ color: `white`, textDecoration: `none`}}>{ props.children }</Link>
    </li>
  )
  
  const Navigation = ({ children }) => (
    <Navbar>
    <div style={{ marginTop: `15px`, marginLeft: `25px`}}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`, color: `white`, textDecoration: `none`}}>Logo</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
    </Navbar>
  )

  export default Navigation