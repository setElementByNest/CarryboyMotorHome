import './App.css'
import Nav from './components/nav/NavTH'
import SliderBanner from './components/banner/BannerSlideTH'
import BothCar from './components/showCar/BothCar'
import Interior_2 from './components/allpart/Interior_2TH'
import Dimension from './components/dimension/DimensionTH'
import Features from './components/features/FeaturesTH'
import CarExplan from './components/features/CarExplanTH'
import Smart from './components/smart/SmartTH'
import Option_1 from './components/option/OptionTH'
import Footer from './components/footer/FooterTH'
import Pop1 from './components/showPop/Pop1'
import Pop2 from './components/showPop/Pop2'
import Pop3 from './components/showPop/Pop3'
import Popup from './components/showPop/Popup'
function App() {
  const slides = [
    {
      id: 0,
      image: '/img_index/banner/newBanner01.jpg',
      imagem: '/img_index/banner/newBanner01-m.jpg',
      caption: 'รถบ้านแครี่บอย',
      sub: "สนุกไปกับการเดินทางแบบอิสระ ลุยสถานที่สวยงามและทางที่ผจญภัยไปกับรถบ้านแครี่บอย!",
      link: "https://carryboymotorhome.com/buildrv.html",
    },
    {
      id: 3,
      image: '/img_index/banner/newBanner04.jpg',
      imagem: '/img_index/banner/newBanner04-m.jpg',
      caption: 'ไฟส่องสว่างข้างรถ',
      sub: "บอกลาข้อจำกัดตามฤดูกาล! ไฟ LED ประหยัดพลังงานของเราช่วยให้มั่นใจว่าต้นไม้ของคุณจะได้รับแสงสว่างในปริมาณที่เหมาะสมตลอดทั้งปี",
      link: "https://carryboymotorhome.com/buildrv.html",
    },
    {
      id: 1,
      image: '/img_index/banner/newBanner03.jpg',
      imagem: '/img_index/banner/newBanner03-m.jpg',
      caption: 'ระบบอัจฉริยะ',
      sub: "ระบบอัจฉริยะที่จะช่วยเพิ่มความสะดวกสบายให้กับการใช้ชีวิตในการผจญภัยไปกับรถบ้านแครี่บอย",
      link: "#smart",
    },
    {
      id: 2,
      image: '/img_index/banner/newBanner02.jpg',
      imagem: '/img_index/banner/newBanner02-m.jpg',
      caption: 'การออกแบบภายใน',
      sub: "ภายในหรูหราพร้อมสิ่งอำนวยความสะดวกครบครัน",
      link: "#interior2",
    },
    {
      id:  4,
      image: '/img_index/banner/newBanner05.jpg',
      imagem: '/img_index/banner/newBanner05-m.jpg',
      caption: 'Slide-in',
      sub: "รถแคมป์ปิ้งขนาดกะทัดรัดที่สามารถติดตั้งบนเตียงรถกระบะได้",
      link: "https://carryboymotorhome.com/buildrv.html",
    },
  ];
  return (
    <>
      <Nav />
      <div style={{
        overflowY: 'hidden',
        overflowX: 'hidden',
        height: '100%'
      }}
        onScroll={function () {
          //console.log(document.getElementById('contents').scrollTop)
          if (document.getElementById('contents').scrollTop > 170) {
            document.getElementById('car1_detail').style.right = 0
          }
          if (document.getElementById('contents').scrollTop > 350) {
            document.getElementById('car2_detail').style.left = 0
          }
        }}
        id='contents'>
        {/* <Banner/> */}
        <SliderBanner slides={slides} />
        <div className='subseen1'>
          <h3>Carryboy Motorhome</h3>
          <p>“รถบ้านแครี่บอย อีกทางเลือกสำหรับผู้แสวงหาการท่องเที่ยวแบบไร้ขีดจำกัด”</p>
        </div>
        <BothCar />
        <Interior_2 />
        <Dimension />
        <Pop1 />
        <Features />
        <CarExplan />
        <Smart />
        <Option_1 />
        <Footer />
        <div className="blurback" id='blurback' onClick={function () {
          document.getElementById('pop1').style.display = 'none';
          document.getElementById('pop2').style.display = 'none';
          document.getElementById('pop3').style.display = 'none';
          document.getElementById('blurback').style.display = 'none'
          sessionStorage.setItem("img_now_x", 1);
          sessionStorage.setItem("img_now_i", 1);
        }}>
        </div>
        <Pop2 />
        <Pop3 />
        <Popup />
      </div>

    </>
  )
}

export default App
