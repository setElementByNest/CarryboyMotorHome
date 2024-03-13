import React from 'react'
import './Nextcustom.css'

function Nextcustom({allData}) {
  function bill() {
    let namefile = 'img-custom/pay-toyota.jpg';
    let nowbrand = allData.brand;
    if (nowbrand == 'MITSUBISHI TRITON') {
      namefile = 'img-custom/pay-mitsu.jpg';
    }
    if (nowbrand == 'TOYOTA HILUX CHAMP') {
      namefile = 'img-custom/Vehicle_rv_toyota_champ.jpg';
    }
    document.getElementById('content-img').style.background = "url('" + namefile + "') center center no-repeat";
    document.getElementById('content-img').style.backgroundSize = "cover";
    document.getElementById('finance-switch-1').style.background = '#ffffff';
    document.getElementById('finance-switch-1').style.boxShadow = '0px 1px 4px 2px #00000022';
    document.getElementById('finance-switch-2').style.background = 'none';
    document.getElementById('finance-switch-2').style.boxShadow = 'none';
    document.getElementById('loan').style.display = 'none';
    document.getElementById('finance-namecost-discount').innerHTML = '-';
    document.getElementById('content-payment').style.top = 0;

  }
  return (
    <div className='nextcustom' id='nextcustom'>
      <h1>Order Your RV</h1>
      <h4>Continue to check list your RV design and finance options and send your RV design to Carryboy's seller</h4>
      <div className='nextcustom-button' id='nextcustom-button' onClick={() => { bill();}}>Continue</div>
    </div>
  )
}

export default Nextcustom
