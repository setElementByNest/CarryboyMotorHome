import React from "react";
import './Footer.css'


function qimg_click() {
    window.open('https://line.me/R/ti/p/%40127eomim')
}
function Footer() {
    return (
        <section className="footer">
            <div className="footermain">
                <div className="costomer">
                    <div className="costomer_1">
                        <h2>ภาพส่งมอบรถบ้าน</h2>
                    </div>
                    <div className="costomer_2_div">
                        <div className="costomer_2" id="costomer_2">
                            <div className="cosimg cos01"></div>
                            <div className="cosimg cos02"></div>
                            <div className="cosimg cos03"></div>
                            <div className="cosimg cos04"></div>
                            <div className="cosimg cos05"></div>
                            <div className="cosimg cos06"></div>
                            <div className="cosimg cos07"></div>
                            <div className="cosimg cos08"></div>
                        </div>
                    </div>
                    <div className="costomer_3">
                        <div className="cospage" id="cospage01"></div>
                        <div className="cospage" id="cospage02"></div>
                        <div className="cospage" id="cospage03"></div>
                        <div className="cospage" id="cospage04"></div>
                        <div className="cospage" id="cospage05"></div>
                    </div>
                </div>
                <div className="realfoot">
                    <div className="foot_1">
                        <div className="foot_1A">
                            <h2>Contact</h2>
                            <h3 style={{ fontWeight: '400' }}>บริษัท แครี่บอย มาร์เก็ตติ้ง จำกัด (แกรนด์ แครี่บอย)</h3>
                            <h4>26/12 หมู่ที่ 7 ถ.บางนา-ตราด กม.8 (ขาออก) ตรงข้าม เมกา บางนา ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540</h4>
                            <h3 style={{ marginRight: '25px' }}>Tel : <a href="tel:02-752-8585" ><u style={{ cursor: 'pointer', color: '#aaaaaa' }}>02-752-8585</u></a></h3>
                            <h3 style={{ marginRight: '25px' }}>Email : <a href="mailto:grand@carryboy.com?subject=ติดต่อสอบถามจากลูกค้าMotorHome"><u style={{ cursor: 'pointer', color: '#aaaaaa' }}>grand@carryboy.com</u></a></h3>
                            <h3>Line id : <a href="https://line.me/R/ti/p/%40127eomim" target="_blank" ><u style={{ cursor: 'pointer', color: '#aaaaaa' }}>@cargobox</u></a></h3>
                            <div style={{ display: 'flex', flexDirection: 'row', height: '30px', width: '100%' }}>
                                <a href="https://www.facebook.com/CarryboyClub/" target="_blank" className="logocontact" >
                                    <div>
                                        <img src="/img_index/icon_contact_facebook.png" alt="" width={25} height={25} />
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/user/CARRYBOYONLINE" target="_blank" className="logocontact" >
                                    <div>
                                        <img src="/img_index/icon_contact_youtube.png" alt="" width={25} height={25} />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/carryboy_official_thailand/" target="_blank" className="logocontact" >
                                    <div>
                                        <img src="/img_index/icon_contact_instagram.png" alt="" width={25} height={25} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="foot_1B">
                            <img src="/img_index/M_127eomim_GW.png" alt="" className="qrline_img" onClick={qimg_click} />
                        </div>
                    </div>
                    <div className="foot_2">
                        <div className="foot_2A">
                            <div className="foot_2A_Logo"></div>
                            <div>CARRYBOY MOTORHOME</div>
                        </div>
                        <div className="foot_2B">
                            <div>© T.K.D FIBER CO.,LTD 2023. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer