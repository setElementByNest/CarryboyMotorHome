import './App.css'
import MenuSub from './components/MenuSub'
import Pop1 from './components/Pop1'
import Pop2 from './components/Pop2'
import Pop3 from './components/Pop3'
import Banner from './components/Banner'
import Option_1 from './components/Option'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Features from './components/Features'
import BothCar from './components/BothCar'
import Interior_2 from './components/Interior_2'
import Popup from './components/Popup'
import CarExplan from './components/CarExplan'
import Dimension from './components/Dimension'
function App() {
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
        <Banner/>
        <div className='subseen1'>
          <h3>Carryboy Motorhome</h3>
          <p>“รถบ้านแครี่บอย อีกทางเลือกสำหรับผู้แสวงหาการท่องเที่ยวแบบไร้ขีดจำกัด”</p>
        </div>
        <MenuSub />
        <BothCar />
        <Interior_2 />
        <Dimension />
        <Pop1 />
        <Features />
        <CarExplan />
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
