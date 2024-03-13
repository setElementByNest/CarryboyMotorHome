import React from 'react'
import './Laminate.css'

function Laminate({ numtostr, setAllData, setAllPrice, includePrice }) {
  const laminatePrice = [Number(includePrice.LITE), Number(includePrice.CLASSIC)];
  const laminateName = ['Lite', 'Classic'];
  function clicklaminate(x) {
    setAllData(prevState => ({...prevState, laminate: laminateName[x]}));
    setAllPrice(prevState => ({...prevState, laminate: laminatePrice[x]}));
    switch (x) {
      case 0:
        document.getElementById('laminate-1').style.outline = "#aa0000 solid 2px";
        document.getElementById('laminate-2').style.outline = "none";
        document.getElementById('content-img').style.background = "url('img-custom/interior/int_01.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
      case 1:
        document.getElementById('laminate-2').style.outline = "#aa0000 solid 2px";
        document.getElementById('laminate-1').style.outline = "none";
        document.getElementById('content-img').style.background = "url('img-custom/interior/int_02.jpg') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        break
    }
  }
  return (
    <div className='laminate'>
      <h2>Laminate</h2>
      <div className='laminate-group'>
        <div className='laminate-group-n' onClick={() => clicklaminate(0)}>
          <div className='laminate-group-1' id='laminate-1'></div>
          <h3>{laminateName[0]}</h3>
        </div>
        <div className='laminate-group-n' onClick={() => clicklaminate(1)}>
          <div className='laminate-group-2' id='laminate-2'></div>
          <h3>{laminateName[1]}</h3></div>
      </div>
    </div>
  )
}

export default Laminate
