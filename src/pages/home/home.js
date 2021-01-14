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
        setSelectedCity(selectedCity)
        console.log(selectedCity)
    }

    const handleClickCity = (cityName) => {
        setCityName()
        //alert('selected')
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
                            <ul className='data-list-list'>
                                {cityList.map(cities => {
                                    return (
                                        <>
                                            <div className='data-list' onClick={() => setCityName (cities.name)}>
                                                <p className='text-data-list'>{cities.name} - {cities.state_code}</p>
                                                <p className='state-city'>Estado em {cities.state_name}</p>
                                            </div>
                                        </>
                                    )
                                })}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home

