import React, { useState, useEffect } from 'react'
import LogoWhite from '../../utils/img/logo/logowhite/logo-white.jpg'
import SearchBar from '../../components/search-bar/searchbar'
import { useDispatch, useSelector } from 'react-redux'
import { triggerGetZomatoCityName } from '../../redux/actions'

import './home.scss'


const Home = () => {

    const [selectedCity, setSelectedCity] = useState('')
    const dispatch = useDispatch()
    const cityList = useSelector(state => state.citylist)


    const handleSearchBar = (cityName) => {
        dispatch(triggerGetZomatoCityName(cityName))
    }

    const setCityName = (selectedCity) => {
        // setSelectedCity(selectedCity)
        console.log(selectedCity)
    }

    return (
        <div className="wrapper">
          <div className="Container">
                <div className="header">
                        <img className="logo-white" alt="logo white uaifood" src={LogoWhite}></img>
                </div>
                <div className="main">
                    <div className="main">
                        <p className='text-home'>Descubra os melhores <br/> restaurantes da sua cidade</p>
                        <div className="search-bar-home">
                            <SearchBar handleInputChange={handleSearchBar} />
                        </div>
                        {cityList.map(cities => {
                            return (
                                <p onClick={() => setCityName(cities.name)}> {cities.name} </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home