import React from 'react'
import './cardfilter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const CardFilter = () => {
    const iconStar = <FontAwesomeIcon icon={faStar} classNameName='icon-star' />

    return(
        <>
            <div className="grid-container-cardfilter">
                <div className="card-rating-price-type">
                    <div className="card-rating-types-">
                        <p><strong className='title-card' >NOTA</strong></p>
                        <form className='jsonourstring-card'>
                          <label ><input className='checkbox' type="checkbox"  value={false}  />{iconStar}</label><br/>
                          <label><input className='checkbox' type="checkbox"  value={false} />{iconStar}{iconStar}</label><br/> 
                          <label className='checkbox'><input type="checkbox" value={false} />{iconStar}{iconStar}{iconStar}</label><br/>                     
                          <label><input type="checkbox"  value={false}  />{iconStar}{iconStar}{iconStar}{iconStar}</label><br/>
                          <label><input type="checkbox"  value={false} />{iconStar}{iconStar}{iconStar}{iconStar}{iconStar}</label><br/>  
                        </form>
                        <p><strong className='title-card'>CUSTO PARA 2 PESSOAS</strong></p>
                        <form className='jsonourstring-card'>
                          <label><input type="checkbox"  value={false}  /> Até R$50</label><br/>
                          <label><input type="checkbox"  value={false}  /> De R$50 a R$80 </label><br/>
                          <label><input type="checkbox"  value={false}  /> De R$80 a R$110</label><br/> 
                          <label><input type="checkbox" value={false}  /> Acima de R$110</label><br/>
                        </form>  
                        <p><strong className='title-card'>TIPO DE COZINHA</strong></p>
                        <form className='jsonourstring-card'>
                          <div><input type="checkbox"  value={false} /> Árabe</div>
                          <div><input type="checkbox"  value={false} /> Brasileira</div>
                          <div><input type="checkbox"  value={false}  /> Chinesa</div>
                          <div><input type="checkbox"  value={false}  /> Francesa</div>
                          <div><input type="checkbox" value={false}  /> Frutos do Mar </div>
                          <label><input type="checkbox"  value={false}  /> Italiana</label>    
                          <div><input type="checkbox" value={false}  /> Japonesa</div>
                          <div><input type="checkbox"  value={false}  /> Mexicana</div>
                          <div><input type="checkbox"  value={false}  /> Peruana</div>                 
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFilter