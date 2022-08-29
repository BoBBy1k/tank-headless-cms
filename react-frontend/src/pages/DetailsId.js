import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from 'react-bootstrap/Spinner';
import StarGenerator from '../components/StarGenerator.js'
export default function DetailsId() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/listings/' + id)
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
          {/* <div className="image">{data.data.attributes.images}</div> */}
          <h2 className="variant">{data.data.attributes.variant}</h2>
          <div className="rating">{StarGenerator(data.data.attributes.rating)}</div>
          <div className="model">Model: {data.data.attributes.model}</div>
          <div className="class">Class: {data.data.attributes.class}</div>
          <div className="year">Year: {data.data.attributes.year}</div>
          <div className="gun">Gun: {data.data.attributes.gun}</div>
          <p>{data.data.attributes.description}</p>
        </div>
      : "Loading..."}
    </div>
  )
}
