import './App.css'
import CarVS from './components/CarVS'
import MenuSub from './components/MenuSub'
import Pop1 from './components/Pop1'
import Pop2 from './components/Pop2'
import Pop3 from './components/Pop3'
import Interior_1 from './components/Interior_1'
import Exterior_1 from './components/Exterior_1'
import Banner from './components/Banner'
import Option_1 from './components/Option'
import Footer from './components/Footer'
import Nav from './components/Nav'
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
          A Recreational Vehicle (RV) that offers the amenities of a hotel suite minus the expensive daily billing and service charges
        </div>
        <CarVS />
        <MenuSub />
        <Interior_1 />
        <Exterior_1 />
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
        <Pop1 />
        <Pop2 />
        <Pop3 />
      </div>

    </>
  )
}

export default App
