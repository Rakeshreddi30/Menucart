import React from 'react'

const LabelItem = ({label, price}) => {
    console.log("hi");
  return (
    <div style={{display:"flex",gap:"10px"}}>
        <p>{label}</p>
        <p>INR: {price}</p>
    
    </div>
  )
}

export default LabelItem