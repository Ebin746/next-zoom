import React from 'react'

const page = ({params}:{params:{id:string}}) => {
  return (
    <div>meet at:{params.id}</div>
  )
}

export default page