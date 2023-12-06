import React from 'react'
import './Rearbox.css'

sessionStorage.setItem('namerearbox', 'Mat Black');
sessionStorage.setItem('costrearbox', 0);

function Rearbox({ calcost }) {
  function clickrearbox(n, c) {
    switch (n) {
      case 'Mat Black':
        document.getElementById('rearbox-1').style.outline = "#aa0000 solid 2px";
        document.getElementById('rearbox-2').style.outline = "none";
        document.getElementById('content-img').style.background = "url('img-custom/boxback/boxback-black.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
      case 'Gross White':
        document.getElementById('rearbox-1').style.outline = "none";
        document.getElementById('rearbox-2').style.outline = "#aa0000 solid 2px";
        document.getElementById('content-img').style.background = "url('img-custom/boxback/boxback-white.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
    }
    sessionStorage.setItem('namerearbox', n);
    sessionStorage.setItem('costrearbox', c);
    calcost();
  }
  return (
    <div className='rearbox'>
      <h2>Rear Box</h2>
      <div className='rearbox-group'>
        <div className='rearbox-group-n' onClick={() => clickrearbox('Mat Black', 0)}>
          <div className='rearbox-group-1' id='rearbox-1'></div>
          <h3>Mat Black</h3>
        </div>
        <div className='rearbox-group-n' onClick={() => clickrearbox('Gross White', 0)}>
          <div className='rearbox-group-2' id='rearbox-2'></div>
          <h3>Gross White</h3></div>
      </div>
    </div>
  )
}

export default Rearbox
