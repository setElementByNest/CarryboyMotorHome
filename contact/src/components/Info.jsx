import React from "react";
import "./info.css"

function Info() {
    return (
        <div className="info">
            <div className="info_text_head">
                <h4>MotorHome</h4>
                <h2>Contact us</h2>
            </div>
            <div className="info_text_address">
                <h3>บริษัท แครี่บอย มาร์เก็ตติ้ง จำกัด (แกรนด์ แครี่บอย)</h3>
                <h4>26/12 หมู่ที่ 7 ถ.บางนา-ตราด กม.8 (ขาออก) ตรงข้าม เมกา บางนา ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540</h4>
            </div>
            <div className="info_text_contact">
                <h3>Tel : 02-752-8585</h3>
                <h3>Email : grand@carryboy.com</h3>
                <h3>Line id : @cargobox</h3>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135.54434726946056!2d100.68045759595087!3d13.651356971155316!2m3!1f33.830614034532516!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x311d5e496d10318f%3A0xc1295769214ed021!2sGrand%20Carryboy%20Marketing%20Company%20Limited!5e1!3m2!1sen!2sth!4v1694594572625!5m2!1sen!2sth" 
            ></iframe>
        </div>
    )
}

export default Info