import React, { useState, useEffect } from 'react'
import LogoWhite from '../../utils/img/logo/logowhite/logo-white.jpg'
import SearchBar from '../../components/search-bar/searchbar'
import { useDispatch, useSelector } from 'react-redux'
import { triggerGetZomatoCityName, triggerGetRestaurantsFromCity } from '../../redux/actions'
import { useHistory } from "react-router-dom";

import './home.scss'
import './homeresponsive.scss'


const Home = () => {

    const history = useHistory()
    const [selectedCityName, setselectedCityName] = useState('')
    const [selectedId, setSelectedId] = useState('')
    const [pageCityList, setPageCityList] = useState([])

    const dispatch = useDispatch()
    const cityList = useSelector(state => state.citylist)

    const handleSearchBar = (cityName) => {
        setselectedCityName(cityName)
        dispatch(triggerGetZomatoCityName(cityName))
    }

    const setCityName = (cityName, cityId) => {
        setselectedCityName(cityName)
        setSelectedId(cityId)
        setPageCityList([])
    }

    const handleClickCity = () => {
        dispatch(triggerGetRestaurantsFromCity(selectedCityName, selectedId))
        history.push('/restaurants-uaifood')
        // setselectedCityName(cityName)
        //alert('selected')
    }

    useEffect(() => {
        setPageCityList(cityList)

    },[cityList])

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
                            <SearchBar handleClick={handleClickCity} inputValue={selectedCityName} handleInputChange={handleSearchBar} />
                            <ul className='data-list-list'>
                                {pageCityList.map(cities => {
                                    return (
                                        <>
                                            <div className='data-list' onClick={() => setCityName(cities.name, cities.id)}>
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

