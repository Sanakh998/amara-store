import React from 'react'
import Jewelry from '../CategoryProducts/Jewelry'
import Electronics from '../CategoryProducts/Electronics'
import MenCloths from '../CategoryProducts/MenCloths'
import WomenCloths from '../CategoryProducts/WomenCloths'

const AllProducts = () => {

  return (
    <div>
      <Jewelry/>
      <Electronics/>
      <MenCloths/>
      <WomenCloths/>
    </div>
  )
}

export default AllProducts