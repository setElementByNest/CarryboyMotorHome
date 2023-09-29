import React from "react";
import './Sendbox.css'

function sending() {
    const serviceID = 'service_xw1419h';
    const templateID = 'template_a0rebef';
    let params = {
        name : document.getElementById("name").value,
        lastname : document.getElementById("lastname").value,
        mail : document.getElementById("mail").value,
        message : document.getElementById("message").value
    }
    console.log(params)
    emailjs
        .send(serviceID,templateID,params )
        .then(console.log('ok'))
        .catch((err) => console.log(err));
    document.getElementById("send_button").style.background = '#23c686';
    document.getElementById("buttonsign1").style.display = 'none';
    document.getElementById("buttonsign2").style.display = 'flex';
    document.getElementById("text_button_contact").innerHTML = 'Sent';
    document.getElementById("name").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("message").value = '';

    setTimeout(() => {location.reload()}, 1500)
}

function Sendbox() {
    return (
        <div className="Sendbox">
            <div className="box" id="form_contact">
                <div className="laput laput_50">
                    <label htmlFor="name">First Name :</label>
                    <input type="text" id="name" name="First Name" />
                </div>
                <div className="laput laput_50">
                    <label htmlFor="lastname">Last Name :</label>
                    <input type="text" id="lastname" name="Last Name" />
                </div>
                <div className="laput laput_100">
                    <label htmlFor="mail">E-mail :</label>
                    <input type="email" id="mail" name="E-mail" />
                </div>
                <div className="laput laput_100h">
                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="Message" style={{ resize: 'none' }}></textarea>
                </div>
                <div className="buttonbox">
                    <button type="submit" value="Submit" className="send_button"
                        id="send_button" onClick={sending}><i id="text_button_contact">Send</i><i className="fa fa-send-o" id="buttonsign1"></i><i className="fa fa-check" id="buttonsign2"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Sendbox