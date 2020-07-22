import React from "react"

import '../styles/scss/home.scss';
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SubHeader from '../components/SubHeader'
import HomePost from '../components/HomePost'
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8"></meta>
          <title>Simple blog homepage</title>
          <meta name="description" content="Simple blog application"></meta>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          </Helmet>
          <Container>
          <Navigation></Navigation>
          <Header></Header>
          <SubHeader></SubHeader>
          <HomePost></HomePost>
        </Container>
      </div>
    )
  }
}

export default IndexPage
