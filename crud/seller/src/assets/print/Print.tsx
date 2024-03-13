import { useEffect } from 'react'
import './print.css'
import './print2.css'
import './print3.css'
import './printMedia.css'
interface Customer {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    brand: string;
    model: string;
    laminate: string;
    reartype: string;
    aircon: string;
    battery: string;
    powergen: string;
    rearbox: string;
    kitchen: string;
    suspension: string;
    finance: string;
    legalentity: string;
    seller: string;
    discount: string;
    status: string;
}
interface PrintIntf {
    selectData: Customer[];
}
const useAutoSaveInputs = () => {
    useEffect(() => {
        const handleInputChange = (e: Event) => {
            const target = e.target as HTMLInputElement; // Cast EventTarget to HTMLInputElement
            target.defaultValue = target.value;
        };

        // Attach the event listener to all input elements
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', handleInputChange);
        });

        // Cleanup the event listeners on component unmount
        return () => {
            document.querySelectorAll('input').forEach(input => {
                input.removeEventListener('change', handleInputChange);
            });
        };
    }, []);
};

function Print({ selectData }: PrintIntf) {
    useAutoSaveInputs();
    // const typingInputSave = (e:any) => {
    //     const inputElement = e.target;
        
    //     // Update the defaultValue property of the input element
    //     inputElement.defaultValue = inputElement.value;
    // }

    return (
        <div className='printA4' id='printA4'>
            <div className='A4-id'>
                <h3>No : </h3>
                <input type="text" defaultValue={selectData.length === 0 ? '' : selectData[0].id}/>
            </div>
            <div className="A4-topgroup">
                <div className='A4-brand'>
                    <img src="/grand-logo.png" alt="" />
                    <h3>บริษัท แครี่บอย มาร์เก็ตติ้ง จำกัด</h3>
                    <h3>26/12 หมู่ 7 ถ.บางนา-ตราด กม.8</h3>
                    <h3>ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540</h3>
                    <h3>โทร. 0-2752-8588</h3>
                    <h3>แฟกซ์ 0-2752-8588</h3>
                    <h3>อีเมล grand@carryboy.com</h3>
                    <h3>www.carryboymotorhome.com</h3>
                </div>
                <div className='A4-head'>
                    <div className='A4-head-red'>
                        <h1>ใบสั่งจอง</h1>
                        <h2>แครี่บอย รถบ้าน (Motorhome)</h2>
                    </div>
                    <div className='A4-head-info'>
                        <div style={{ display: 'grid', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                            <div style={{ display: 'flex' }}>
                                <h3>ชื่อ</h3>
                                <input type="text" id='pdf-name' defaultValue={selectData.length === 0 ? '' : selectData[0].name}/>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>นามสกุล</h3>
                                <input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].lastname}/>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '30% 23% 45%', gap: '1%' }}>
                            <div style={{ display: 'flex' }}>
                                <h3>บ้านเลขที่</h3>
                                <input type="text" style={{ width: '50%' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>หมู่</h3>
                                <input type="text" style={{ width: '55%' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>ชื่อหมู่บ้าน</h3>
                                <input type="text" style={{ width: '67%' }} />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '44% 54%', gap: '2%' }}>
                            <div style={{ display: 'flex' }}>
                                <h3>ถนน</h3>
                                <input type="text" />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>แขวง / ตำบล</h3>
                                <input type="text" style={{ width: '67%' }} />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', gap: '1%' }}>
                            <div style={{ display: 'flex' }}>
                                <h3>เขต / อำเภอ</h3>
                                <input type="text" style={{ width: '50%' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>จังหวัด</h3>
                                <input type="text" style={{ width: '65%' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>รหัสไปรษณีย์</h3>
                                <input type="text" style={{ width: '45%' }} />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '39% 59%', gap: '2%' }}>
                            <div style={{ display: 'flex' }}>
                                <h3>โทรศัพท์</h3>
                                <input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].phone}/>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>อีเมล</h3>
                                <input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].email} style={{overflow: 'visible'}}/>
                            </div>
                        </div>
                        <h4>ตกลงจองรถพร้อมอุปกรณ์ตกแต่ง รถบ้าน (Motorhome) จำนวน 1 คัน โดยมีรายละเอียดดังนี้</h4>
                    </div>
                </div>
            </div>
            <div className="A4-list1">
                <h2>ยี่ห้อรถ :</h2>
                <input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].brand}/>
                <h2>รุ่น :</h2>
                <input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].model}/>
            </div>
            <div className="A4-list2">
                <h2>รายการอุปกรณ์</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>ลามิเนต</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].laminate}/></td>
                            <td>เฟอร์นิเจอร์ด้านหลัง</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].reartype}/></td>
                        </tr>
                        <tr>
                            <td>เครื่องปรับอากาศ</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].aircon}/></td>
                            <td>แบตเตอร์รี่</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].battery}/></td>
                        </tr>
                        <tr>
                            <td>เครื่องกำเนิดไฟฟ้า</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].powergen}/></td>
                            <td>กล่องท้าย</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].rearbox}/></td>
                        </tr>
                        <tr>
                            <td>ครัวสไลด์</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].kitchen}/></td>
                            <td>ช่วงล่าง</td>
                            <td><input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].suspension}/></td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td>• กล้อง 360°</td>
                            <td>• เครื่องทำน้ำอุ่น</td>
                            <td>• ห้องน้ำในตัว</td>
                            <td>• ระบบ RV Smart</td>
                        </tr>
                        <tr>
                            <td>• ถังเก็บน้ำดี 120 ลิตร</td>
                            <td>• ถังเก็บน้ำเสีย 80 ลิตร</td>
                            <td>• โทรทัศน์ขนาด 32 นิ้ว</td>
                            <td>• ตู้ย็น 80 ลิตร</td>
                        </tr>
                        <tr>
                            <td>• บันไดไฟฟ้า</td>
                            <td>• กันสาดไฟฟ้า</td>
                            <td>• โซลาร์เซลล์</td>
                            <td>• แร็คจักรยาน</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="A4-finance">
                <div className="A4-finance-head">
                    <h3>รายละเอียดการชำระเงิน</h3>
                </div>
                <div className="A4-finance-type">
                    <h3>ประเภทการชำระเงิน :</h3>
                    <input type="text"  defaultValue={selectData.length === 0 ? '' : selectData[0].finance}/>
                </div>
                <div className="A4-finance-list">
                    <div className="A4-finance-list-1">
                        <table>
                            <tbody>
                                <tr>
                                    <td>ราคาสุทธิ (รวม Vat 7%)</td>
                                    <td><input type="text" id='pdf-net'/></td>
                                    <td>บาท</td>
                                </tr>
                                <tr>
                                    <td>เงินดาวน์ 25%</td>
                                    <td><input type="text" id='pdf-downpayment'/></td>
                                    <td>บาท</td>
                                </tr>
                                <tr>
                                    <td>ดอกเบี้ย</td>
                                    <td><input type="text" id='pdf-increase'/></td>
                                    <td>%</td>
                                </tr>
                                <tr>
                                    <td>ราคางวดละ</td>
                                    <td><input type="text" id='pdf-period'/></td>
                                    <td>บาท</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="A4-finance-list-2">
                        <table>
                            <tbody>
                                <tr>
                                    <td>ค่าประกันภัย และ พรบ.</td>
                                    <td><input type="text" defaultValue={'43,662'} /></td>
                                    <td>บาท</td>
                                </tr>
                                <tr>
                                    <td>ค่าจดทะเบียน</td>
                                    <td><input type="text" id='pdf-regis'/></td>
                                    <td>บาท</td>
                                </tr>
                                <tr>
                                    <td>มัดจำป้ายแดง (ได้คืน)</td>
                                    <td><input type="text" defaultValue={'3,000'} /></td>
                                    <td>บาท</td>
                                </tr>
                                <tr>
                                    <td>รวมค่าใช้จ่าย ณ วันรับรถ</td>
                                    <td><input type="text" id='pdf-finalpay'/></td>
                                    <td>บาท</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="A4-promise">
                    <h3>ใบสั่งจองนี้ ผู้สั่งจองได้ชำระเงินจองชั่วคราว เป็นจำนวนเงิน</h3>
                    <input type="text" />
                    <h3>บาท (เงินสด/เงินโอน/บัตรเครดิต)</h3>
                    <input type="text" />
                    <h3>
                        ในการสั่งจองรถบ้านครั้งนี้ ราคาทีสั่งจองไว้เป็นราคาของอัตราภาษี ณ ปัจจุบัน
                        หากมีการเปลี่ยนแปลงภาษีอันอาจจะทำให้ราคา หรืออุปกรณ์เพิ่มสูงขึ้นแล้ว
                        ผู้สั่งจองยินดีรับการเพิ่มราคาตามความเป็นจริงของภาษีที่ปรับเพิ่มขึ้น
                    </h3>
                </div>
                <div className="A4-signgroup">
                    <div className="A4-signgroup-content">
                        <div className="A4-signgroup-content-up">
                            <h3>ลงชื่อ</h3>
                            <input type="text" />
                            <h3>ผู้สั่งจอง</h3>
                        </div>
                        <div className="A4-signgroup-content-down">
                            <h3>(</h3>
                            <input type="text"   defaultValue={selectData.length === 0 ? '' : selectData[0].name + ' ' + selectData[0].lastname}/>
                            <h3>)</h3>
                        </div>
                    </div>
                    <div className="A4-signgroup-content">
                        <div className="A4-signgroup-content-up">
                            <h3>ลงชื่อ</h3>
                            <input type="text" />
                            <h3>พนักงานขาย</h3>
                        </div>
                        <div className="A4-signgroup-content-down">
                            <h3>(</h3>
                            <input type="text" />
                            <h3>)</h3>
                        </div>
                    </div>
                    <div className="A4-signgroup-content" style={{ transform: 'translate(14%, 0)' }}>
                        <div className="A4-signgroup-content-up">
                            <h3>วันที่</h3>
                            <input type="text" style={{ width: '100px' }} />
                        </div>
                    </div>
                    <div className="A4-signgroup-content">
                        <div className="A4-signgroup-content-up">
                            <h3>ลงชื่อ</h3>
                            <input type="text" />
                            <h3>ผู้อนุมัติ</h3>
                        </div>
                        <div className="A4-signgroup-content-down" >
                            <h3>(</h3>
                            <input type="text" />
                            <h3>)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Print
