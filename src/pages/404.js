import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Container = styled.div`
  margin: 110px auto;
  max-width: 600px;
  text-align: center;
`

const h1 = styled.h1`
  margin: 30px 0;
  font-size: 4em;
  line-height: 1;
  letter-spacing: -1px;
`

const NotFoundPage = () => (
  <div>
    <Container>
    <h1> 404 </h1>
    <p><strong>Page not found :( </strong></p>
    <p>Reqeusted page could not be found.</p>
    <p>Visit Homepage</p>
    <Link to="/">Homepage</Link>
    </Container>
  </div>
)

export default NotFoundPage
