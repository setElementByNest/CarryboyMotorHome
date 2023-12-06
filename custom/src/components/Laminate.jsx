import React from 'react'
import './Laminate.css'

sessionStorage.setItem('namelaminate', 'Lite');
sessionStorage.setItem('costlaminate', 0);

function Laminate({calcost}) {
  function clicklaminate(n, c) {
    switch (n) {
      case 'Lite':
        document.getElementById('laminate-1').style.outline = "#aa0000 solid 2px";
        document.getElementById('laminate-2').style.outline = "none";
        document.getElementById('content-img').style.background = "url('img-custom/interior/int_01.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
      case 'Classic':
        document.getElementById('laminate-2').style.outline = "#aa0000 solid 2px";
        document.getElementById('laminate-1').style.outline = "none";
        document.getElementById('content-img').style.background = "url('img-custom/interior/int_02.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
    }
    sessionStorage.setItem('namelaminate', n);
    sessionStorage.setItem('costlaminate', c);
    calcost();
  }
  return (
    <div className='laminate'>
      <h2>Laminate</h2>
      <div className='laminate-group'>
        <div className='laminate-group-n' onClick={() => clicklaminate('Lite', 0)}>
          <div className='laminate-group-1' id='laminate-1'></div>
          <h3>Lite</h3>
        </div>
        <div className='laminate-group-n' onClick={() => clicklaminate('Classic', 0)}>
          <div className='laminate-group-2' id='laminate-2'></div>
          <h3>Classic</h3></div>
      </div>
    </div>
  )
}

export default Laminate
