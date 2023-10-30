var cost = 0
let cstcar1 = [2003000, 2008000, 2113000, 2165000]
let nmecar1 = ["2.4 ENTRY 2WD A/T", "2.8 ENTRY 2WD M/T", "2.8 ENTRY 4WD M/T", "2.8 ENTRY 4WD A/T"]
let cstcar2 = [2135000]
let nmecar2 = ["2.4 ENTRY 4WD A/T"]
let nmecolor1 = ["Lite", "Classic"]
let nmecolor2 = ["Flat white", "Black"]
let cstair = [0, 67500]
let nmeair = ["Standard", "HARRIER plus"]
let cstbat = [0, 1200, 2400]
let nmebat = ["9,600 Watt", "14,000 Watt", "19,200 Watt"]
let cstsolar = [0, 0]
let nmesolar = ["Yes", "No"]
let cstkitch = [45000, 0]
let nmekitch = ["Yes", "No"]
let cstsus = [0, 95000, 95000]
let nmesus = ["Standard", "Set A", "Set B"]

let picintr1 = ["img/interior/int_01.jpg", "img/interior/int_02.jpg"]
let picintr2 = ["img/interior/int_03.jpg", "img/interior/int_04.jpg"]
let I_Iintr1 = 0
let I_Iintr2 = 0
let cstcolor = [0, 0, 15000, 10000]
let cost_color_now = cstcolor[0]
let cost_car_now = cstcar1[0]
let cost_air_now = cstair[0]
let cost_bat_now = cstbat[0]
let cost_solar_now = cstsolar[0]
let cost_kitch_now = cstkitch[0]
let cost_sus_now = cstsus[0]

let cartype = cstcar1
let save_variable_x = 1
let df_img_0 = "img/Vehicle_rv_toyota_e_01.jpg"
let df_img_1 = picintr1[I_Iintr1]
let df_img_air = "img/air/Ari-con-1.jpg"
let df_img_bat = "img/battery/bat_A01.jpg"
let df_img_kitch = "img/kitchen/draft_1_1.png"
let df_img_sus = "img/suspension/set_01.jpg"
function ChangePicture(imgname){
    var img = document.getElementById("img");
    img.style = "background: url('" + imgname + "') no-repeat 0 0; background-size: cover; background-position: center; transition: background 0.2s linear;"
}
function myscroll(){
    let info_bar_scroll = document.getElementById("info_bar").scrollTop
    var cari_id = document.getElementById("post2");
    var carf_id = document.getElementById("post5");
    var itr_id = document.getElementById("post6");
    var air_id = document.getElementById("post7");
    var bat_id = document.getElementById("post10");
    var kit_id = document.getElementById("post11");
    var sus_id = document.getElementById("sush");
    if (info_bar_scroll > cari_id.offsetTop - 100 && info_bar_scroll < carf_id.offsetTop + carf_id.offsetHeight - 100){
        ChangePicture(df_img_0)
    }
    if (info_bar_scroll > itr_id.offsetTop - 100 && info_bar_scroll < itr_id.offsetTop + itr_id.offsetHeight - 100){
        pic_intr()
    }
    if (info_bar_scroll > air_id.offsetTop - 100 && info_bar_scroll < air_id.offsetTop + air_id.offsetHeight - 100){
        ChangePicture(df_img_air)
    }
    if (info_bar_scroll > bat_id.offsetTop - 100 && info_bar_scroll < bat_id.offsetTop + bat_id.offsetHeight - 100){
        ChangePicture(df_img_bat)
    }
    if (info_bar_scroll > kit_id.offsetTop - 100 && info_bar_scroll < kit_id.offsetTop + kit_id.offsetHeight - 100){
        ChangePicture(df_img_kitch)
    }
    if (info_bar_scroll > sus_id.offsetTop - 100 && info_bar_scroll < sus_id.offsetTop + sus_id.offsetHeight - 100){
        ChangePicture(df_img_sus)
    }
    if (info_bar_scroll >  document.getElementById("info_bar").scrollHeight - 800){
    }
}

function numtostr(x){
    let xs = String(x)
    let lx = xs.length
    let xrt = ""
    if (xs == 0){
        xrt = "Included"
    }
    else{
        for (let i = 0; i < lx; i++){
            if (lx - 3 == i){
                xrt += ","
            }
            if (lx - 6 == i && lx > 6){
                xrt += ","
            }
            xrt += xs[i]
        }
        xrt += " THB"
    }
    return xrt
}


