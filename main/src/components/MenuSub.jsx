import React from "react";
import './MenuSub.css'

function MenuSub() {
    return (
        <div className='zone2'>
            <div className='nemu1' onClick={function () {
                document.getElementById('pop1').style.display = 'flex';
                document.getElementById('blurback').style.display = 'flex'
            }}>
                <img src="/img_index/icon_menu_calculator.png" alt="" height={50} />
                <div className='nemu_p'>
                    <h3>คำนวณค่างวดรถ</h3>
                    <h3>Calculate Installment</h3>
                </div>
            </div>
            <div className='nemu2' onClick={function () {
                document.getElementById('pop2').style.display = 'flex';
                document.getElementById('blurback').style.display = 'flex'
            }}>
                <img src="/img_index/icon_menu_size.png" alt="" height={45} />
                <div className='nemu_p'>
                    <h3>ขนาดและมิติ</h3>
                    <h3>Size & Dimension</h3></div>
            </div>
            <div className='nemu3' onClick={function () {
                document.getElementById('pop3').style.display = 'flex';
                document.getElementById('blurback').style.display = 'flex'
            }}>
                <img src="/img_index/icon_menu_plan.png" alt="" height={50} />
                <div className='nemu_p'>
                    <h3>แผนผังชั้น</h3>
                    <h3>Floor plans</h3>
                </div>
            </div>
            <a className='nemu4' title="VideoPage" href='https://carryboymotorhome.com/videopage.html'>
                <img src="/img_index/icon_menu_clip.png" alt="" height={50} />
                <div className='nemu_p'>
                    <h3>รีวิวและการบรรยาย</h3>
                    <h3>Video Presentation</h3>
                </div>
            </a>
            <a className='nemu5' title="Contact" href='https://carryboymotorhome.com/contact.html'>
                <img src="/img_index/icon_menu_messages.png" alt="" height={50} />
                <div className='nemu_p'>
                    <h3>ติดต่อฝ่ายขาย</h3>
                    <h3>E-mail to sales team</h3>
                </div>
            </a>
        </div>
    )
}

export default MenuSub