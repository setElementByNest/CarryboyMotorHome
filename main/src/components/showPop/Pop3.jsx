import React from "react";
import './Pop3.css'

function Pop3() {
    return (
        <section className='pop3' id='pop3'>
            <div className="fa fa-close" style={{
                background: 'none',
                border: 'none',
                fontSize: '25px',
                margin: '0 15px 0 0',
                cursor: 'pointer',
                color: '#000000'
            }}
                onClick={function () {
                    document.getElementById('pop3').style.display = 'none';
                    document.getElementById('blurback').style.display = 'none';
                }}/>
        </section>
    )
}

export default Pop3