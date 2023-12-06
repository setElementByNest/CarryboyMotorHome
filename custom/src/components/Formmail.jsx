import React from 'react'
import './Formmail.css'

function Formmail({ numtostr }) {
  function sendMail() {
    var params = {
      name: document.getElementById("input-finance-name").value + " " + document.getElementById("input-finance-lastname").value,
      call: document.getElementById("input-finance-phone").value,
      email: document.getElementById("input-finance-email").value,
      brand: sessionStorage.getItem("namebrand"),
      vihicle: sessionStorage.getItem("namevehicle"),
      vihicle_cst: numtostr(sessionStorage.getItem("costvehicle")),
      laminate: sessionStorage.getItem("namelaminate"),
      laminate_cst: numtostr(sessionStorage.getItem("costlaminate")),
      reartype: sessionStorage.getItem("namereartype"),
      reartype_cst: numtostr(sessionStorage.getItem("costreartype")),
      air: sessionStorage.getItem("nameair"),
      air_cst: numtostr(sessionStorage.getItem("costair")),
      bat: sessionStorage.getItem("namebat"),
      bat_cst: numtostr(sessionStorage.getItem("costbat")),
      gen: sessionStorage.getItem("namegen"),
      gen_cst: numtostr(sessionStorage.getItem("costgen")),
      rearbox: sessionStorage.getItem("namerearbox"),
      rearbox_cst: numtostr(sessionStorage.getItem("costrearbox")),
      /*solar: sessionStorage.getItem("nmesolar"),
      solar_cst: numtostr(sessionStorage.getItem("cstsolar")),*/
      kitch: sessionStorage.getItem("namekitchen"),
      kitch_cst: numtostr(sessionStorage.getItem("costkitchen")),
      sus: sessionStorage.getItem("namesus"),
      sus_cst: numtostr(sessionStorage.getItem("costsus")),
      financetype: sessionStorage.getItem("financetype"),
      loan: sessionStorage.getItem("loan"),
      pricebfdis: document.getElementById('finance-namecost-before').innerHTML,
      discount: document.getElementById('finance-namecost-discount').innerHTML,
      seller: sessionStorage.getItem("seller"),
      sumbill: document.getElementById('finance-namecost-after').innerHTML
    };
    const serviceID = "service_9o2vh53";
    const templateID = "template_caamphj";
    document.getElementById('formmail-button').style.background = '#5eb160';
    document.getElementById('formmail-button').innerHTML = 'Sent';
    setTimeout(() => { window.location.reload() }, 2000);
    emailjs
      .send(serviceID, templateID, params)
      .then()
      .catch((err) => console.log(err));
  }
  return (
    <div className='formmail'>
      <h3>First Name</h3>
      <input type="text" name="name" id="input-finance-name" />
      <h3>Last Name</h3>
      <input type="text" name="lastname" id="input-finance-lastname" />
      <h3>Phone</h3>
      <input type="tel" name="phone" id="input-finance-phone" />
      <h3>E-mail</h3>
      <input type="email" name="email" id="input-finance-email" />
      <h4>We will send the your rv design to Carryboy's seller and you follow your contact information above after you press order request button below. </h4>
      <div className='formmail-button' onClick={sendMail} id='formmail-button'>Order request</div>
    </div>
  )
}

export default Formmail
