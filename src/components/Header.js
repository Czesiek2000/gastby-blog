import React from "react"
import banner from '../images/banner.jpg'

import Banner from './Banner'
class Header extends React.Component {
  render () {
    return (
      <div>
        <Banner src={ banner }></Banner>
      </div>
    )
  }
}

export default Header