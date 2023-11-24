import React from 'react'
import './Popup.css'

let scrollpage = 0;
function closepop() {
    if (screen.width >= 1100) {
        document.getElementById('popupscroll').style.transform = 'translate(0, 0)'
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflowY = 'scroll';
        scrollpage = 0;
    }else{
        document.getElementById('popup').scrollLeft = '0';
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflowY = 'scroll';
        scrollpage = 0;
    }
}

function Popup() {
    function nextpage(n) {
        if (screen.width >= 1100) {
            let npage = Number(sessionStorage.getItem('npage'));
            scrollpage = scrollpage + Number(n);
            document.getElementById('scrollpopupR').style.opacity = '1'
            document.getElementById('scrollpopupl').style.opacity = '1'
            if (scrollpage >= npage - 1) {
                scrollpage = npage - 1;
                document.getElementById('scrollpopupR').style.opacity = '0'
            }
            if (scrollpage <= 0) {
                scrollpage = 0;
                document.getElementById('scrollpopupl').style.opacity = '0'
            }
            document.getElementById('npage1').style.outline = '#ffffff00 solid 0.2vw'
            document.getElementById('npage2').style.outline = '#ffffff00 solid 0.2vw'
            document.getElementById('npage3').style.outline = '#ffffff00 solid 0.2vw'
            document.getElementById('npage4').style.outline = '#ffffff00 solid 0.2vw'
            document.getElementById('npage5').style.outline = '#ffffff00 solid 0.2vw'
            
            document.getElementById('popupscroll').style.transform = 'translate(-' + (120 * scrollpage) + 'vw, 0)'
            document.getElementById('npage' + (scrollpage + 1)).style.outline = '#ffffffdd solid 0.2vw'
        }
    }
    function gopage(n) {
        if(scrollpage < n){
            while(scrollpage != n){
                nextpage(1);
            }
        }
        if(scrollpage > n){
            while(scrollpage != n){
                nextpage(-1);
            }
        }
    }
    return (
        <div className='popup' id='popup'>
            <div className='popup-back' id='popupback' onClick={closepop}></div>
            <div id='popup-load' className='popup-load'></div>
            <div className='popup-scroll' id='popupscroll'>
                <div className='popup-back' id='popupback' onClick={closepop}></div>
                <div className='popup-box' id='popupbox1'>
                    <div className='popup-img' id='popupimg1'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead1'>Head1</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail1'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox2'>
                    <div className='popup-img' id='popupimg2'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead2'>Head2</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail2'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox3'>
                    <div className='popup-img' id='popupimg3'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead3'>Head3</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail3'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox4'>
                    <div className='popup-img' id='popupimg4'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead4'>Head4</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail4'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox5'>
                    <div className='popup-img' id='popupimg5'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead5'>Head5</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail5'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox6'>
                    <div className='popup-img' id='popupimg6'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead6'>Head6</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail6'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox7'>
                    <div className='popup-img' id='popupimg7'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead7'>Head7</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail7'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox8'>
                    <div className='popup-img' id='popupimg8'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead8'>Head8</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail8'>Detail</h3>
                    </div>
                </div>
                <div className='popup-box' id='popupbox9'>
                    <div className='popup-img' id='popupimg9'></div>
                    <div className='popup-text'>
                        <h2 id='popuphead9'>Head9</h2>
                        <div className='lineunder'></div>
                        <h3 id='popupdetail9'>Detail</h3>
                    </div>
                </div>
            </div>
            <div className='popup-slide-btr material-icons' id='scrollpopupR' onClick={() => { nextpage(1) }}>&#xe5cc;</div>
            <div className='popup-slide-btl material-icons' id='scrollpopupl' onClick={() => { nextpage(-1) }}>&#xe5cb;</div>
            <div className='popup-npage'>
                <div className='popup-npage-n' id='npage1' onClick={() => {gopage(0)}}></div>
                <div className='popup-npage-n' id='npage2' onClick={() => {gopage(1)}}></div>
                <div className='popup-npage-n' id='npage3' onClick={() => {gopage(2)}}></div>
                <div className='popup-npage-n' id='npage4' onClick={() => {gopage(3)}}></div>
                <div className='popup-npage-n' id='npage5' onClick={() => {gopage(4)}}></div>
            </div>
            <div className='popup-notic-slide' id='noticslide'>สไลด์ซ้าย-ขวา เพื่อเปลี่ยน</div>
            <div className='popupclose material-icons' onClick={closepop}>&#xe5cd;</div>
        </div>
    )
}

export default Popup
