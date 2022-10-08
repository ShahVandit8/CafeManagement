import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainComp from './FoodOrder-Components/index'

function FoodOrder() {

    const { id } = useParams();

  return (
    <div>
      <MainComp />
      <h2>Table Number: {id} </h2>
    </div>
  )
}

export default FoodOrder
