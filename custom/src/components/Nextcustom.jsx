import React from 'react'
import './Nextcustom.css'

function Nextcustom({ calcost, numtostr, getdata }) {
  function bill() {
    let pricebfdis = calcost();
    let namefile = 'img-custom/pay-toyota.jpg';
    getdata();
    if (sessionStorage.getItem('namebrand') == 'MITSUBISHI TRITON') {
      namefile = 'img-custom/pay-mitsu.jpg';
    }
    if (sessionStorage.getItem('namebrand') == 'TOYOTA HILUX CHAMP') {
      namefile = 'img-custom/Vehicle_rv_toyota_champ.jpg';
    }
    document.getElementById('content-img').style.background = "url('" + namefile + "') center center no-repeat";
    document.getElementById('content-img').style.backgroundSize = "cover";
    sessionStorage.setItem('discount', '0');
    sessionStorage.setItem('priceafterdis', pricebfdis);
    document.getElementById('finance-switch-1').style.background = '#ffffff';
    document.getElementById('finance-switch-1').style.boxShadow = '0px 1px 4px 2px #00000022';
    document.getElementById('finance-switch-2').style.background = 'none';
    document.getElementById('finance-switch-2').style.boxShadow = 'none';
    document.getElementById('loan').style.display = 'none';
    document.getElementById('finance-namecost-discount').innerHTML = '-';
    document.getElementById('finance-namecost-after').innerHTML = numtostr(calcost());
    sessionStorage.setItem('financetype', 'Cash');

  }
  return (
    <div className='nextcustom' id='nextcustom'>
      <h1>Order Your RV</h1>
      <h4>Continue to check list your RV design and finance options and send your RV design to Carryboy's seller</h4>
      <a href='#content-payment' className='nextcustom-button' id='nextcustom-button' onClick={() => { bill(); document.getElementById('labelcost').style.opacity = '0';}}>Continue</a>
    </div>
  )
}

export default Nextcustom
