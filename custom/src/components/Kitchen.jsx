import React from 'react'
import './Kitchen.css'

sessionStorage.setItem('namekitchen', 'No');
sessionStorage.setItem('costkitchen', 0);

function Kitchen({ calcost }) {
    function clickkitchen(n, c) {
        switch (n) {
            case 'Yes':
                document.getElementById('kitchen-button-yes').style.display = "none";
                document.getElementById('kitchen-button-no').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/kitchen/draft_1_1.png') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 'No':
                document.getElementById('kitchen-button-no').style.display = "none";
                document.getElementById('kitchen-button-yes').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/kitchen/draft_1_2.png') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
        sessionStorage.setItem('namekitchen', n);
        sessionStorage.setItem('costkitchen', c);
        calcost();
    }
    return (
        <div className='kitchen'>
            <h2>Slide Kitchen</h2>
            <h3>+ 45,000 THB</h3>
            <div id='kitchen-button-yes' className='kitchen-button-yes' onClick={() => clickkitchen('Yes', 45000)}>Add</div>
            <div id='kitchen-button-no' className='kitchen-button-no' onClick={() => clickkitchen('No', 0)}>Remove</div>
        </div>
    )
}

export default Kitchen
