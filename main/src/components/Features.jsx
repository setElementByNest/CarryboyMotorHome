import React from 'react'
import './Features.css'

function Features() {
  function clickshange(event, n, namefile){
    for(let i = 1; i < 8; i++){
      document.getElementById('ftchoose' + i).style.border = '#aaaaaa solid 2px';
    }
    for(let i = 1; i < 5; i++){
      document.getElementById('ftsilist' + i).style.border = '#aaaaaa solid 2px';
    }
    document.getElementById('ftsilist1').style.border = '#ffffff solid 2px';
    event.target.style.border = '#cc0000 solid 2px';
    document.getElementById('ftshowimg').style.background = "url('/img_index/features/" + namefile + "') top center";
    document.getElementById('ftshowimg').style.backgroundSize = "cover";
    document.getElementById('ftsilist1').style.display = "flex";
    document.getElementById('ftsilist2').style.display = "flex";
    document.getElementById('ftsilist3').style.display = "flex";
    document.getElementById('ftsilist4').style.display = "flex";

    switch(n) {
      case 1:
        document.getElementById('ftsilist1').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-skyview-open.jpg') top center";
        document.getElementById('ftsilist2').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-skyview-close.jpg') top center";
        document.getElementById('ftsilist3').style.display = "none";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "none";
        break;
      case 2:
        document.getElementById('ftsilist1').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-aircondition-1.jpg') top center";
        document.getElementById('ftsilist2').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-aircondition-2.jpg') top center";
        document.getElementById('ftsilist3').style.display = "none";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "none";
        break;
      case 3:
        document.getElementById('ftsilist1').style.background = "url('/img_index/features/carryboy-motorhome-rv-exterior-solar.jpg') top center";
        document.getElementById('ftsilist2').style.display = "none";
        document.getElementById('ftsilist3').style.display = "none";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "none";
        break;
      case 4:
        document.getElementById('ftsilist1').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-monitor.jpg') top center";
        document.getElementById('ftsilist2').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-camera.jpg') top center";
        document.getElementById('ftsilist3').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-camera2.jpg') top center";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "none";
        break;
      case 5:
        document.getElementById('ftshowimg').style.background = "#000000";
        document.getElementById('ftsilist1').style.display = "none";
        document.getElementById('ftsilist2').style.display = "none";
        document.getElementById('ftsilist3').style.display = "none";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "flex";
        document.getElementById('videoTag').src = "/img_index/features/" + namefile;
        break;
      case 6:
        document.getElementById('ftshowimg').style.background = "#000000";
        document.getElementById('ftsilist1').style.display = "none";
        document.getElementById('ftsilist2').style.display = "none";
        document.getElementById('ftsilist3').style.display = "none";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "flex";
        document.getElementById('videoTag').src = "/img_index/features/" + namefile;
        break;
      case 7:
        document.getElementById('ftsilist1').style.background = "url('/img_index/features/carryboy-motorhome-rv-feature-generator.jpg') top center";
        document.getElementById('ftsilist2').style.display = "none";
        document.getElementById('ftsilist3').style.display = "none";
        document.getElementById('ftsilist4').style.display = "none";
        document.getElementById('videoTag').pause();
        document.getElementById('videoTag').style.display = "none";
        break;
    }
    document.getElementById('ftsilist1').style.backgroundSize = "cover";
    document.getElementById('ftsilist2').style.backgroundSize = "cover";
    document.getElementById('ftsilist3').style.backgroundSize = "cover";
    document.getElementById('ftsilist4').style.backgroundSize = "cover";

  }

  function firstState() {
    document.getElementById('ftsilist1').style.border = '#ffffff solid 2px';
    document.getElementById('ftsilist1').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-skyview-open.jpg') top center";
    document.getElementById('ftsilist2').style.background = "url('/img_index/features/carryboy-motorhome-rv-interior-skyview-close.jpg') top center";
    document.getElementById('ftsilist1').style.backgroundSize = "cover";
    document.getElementById('ftsilist2').style.backgroundSize = "cover";
    document.getElementById('ftsilist3').style.display = "none";
    document.getElementById('ftsilist4').style.display = "none";
  }
  function clickshange2(event){
    if(event.target.style.background == ''){
      firstState()
    }
    for(let i = 1; i < 5; i++){
      document.getElementById('ftsilist' + i).style.border = '#555555 solid 2px';
    }
    document.getElementById('ftshowimg').style.background = event.target.style.background;
    document.getElementById('ftshowimg').style.backgroundSize = "cover";
    event.target.style.border = '#ffffff solid 2px';
  }

  function hideShow() {
    let pxmovedown = 100;
    if(screen.width < 1100){
      pxmovedown = 70;
    }
    if(document.getElementById('ftshowimglistbt').innerHTML == 'ซ่อนรายการ'){
      document.getElementById('ftshowimglistbt').innerHTML = 'แสดงรายการ';
      document.getElementById('ftshowimglistbt').style.transform = 'translate(0, ' + pxmovedown + 'px)';
      document.getElementById('ftshowimglist').style.opacity = '0';
      document.getElementById('ftshowimglist').style.transform = 'translate(0, ' + pxmovedown + 'px)';
    }else{
      document.getElementById('ftshowimglist').style.display = 'flex'
      document.getElementById('ftshowimglistbt').innerHTML = 'ซ่อนรายการ';
      document.getElementById('ftshowimglist').style.opacity = '1';
      document.getElementById('ftshowimglistbt').style.transform = 'translate(0, 0)';
      document.getElementById('ftshowimglist').style.transform = 'translate(0, 0)';
    }
  }
  return (
    <div className='ft' id='ft'>
      <h2>FEATURES</h2>
      <div className='ft_show'>
        <div className='ft_show-choose'>
          <div className='ftchoose-n' id='ftchoose1' onClick={(event) => {clickshange(event, 1, 'carryboy-motorhome-rv-interior-skyview-open.jpg')}}>Skyview</div>
          <div className='ftchoose-n' id='ftchoose2' onClick={(event) => {clickshange(event, 2, 'carryboy-motorhome-rv-interior-aircondition-1.jpg')}}>Air-condition</div>
          <div className='ftchoose-n' id='ftchoose3' onClick={(event) => {clickshange(event, 3, 'carryboy-motorhome-rv-exterior-solar.jpg')}}>Solar Rooftop</div>
          <div className='ftchoose-n' id='ftchoose4' onClick={(event) => {clickshange(event, 4, 'carryboy-motorhome-rv-interior-monitor.jpg')}}>360° Parking Cam</div>
          <div className='ftchoose-n' id='ftchoose5' onClick={(event) => {clickshange(event, 5, 'carryboy-motorhome-rv-exterior-awning-video.mp4')}}>กันสาดไฟฟ้า</div>
          <div className='ftchoose-n' id='ftchoose6' onClick={(event) => {clickshange(event, 6, 'carryboy-motorhome-rv-exterior-ladder-video.mp4')}}>บันไดไฟฟ้า</div>
          <div className='ftchoose-n' id='ftchoose7' onClick={(event) => {clickshange(event, 7, 'carryboy-motorhome-rv-feature-generator.jpg')}}>เครื่องปั่นไฟ 3 KWatt</div>
        </div>
        <div id='ft-load' className='ft-load'></div>
        <div className='ft_show-img' id='ftshowimg'>
          <video controls autoPlay loop muted id='videoTag' style={{top: '0.6vw'}}>
            <source src=""  type="video/mp4" />
          </video>
          <div className='ft_show-img-list-bt' id='ftshowimglistbt' onClick={hideShow}>ซ่อนรายการ</div>
          <div className='ft_show-img-list' id='ftshowimglist'>
            <div className='ft_show-img-list-n' id='ftsilist1' onClick={(event) => clickshange2(event)}></div>
            <div className='ft_show-img-list-n' id='ftsilist2' onClick={(event) => clickshange2(event)}></div>
            <div className='ft_show-img-list-n' id='ftsilist3' onClick={(event) => clickshange2(event)}></div>
            <div className='ft_show-img-list-n' id='ftsilist4' onClick={(event) => clickshange2(event)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
