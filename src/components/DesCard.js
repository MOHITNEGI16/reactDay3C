// import React from 'react'
import "./DesCard.css"
function DesCard(prop) {
  return (
       <div className="card">

        <div className="card_item_desciption">
          <p>{prop.children}</p>
        </div>

        <div className="card_item_info">
          <img src = {prop.image} alt = "person_image"/>
          <div className="name_post">
            <h5>{prop.name}</h5>
            <p>{prop.post}</p>
          </div>
        </div>

       </div>
  )
}

export default DesCard