function carcost(){

}
function sumcost(x){
    if(x == null){
        x = save_variable_x
    }
    else{
        cost_car_now = cartype[x]
    }
    let sumtxt1 = document.getElementById("sum1")
    let sumtxt2 = document.getElementById("sum2")
    let cost_all = numtostr(cost_car_now + cost_color_now + cost_air_now + cost_bat_now + cost_solar_now + cost_kitch_now + cost_sus_now) 
    //console.log(cost_car_now, cost_color_now, cost_air_now, cost_bat_now, cost_solar_now, cost_kitch_now, cost_sus_now)
    if(screen.width < 1100){
        cost_all = "TOTAL : " + cost_all
    }
    sumtxt1.textContent = cost_all
    sumtxt2.textContent = cost_all
    sessionStorage.setItem("sumbill", cost_car_now + cost_color_now + cost_air_now + cost_bat_now + cost_solar_now + cost_kitch_now + cost_sus_now)
}
function defl(){
    var stl1 = document.getElementById("cc1btn");
    var stl2 = document.getElementById("cc2btn");
//    var stl3 = document.getElementById("cc3btn");
//    var stl4 = document.getElementById("cc4btn");
    stl1.style = "border: #ffffff solid 3px;"
    stl2.style = "border: #ffffff solid 3px;"
//    stl3.style = "border: #ffffff solid 3px;"
//    stl4.style = "border: #ffffff solid 3px;"
}
function def2(){
    var stlA = document.getElementById("ccAbtn");
    var stlB = document.getElementById("ccBbtn");
    stlA.style = "border: #ffffff solid 3px;"
    stlB.style = "border: #ffffff solid 3px;"
}

//###################################################
//###################### VEHICLE ********************
//###################################################
function car1(x){
    document.getElementById("info_bar").scrollTop = document.getElementById("post2").offsetTop
    var tx1 = document.getElementById("car_sub_text1_2");
    var tx2 = document.getElementById("car_sub_text2_2");
    var tx3 = document.getElementById("car_sub_text3_2");
    var tx4 = document.getElementById("car_sub_text4_2");
    tx1.textContent = numtostr(cstcar1[0])
    tx2.textContent = numtostr(cstcar1[1])
    tx3.textContent = numtostr(cstcar1[2])
    tx4.textContent = numtostr(cstcar1[3])
    document.getElementById("car_sub_group_2").style = "display: none";
    document.getElementById("car_sub_group_1").style = "display: ''";
    let y = document.getElementById("car_sub_1")
    y.checked = true
    cartype = cstcar1
    sessionStorage.setItem("cstcar", cstcar1[x])
    sessionStorage.setItem("nmecar", nmecar1[x])
    sumcost(x)
    df_img_0 = "img/Vehicle_rv_toyota_e_0" + String(x+1) + ".jpg"
    ChangePicture(df_img_0)
}
function car2(x){
    document.getElementById("info_bar").scrollTop = document.getElementById("post2").offsetTop
    var tx1 = document.getElementById("car_sub_text5_2");
    tx1.textContent = numtostr(cstcar2[0])
    var tx2 = document.getElementById("car_sub_text5_1");
    tx2.textContent = "2.4 ENTRY 2WD A/T"
    document.getElementById("car_sub_group_1").style = "display: none";
    document.getElementById("car_sub_group_2").style = "display: ''";
    let y = document.getElementById("car_sub_5")
    y.checked = true
    cartype = cstcar2
    sessionStorage.setItem("cstcar", cstcar2[x])
    sessionStorage.setItem("nmecar", nmecar2[x])
    sumcost(x)
    df_img_0 = "img/Vehicle_rv_mitsu_e.jpg"
    ChangePicture(df_img_0)
}

//###################################################
//###################### INTERIOR *******************
//###################################################

