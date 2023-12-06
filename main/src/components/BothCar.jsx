import React from 'react'
import './BothCar.css'

function selectmenu(n) {
  document.getElementById('bothcar-menu1').style.opacity = '0.35';
  document.getElementById('bothcar-menu2').style.opacity = '0.35';
  document.getElementById('bothcar-menu3').style.opacity = '0.35';
  document.getElementById('bothcar-menu4').style.opacity = '0.35';
  document.getElementById('bothcar-img-toyota').style.scale = '1.0';
  document.getElementById('bothcar-img-champ').style.scale = '1.0';
  document.getElementById('bothcar-img-mitsubishi').style.scale = '1.0';
  switch (n) {
    case 1:
      document.getElementById('bothcar-img-toyota').style.transform = 'translate(-50%, -50%)';
      document.getElementById('bothcar-img-mitsubishi').style.transform = 'translate(-50%, -40%)';
      document.getElementById('bothcar-img-champ').style.transform = 'translate(-50%, -40%)';
      document.getElementById('bothcar-detail-toyota').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-toyota').style.opacity = '0';
      document.getElementById('bothcar-detail-mitsubishi').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-mitsubishi').style.opacity = '0';
      document.getElementById('bothcar-detail-champ').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-champ').style.opacity = '0';
      document.getElementById('bothcar-menu1').style.opacity = '1';
      document.getElementById('bothcar').style.backgroundSize = 'auto 100%';
      //document.getElementById('bgimg1').style.transform = 'translate(100%, 0)';
      //document.getElementById('bgimg2').style.transform = 'translate(100%, 0)';
      break;
    case 2:
      document.getElementById('bothcar-img-toyota').style.transform = 'translate(30%, -30%)';
      document.getElementById('bothcar-img-toyota').style.scale = '1.4';
      document.getElementById('bothcar-img-mitsubishi').style.transform = 'translate(400%, -40%)';
      document.getElementById('bothcar-img-champ').style.transform = 'translate(300%, -40%)';
      document.getElementById('bothcar-detail-toyota').style.transform = 'translate(0, 0)';
      document.getElementById('bothcar-detail-toyota').style.opacity = '1';
      document.getElementById('bothcar-detail-mitsubishi').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-mitsubishi').style.opacity = '0';
      document.getElementById('bothcar-detail-champ').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-champ').style.opacity = '0';
      document.getElementById('bothcar-menu2').style.opacity = '1';
      document.getElementById('bothcar').style.backgroundSize = 'auto 120%';
      //setTimeout(() => {document.getElementById('bgimg1').style.transform = 'translate(0%, 0)'}, 200);
      //setTimeout(() => {document.getElementById('bgimg2').style.transform = 'translate(100%, 0)'}, 100);
      break;
    case 3:
      document.getElementById('bothcar-img-toyota').style.transform = 'translate(200%, -50%)';
      document.getElementById('bothcar-img-mitsubishi').style.scale = '1.1';
      document.getElementById('bothcar-img-mitsubishi').style.transform = 'translate(-60%, -35%)';
      document.getElementById('bothcar-img-champ').style.transform = 'translate(300%, -40%)';
      document.getElementById('bothcar-detail-toyota').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-toyota').style.opacity = '0';
      document.getElementById('bothcar-detail-mitsubishi').style.transform = 'translate(0, 0)';
      document.getElementById('bothcar-detail-mitsubishi').style.opacity = '1';
      document.getElementById('bothcar-detail-champ').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-champ').style.opacity = '0';
      document.getElementById('bothcar-menu3').style.opacity = '1';
      document.getElementById('bothcar').style.backgroundSize = 'auto 140%';
      //setTimeout(() => {document.getElementById('bgimg1').style.transform = 'translate(100%, 0)'}, 100);
      //setTimeout(() => {document.getElementById('bgimg2').style.transform = 'translate(0%, 0)'}, 200);
      break;
    case 4:
      document.getElementById('bothcar-img-toyota').style.transform = 'translate(200%, -50%)';
      document.getElementById('bothcar-img-mitsubishi').style.transform = 'translate(400%, -50%)';
      document.getElementById('bothcar-img-champ').style.scale = '1.25';
      document.getElementById('bothcar-img-champ').style.transform = 'translate(-5%, -25%)';
      document.getElementById('bothcar-detail-toyota').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-toyota').style.opacity = '0';
      document.getElementById('bothcar-detail-mitsubishi').style.transform = 'translate(-50%, 0)';
      document.getElementById('bothcar-detail-mitsubishi').style.opacity = '0';
      document.getElementById('bothcar-detail-champ').style.transform = 'translate(0%, 0)';
      document.getElementById('bothcar-detail-champ').style.opacity = '1';
      document.getElementById('bothcar-menu4').style.opacity = '1';
      document.getElementById('bothcar').style.backgroundSize = 'auto 140%';
      //setTimeout(() => {document.getElementById('bgimg1').style.transform = 'translate(100%, 0)'}, 100);
      //setTimeout(() => {document.getElementById('bgimg2').style.transform = 'translate(0%, 0)'}, 200);
      break;
  }
}

