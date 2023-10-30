function numtostr(x){
    let xs = String(x)
    let lx = xs.length
    let xrt = ""
    if (xs == 0){
        xrt = "0 THB"
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
function list(){
    let x1 = document.getElementById("sumbill")
    let x2 = document.getElementById("sum1")
    let orderlist_1_2 = document.getElementById("orderlist_1_2")
    let orderlist_1_3 = document.getElementById("orderlist_1_3")
    let orderlist_2_2 = document.getElementById("orderlist_2_2")
    let orderlist_2_3 = document.getElementById("orderlist_2_3")
    let orderlist_3_2 = document.getElementById("orderlist_3_2")
    let orderlist_3_3 = document.getElementById("orderlist_3_3")
    let orderlist_4_2 = document.getElementById("orderlist_4_2")
    let orderlist_4_3 = document.getElementById("orderlist_4_3")
    /*let orderlist_5_2 = document.getElementById("orderlist_5_2")
    let orderlist_5_3 = document.getElementById("orderlist_5_3")*/
    let orderlist_6_2 = document.getElementById("orderlist_6_2")
    let orderlist_6_3 = document.getElementById("orderlist_6_3")
    let orderlist_7_2 = document.getElementById("orderlist_7_2")
    let orderlist_7_3 = document.getElementById("orderlist_7_3")
    x1.textContent = numtostr(sessionStorage.getItem("sumbill"))
    orderlist_1_2.textContent = sessionStorage.getItem("nmecar")
    orderlist_1_3.textContent = numtostr(sessionStorage.getItem("cstcar"))
    orderlist_2_2.textContent = sessionStorage.getItem("nmecolor")
    orderlist_2_3.textContent = numtostr(sessionStorage.getItem("cstcolor"))
    orderlist_3_2.textContent = sessionStorage.getItem("nmeair")
    orderlist_3_3.textContent = numtostr(sessionStorage.getItem("cstair"))
    orderlist_4_2.textContent = sessionStorage.getItem("nmebat")
    orderlist_4_3.textContent = numtostr(sessionStorage.getItem("cstbat"))
    /*orderlist_5_2.textContent = sessionStorage.getItem("nmesolar")
    orderlist_5_3.textContent = numtostr(sessionStorage.getItem("cstsolar"))*/
    orderlist_6_2.textContent = sessionStorage.getItem("nmekitch")
    orderlist_6_3.textContent = numtostr(sessionStorage.getItem("cstkitch"))
    orderlist_7_2.textContent = sessionStorage.getItem("nmesus")
    orderlist_7_3.textContent = numtostr(sessionStorage.getItem("cstsus"))

}
function cto(){
    let info1 = document.getElementById("z_index_3")
    let blurback = document.getElementById("z_index_2")
    info1.style = "display: block"
    blurback.style = "display: flex"
    list()
}

function btcancel(){
    let info1 = document.getElementById("z_index_3")
    let blurback = document.getElementById("z_index_2")
    info1.style = "display: none"
    blurback.style = "display: none"
    document.getElementById("name_info1").value = ''
    document.getElementById("name_info1").style = "border: #cccccc solid 1px;"
    document.getElementById("lastname_info1").value = ''
    document.getElementById("lastname_info1").style = "border: #cccccc solid 1px;"
    document.getElementById("phone_info1").value = ''
    document.getElementById("phone_info1").style = "border: #cccccc solid 1px;"
    document.getElementById("email_info1").value = ''
    document.getElementById("email_info1").style = "border: #cccccc solid 1px;"


}
function sendMail(){
    var params = {
        name: sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"),
        email: sessionStorage.getItem("email"),
        call: sessionStorage.getItem("phone"),
        vihicle: sessionStorage.getItem("nmecar"),
        vihicle_cst: numtostr(sessionStorage.getItem("cstcar")),
        laminate: sessionStorage.getItem("nmecolor"),
        laminate_cst: numtostr(sessionStorage.getItem("cstcolor")),
        air: sessionStorage.getItem("nmeair"),
        air_cst: numtostr(sessionStorage.getItem("cstair")),
        bat: sessionStorage.getItem("nmebat"),
        bat_cst: numtostr(sessionStorage.getItem("cstbat")),
        /*solar: sessionStorage.getItem("nmesolar"),
        solar_cst: numtostr(sessionStorage.getItem("cstsolar")),*/
        kitch: sessionStorage.getItem("nmekitch"),
        kitch_cst: numtostr(sessionStorage.getItem("cstkitch")),
        sus: sessionStorage.getItem("nmesus"),
        sus_cst: numtostr(sessionStorage.getItem("cstsus")),
        sumbill: numtostr(sessionStorage.getItem("sumbill"))
    };
    const serviceID = "service_9o2vh53";
    const templateID = "template_caamphj";
    emailjs
        .send(serviceID,templateID,params )
        .then(btcancel())
        .catch((err) => console.log(err));
}
function checktext(a){
    let x = document.getElementById(a)
    if(x.value == ''){
        x.style = "border: #c90043 solid 1px;"
    }
    else{
        x.style = "border: #00c75a solid 1px;"
    }
}
function next(){
    let x1 = document.getElementById("name_info1").value == ''
    let x2 = document.getElementById("lastname_info1").value == ''
    let x3 = document.getElementById("phone_info1").value == ''
    let x4 = document.getElementById("email_info1").value == ''
    if(x1 || x2 || x3 || x4){
        checktext('name_info1')
        checktext('lastname_info1')
        checktext('phone_info1')
        checktext('email_info1')
    }
    else{
        sessionStorage.setItem("name", document.getElementById("name_info1").value)
        sessionStorage.setItem("lastname", document.getElementById("lastname_info1").value)
        sessionStorage.setItem("phone", document.getElementById("phone_info1").value)
        sessionStorage.setItem("email", document.getElementById("email_info1").value)
        sendMail()
        btcancel()
        window.open('e-bill.html')
    }/*
    let info1 = document.getElementById("z_index_3")
    let blurback = document.getElementById("z_index_2")
    info1.style = "display: none"
    blurback.style = "display: none"*/
}