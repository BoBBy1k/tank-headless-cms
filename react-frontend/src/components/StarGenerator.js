import React from 'react'

export default function StarGenerator(starCount) {
  let fiveStars = Math.floor(starCount / 2)
  let fullStars = fiveStars < 0 ? 0 : fiveStars;
  let halfStars = starCount % 2;
  let remaining = fiveStars < 0 ? 0 : 5 - fiveStars - halfStars;

  return (
    <>
      {[...Array(fullStars)].map((e,index )=> {
        return <i className="bi bi-star-fill" key={index} />
      })}
      {[...Array(halfStars)].map((e,index )=> {
        return <i className="bi bi-star-half" key={index} />
      })}
      {[...Array(remaining)].map((e,index)=> {
        return <i className="bi bi-star" key={index} />
      })}
    </>
  )
}
