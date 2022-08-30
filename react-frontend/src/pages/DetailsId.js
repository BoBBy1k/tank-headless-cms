import React from 'react'
import { useParams } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner';
import StarGenerator from '../components/StarGenerator.js'
// import useFetch from '../hooks/useFetch'
import {useQuery, gql } from '@apollo/client'

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
        gun,
        description
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
          <div className="model">Model: {data.listing.data.attributes.model}</div>
          <div className="class">Class: {data.listing.data.attributes.class}</div>
          <div className="year">Year: {data.listing.data.attributes.year}</div>
          <div className="gun">Gun: {data.listing.data.attributes.gun}</div>
          <p>{data.listing.data.attributes.description}</p>
        </div>
      : "Loading..."}
    </div>
  )
}
