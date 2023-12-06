import React from 'react'
import './Listrv.css'

function Listrv() {
    return (
        <div className='listrv'>
            <div className='listrv-total'>
                <h3>Total Price</h3>
                <h4 id='list-cost-total'>--</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-vehical'>-- : -</h3>
                <h4 id='list-cost-vehical'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-laminate'>Laminate : -</h3>
                <h4 id='list-cost-laminate'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-rtp'>Rear Type : -</h3>
                <h4 id='list-cost-rtp'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-air'>Air Condition : -</h3>
                <h4 id='list-cost-air'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-bat'>Battery : -</h3>
                <h4 id='list-cost-bat'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-gen'>Generator : -</h3>
                <h4 id='list-cost-gen'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-rbx'>Rear Box : -</h3>
                <h4 id='list-cost-rbx'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-kit'>Slide Kitchen : -</h3>
                <h4 id='list-cost-kit'>-</h4>
            </div>
            <div className='listrv-n'>
                <h3 id='list-name-sus'>Suspension : -</h3>
                <h4 id='list-cost-sus'>-</h4>
            </div>

        </div>
    )
}

export default Listrv
