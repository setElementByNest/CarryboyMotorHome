import React from 'react'
import './Reartype.css'

sessionStorage.setItem('namereartype', 'Counter');
sessionStorage.setItem('costreartype', 0);

function Reartype({ calcost }) {
    function clickreartype(n, c) {
        switch (n) {
            case 'Counter':
                document.getElementById('reartype-1').style.background = '#ffffff';
                document.getElementById('reartype-2').style.background = 'none';
                document.getElementById('reartype-1').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('reartype-2').style.boxShadow = 'none';
                document.getElementById('content-img').style.background = "url('img-custom/interior/int_03.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 'Wardrobe':
                document.getElementById('reartype-1').style.background = 'none';
                document.getElementById('reartype-2').style.background = '#ffffff';
                document.getElementById('reartype-1').style.boxShadow = 'none';
                document.getElementById('reartype-2').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('content-img').style.background = "url('img-custom/interior/int_04.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
        sessionStorage.setItem('namereartype', n);
        sessionStorage.setItem('costreartype', c);
        calcost();
    }
    return (
        <div className='reartype'>
            <h2>Rear Type</h2>
            <div className='reartype-group'>
                <h3 id='reartype-1' onClick={() => { clickreartype('Counter', 0) }}>Counter</h3>
                <h3 id='reartype-2' onClick={() => { clickreartype('Wardrobe', 0) }}>Wardrobe</h3>
            </div>
        </div>
    )
}

export default Reartype
