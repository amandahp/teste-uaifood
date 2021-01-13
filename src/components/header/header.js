import React from 'react'
import SearchBar from '../search-bar/searchbar'
import LogoRed from '../../utils/img/logo/logored/logo-red.jpg'
import './header.scss'

const Header = ({banana}) => {

    return(
        <div className="grid-container-header">
          <div className="logo-red">
              <img alt='logo-red' className='image-logo-red'src={LogoRed}></img>
          </div>
          <div class="side-bar-search">
              <SearchBar  />
          </div>
        </div>
    )
}

export default Header