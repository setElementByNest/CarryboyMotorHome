import React from "react";
import './Ipop1.css'

sessionStorage.setItem("img_now_i", 1);
let img_now_i;
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

function chng_img_main(name_order_file_num) {
    var interior_num = sessionStorage.getItem("interior_num");
    var interior_page = sessionStorage.getItem("interior_page");
    var name_file = "/img_index/ipop_" + interior_page + "_" + interior_num + "_" + name_order_file_num + ".jpg"
    document.getElementById('ipop1').style.background = "url(" + name_file + ") #ffffff no-repeat"
    document.getElementById('ipop1').style.backgroundPosition = "center center"
    document.getElementById('ipop1').style.backgroundSize = "cover"
    if(interior_page == '1'){
        document.getElementById('img_detail').innerHTML = list_name_1[interior_num - 1][name_order_file_num - 1]
    }
    else{
        document.getElementById('img_detail').innerHTML = list_name_2[interior_num - 1][name_order_file_num - 1]
    }
}
function chng_img_next() {
    img_now_i = parseInt(sessionStorage.getItem("img_now_i")) + 1;
    var interior_page = sessionStorage.getItem("interior_page");
    var interior_num = sessionStorage.getItem("interior_num");
    var listlength;
    if(interior_page == '1'){
        listlength = list_name_1[interior_num - 1].length
    }
    else{
        listlength = list_name_2[interior_num - 1].length
    }
    if (listlength < img_now_i) {
        img_now_i = 1
    }
    sessionStorage.setItem("img_now_i", img_now_i)
    chng_img_main(img_now_i)
}
function chng_img_prev() {
    img_now_i = parseInt(sessionStorage.getItem("img_now_i")) - 1;
    var interior_page = sessionStorage.getItem("interior_page");
    var interior_num = sessionStorage.getItem("interior_num");
    var listlength;
    if(interior_page == '1'){
        listlength = list_name_1[interior_num - 1].length
    }
    else{
        listlength = list_name_2[interior_num - 1].length
    }
    if (0 == img_now_i) {
        img_now_i = listlength;
    }
    sessionStorage.setItem("img_now_i", img_now_i)
    chng_img_main(img_now_i)
}
function Ipop1() {
    return (
        <section className='ipop1' id='ipop1'>
            <div className="fa fa-close"
                onClick={function () {
                    document.getElementById('ipop1').style.left = '150%';
                    document.getElementById('ipop1').style.opacity = '0';
                    document.getElementById('blurback_i').style.display = 'none';
                    chng_img_main(1)
                }} />
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    padding: '5% 2%',
                    background: '#00000088',
                    cursor: 'pointer'
                }}
                    onClick={
                        chng_img_prev
                    }>
                    <div className="fa fa-angle-left"></div>
                </div>
                <div style={{
                    padding: '5% 2%',
                    background: '#00000088',
                    cursor: 'pointer'
                }}
                    onClick={
                        chng_img_next
                    }>
                    <div className="fa fa-angle-right" id="ipop_next"></div>
                </div>
            </div>
            <div className="ipop_detail">
                <h3 id="img_detail">DC Standard Aircon</h3>
            </div>
        </section>
    )
}

export default Ipop1