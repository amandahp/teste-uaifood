import React from 'react'
import LogoWhite from '../../utils/img/logo/logowhite/logo-white.jpg'
import SearchBar from '../../components/search-bar/searchbar'
import './home.scss'


const Home = () => {

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
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home