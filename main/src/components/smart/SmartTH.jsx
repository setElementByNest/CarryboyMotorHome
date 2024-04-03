import React from 'react'
import './smart.css'

function Smart() {
    return (
        <div className='smart' id='smart'>
            <h2 style={{fontFamily: 'Kanit', fontWeight: '400'}}>ระบบอัจฉริยะสำหรับรถบ้านเคลื่อนที่</h2>
            <div className="smart-content">
                <div className="smart-content-1">
                    <video controls muted autoPlay loop id='videoTag'>
                        <source src="/img_index/Smart system.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="smart-content-2">
                    <div className="smart-group">
                        <div className="smart-group-head">ควบคุม</div>
                        <img src="/img_index/smart/air-conditioning.png" alt="" />
                        <h4>เครื่องปรับอากาศ</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">ควบคุม</div>
                        <img src="/img_index/smart/table.png" alt="" />
                        <h4>เก้าอี้ไฟฟ้า</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">ควบคุม</div>
                        <img src="/img_index/smart/idea.png" alt="" />
                        <h4>ไฟส่องสว่าง</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">ควบคุม</div>
                        <img src="/img_index/smart/water-heater.png" alt="" />
                        <h4>เครื่องทำน้ำอุ่น</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">แสดงผล</div>
                        <img src="/img_index/smart/electric-power.png" alt="" />
                        <h4>สถานะไฟฟ้า</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">แสดงผล</div>
                        <img src="/img_index/smart/battery-status.png" alt="" />
                        <h4>แบตเตอรี่</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">แสดงผล</div>
                        <img src="/img_index/smart/trend.png" alt="" />
                        <h4>การใช้ไฟฟ้า</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">แสดงผล</div>
                        <img src="/img_index/smart/drop.png" alt="" />
                        <h4>ปริมาณน้ำดี</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">แสดงผล</div>
                        <img src="/img_index/smart/water-waste.png" alt="" />
                        <h4>ปริมาณน้ำเสีย</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smart
