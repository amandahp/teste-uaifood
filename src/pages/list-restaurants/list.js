import React, { useState, useEffect } from 'react'
import './list.scss'
import './listresponsive.scss'
import Header from '../../components/header/header'
import CardFilter from '../../components/card-filter/cardfilter'
import CardRestaurants from '../../components/card-restaurants/cardrestaurants'

import { useDispatch, useSelector } from 'react-redux'
import { triggerFilterRestaurants } from '../../redux/actions'



const RestaurantsList = () => {
    const restaurants = useSelector(state =>  state.displayedRestaurantsList)


    const dispatch = useDispatch()
    const [filterRestaurants, setFilterRestaurants ] = useState([])

    const restaurantTypeCheckbox = [
      {
        value:"Arabian", name: "Árabe"
      },
      {
        value:"Brazilian", name: "Brasileira"
      },
      {
        value:"Chinese", name: "Chinesa"
      },
      {
        value:"French", name: "Francesa"
      },
      {
        value:"Seafood", name: "Frutos do mar"
      },
      {
        value:"Italian", name: "Italiana"
      },
      {
        value:"Japanese", name: "Japonesa"
      },
      {
        value:"Mexican", name: "Mexicana"
      },
      {
        value:"Peruvian", name: "Peruana"
      },
    ]

    useEffect(() => {
      dispatch(triggerFilterRestaurants(filterRestaurants))
      
    }, [filterRestaurants])

    const handleFilter = (restaurantType) => {
      if (!filterRestaurants.includes(restaurantType)) {
        setFilterRestaurants([...filterRestaurants, restaurantType])
      }else {
        setFilterRestaurants(filterRestaurants.filter((restaurant) => restaurant !==restaurantType))
      }
    }


    return (
        <div class="grid-container-list">
          <div class="header-page-restaurants">
              <Header />
          </div>
          <div class="card-rating-page">
              <CardFilter restaurantTypeCheckbox={restaurantTypeCheckbox}  handleClickCheckbox={handleFilter} />
          </div>
          <div class="page-card-restaurants">
              <div className='container-div-card'>
                <CardRestaurants listOfRestaurants={restaurants} className='container-card-page' />
              </div>
          </div>
        </div>
    )
}

export default RestaurantsList