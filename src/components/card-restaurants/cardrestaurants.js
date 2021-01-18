import React from 'react'
import './cardrestaurants.scss'
import './cardresponsive.scss'
import { faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../../utils/img/image/unnamed.jpg'



const CardRestaurants = ({ listOfRestaurants=[] }) => {
    const iconStar = <FontAwesomeIcon icon={faStar} classNameName='icon-star' />
    const iconFriends = <FontAwesomeIcon icon={faUserFriends} classNameName='icon-star' />

    const returnNumberOfIcons = (number) => {
      switch (number){
        case 1:
          return (<div>{iconStar}</div>)
        case 2:
          return (<div>{iconStar}{iconStar}</div>)
        case 3:
          return (<div>{iconStar}{iconStar}{iconStar}</div>)
        case 4:
          return (<div>{iconStar}{iconStar}{iconStar}{iconStar}</div>)
        case 5:
          return (<div>{iconStar}{iconStar}{iconStar}{iconStar}{iconStar}</div>)
        default:
          return (<div>{''}</div>)
      }

    }
    return(
        <> 
          {listOfRestaurants.map((restaurants, index) => {
            return( 
              <div className="gridcontainer">
                <div className="image">
                  <img alt='restaurantImage' className='image-for-the-restaurant' src={restaurants.restaurant.thumb?restaurants.restaurant.thumb:Image} />
                </div>
                <div className="details-restaurant">
                    <h1 className='name-restaurant'>{restaurants.restaurant.name}</h1>
                    <p className='address-restaurant'>{restaurants.restaurant.location.address}</p>
                    <p className='rating-stars'>
                      {returnNumberOfIcons(parseInt(restaurants.restaurant.user_rating.aggregate_rating))}
                    </p>                    
                </div>
                <div className="restaurant-type"> 
                  <div className="grid-container-typeandprice">
                    <div className="price">
                      <button className='tag-price'>{iconFriends}R${restaurants.restaurant.average_cost_for_two}</button>
                      <button className='tag-type'>{restaurants.restaurant.cuisines}</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </>
    )
}

export default CardRestaurants