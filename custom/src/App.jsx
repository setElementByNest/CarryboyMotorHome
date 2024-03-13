import Nav from './components/Nav'
import React, { useState, useEffect } from 'react'
import Notic from './components/Notic'
import Vehicle from './components/Furniture/Vehicle'
import Laminate from './components/Furniture/Laminate'
import Reartype from './components/Furniture/Reartype'
import Air from './components/Furniture/Air'
import Battery from './components/Furniture/Battery'
import Generator from './components/Furniture/Generator'
import Rearbox from './components/Furniture/Rearbox'
import Kitchen from './components/Furniture/Kitchen'
import Suspension from './components/Furniture/Suspension'
import Nextcustom from './components/Nextcustom'
import Listrv from './components/Listrv'
import Switchpayment from './components/Switchpayment'
import Finance from './components/Finance'
import Formmail from './components/Formmail'
import Popdiscount from './components/Popdiscount'
import firebase from './assets/utils/firebase'
import { collection, onSnapshot, doc, updateDoc, addDoc, setDoc } from 'firebase/firestore'
import './App.css'

function App() {

  const dataJSON = {
    id: '',
    name: '',
    lastname: '',
    phone: '',
    email: '',
    brand: 'TOYOTA HILUX REVO',
    model: '2.4 ENTRY 2WD A/T',
    laminate: 'Lite',
    reartype: 'Counter',
    aircon: 'Standard',
    battery: '9,600 Wh',
    powergen: 'Standard',
    rearbox: 'Mat Black',
    kitchen: 'No',
    suspension: 'Standard',
    finance: 'Cash',
    legalentity: 'No',
    seller: '-',
    discount: '0',
    status: 'Wait',
  }
  const priceJSON = {
    model: 2038000,
    laminate: 0,
    reartype: 0,
    aircon: 0,
    battery: 0,
    powergen: 0,
    rearbox: 0,
    kitchen: 0,
    suspension: 0,
  }
  const includePriceJSON = {
    REVO2WDAT: '0',
    REVO2WDMT: '0',
    REVO4WDMT: '0',
    REVO4WDAT: '0',
    CHAMP4WDAT: '0',
    TRITON4WDAT: '0',
    LITE: '0',
    CLASSIC: '0',
    COUNTER: '0',
    WARDROBE: '0',
    AIRSTANDARD: '0',
    AIRHARRIER: '0',
    BAT1: '0',
    BAT2: '0',
    BAT3: '0',
    GENSTANDARD: '0',
    GENDOMETIC: '0',
    BLACK: '0',
    WHITE: '0',
    KITYES: '0',
    KITNO: '0',
    SUSSTANDARD: '0',
    SUSAC: '0'
  }

  const [allData, setAllData] = useState(dataJSON);
  const [allPrice, setAllPrice] = useState(priceJSON);
  const [includePrice, setIncludePrice] = useState(includePriceJSON);
  const monthAbbreviations = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
  };
  function nowdate() {
    const d = new Date()
    let text = d.toDateString()
    const dateComponents = text.split(" ")
    const month = dateComponents[1]
    const monthNumeric = monthAbbreviations[month]
    const day = dateComponents[2]

    let year = dateComponents[3]
    year = year.slice(-2)
    //console.log("MH" + year + monthNumeric + day)
    return ("MH" + year + monthNumeric + day)
  }
  useEffect(() => {
    let res = []
    let arrTempD = [];
    let find = nowdate();
    let newIDcreate = ''
    onSnapshot(
      collection(firebase, "customer"), (snapshot) => {
        snapshot.docs.map((doc) => {
          arrTempD.push(doc.data());
        });
        for (let i = 0; i < arrTempD.length; i++) {
          if (arrTempD[i].id.includes(find)) {
            res = [...res, arrTempD[i]];
          }
        };
        let nFind = res.length;
        if (nFind > 0 && nFind < 10) {
          newIDcreate = find + "0" + (nFind + 1);
        }
        if (nFind > 10) {
          newIDcreate = find + (nFind + 1);
        }
        if (nFind == 0) {
          newIDcreate = find + "01";
        }
        let randString = ''
        for (let i = 0; i < 2; i++) {
          let rand = Math.floor(Math.random() * 15);
          randString = randString + rand.toString(16).toUpperCase();
        }
        setAllData(prevState => ({ ...prevState, id: (newIDcreate + randString) }));
        arrTempD = [];
      });
    onSnapshot(
      collection(firebase, "price"), (snapshot) => {
        let priceArr = [];
        snapshot.docs.map((doc) => {
          priceArr.push(doc.data());
          //setIncludePrice(prevState => ({ ...prevState, id: doc.data() }));
        });
        for (let i = 0; i < priceArr.length; i++) {
          if (priceArr[i].collection == 'vehicle') {
            setIncludePrice(prevState => ({ ...prevState, REVO2WDAT: priceArr[i].REVO2WDAT }));
            setIncludePrice(prevState => ({ ...prevState, REVO2WDMT: priceArr[i].REVO2WDMT }));
            setIncludePrice(prevState => ({ ...prevState, REVO4WDMT: priceArr[i].REVO4WDMT }));
            setIncludePrice(prevState => ({ ...prevState, REVO4WDAT: priceArr[i].REVO4WDAT }));
            setIncludePrice(prevState => ({ ...prevState, CHAMP4WDAT: priceArr[i].CHAMP4WDAT }));
            setIncludePrice(prevState => ({ ...prevState, TRITON4WDAT: priceArr[i].TRITON4WDAT }));
          }
          if (priceArr[i].collection == 'laminate') {
            setIncludePrice(prevState => ({ ...prevState, LITE: priceArr[i].LITE }));
            setIncludePrice(prevState => ({ ...prevState, CLASSIC: priceArr[i].CLASSIC }));
          }
          if (priceArr[i].collection == 'reartype') {
            setIncludePrice(prevState => ({ ...prevState, COUNTER: priceArr[i].COUNTER }));
            setIncludePrice(prevState => ({ ...prevState, WARDROBE: priceArr[i].WARDROBE }));
          }
          if (priceArr[i].collection == 'aircon') {
            setIncludePrice(prevState => ({ ...prevState, AIRSTANDARD: priceArr[i].AIRSTANDARD }));
            setIncludePrice(prevState => ({ ...prevState, AIRHARRIER: priceArr[i].AIRHARRIER }));
          }
          if (priceArr[i].collection == 'battery') {
            setIncludePrice(prevState => ({ ...prevState, BAT1: priceArr[i].BAT1 }));
            setIncludePrice(prevState => ({ ...prevState, BAT2: priceArr[i].BAT2 }));
            setIncludePrice(prevState => ({ ...prevState, BAT3: priceArr[i].BAT3 }));
          }
          if (priceArr[i].collection == 'powergen') {
            setIncludePrice(prevState => ({ ...prevState, GENSTANDARD: priceArr[i].GENSTANDARD }));
            setIncludePrice(prevState => ({ ...prevState, GENDOMETIC: priceArr[i].GENDOMETIC }));
          }
          if (priceArr[i].collection == 'rearbox') {
            setIncludePrice(prevState => ({ ...prevState, BLACK: priceArr[i].BLACK }));
            setIncludePrice(prevState => ({ ...prevState, WHITE: priceArr[i].WHITE }));
          }
          if (priceArr[i].collection == 'kitchen') {
            setIncludePrice(prevState => ({ ...prevState, KITYES: priceArr[i].KITYES }));
            setIncludePrice(prevState => ({ ...prevState, KITNO: priceArr[i].KITNO }));
          }
          if (priceArr[i].collection == 'suspension') {
            setIncludePrice(prevState => ({ ...prevState, SUSSTANDARD: priceArr[i].SUSSTANDARD }));
            setIncludePrice(prevState => ({ ...prevState, SUSAC: priceArr[i].SUSAC }));
          }
          //console.log(includePrice)
        };
      }
    );
  }, [1])

  const sentToFirebase = async () => {
    try {
      await setDoc(doc(collection(firebase, "customer"), allData.id), allData);
    } catch (e) {
      console.error(e);
    }
  }

  const numtostr = (x) => {
    let xs = String(x)
    let lx = xs.length
    let xrt = ""
    if (xs == 0) {
      xrt = "Included"
    }
    else {
      for (let i = 0; i < lx; i++) {
        if (lx - 3 == i) {
          xrt += ","
        }
        if (lx - 6 == i && lx > 6) {
          xrt += ","
        }
        xrt += xs[i]
      }
      xrt += " THB"
    }
    return xrt
  }

  return (
    <>
      <Nav numtostr={numtostr} allPrice={allPrice} />
      <div className='content'>
        <div className='content-img' id='content-img'></div>
        <div className='content-data'>
          <div className='content-custom' id='contentcustom'>
            <h1 id='content-custom'>Build Your RV</h1>
            <Notic allPrice={allPrice} />
            <Vehicle numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Laminate numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Reartype numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Air numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Battery numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Generator numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Rearbox numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Kitchen numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Suspension numtostr={numtostr} setAllData={setAllData} setAllPrice={setAllPrice} includePrice={includePrice}/>
            <Nextcustom allData={allData} />
          </div>
          <div className='content-payment' id='content-payment'>
            <div className='payment-back' onClick={() => {
              document.getElementById('content-payment').style.top = '100%';
              document.getElementById('contentcustom').scrollTop = '0';
            }}>
              <i className='material-icons'>&#xe5cb;</i> Edit Your RV</div>
            <Listrv numtostr={numtostr} allData={allData} allPrice={allPrice} />
            <Switchpayment />
            <Finance numtostr={numtostr} allPrice={allPrice} setAllData={setAllData} />
            <Formmail numtostr={numtostr} setAllData={setAllData} allData={allData} allPrice={allPrice} sentToFirebase={sentToFirebase} />
            <Popdiscount numtostr={numtostr} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
