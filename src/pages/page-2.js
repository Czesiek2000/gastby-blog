import React from 'react';
import { Link } from 'gatsby'; 
import '../styles/scss/styles.scss'
import '../styles/scss/global.scss'

class SecondPage extends React.Component {
  render () {
    return (
      <div>
        <div className="red">This is text</div>
        This is second page
        <Link to='/'>Homepage</Link>
      </div>
    )
  }
}

export default SecondPage
