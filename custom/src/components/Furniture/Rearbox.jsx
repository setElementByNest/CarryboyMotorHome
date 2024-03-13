import React from 'react'
import './Rearbox.css'

function Rearbox({ numtostr, setAllData, setAllPrice, includePrice }) {
  const rearboxPrice = [Number(includePrice.BLACK), Number(includePrice.WHITE)];
  const rearboxName = ['Mat Black', 'Gross White'];
  function clickrearbox(x) {
    setAllData(prevState => ({...prevState, rearbox: rearboxName[x]}));
    setAllPrice(prevState => ({...prevState, rearbox: rearboxPrice[x]}));
    switch (x) {
      case 0:
        document.getElementById('rearbox-1').style.outline = "#aa0000 solid 2px";
        document.getElementById('rearbox-2').style.outline = "none";
        document.getElementById('content-img').style.background = "url('img-custom/boxback/boxback-black.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
      case 1:
        document.getElementById('rearbox-1').style.outline = "none";
        document.getElementById('rearbox-2').style.outline = "#aa0000 solid 2px";
        document.getElementById('content-img').style.background = "url('img-custom/boxback/boxback-white.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
    }
  }
  return (
    <div className='rearbox'>
      <h2>Rear Box</h2>
      <div className='rearbox-group'>
        <div className='rearbox-group-n' onClick={() => clickrearbox(0)}>
          <div className='rearbox-group-1' id='rearbox-1'></div>
          <h3>{rearboxName[0]}</h3>
        </div>
        <div className='rearbox-group-n' onClick={() => clickrearbox(1)}>
          <div className='rearbox-group-2' id='rearbox-2'></div>
          <h3>{rearboxName[1]}</h3></div>
      </div>
    </div>
  )
}

export default Rearbox
