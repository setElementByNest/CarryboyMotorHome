import React from "react";
import './Pop1.css'

function numtotext(x) {
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
    }
    return xrt
}
function carprice() {
    let carprice_array = [1978000, 2083000, 1973000, 2135000, 2105000];
    let times_array = [12, 24, 36, 48, 60];
    var x = 0; var y = 0;
    if (document.getElementById('carradio1').checked == true){
        x = 0
    }
    if (document.getElementById('carradio2').checked == true){
        x = 1
    }
    if (document.getElementById('carradio3').checked == true){
        x = 2
    }
    if (document.getElementById('carradio4').checked == true){
        x = 3
    }
    if (document.getElementById('carradio5').checked == true){
        x = 4
    }
    if (document.getElementById('timesradio1').checked == true){
        y = 0
    }
    if (document.getElementById('timesradio2').checked == true){
        y = 1
    }
    if (document.getElementById('timesradio3').checked == true){
        y = 2
    }
    if (document.getElementById('timesradio4').checked == true){
        y = 3
    }
    if (document.getElementById('timesradio5').checked == true){
        y = 4
    }
    var price_car = carprice_array[x]
    var price_down = price_car * 0.25
    var price_jad = price_car * 0.75
    var price_dok = price_jad * 0.035 * Math.trunc(times_array[y] / 12)
    var price_installment = (price_jad + price_dok) / times_array[y]
    document.getElementById('carprice').innerHTML = numtotext(price_car)
    document.getElementById('downprice').innerHTML = numtotext(price_down)
    document.getElementById('jadprice').innerHTML = numtotext(price_jad)
    document.getElementById('beerprice').innerHTML = numtotext(Math.trunc(price_dok))
    document.getElementById('installmentprice').innerHTML = numtotext(Math.trunc(price_installment) + 1)
    document.getElementById('firstdayprice').innerHTML = numtotext(price_down + 45000 + 20000 + 3000)
}
function Pop1() {
    return (
        <section className='pop1' id='pop1'>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                margin: '1%',
                marginLeft: '3%',
                marginBottom: '2%',
                paddingBottom: '1%',
                borderBottom: '#aaaaaa solid 1px'
            }}>
                <h2 style={{fontWeight: '400'}}>คำนวณค่างวดรถบ้าน</h2>
                <div className="fa fa-close" style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '25px',
                    cursor: 'pointer',
                    color: '#000000'
            }}
                    onClick={function () {
                        document.getElementById('pop1').style.display = 'none';
                        document.getElementById('blurback').style.display = 'none';
                    }}>
                </div>
            </div>
            <div className='pop1_sap'>
                <div className="pop1_sap_div">
                    <form action="" id="carradioid" onClick={carprice}>
                        <h3 style={{fontWeight: '400'}}>รุ่นรถ</h3>
                        <h4>TOYOTA HILUX REVO</h4>
                        <input type="radio" id="carradio1" name="carradio" value="1978000" defaultChecked />
                        <label htmlFor="carradio1">2.4 ENTRY 2WD A/T</label><br />
                        <input type="radio" id="carradio2" name="carradio" value="2083000" />
                        <label htmlFor="carradio2">2.8 ENTRY 2WD M/T</label><br />
                        <input type="radio" id="carradio3" name="carradio" value="1973000" />
                        <label htmlFor="carradio3">2.8 ENTRY 4WD M/T</label><br />
                        <input type="radio" id="carradio4" name="carradio" value="2135000" />
                        <label htmlFor="carradio4">2.8 ENTRY 4WD A/T</label>
                        <h4>MITSUBISHI TRITON</h4>
                        <input type="radio" id="carradio5" name="carradio" value="2105000" />
                        <label htmlFor="carradio5">2.4 ENTRY 2WD A/T</label>
                    </form>
                    <form name="timesradio" action="" onClick={carprice}>
                        <h3 style={{fontWeight: '400', marginBottom: '10px'}}>จำนวนงวดผ่อน</h3>

                        <input type="radio" id="timesradio1" name="timesradio" value="12" hidden />
                        <input type="radio" id="timesradio2" name="timesradio" value="24" hidden defaultChecked/>
                        <input type="radio" id="timesradio3" name="timesradio" value="36" hidden />
                        <input type="radio" id="timesradio4" name="timesradio" value="48" hidden />
                        <input type="radio" id="timesradio5" name="timesradio" value="60" hidden />
                        <div id='asdasd' style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                            <label className='timesbutton' htmlFor='timesradio1' id='label_timesradio1' hidden>12</label>
                            <label className='timesbutton' htmlFor='timesradio2' id='label_timesradio2'>24</label>
                            <label className='timesbutton' htmlFor='timesradio3' id='label_timesradio3'>36</label>
                            <label className='timesbutton' htmlFor='timesradio4' id='label_timesradio4'>48</label>
                            <label className='timesbutton' htmlFor='timesradio5' id='label_timesradio5' hidden>60</label>
                        </div>
                    </form>
                </div>
                <div className="pop1_sap_div_2">
                    <div className="pop1_cal">
                        <p>ราคาพร้อมตู้</p>
                        <p id='carprice'>1,978,000</p>
                        <p>บาท</p>

                        <p>ดาวน์ 25%</p>
                        <p id="downprice">494,500</p>
                        <p>บาท</p>

                        <p>ยอดจัดไฟแนนซ์</p>
                        <p id="jadprice">1,483,500</p>
                        <p>บาท</p>

                        <p>ดอกเบี้ย 3.5%</p>
                        <p id="beerprice">103,845</p>
                        <p>บาท</p>
                        
                        <p style={{ color: '#aa0000', fontWeight: '500', fontSize: '25px' }}>ราคาต่องวด</p>
                        <p style={{ color: '#aa0000', fontWeight: '500', fontSize: '25px' }} id="installmentprice">66,140</p>
                        <p style={{ color: '#aa0000', fontWeight: '500', fontSize: '25px' }}>บาท</p>

                        <p>ค่าใช้จ่าย ณ วันรับ</p>
                        <p id="firstdayprice">562,500</p>
                        <p>บาท</p>
                    </div>
                    <div className="pop1_cal_sub">
                        <p style={{ color: '#333333', fontWeight: '200', fontSize: '12px'}}>*ประกันชั้น 1 พรบ. 45,000 บาท</p>
                        <p style={{ color: '#333333', fontWeight: '200', fontSize: '12px'}}>จดทะเบียน และค่าบริการ 20,000 บาท</p>
                        <p style={{ color: '#333333', fontWeight: '200', fontSize: '12px'}}>มัดจำป้ายแดง (ได้คืน) 3,000 บาท</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pop1