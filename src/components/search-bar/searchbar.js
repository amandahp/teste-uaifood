import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './searchbar.scss'

const SearchBar = () => {
    const iconMapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} className='icon-marker' />
    return (
        <form className="form-search" method="get" action="#">
            <div class="content">
              <div class="search">
                <input type="text" class="search__input" aria-label="search" placeholder="Digite sua cidade" />
                <button class="search__btn"><i className="search_icon">{iconMapMarker}</i></button>
              </div>
            </div>
            <button type="submit" className='buscar-button'>BUSCAR</button>            
        </form>
    )


}

export default SearchBar