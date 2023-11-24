import React, { useState } from "react";
import './MenuSub.css'


function MenuSub() {
    const [menuclose, menucloseState] = useState("1");
    function closemenu() {
        let nemuclose_div = document.getElementById('nemuclose');
        let zone2_div = document.getElementById('zone2');
        let nemu1_div = document.getElementById('nemu1');
        let nemu2_div = document.getElementById('nemu2');
        let nemu3_div = document.getElementById('nemu3');
        let nemu4_div = document.getElementById('nemu4');
        let nemu5_div = document.getElementById('nemu5');
        console.log(nemu1_div.style.width);
        if(menuclose == '1'){
            nemuclose_div.style.background = "#444444";
            nemuclose_div.innerHTML = "&#xe5cd;"
            nemu1_div.style.transform = "translate(0, 0)";
            nemu2_div.style.transform = "translate(0, 0)";
            nemu3_div.style.transform = "translate(0, 0)";
            nemu4_div.style.transform = "translate(0, 0)";
            nemu5_div.style.transform = "translate(0, 0)";
            zone2_div.style.background = "#ffffff";
            zone2_div.style.width = 'fit-content';
            menucloseState('0');
        }else{
            nemuclose_div.style.background = "#cc0000";
            nemuclose_div.innerHTML = "&#xe5c3;"
            nemu1_div.style.transform = "translate(55vh, 0)";
            nemu2_div.style.transform = "translate(45vh, 0)";
            nemu3_div.style.transform = "translate(35vh, 0)";
            nemu4_div.style.transform = "translate(25vh, 0)";
            nemu5_div.style.transform = "translate(15vh, 0)";
            zone2_div.style.background = "#ffffff00";
            setTimeout(() => {zone2_div.style.width = '0'}, 500)
            menucloseState('1');
        }
    }
    return (
        <div className='zone2' id="zone2">
            <div className='nemu1' id="nemu1" onClick={function () {
                document.getElementById('pop1').style.display = 'flex';
                document.getElementById('blurback').style.display = 'flex'
            }}>
                <img src="/img_index/icon_menu_calculator.png" alt="" style={{height: '5vh'}} />
                <div className='nemu_p'>
                    <h3>คำนวณค่างวดรถ</h3>
                    <h3>Calculate Installment</h3>
                </div>
            </div>
            <div className='nemu2' id="nemu2" onClick={function () {
                document.getElementById('pop2').style.display = 'flex';
                document.getElementById('blurback').style.display = 'flex'
            }}>
                <img src="/img_index/icon_menu_size.png" alt="" style={{height: '5vh'}} />
                <div className='nemu_p'>
                    <h3>ขนาดและมิติ</h3>
                    <h3>Size & Dimension</h3></div>
            </div>
            <div className='nemu3' id="nemu3" onClick={function () {
                document.getElementById('pop3').style.display = 'flex';
                document.getElementById('blurback').style.display = 'flex'
            }}>
                <img src="/img_index/icon_menu_plan.png" alt="" style={{height: '5vh'}} />
                <div className='nemu_p'>
                    <h3>แผนผังชั้น</h3>
                    <h3>Floor plans</h3>
                </div>
            </div>
            <a className='nemu4' id="nemu4" title="VideoPage" href='https://carryboymotorhome.com/videopage.html'>
                <img src="/img_index/icon_menu_clip.png" alt="" style={{height: '5vh'}} />
                <div className='nemu_p'>
                    <h3>รีวิวและการบรรยาย</h3>
                    <h3>Video Presentation</h3>
                </div>
            </a>
            <a className='nemu5' id="nemu5" title="Contact" href='https://carryboymotorhome.com/contact.html'>
                <img src="/img_index/icon_menu_messages.png" alt="" style={{height: '5vh'}} />
                <div className='nemu_p'>
                    <h3>ติดต่อฝ่ายขาย</h3>
                    <h3>E-mail to sales team</h3>
                </div>
            </a>
            <div className="nemuclose material-icons" id="nemuclose" onClick={closemenu}>&#xe5c3;</div>
        </div>
    )
}

export default MenuSub