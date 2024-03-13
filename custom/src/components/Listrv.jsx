import React from 'react'
import './Listrv.css'

function Listrv({ numtostr, allData, allPrice }) {
    return (
        <div className='listrv'>
            <div className='listrv-total'>
                <h3>Total Price</h3>
                <h4 id='list-cost-total'>{
                    numtostr(allPrice.model + allPrice.laminate + allPrice.reartype + allPrice.aircon + allPrice.battery + allPrice.powergen + allPrice.rearbox + allPrice.kitchen + allPrice.suspension)
                }</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-vehical'>{allData.brand} <br /> {allData.model}</h3>
                <h4 id='list-cost-vehical'>{numtostr(allPrice.model)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-laminate'>Laminate : {allData.laminate}</h3>
                <h4 id='list-cost-laminate'>{numtostr(allPrice.laminate)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-rtp'>Rear Type : {allData.reartype}</h3>
                <h4 id='list-cost-rtp'>{numtostr(allPrice.reartype)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-air'>Air Condition : {allData.aircon}</h3>
                <h4 id='list-cost-air'>{numtostr(allPrice.aircon)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-bat'>Battery : {allData.battery}</h3>
                <h4 id='list-cost-bat'>{numtostr(allPrice.battery)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-gen'>Generator : {allData.powergen}</h3>
                <h4 id='list-cost-gen'>{numtostr(allPrice.powergen)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-rbx'>Rear Box : {allData.rearbox}</h3>
                <h4 id='list-cost-rbx'>{numtostr(allPrice.rearbox)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-kit'>Slide Kitchen : {allData.kitchen}</h3>
                <h4 id='list-cost-kit'>{numtostr(allPrice.kitchen)}</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-sus'>Suspension : {allData.suspension}</h3>
                <h4 id='list-cost-sus'>{numtostr(allPrice.suspension)}</h4>
            </div>

        </div>
    )
}

export default Listrv
