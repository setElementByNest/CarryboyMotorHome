import React from "react";
import './Pop2.css'

function Pop2() {
    return (
        <section className='pop2' id='pop2'>
            <div className="fa fa-close" style={{
                background: 'none',
                border: 'none',
                fontSize: '25px',
                margin: '0 15px 0 0',
                cursor: 'pointer',
                color: '#000000'
            }}
                onClick={function () {
                    document.getElementById('pop2').style.display = 'none';
                    document.getElementById('blurback').style.display = 'none';
                }}/>
        </section>
    )
}

export default Pop2