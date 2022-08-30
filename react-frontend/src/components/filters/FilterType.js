import React from 'react'
import { useParams } from 'react-router-dom'
import { OverlayTrigger, Tooltip, Spinner} from 'react-bootstrap'
import {useQuery, gql } from '@apollo/client'

const TYPES = gql`
  query GetTypes($id: ID!){
    types (id: $id) {
      data {
        id,
        attributes {
          type,
          type_listings {
            data{
              id,
              attributes{
                variant,
                rating,
                model,
                class,
                year,
                description,
                featured,
              }
            }
          }
        }
      }
    }
  }
`

export default function FilterType() {
  const { id } = useParams()
  const {loading, error, data} = useQuery(TYPES, {variables: {id: id} })
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
    <>
    <div>{data.types.data.id}</div>
    <div>{data.types.data.attributes.type}</div>
    <div>{data.types.data.attributes.type_listings.data.id}</div>
    <div>{data.types.data.attributes.type_listings.data.attributes.variant}</div>
    </>
  )
}
