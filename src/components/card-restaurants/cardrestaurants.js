import React from 'react'
import './cardrestaurants.scss'

const CardRestaurants = () => {
    return(
        <> 
            <div className="grid-container">
              <div className="image"></div>
              <div className="details-restaurant">
                  <p className='name-restaurant'></p>
              </div>
              <div className="restaurant-type">
                  <p>Teste</p>
              </div>
            </div>
        </>
    )
}

export default CardRestaurants