function BothCar() {
  return (
    <div className='bothcar' id='bothcar'>
      <div className='bothcar-menu'>
        <h3 id='bothcar-menu1' onClick={() => { selectmenu(1) }}>ALL</h3>
        <h3 id='bothcar-menu2' onClick={() => { selectmenu(2) }}>TOYOTA-REVO</h3>
        <h3 id='bothcar-menu4' onClick={() => { selectmenu(4) }}>TOYOTA-CHAMP</h3>
        <h3 id='bothcar-menu3' onClick={() => { selectmenu(3) }}>MITSUBISHI</h3>
      </div>
      <div id='bothcar-detail-all' className='bothcar-detail-all'>
      </div>
      <img id='bgimg1' src='/img_index/cloudy-mountain-wallpaper-4k-5k-5120x2880.jpg' style={{
        objectFit: "cover",
        objectPosition: "bottom center",
        width: "50%",
        height: "100%",
        clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)",
        right: "0",
        position: "absolute",
        transform: "translate(100%, 0)",
        transition: "all 0.5s"
      }}></img>
      <img id='bgimg2' src='/img_index/wallpaper.jpg' style={{
        objectFit: "cover",
        objectPosition: "bottom center",
        width: "50%",
        height: "100%",
        clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)",
        right: "0",
        position: "absolute",
        transform: "translate(100%, 0)",
        transition: "all 0.5s"
      }}></img>
      <div id='bothcar-detail-toyota' className='bothcar-detail'>
        <h2>TOYOTA HILUX REVO</h2>
        <h4>รุ่นรถสำหรับรถบ้าน</h4>
        <h3>2.4 ENTRY 2WD A/T</h3>
        <h3>2.8 ENTRY 2WD M/T</h3>
        <h3>2.8 ENTRY 4WD M/T</h3>
        <h3>2.8 ENTRY 4WD A/T</h3>
      </div>
      <div id='bothcar-detail-champ' className='bothcar-detail'>
        <h2>TOYOTA HILUX CHAMP</h2>
        <h4>รุ่นรถสำหรับรถบ้าน</h4>
        <h3>2.4 Diesel AT LWB</h3>
      </div>
      <div id='bothcar-detail-mitsubishi' className='bothcar-detail'>
        <h2>ALL-NEW TRITON 2023</h2>
        <h4>รุ่นรถสำหรับรถบ้าน</h4>
        <h3>2.4 PRO 4WD A/T</h3>
      </div>
      <img id='bothcar-img-toyota' className='bothcar-img-toyota' src="img_index/Toyota.png" onClick={() => { selectmenu(2) }} alt="" />
      <img id='bothcar-img-champ' className='bothcar-img-champ' src="img_index/Toyota_champ.png" onClick={() => { selectmenu(4) }} alt="" />
      <img id='bothcar-img-mitsubishi' className='bothcar-img-mitsubishi' src="img_index/Mitsubishi.png" onClick={() => { selectmenu(3) }} alt="" />
    </div>
  )
}

export default BothCar
