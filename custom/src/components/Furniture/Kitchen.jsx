import React from 'react'
import './Kitchen.css'

function Kitchen({ numtostr, setAllData, setAllPrice, includePrice }) {
    const kitchenPrice = [Number(includePrice.KITYES), Number(includePrice.KITNO)];
    const kitchenName = ['Yes', 'No'];
    function clickkitchen(x) {
        setAllData(prevState => ({...prevState, kitchen: kitchenName[x]}));
        setAllPrice(prevState => ({...prevState, kitchen: kitchenPrice[x]}));
        switch (x) {
            case 0:
                document.getElementById('kitchen-button-yes').style.display = "none";
                document.getElementById('kitchen-button-no').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/kitchen/draft_1_1.png') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 1:
                document.getElementById('kitchen-button-no').style.display = "none";
                document.getElementById('kitchen-button-yes').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/kitchen/draft_1_2.png') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
    }
    return (
        <div className='kitchen'>
            <h2>Slide Kitchen</h2>
            <h3>+ {numtostr(kitchenPrice[0])}</h3>
            <div id='kitchen-button-yes' className='kitchen-button-yes' onClick={() => clickkitchen(0)}>Add</div>
            <div id='kitchen-button-no' className='kitchen-button-no' onClick={() => clickkitchen(1)}>Remove</div>
        </div>
    )
}

export default Kitchen
