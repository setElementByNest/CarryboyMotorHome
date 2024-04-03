import React from "react";
import BuildyourrvButton from "../MyButton";
import './Banner.css'
let now_page = 1;
let pointdown = 0;
setInterval(() => {
    now_page++
    if (now_page > 4) {
        now_page = 1;
    }
    nowpage();
}, 60000)


function nowpage() {
    switch (now_page) {
        case 1:
            document.getElementById('section_seen1').style.transform = 'translate(-0%, 0)';
            document.getElementById('pageli1').style.background = '#aa0000';
            document.getElementById('pageli2').style.background = '#ffffff';
            document.getElementById('pageli3').style.background = '#ffffff';
            document.getElementById('pageli4').style.background = '#ffffff';
            break;
        case 2:
            document.getElementById('section_seen1').style.transform = 'translate(-25%, 0)';
            document.getElementById('pageli1').style.background = '#ffffff';
            document.getElementById('pageli2').style.background = '#aa0000';
            document.getElementById('pageli3').style.background = '#ffffff';
            document.getElementById('pageli4').style.background = '#ffffff';
            break;
        case 3:
            document.getElementById('section_seen1').style.transform = 'translate(-50%, 0)';
            document.getElementById('pageli1').style.background = '#ffffff';
            document.getElementById('pageli2').style.background = '#ffffff';
            document.getElementById('pageli3').style.background = '#aa0000';
            document.getElementById('pageli4').style.background = '#ffffff';
            break;
        case 4:
            document.getElementById('section_seen1').style.transform = 'translate(-75%, 0)';
            document.getElementById('pageli1').style.background = '#ffffff';
            document.getElementById('pageli2').style.background = '#ffffff';
            document.getElementById('pageli3').style.background = '#ffffff';
            document.getElementById('pageli4').style.background = '#aa0000';
            break;
    }
}
function HeaderImg() {
    return (
        <section>
            <div className="section_seen1" id="section_seen1" onPointerDown={function (e) {
                pointdown = e.clientX;
                const w = document.getElementById('section_seen1')
                w.addEventListener('pointermove', function (e) {
                    if (pointdown != 0) {
                        if (pointdown < e.clientX - 5) {
                            now_page--
                            if (now_page < 1) {
                                now_page = 1;
                            }
                            nowpage();
                            console.log(now_page)
                            pointdown = 0;
                        }
                        if (pointdown > e.clientX + 5) {
                            now_page++
                            if (now_page > 4) {
                                now_page = 4;
                            }
                            nowpage();
                            console.log(now_page)
                            pointdown = 0;
                        }
                    }
                })
            }}
                onPointerUp={function () {
                    pointdown = 0;
                }}
                /*onPointerMove={function (e) {
                    if (pointdown != 0) {
                        if (pointdown < e.clientX - 50) {
                            now_page--
                            if (now_page < 1) {
                                now_page = 1;
                            }
                            nowpage();
                            console.log(now_page)
                            pointdown = 0;
                        }
                        if (pointdown > e.clientX + 50) {
                            now_page++
                            if (now_page > 4) {
                                now_page = 4;
                            }
                            nowpage();
                            console.log(now_page)
                            pointdown = 0;
                        }
                    }
                }}*/>
                <div className='seen1 q4'>
                    <div className='detail'>
                        <img src="/img_index/logo.png" alt="motorhome_logo" width={150} />
                        <h1>MotorHome</h1>
                        <h2>It's all about life style</h2>
                        <BuildyourrvButton />
                    </div>
                </div>
                <div className='seen1 q1'>
                    <div className='detail'>
                        <img src="/img_index/logo.png" alt="motorhome_logo" width={150} />
                        <h1>รถบ้านแครี่บอย</h1>
                        <h2>Life is definitely good with Motor Home</h2>
                        <BuildyourrvButton />
                    </div>
                </div>
                <div className='seen1 q2'>
                    <div className='detail'>
                        <img src="/img_index/logo.png" alt="motorhome_logo" width={150} />
                        <h1>Recreational Vehicle</h1>
                        <BuildyourrvButton />
                    </div>
                </div>
                <div className='seen1 q3'>
                    <div className='detail'>
                        <img src="/img_index/logo.png" alt="motorhome_logo" width={150} />
                        <h1>INTERIOR</h1>
                        <h2 style={{transform: 'translate(0, -10px)'}}>ภายในหรูหรา พร้อมสิ่งอำนวย<br/>ความสะดวกครบครัน</h2>
                        <BuildyourrvButton />
                    </div>
                </div>
            </div>
            <div className="pagenum">
                <div className="li" id="pageli1" onClick={function () {
                    now_page = 1;
                    nowpage()
                }}
                style={{background: '#aa0000'}}></div>
                <div className="li" id="pageli2" onClick={function () {
                    now_page = 2;
                    nowpage()
                }}></div>
                <div className="li" id="pageli3" onClick={function () {
                    now_page = 3;
                    nowpage()
                }}></div>
                <div className="li" id="pageli4" onClick={function () {
                    now_page = 4;
                    nowpage()
                }}></div>
            </div>
        </section>
    )
}

export default HeaderImg