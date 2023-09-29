import React from "react";
import Xpop1 from "./Xpop1";
import './Exterior_1.css'
var now_x = 1;
var max_x = 2;
function open_xpop1() {
    sessionStorage.setItem("img_now_x", 1);
    let list_name_back_1 = ['XPOP_1-1-1', 'XPOP_1-1-2']
    let list_name_back_2 = ['XPOP_1-2-1', 'XPOP_1-2-2']
    let list_name_back_3 = ['XPOP_1-3-1', 'XPOP_1-3-2']
    let list_name_back_4 = ['XPOP_1-4-1', 'XPOP_1-4-2']
    let list_name_back_5 = ['XPOP_1-5-1', 'XPOP_1-5-2']
    let list_name_back_6 = ['XPOP_1-6-1', 'XPOP_1-6-2']
    let list_name_front_1 = ['XPOP_2-1-1', 'XPOP_2-1-2']
    let list_name_front_2 = ['XPOP_2-2-1', 'XPOP_2-2-2']
    let list_name_front_3 = ['XPOP_2-3-1', 'XPOP_2-3-2']
    let list_name_front_4 = ['XPOP_2-4-1', 'XPOP_2-4-2']
    let list_name_front_5 = ['XPOP_2-5-1', 'XPOP_2-5-2']
    let list_name_front_6 = ['XPOP_2-6-1', 'XPOP_2-6-2']
    let list_name_1 = [list_name_front_1, list_name_front_2, list_name_front_3, list_name_front_4, list_name_front_5, list_name_front_6];
    let list_name_2 = [list_name_back_1, list_name_back_2, list_name_back_3, list_name_back_4, list_name_back_5, list_name_back_6];
    var exterior_num = sessionStorage.getItem("exterior_num");
    var exterior_page = sessionStorage.getItem("exterior_page");
    var name_file = "/img_index/xpop_" + exterior_page + "_" + exterior_num + "_" + "1.jpg"
    document.getElementById('xpop1').style = "background: url(" + name_file + ") no-repeat; background-size:  100% 100%; background-position: top center; object-fit: cover;";
    document.getElementById('xpop1').style.opacity = 1;
    document.getElementById('xpop1').style.left = '50%';
    document.getElementById('blurback_x').style.display = 'flex';
    if(exterior_page == '1'){
        document.getElementById('img_detail_x').innerHTML = list_name_1[exterior_num - 1][0]
    }
    else{
        document.getElementById('img_detail_x').innerHTML = list_name_2[exterior_num - 1][0]
    }
}
function chng_x_next() {
    now_x = now_x + 1;
    if (now_x > max_x) {
        now_x = 1;
    }
    document.getElementById('seen4').style = "background: url('/img_index/exterior_" + now_x + ".jpg') no-repeat; background-size:  cover; background-position: top center;";
}
function chng_x_prev() {
    now_x = now_x - 1;
    if (now_x == 0) {
        now_x = max_x;
    }
    document.getElementById('seen4').style = "background: url('/img_index/exterior_" + now_x + ".jpg') no-repeat; background-size:  cover; background-position: top center;";
}
function chng_x_mark() {
    switch(now_x){
        case 1:
            setTimeout(() => {
                document.getElementById('img_exterior').style.display = 'flex';
                document.getElementById('img_exterior_2').style.display = 'none';
            }, 200)
            setTimeout(() => {
                document.getElementById('img_exterior').style.opacity = '1';
            }, 250)
            document.getElementById('img_exterior_2').style.opacity = '0';

            document.getElementById('XF').style = 'border-top: #ffffffaa solid 7px';
            document.getElementById('XB').style = 'border-top: #888888aa solid 7px';
            break;
        case 2:
            setTimeout(() => {
                document.getElementById('img_exterior').style.display = 'none';
                document.getElementById('img_exterior_2').style.display = 'flex';
            }, 200)
            document.getElementById('img_exterior').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('img_exterior_2').style.opacity = '1';
            }, 250)

            document.getElementById('XF').style = 'border-top: #888888aa solid 7px';
            document.getElementById('XB').style = 'border-top: #ffffffaa solid 7px';
            break;
    }
}
function Exterior_1() {
    return (
        <section className='seen4' id="seen4">
            <div className='exterior_1'>
                <div className='prev fa fa-angle-left' onClick={
                    function () {
                        chng_x_prev();
                        chng_x_mark()
                    }
                }></div>
                <div className='img_exterior' id="img_exterior">
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '14% 0 0 8%' }}
                        onClick={function () { //window top
                            sessionStorage.setItem("exterior_num", 1);
                            sessionStorage.setItem("exterior_page", 1);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '20% 0 0 23%' }}
                        onClick={function () { // Logo front
                            sessionStorage.setItem("exterior_num", 2);
                            sessionStorage.setItem("exterior_page", 1);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '22% 40% 0 0' }}
                        onClick={function () { // window side
                            sessionStorage.setItem("exterior_num", 3);
                            sessionStorage.setItem("exterior_page", 1);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '38% 40% 0 0' }}
                        onClick={function () { // battery
                            sessionStorage.setItem("exterior_num", 4);
                            sessionStorage.setItem("exterior_page", 1);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '37% 61% 0 0' }}
                        onClick={function () { // tank oil
                            sessionStorage.setItem("exterior_num", 5);
                            sessionStorage.setItem("exterior_page", 1);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '48% 0 0 8%' }}
                        onClick={function () { // wheel
                            sessionStorage.setItem("exterior_num", 6);
                            sessionStorage.setItem("exterior_page", 1);
                            open_xpop1();
                        }} />
                </div>
                <div className='img_exterior_2' id="img_exterior_2">
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '12% 2% 0 0' }}
                        onClick={function () { // roof
                            sessionStorage.setItem("exterior_num", 1);
                            sessionStorage.setItem("exterior_page", 2);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '23% 20% 0 0' }}
                        onClick={function () { // Window side
                            sessionStorage.setItem("exterior_num", 2);
                            sessionStorage.setItem("exterior_page", 2);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '39% 30% 0 0' }}
                        onClick={function () { // Kitchen
                            sessionStorage.setItem("exterior_num", 3);
                            sessionStorage.setItem("exterior_page", 2);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '38.2% 11.5% 0 0' }}
                        onClick={function () { // Water tank
                            sessionStorage.setItem("exterior_num", 4);
                            sessionStorage.setItem("exterior_page", 2);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '35% 0 0 8%' }}
                        onClick={function () { // Door
                            sessionStorage.setItem("exterior_num", 5);
                            sessionStorage.setItem("exterior_page", 2);
                            open_xpop1();
                        }} />
                    <img src="/img_index/pin_ma.png" alt="" width={30} height={30} style={{ cursor: 'pointer', position: 'absolute', margin: '32% 0 0 40%' }}
                        onClick={function () { // Generator
                            sessionStorage.setItem("exterior_num", 6);
                            sessionStorage.setItem("exterior_page", 2);
                            open_xpop1();
                        }} />
                </div>
                <Xpop1 />
                <div className="blurback_x" id='blurback_x' onClick={function () {
                    document.getElementById('xpop1').style.left = '150%';
                    document.getElementById('xpop1').style.opacity = '0';
                    document.getElementById('blurback_x').style.display = 'none'
                    sessionStorage.setItem("img_now_x", 1);
                }}></div>
                <div className='next fa fa-angle-right' onClick={
                    function () {
                        chng_x_next();
                        chng_x_mark()
                    }
                }></div>
            </div>
            <div className='seen4_topic'>
                <h2>EXTERIOR</h2>
                <div className='seen4_sub'>
                    <h3 id="XF" onClick={
                    function () {
                        now_x = 1;
                        document.getElementById('seen4').style = "background: url('/img_index/exterior_" + now_x + ".jpg') no-repeat; background-size:  100% auto; background-position: top center; object-fit: cover;";
                        chng_x_mark()
                    }}></h3>
                    <h3 id="XB" onClick={
                    function () {
                        now_x = 2;
                        document.getElementById('seen4').style = "background: url('/img_index/exterior_" + now_x + ".jpg') no-repeat; background-size:  100% auto; background-position: top center; object-fit: cover;";
                        chng_x_mark()
                    }}></h3>
                </div>
            </div>
        </section>
    )
}

export default Exterior_1