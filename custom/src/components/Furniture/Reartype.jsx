import React from 'react'
import './Reartype.css'

function Reartype({ numtostr, setAllData, setAllPrice, includePrice }) {
    const reartypePrice = [Number(includePrice.COUNTER), Number(includePrice.WARDROBE)];
    const reartypeName = ['Counter', 'Wardrobe'];
    function clickreartype(x) {
        setAllData(prevState => ({ ...prevState, reartype: reartypeName[x] }));
        setAllPrice(prevState => ({ ...prevState, reartype: reartypePrice[x] }));
        switch (x) {
            case 0:
                document.getElementById('reartype-1').style.background = '#ffffff';
                document.getElementById('reartype-2').style.background = 'none';
                document.getElementById('reartype-1').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('reartype-2').style.boxShadow = 'none';
                document.getElementById('content-img').style.background = "url('img-custom/interior/int_03.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 1:
                document.getElementById('reartype-1').style.background = 'none';
                document.getElementById('reartype-2').style.background = '#ffffff';
                document.getElementById('reartype-1').style.boxShadow = 'none';
                document.getElementById('reartype-2').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('content-img').style.background = "url('img-custom/interior/int_04.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
    }
    return (
        <div className='reartype'>
            <h2>Rear Type</h2>
            <div className='reartype-group'>
                <h3 id='reartype-1' onClick={() => { clickreartype(0) }}>{reartypeName[0]}</h3>
                <h3 id='reartype-2' onClick={() => { clickreartype(1) }}>{reartypeName[1]}</h3>
            </div>
        </div>
    )
}

export default Reartype
