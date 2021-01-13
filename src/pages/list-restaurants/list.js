import React from 'react'
import './list.scss'
import Header from '../../components/header/header'
import CardFilter from '../../components/card-filter/cardfilter'
import CardRestaurants from '../../components/card-restaurants/cardrestaurants'

const RestaurantsList = () => {

    return (
        <div class="grid-container-list">
          <div class="header-page-restaurants">
              <Header />
          </div>
          <div class="card-rating-page">
              <CardFilter  />
          </div>
          <div class="page-card-restaurants">
              <div className='container-div-card'>
                <CardRestaurants className='container-card-page' />
              </div>
          </div>
        </div>
    )
}

export default RestaurantsList