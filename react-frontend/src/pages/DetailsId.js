import React from 'react'
import { useParams } from 'react-router-dom'

import { OverlayTrigger, Tooltip, Spinner} from 'react-bootstrap'
import StarGenerator from '../components/StarGenerator.js'
// import useFetch from '../hooks/useFetch'
import {useQuery, gql } from '@apollo/client'

//$ Denotes the variable name (current id)
//! Denotes requiring non-null value
//
const LISTING = gql`
query GetListing($id: ID!){
  listing(id: $id){
    data {
      id
      attributes {
        variant,
        rating,
        model,
        class,
        year,
        description,
        enginehp,
        enginetype,
        gunbore,
        guncaliber
      }
    }
  }
}
`
export default function DetailsId() {
  const { id } = useParams()
  // const { loading, error, data } = useFetch('http://localhost:1337/api/listings/' + id)
  const {loading, error, data} =useQuery(LISTING, {variables: {id: id} })
  console.log(data)

  if (loading) {
    return(
      <Spinner animation="border" role="status">
        <p className="visually-hidden">Loading...</p>
      </Spinner>
    )
  }
  if (error) { return(<p>Error!</p>) }
  console.log(data)

  return (
    <div>
       {data.length !== 0 ?
        <div className="review-card">
          {/* <div className="image">{data.listing.data.attributes.images}</div> */}
          <h2 className="variant">{data.listing.data.attributes.variant}</h2>
          <div className="rating">{StarGenerator(data.listing.data.attributes.rating)}</div>
          <OverlayTrigger placement="top"overlay={<Tooltip id={`tooltip`}>Year</Tooltip>}>
            <span className="class">{data.listing.data.attributes.year} </span>
          </OverlayTrigger>
          <OverlayTrigger placement="top"overlay={<Tooltip id={`tooltip`}>Model</Tooltip>}>
            <span className="model">{data.listing.data.attributes.model} </span>
          </OverlayTrigger>
          <OverlayTrigger placement="top"overlay={<Tooltip id={`tooltip`}>Class</Tooltip>}>
            <span className="class">{data.listing.data.attributes.class} Tank</span>
          </OverlayTrigger>
          <OverlayTrigger placement="top"overlay={<Tooltip id={`tooltip`}>Main Cannon</Tooltip>}>
          <div className="gun">{data.listing.data.attributes.gunbore}mm L/{data.listing.data.attributes.guncaliber}</div>
          </OverlayTrigger>

          <div className="engine">{data.listing.data.attributes.enginehp}hp {data.listing.data.attributes.enginetype} Engine</div>
          <p>{data.listing.data.attributes.description}</p>
        </div>
      : "Loading..."}
    </div>
  )
}
