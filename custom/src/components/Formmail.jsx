import React, { useState } from 'react'
import './Formmail.css'

function Formmail({ numtostr, setAllData, allData, allPrice, sentToFirebase }) {
  const [boolSent, setBoolSent] = useState(false);
  function sendMail() {
    var params = {
      id: allData.id,
      name: allData.name + " " + allData.lastname,
      call: allData.phone,
      email: allData.email,
      brand: allData.brand,
      vihicle: allData.model,
      vihicle_cst: numtostr(allPrice.model),
      laminate: allData.laminate,
      laminate_cst: numtostr(allPrice.laminate),
      reartype: allData.reartype,
      reartype_cst: numtostr(allPrice.reartype),
      air: allData.aircon,
      air_cst: numtostr(allPrice.aircon),
      bat: allData.battery,
      bat_cst: numtostr(allPrice.battery),
      gen: allData.powergen,
      gen_cst: numtostr(allPrice.powergen),
      rearbox: allData.rearbox,
      rearbox_cst: numtostr(allPrice.rearbox),
      kitch: allData.kitchen,
      kitch_cst: numtostr(allPrice.kitchen),
      sus: allData.suspension,
      sus_cst: numtostr(allPrice.suspension),
      financetype: allData.finance,
      sumbill: numtostr((allPrice.model + allPrice.laminate + allPrice.reartype + allPrice.aircon + allPrice.battery + allPrice.powergen + allPrice.rearbox + allPrice.kitchen + allPrice.suspension))
    };
    const serviceID = "service_9o2vh53";
    const templateID = "template_caamphj";
    const idfiilboxlist = ["input-finance-name", "input-finance-lastname", "input-finance-phone", "input-finance-email"]
    if (params.name == " " || params.call == "" || params.email == "") {
      console.log("fail?");
      for (let i = 0; i < 4; i++) {
        if (document.getElementById(idfiilboxlist[i]).value == "") {
          document.getElementById(idfiilboxlist[i]).style.outline = "#aa0000ff solid 2px";
          setTimeout(() => {
            document.getElementById(idfiilboxlist[i]).style.outline = "#aa000000 solid 2px";
          }, 1000);
        }
      }
    } else {
      console.log("sent!");
      document.getElementById("formmail-button").style.background = "#4dab53";
      document.getElementById("formmail-button").innerHTML = "Order sent";
      for (let i = 0; i < 4; i++) {
        document.getElementById(idfiilboxlist[i]).style.background = "#5dbb6366";
      }
      setBoolSent(true);
      sentToFirebase();
      /*document.getElementById('formmail-button').style.background = '#5eb160';
      document.getElementById('formmail-button').innerHTML = 'Sent';
      setTimeout(() => { window.location.reload() }, 2000);*/
      emailjs
        .send(serviceID, templateID, params)
        .then()
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className='formmail'>
      <h3>First Name</h3>
      <input type="text" name="name" id="input-finance-name" onChange={(e) => { setAllData((prev) => ({ ...prev, name: e.target.value })) }} />
      <h3>Last Name</h3>
      <input type="text" name="lastname" id="input-finance-lastname" onChange={(e) => { setAllData((prev) => ({ ...prev, lastname: e.target.value })) }} />
      <h3>Phone</h3>
      <input type="tel" name="phone" id="input-finance-phone" onChange={(e) => { setAllData((prev) => ({ ...prev, phone: e.target.value })) }} />
      <h3>E-mail</h3>
      <input type="email" name="email" id="input-finance-email" onChange={(e) => { setAllData((prev) => ({ ...prev, email: e.target.value })) }} />
      <h4>We will send the your rv design to Carryboy's seller and you follow your contact information above after you press order request button below. </h4>
      <div className='formmail-button' onClick={() => {
        if (boolSent) {
          console.log("Sent");
        } else {
          sendMail();
        }}}
        id = 'formmail-button' > Order request</div>
    </div >
  )
}

export default Formmail
