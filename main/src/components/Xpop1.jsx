import React from "react";
import './Xpop1.css'

sessionStorage.setItem("img_now_x", 1);
let img_now_x;
let list_name_back_1 = ['XPOP_1-1-1', 'XPOP_1-1-2']
let list_name_back_2 = ['XPOP_1-2-1', 'XPOP_1-2-2']
let list_name_back_3 = ['XPOP_1-3-1', 'XPOP_1-3-2']
let list_name_back_4 = ['XPOP_1-4-1', 'XPOP_1-4-2']
let list_name_back_5 = ['XPOP_1-5-1', 'XPOP_1-5-2']
let list_name_back_6 = ['XPOP_1-6-1', 'XPOP_1-6-2']
let list_name_front_1 = ['XPOP_2-1-1', 'XPOP_2-1-2', 'XPOP_2-1-3']
let list_name_front_2 = ['XPOP_2-2-1', 'XPOP_2-2-2']
let list_name_front_3 = ['XPOP_2-3-1', 'XPOP_2-3-2']
let list_name_front_4 = ['XPOP_2-4-1', 'XPOP_2-4-2']
let list_name_front_5 = ['XPOP_2-5-1', 'XPOP_2-5-2']
let list_name_front_6 = ['XPOP_2-6-1', 'XPOP_2-6-2']
let list_name_1 = [list_name_front_1, list_name_front_2, list_name_front_3, list_name_front_4, list_name_front_5, list_name_front_6];
let list_name_2 = [list_name_back_1, list_name_back_2, list_name_back_3, list_name_back_4, list_name_back_5, list_name_back_6];

function chng_img_main(name_order_file_num) {
    var exterior_num = sessionStorage.getItem("exterior_num");
    var exterior_page = sessionStorage.getItem("exterior_page");
    var name_file = "/img_index/xpop_" + exterior_page + "_" + exterior_num + "_" + name_order_file_num + ".jpg"
    document.getElementById('xpop1').style.background = "url(" + name_file + ") #ffffff no-repeat"
    document.getElementById('xpop1').style.backgroundPosition = "center center"
    document.getElementById('xpop1').style.backgroundSize = "cover"
    if(exterior_page == '1'){
        document.getElementById('img_detail_x').innerHTML = list_name_1[exterior_num - 1][name_order_file_num - 1]
    }
    else{
        document.getElementById('img_detail_x').innerHTML = list_name_2[exterior_num - 1][name_order_file_num - 1]
    }
}
function chng_img_next() {
    img_now_x = parseInt(sessionStorage.getItem("img_now_x")) + 1;
    var exterior_page = sessionStorage.getItem("exterior_page");
    var exterior_num = sessionStorage.getItem("exterior_num");
    var listlength;
    if(exterior_page == '2'){
        listlength = list_name_2[exterior_num - 1].length
    }
    else{
        listlength = list_name_1[exterior_num - 1].length
    }
    if (listlength < img_now_x) {
        img_now_x = 1
    }
    sessionStorage.setItem("img_now_x", img_now_x)
    chng_img_main(img_now_x)
}
function chng_img_prev() {
    img_now_x = parseInt(sessionStorage.getItem("img_now_x")) - 1;
    var exterior_page = sessionStorage.getItem("exterior_page");
    var exterior_num = sessionStorage.getItem("exterior_num");
    var listlength;
    if(exterior_page == '2'){
        listlength = list_name_2[exterior_num - 1].length
    }
    else{
        listlength = list_name_1[exterior_num - 1].length
    }
    if (0 == img_now_x) {
        img_now_x = listlength;
    }
    sessionStorage.setItem("img_now_x", img_now_x)
    chng_img_main(img_now_x)
}
function Xpop1() {
    return (
        <section className='xpop1' id='xpop1'>
            <div className="fa fa-close"
                onClick={function () {
                    document.getElementById('xpop1').style.left = '150%';
                    document.getElementById('xpop1').style.opacity = '0';
                    document.getElementById('blurback_x').style.display = 'none';
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
                    cursor: 'pointer',
                }}
                    onClick={
                        chng_img_prev
                    }>
                    <div className="fa fa-angle-left" >

                    </div>

                </div>
                <div style={{
                    padding: '5% 2%',
                    background: '#00000088',
                    cursor: 'pointer'
                }}
                    onClick={
                        chng_img_next
                    }><div className="fa fa-angle-right" >

                    </div>
                </div>
            </div>
            <div className="xpop_detail">
                <h3 id="img_detail_x">DC Standard Aircon</h3>
            </div>
        </section>
    )
}

export default Xpop1