function pic_intr(){
    var tx1 = document.getElementById("textcolor1");
    var tx2 = document.getElementById("textcolor2");
    switch (I_Iintr2){
        case 0:
            var imgname = picintr1[I_Iintr1];
            break;
        case 1:
            var imgname = picintr2[I_Iintr1];
            break;
    }
    ChangePicture(imgname)
    tx1.textContent = nmecolor1[I_Iintr1] + ' , ' + nmecolor2[I_Iintr2]
    tx2.textContent = numtostr(cstcolor[I_Iintr1])
    sessionStorage.setItem("cstcolor", cstcolor[I_Iintr1])
    sessionStorage.setItem("nmecolor", nmecolor1[I_Iintr1] + ' , ' + nmecolor2[I_Iintr2])

}
function btn_img1(){
    document.getElementById("info_bar").scrollTop = document.getElementById("post6").offsetTop
    I_Iintr1 = 0
    pic_intr()
    defl()
    var stl = document.getElementById("cc1btn");
    stl.style = "border: #aa0000 solid 3px;"
    cost_color_now = cstcolor[0]
    sumcost()

}
function btn_img2(){
    document.getElementById("info_bar").scrollTop = document.getElementById("post6").offsetTop
    I_Iintr1 = 1
    pic_intr()
    defl()
    var stl2 = document.getElementById("cc2btn");
    stl2.style = "border: #aa0000 solid 3px;"
    cost_color_now = cstcolor[1]
    sumcost()
}
function btn_imgA(){
    document.getElementById("info_bar").scrollTop = document.getElementById("post6").offsetTop
    def2()
    var stl = document.getElementById("ccAbtn");
    stl.style = "border: #aa0000 solid 3px;"
    I_Iintr2 = 0
    pic_intr()
}
function btn_imgB(){
    document.getElementById("info_bar").scrollTop = document.getElementById("post6").offsetTop
    def2()
    var stl = document.getElementById("ccBbtn");
    stl.style = "border: #aa0000 solid 3px;"
    I_Iintr2 = 1 
    pic_intr()
}

//###################################################
//########################### AIR *******************
//###################################################

function air(x){
    document.getElementById("info_bar").scrollTop = document.getElementById("post7").offsetTop
    df_img_air = "img/air/Ari-con-" + String(x) +".jpg"
    ChangePicture(df_img_air)
    cost_air_now = cstair[x - 1]
    sumcost()
    sessionStorage.setItem("cstair", cstair[x - 1])
    sessionStorage.setItem("nmeair", nmeair[x - 1])
}

//###################################################
//########################## solar *******************
//###################################################
/*
function solar(x){
    df_img_3 = "img/solar/solar_0" + String(x+1) + ".jpg"
    ChangePicture(df_img_3)
    cost_solar_now = cstsolar[x]
    sumcost()
    sessionStorage.setItem("cstsolar", cstsolar[x])
    sessionStorage.setItem("nmesolar", nmesolar[x])
}
*/
//###################################################
//####################### susERATOR *****************
//###################################################

function sus(x){
    document.getElementById("info_bar").scrollTop = document.getElementById("post9").offsetTop
    df_img_sus = "img/suspension/set_0" + String(x+1) + ".jpg"
    ChangePicture(df_img_sus)
    cost_sus_now = cstsus[x]
    sumcost()
    sessionStorage.setItem("cstsus", cstsus[x])
    sessionStorage.setItem("nmesus", nmesus[x])
}

//###################################################
//######################## BATTERY ******************
//###################################################

function bat(x){
    document.getElementById("info_bar").scrollTop = document.getElementById("post10").offsetTop
    df_img_bat = "img/battery/bat_A0" + String(x+1) + ".jpg"
    ChangePicture(df_img_bat)
    cost_bat_now = cstbat[x]
    sumcost()
    sessionStorage.setItem("cstbat", cstbat[x])
    sessionStorage.setItem("nmebat", nmebat[x])
}

//###################################################
//######################### KITCHEN *****************
//###################################################

function kitch(x){
    document.getElementById("info_bar").scrollTop = document.getElementById("post11").offsetTop
    df_img_kitch = "img/kitchen/draft_1_" + String(x+1) + ".png"
    ChangePicture(df_img_kitch)
    cost_kitch_now = cstkitch[x]
    sumcost()
    sessionStorage.setItem("cstkitch", cstkitch[x])
    sessionStorage.setItem("nmekitch", nmekitch[x])
}

function nav_open(){
    document.getElementById("nav").style = "right: 0; transition: right 0.5s;";
    document.getElementById("nav_open").style.display = "none";
    document.getElementById("nav_close").style.display = "inline-flex";
    document.getElementById("sum1").style = "opacity: 0; transition: opacity 0.1s ease-in-out;"//"right: -150%; transition: right 0.2s ease-in-out;";
    //document.getElementById("img").style.filter = "brightness(75%)";
}
function nav_close(){
    if(screen.width <= 1100){
        document.getElementById("nav").style = "right: -100vw; transition: right 0.5s;";
        document.getElementById("nav_open").style.display = "inline-flex";
        document.getElementById("nav_close").style.display = "none";
        setTimeout(() => {document.getElementById("sum1").style = "opacity: 1; transition: opacity 0.3s ease-in-out;"}, 300);
        //"right: 50%; transition: right 0.2s ease-in-out;";
        //document.getElementById("img").style.filter = "brightness(100%)";
    }
}