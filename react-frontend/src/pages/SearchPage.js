import React from 'react'
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Card, Spinner, Col, Row, Container} from 'react-bootstrap'
import StarGenerator from '../components/StarGenerator.js'
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './pages.css'
import AlertBanner from '../components/AlertBanner.js'
// import useFetch from '../hooks/useFetch.js'
import {useQuery, gql } from '@apollo/client'
//#282c34

export default function SearchPage() {
  //Fetch API
  // const {loading, error, data } = useFetch('http://localhost:1337/api/listings')
  const LISTINGS = gql`
  query GetListings{
    listings{
      data {
        id
        attributes {
          variant
          rating
          description
        }
      }
    }
  }
  `
  const {loading, error, data} =useQuery(LISTINGS)

  console.log(data)
  if (loading) {
    return(
      <Spinner animation="border" role="status">
        <p className="visually-hidden">Loading...</p>
      </Spinner>
    )
  }
  if (error) { return(<p>Error!</p>) }

  let featuredCheck = (id) =>{
    if (id === 1) {return {cursor: "pointer", height: "30rem", width: "18rem", borderWidth: "4px", borderColor: "#61DBFB"}}
    else {return {cursor: "pointer", height: "30rem", width: "18rem" }}
  }

  return (

    <div style={ {marginTop: 140} } className="grid">
      <AlertBanner />
      <Container>
      <Row>
      {data.length !== 0 ? data.listings.data.map((item)=> (
        <Col key={item.id}>
            <Link to={`/details/${item.id}`} style={ {textDecoration: "none"} }>
            <OverlayTrigger placement="top"
              overlay={
                <Tooltip id={`tooltip`}>
                  Tooltip.
                </Tooltip>
              }
            >
              <Card onClick={(e)=> ""} style={ featuredCheck(item.id) } >
                {item.id===1 ? <Card.Header className="mb-2 text-muted">Featured</Card.Header> : <Card.Header className="mb-2 text-muted" style={{border:"none", backgroundColor:"white"}}>&nbsp;</Card.Header>}
                <Card.Img variant="top" src={logo} style={ {width: "18rem"} }/>
                <Card.Body>
                  <Card.Title className="tank-name">{item.attributes.variant}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{StarGenerator(item.attributes.rating)}</Card.Subtitle>
                  <Card.Text className="tank-text">
                    {/* Show a shortened description with the smallest between 80 characters or until the first period*/}
                    {item.attributes.description.substring(0, Math.min(80, item.attributes.description.indexOf("."))) + "..."}
                  </Card.Text>
                </Card.Body>
              </Card>
              </OverlayTrigger>
            </Link>
          <br />
        </Col>
      )): "Loading..."}
      </Row>
      </Container>
    </div>
  )
}
