import React from 'react'
import './Costlabel.css'

function Costlabel() {
    return (
        <div className='costlabel' id='labelcost' onClick={() => document.getElementById('contentcustom').scrollTo(0, document.getElementById('contentcustom').scrollHeight)}>
            <h3>Price before savings : </h3>
            <h3 id='costlabel'>2,003,000 THB</h3>
            <div className="costlabel-up material-icons">&#xe5ce;</div>
        </div>
    )
}

export default Costlabel
