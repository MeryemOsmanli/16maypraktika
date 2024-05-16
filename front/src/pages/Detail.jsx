import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id}=useParams()
    const [detail,setAllDetail]=useState({})
    useEffect(() => {
        getbyIDDetail()
      }, []);
      async function getbyIDDetail() {
        const res= await fetch("http://localhost:3000/meryem/"+id)
        const data= await res.json()
        setAllDetail(data)
        
      }
  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.author}</p>
    </div>
  )
}

export default Detail
