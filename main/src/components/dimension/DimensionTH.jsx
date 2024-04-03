import React from 'react'
import './Dimension.css'

function Dimension() {
    function dimensionSet(a, b, c, d, name) {
        document.getElementById('dimension-select-1').style.border = a + ' solid 2px';
        document.getElementById('dimension-select-2').style.border = b + ' solid 2px';
        document.getElementById('dimension-select-3').style.border = c + ' solid 2px';
        document.getElementById('dimension-select-4').style.border = d + ' solid 2px';
        document.getElementById('dimensionimg').style.background = 'url(/img_index/dimension/' + name + ') no-repeat';
        document.getElementById('dimensionimg').style.backgroundPosition = 'top center';
        document.getElementById('dimensionimg').style.backgroundSize = 'cover';
    }
    return (
        <div className='dimension' id='dimension'>
            <div className='dimension-content'>
                <div className='dimension-img' id='dimensionimg'></div>
                <div className='dimension-select'>
                    <h2 style={{fontFamily: 'Kanit', fontWeight: '400'}}>โครงสร้างภายใน</h2>
                    {/* <h3>The cabin can be converted into a berth.</h3> */}
                    <h3>ห้องโดยสารสามารถปรับเปลี่ยนเป็นที่นอนได้</h3>
                    <div className='dimension-chooseselect'>
                        <div onClick={() => {dimensionSet('#cc0000', '#cccccc', '#cccccc', '#cccccc','carryboy-motorhome-rv-Plan01_0.jpg')}} className='dimension-select-text' id='dimension-select-1'>รูปแบบ 1</div>
                        <div onClick={() => {dimensionSet('#cccccc', '#cc0000', '#cccccc', '#cccccc','carryboy-motorhome-rv-Plan02_0.jpg')}} className='dimension-select-text' id='dimension-select-2'>รูปแบบ 2</div>
                        <div onClick={() => {dimensionSet('#cccccc', '#cccccc', '#cc0000', '#cccccc','carryboy-motorhome-rv-Plan03_0.jpg')}} className='dimension-select-text' id='dimension-select-3'>รูปแบบ 3</div>
                        <div onClick={() => {dimensionSet('#cccccc', '#cccccc','#cccccc', '#cc0000', 'carryboy-motorhome-rv-dimension.jpg')}} className='dimension-select-text' id='dimension-select-4'>ขนาดและมิติ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dimension
