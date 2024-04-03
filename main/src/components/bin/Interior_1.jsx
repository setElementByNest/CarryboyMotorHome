import React from "react";
import Ipop1 from "../Ipop1";
import './Interior_1.css'
var now_i = 1;
var max_i = 2;
function open_ipop1() {
    sessionStorage.setItem("img_now_i", 1);
    let list_name_back_1 = ['DC Standard Aircon', 'HARRIER plus']
    let list_name_back_2 = ['อ่างล้างมือ (เปิดฝา)', 'อ่างล้างมือ (ปิดฝา)']
    let list_name_back_3 = ['ภายในห้องน้ำ', 'ส้วม และสายชำระล้าง', 'ชั้นวางของ และพื้นบริเวณที่อาบน้ำ']
    let list_name_back_4 = ['โทรทัศน์', 'เตาอบไมโครเวฟ และตู้เย็น', 'ตัวกระจายสัญญาณ WIFI']
    let list_name_back_5 = ['ตู้ควบคุม แลพแสดงผลระบบไฟฟ้าและน้ำ', 'ตัวตัดระบบไฟฟ้า', 'ตัวแสดงผลค่าไฟฟ้าและน้ำ']
    let list_name_back_6 = ['แบบที่ 1 สามารถปรับเป็นเก้าอี้โซฟาที่มีโต๊ะวางอาหาร', 'แบบที่ 2 สามารถปรับเป็นเตียงนอนขนาดใหญ่']
    let list_name_back_7 = ['สวิตซ์ควบคุมหลอดไฟ', 'สวิตซ์ควบคุมเก้าอี้โซฟา', 'สวิตซ์ควบคุมบันไดทางออก']
    let list_name_front_1 = ['เตียงชั้นบน หรือตัวคนขับรถ', 'ไฟขนาดเล็กและใหญ่ ในห้องเตียงชั้นบน']
    let list_name_front_2 = ['หน้าต่างด้านขวา ขณะเปิดม่านกันแสง', 'หน้าต่างด้านขวา ขณะปิดม่านกันแสง']
    let list_name_front_3 = ['หน้าต่างด้านหน้า ขณะเปิดมูลี่กันแสง', 'หน้าต่างด้านหน้า ขณะปิดมูลี่กันแสง']
    let list_name_front_4 = ['กล่องใส่ของ ขณะปิดบานประตูกล่อง', 'กล่องใส่ของ ขณะเปิดบานประตูกล่อง']
    let list_name_front_5 = ['ช่องติดต่อกับคนขับรถ (ปิดช่อง)', 'ช่องติดต่อกับคนขับรถ (เปิดช่อง)']
    let list_name_1 = [list_name_front_1, list_name_front_2, list_name_front_3, list_name_front_4, list_name_front_5];
    let list_name_2 = [list_name_back_1, list_name_back_2, list_name_back_3, list_name_back_4, list_name_back_5, list_name_back_6, list_name_back_7];
    var interior_num = sessionStorage.getItem("interior_num");
    var interior_page = sessionStorage.getItem("interior_page");
    var name_file = "/img_index/ipop_" + interior_page + "_" + interior_num + "_" + "1.jpg"
    document.getElementById('ipop1').style = "background: url(" + name_file + ") no-repeat; background-size:  100% 100%; background-position: center center; background-size: cover;";
    document.getElementById('ipop1').style.opacity = 1;
    document.getElementById('ipop1').style.left = '50%';
    document.getElementById('blurback_i').style.display = 'flex';
    if(interior_page == '1'){
        document.getElementById('img_detail').innerHTML = list_name_1[interior_num - 1][0]
    }
    else{
        document.getElementById('img_detail').innerHTML = list_name_2[interior_num - 1][0]
    }
    //document.getElementById('img_detail').innerHTML = list_name[interior_num - 1][0]
}
function chng_i_next() {
    now_i = now_i + 1;
    if (now_i > max_i) {
        now_i = 1;
    }
    document.getElementById('seen3').style = "background: url('/img_index/interior_" + now_i + ".jpg') no-repeat; background-size:  cover; background-position: top center;";
}
function chng_i_prev() {
    now_i = now_i - 1;
    if (now_i == 0) {
        now_i = max_i;
    }
    document.getElementById('seen3').style = "background: url('/img_index/interior_" + now_i + ".jpg') no-repeat; background-size:  cover; background-position: top center;";
}
function chng_i_mark() {
    switch(now_i){
        case 1:
            setTimeout(() => {
                document.getElementById('img_interior').style.display = 'flex';
                document.getElementById('img_interior_2').style.display = 'none';
            }, 200)
            setTimeout(() => {
                document.getElementById('img_interior').style.opacity = '1';
            }, 250)
            document.getElementById('img_interior_2').style.opacity = '0';

            document.getElementById('IB').style = 'border-top: #ffffffaa solid 7px';
            document.getElementById('IF').style = 'border-top: #888888aa solid 7px';
            break;
        case 2:
            setTimeout(() => {
                document.getElementById('img_interior').style.display = 'none';
                document.getElementById('img_interior_2').style.display = 'flex';
            }, 200)
            document.getElementById('img_interior').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('img_interior_2').style.opacity = '1';
            }, 250)

            document.getElementById('IB').style = 'border-top: #888888aa solid 7px';
            document.getElementById('IF').style = 'border-top: #ffffffaa solid 7px';
            break;
    }
}
function Interior_1() {
    return (
        <section className='seen3' id="seen3">
            <div className='interior_1'>
                <div className='prev fa fa-angle-left' onClick={
                    function () {
                        chng_i_prev();
                        chng_i_mark()
                    }
                }></div>
                <div className='img_interior' id="img_interior">
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '7% 0 0 10%' }}
                        onClick={function () { //air-condition [1]
                            sessionStorage.setItem("interior_num", 1);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '25% 0 0 5%' }}
                        onClick={function () { //watching [2]
                            sessionStorage.setItem("interior_num", 2);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '30% 15% 0 0' }}
                        onClick={function () { //toilet [3]
                            sessionStorage.setItem("interior_num", 3);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '35% 45% 0 0' }}
                        onClick={function () {//assesary [4]
                            sessionStorage.setItem("interior_num", 4);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '10% 50% 0 0' }}
                        onClick={function () {//control [5]
                            sessionStorage.setItem("interior_num", 5);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '45% 0 0 15%' }}
                        onClick={function () {//bed [6]
                            sessionStorage.setItem("interior_num", 6);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '30% 0 0 48%' }}
                        onClick={function () {//switch [7]
                            sessionStorage.setItem("interior_num", 7);
                            sessionStorage.setItem("interior_page", 2);
                            open_ipop1();
                        }} />
                </div>
                <div className='img_interior_2' id="img_interior_2">
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '25% 5% 0 0' }}
                        onClick={function () {//bed_top [1]
                            sessionStorage.setItem("interior_num", 1);
                            sessionStorage.setItem("interior_page", 1);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '25% 0 0 75%' }}
                        onClick={function () {//window_right [2]
                            sessionStorage.setItem("interior_num", 2);
                            sessionStorage.setItem("interior_page", 1);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '12% 5% 0 0' }}
                        onClick={function () {//windowmini [3]
                            sessionStorage.setItem("interior_num", 3);
                            sessionStorage.setItem("interior_page", 1);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '8% -45% 0 0' }}
                        onClick={function () {//box [4]
                            sessionStorage.setItem("interior_num", 4);
                            sessionStorage.setItem("interior_page", 1);
                            open_ipop1();
                        }} />
                    <img src="/img_index/pin_red.png" alt="" className="pin" style={{ cursor: 'pointer', position: 'absolute', margin: '35% 0 0 5%' }}
                        onClick={function () {//doormini
                            sessionStorage.setItem("interior_num", 5);
                            sessionStorage.setItem("interior_page", 1);
                            open_ipop1();
                        }} />
                </div>
                <Ipop1 />
                <div className="blurback_i" id='blurback_i' onClick={function () {
                    document.getElementById('ipop1').style.left = '150%';
                    document.getElementById('ipop1').style.opacity = '0';
                    document.getElementById('blurback_i').style.display = 'none'
                    sessionStorage.setItem("img_now_i", 1);
                }}></div>
                <div className='next fa fa-angle-right' onClick={
                    function () {
                        chng_i_next();
                        chng_i_mark()
                    }
                }></div>
            </div>
            <div className='seen3_topic'>
                <h2>INTERIOR</h2>
                <div className='seen3_sub'>
                    <h3 id="IB" onClick={
                    function () {
                        now_i = 1;
                        document.getElementById('seen3').style = "background: url('/img_index/interior_" + now_i + ".jpg') no-repeat; background-size:  100% auto; background-position: top center; object-fit: cover;";
                        chng_i_mark()
                    }}></h3>
                    <h3 id="IF" onClick={
                    function () {
                        now_i = 2;
                        document.getElementById('seen3').style = "background: url('/img_index/interior_" + now_i + ".jpg') no-repeat; background-size:  100% auto; background-position: top center; object-fit: cover;";
                        chng_i_mark()
                    }}></h3>
                </div>
            </div>
        </section>
    )
}

export default Interior_1