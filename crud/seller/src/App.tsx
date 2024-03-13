// import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Nav from './assets/fixed/Nav'
import Search from './assets/customer/Search'
import List from './assets/customer/List'
import Detail from './assets/customer/Detail'
import Topbar from './assets/fixed/Topbar'
import SearchID from './assets/edit/SearchID'
import PageEdit from './assets/edit/PageEdit'
import Addfile from './assets/pay/Addfile'
import Connect from './assets/login/Connect'
import Print from './assets/print/Print'
import PrintBT from './assets/print/PrintBT'
import firebase from './assets/utils/firebase'
import { collection, onSnapshot, doc, updateDoc, setDoc } from 'firebase/firestore'
import ChangePass from './assets/login/ChangePass'
import PriceSet from './assets/price/PriceSet'

interface Dataorder {
  id: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  laminate: string;
  reartype: string;
  aircon: string;
  battery: string;
  powergen: string;
  rearbox: string;
  kitchen: string;
  suspension: string;
  finance: string;
  legalentity: string;
  seller: string;
  discount: string;
  status: string;
}
interface sellerIntf {
  id: string;
  name: string;
  lastname: string;
  user: string;
  password: string;
}
interface editChangeIntf {
  database: string;
  id: string;
  column: string;
  value: string;
}
interface includePriceIntf {
  collection: string;
  REVO2WDAT: string;
  REVO2WDMT: string;
  REVO4WDMT: string;
  REVO4WDAT: string;
  CHAMP4WDAT: string;
  TRITON4WDAT: string;
  LITE: string;
  CLASSIC: string;
  COUNTER: string;
  WARDROBE: string;
  AIRSTANDARD: string;
  AIRHARRIER: string;
  BAT1: string;
  BAT2: string;
  BAT3: string;
  GENSTANDARD: string;
  GENDOMETIC: string;
  BLACK: string;
  WHITE: string;
  KITYES: string;
  KITNO: string;
  SUSSTANDARD: string;
  SUSAC: string;
}
interface editChangeIntf {
  database: string;
  id: string;
  column: string;
  value: string;
}

const dataSellerJSON = {
  id: '',
  name: '',
  lastname: '',
  user: '',
  password: '',
}

const editChangeJSON = {
  database: '',
  id: '',
  column: '',
  value: '',
}
// const priceJSON = [{
//   revo2A: 2038000,
//   revo2M: 2043000,
//   revo4M: 2148000,
//   revo4A: 2200000,
//   champ: 1997000,
//   triton: 2170000,
//   airharrier: 67500,
//   battery: 95000,
//   kitchen: 45000,
//   suspension: 95000
// }]

const includePriceJSON = {
  collection: '',
  REVO2WDAT: '',
  REVO2WDMT: '',
  REVO4WDMT: '',
  REVO4WDAT: '',
  CHAMP4WDAT: '',
  TRITON4WDAT: '',
  LITE: '',
  CLASSIC: '',
  COUNTER: '',
  WARDROBE: '',
  AIRSTANDARD: '',
  AIRHARRIER: '',
  BAT1: '',
  BAT2: '',
  BAT3: '',
  GENSTANDARD: '',
  GENDOMETIC: '',
  BLACK: '',
  WHITE: '',
  KITYES: '',
  KITNO: '',
  SUSSTANDARD: '',
  SUSAC: ''
}

function App() {
  const [dataorder, setdataorder] = useState<Dataorder[]>([]);
  const [dataseller, setdataseller] = useState<sellerIntf[]>([]);
  const [datasellerNow, setdatasellerNow] = useState<sellerIntf>(dataSellerJSON);
  const [editChange, setEditChange] = useState<editChangeIntf[]>([]);
  const [editSellerChange, setEditSellerChange] = useState<editChangeIntf>(editChangeJSON);
  const [dataSearch, setSearch] = useState<string>("");
  const [typeSearch, setTypeSearch] = useState<number>(1);
  const [datafilter, setdatafilter] = useState<Dataorder[]>([]);
  const [selectData, setselectData] = useState<Dataorder[]>([]);
  const [disLog, setDisLog] = useState<boolean>(true)
  const [includePrice, setIncludePrice] = useState<includePriceIntf>(includePriceJSON);

  const docId = "MH24021101";
  const newData = {
    id: docId,
    name: "Bay T",
    lastname: "Vo",
    phone: "+61402829188",
    email: "tbfurniturevic@gmail.com",
    brand: "TOYOTA HILUX REVO",
    model: "2.8 ENTRY 4WD A/T",
    laminate: "Lite",
    reartype: "Counter",
    aircon: "HARRIER plus",
    battery: "28,800 Wh",
    powergen: "Dometic",
    rearbox: "Mat Black",
    kitchen: "Yes",
    suspension: "AC-POWER",
    finance: "Cash",
    legalentity: "No",
    seller: "-",
    discount: "0",
    status: "Wait",
  };
  const docRef = doc(firebase, "customerx", docId);
  const addDataToFirestore = async () => {
    try {
      // Use the addDoc function to add data to the collection
      await setDoc(docRef, newData);
      console.log("Document written with ID: ", docId);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  function datafilted(key: string) {
    let res: Dataorder[] = []
    for (let i = 0; i < dataorder.length; i++) {
      switch (typeSearch) {
        case 1:
          if (dataorder[i].id.includes(key)) {
            res = [...res, dataorder[i]];
          }
          break;
        case 2:
          if (dataorder[i].name.includes(key)) {
            res = [...res, dataorder[i]];
          }
          break;
        case 3:
          if (dataorder[i].phone.includes(key)) {
            res = [...res, dataorder[i]];
          }
          break;
      }
    };
    setdatafilter(res);
  }
  function showdata(id: string) {
    let resshow2: Dataorder[] = [];
    for (let i = 0; i < dataorder.length; i++) {
      if (dataorder[i].id.includes(id)) {
        resshow2 = [...resshow2, dataorder[i]];
      }
    }

    if (resshow2.length != 0) {
      if (resshow2[0].id == id) {
        setselectData(resshow2);
        // console.log(resshow2[0]);
      } else {
        setselectData([]);
        // console.log("Not match !?");
      }
    } else {
      console.log("Empty");
    }
  }

  const onClickNav = (id: string) => {
    let arrTempD: Dataorder[] = [];
    onSnapshot(collection(firebase, "customer"), (snapshot) => {
      snapshot.docs.map((doc) => {
        arrTempD.push(doc.data() as Dataorder);
        // console.log(doc.data());
      });
      setdataorder(arrTempD);
      setdatafilter(arrTempD);
      arrTempD = [];
    });
    const navid1 = document.getElementById('navmenu1') as HTMLElement;
    const navid2 = document.getElementById('navmenu2') as HTMLElement;
    const navid3 = document.getElementById('navmenu3') as HTMLElement;
    // const navid4 = document.getElementById('navmenu4') as HTMLElement;
    const navid5 = document.getElementById('navmenu5') as HTMLElement;
    const navid6 = document.getElementById('navmenu6') as HTMLElement;
    // const navid6 = document.getElementById('navmenu6') as HTMLElement;
    const navcss = "width: 80%; padding: 4% 10%; border-bottom: #00000022 solid 1px; color: #ffffff; font-weight: 200; "
    navid1.style.cssText = navcss + "cursor: pointer;"
    navid2.style.cssText = navcss + "cursor: pointer;"
    navid3.style.cssText = navcss + "cursor: progress;"
    // navid4.style.cssText = navcss
    navid5.style.cssText = navcss + "cursor: progress;"
    navid6.style.cssText = navcss + "cursor: pointer;"
    // navid6.style.cssText = navcss
    setEditChange([]);
    const navnow = document.getElementById(id) as HTMLElement;
    navnow.style.cssText = "background: #1990ff; font-weight: 400;" + (id == 'navmenu1' || id == 'navmenu2' ? "" : " cursor: not-allowed;");
    const idoverall = document.getElementById('page-overall') as HTMLElement;
    const idcustomer = document.getElementById('page-customer') as HTMLElement;
    const idedit = document.getElementById('page-edit') as HTMLElement;
    const idepay = document.getElementById('page-pay') as HTMLElement;
    const ideprint = document.getElementById('page-print') as HTMLElement;
    const idpriceset = document.getElementById('page-priceset') as HTMLElement;
    switch (id) {
      case 'navmenu1':
        idoverall.style.display = 'flex';
        idcustomer.style.display = 'none';
        idedit.style.display = 'none';
        idepay.style.display = 'none';
        ideprint.style.display = 'none';
        idpriceset.style.display = 'none';
        break;
      case 'navmenu2':
        idoverall.style.display = 'none';
        idcustomer.style.display = 'flex';
        idedit.style.display = 'none';
        idepay.style.display = 'none';
        ideprint.style.display = 'none';
        idpriceset.style.display = 'none';
        break;
      case 'navmenu3':
        idoverall.style.display = 'none';
        idcustomer.style.display = 'none';
        idedit.style.display = 'flex';
        idepay.style.display = 'none';
        ideprint.style.display = 'none';
        idpriceset.style.display = 'none';
        break;
      // case 'navmenu4':
      //   idoverall.style.display = 'none';
      //   idcustomer.style.display = 'none';
      //   idedit.style.display = 'none';
      //   idepay.style.display = 'flex';
      //   ideprint.style.display = 'none';
      //   break;
      case 'navmenu5':
        idoverall.style.display = 'none';
        idcustomer.style.display = 'none';
        idedit.style.display = 'none';
        idepay.style.display = 'none';
        ideprint.style.display = 'flex';
        idpriceset.style.display = 'none';
        break;
      case 'navmenu6':
        idoverall.style.display = 'none';
        idcustomer.style.display = 'none';
        idedit.style.display = 'none';
        idepay.style.display = 'none';
        ideprint.style.display = 'none';
        idpriceset.style.display = 'flex';
        break;
      case '##########':
        addDataToFirestore();
        break;
      default:
        idoverall.style.display = 'none';
        idcustomer.style.display = 'none';
        idedit.style.display = 'none';
        idepay.style.display = 'none';
        ideprint.style.display = 'none';
        idpriceset.style.display = 'none';
        break;
    }
    const classAppContent1Elements = document.getElementsByClassName("app-content-1");

    for (let i = 0; i < classAppContent1Elements.length; i++) {
      const element = classAppContent1Elements[i] as HTMLElement;
      element.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  // useEffect(() => {
  //   axios.get('https://carryboyserver-motorhome.web.app:3001/data').then((res) => {
  //     setdataorder(res.data as Dataorder[]);
  //   });
  //   axios.get('https://carryboyserver-motorhome.web.app:3001/seller').then((res) => {
  //     setdataseller(res.data as sellerIntf[]);
  //     console.log(res.data);
  //   });
  // }, [1])

  useEffect(() => {
    let arrTempS: sellerIntf[] = [];
    let arrTempD: Dataorder[] = [];
    let priceArr: includePriceIntf[] = [];
    onSnapshot(collection(firebase, "seller"), (snapshot) => {
      snapshot.docs.map((doc) => {
        arrTempS.push(doc.data() as sellerIntf);
        // console.log(doc.data());
      });
      setdataseller(arrTempS);
      arrTempS = [];
    });
    onSnapshot(collection(firebase, "customer"), (snapshot) => {
      snapshot.docs.map((doc) => {
        arrTempD.push(doc.data() as Dataorder);
        // console.log(doc.data());
      });
      setdataorder(arrTempD);
      arrTempD = [];
    });
    onSnapshot(
      collection(firebase, "price"), (snapshot) => {
        snapshot.docs.map((doc) => {
          priceArr.push(doc.data() as includePriceIntf);
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

  const numtostr = (x: number) => {
    let xs: string = String(x)
    let lx: number = xs.length
    let xrt: string = ""
    if (lx == 0) {
      xrt = "Included"
    }
    else {
      for (let i = 0; i < lx; i++) {
        if (lx - 3 == i && lx > 3) {
          xrt += ","
        }
        if (lx - 6 == i && lx > 6) {
          xrt += ","
        }
        xrt += xs[i]
      }
      //xrt += " THB"
    }
    return xrt
  }

  const fnEditChange = () => {
    if (editChange.length > 0) {
      editChange.map(async (item) => {
        const documentRef = doc(firebase, "customer", item.id);
        const newData = {
          [item.column]: item.value
        }
        try {
          await updateDoc(documentRef, newData);
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      })
    }
  }
  const fnEditChangeSeller = async () => {
    if (editSellerChange.id != '') {
      const documentRef = doc(firebase, "seller", editSellerChange.id);
      const newData = {
        [editSellerChange.column]: editSellerChange.value
      }
      try {
        await updateDoc(documentRef, newData);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  }
  const fnEditChangePrice = async (data: editChangeIntf[]) => {
    if (data.length != 0) {
      data.map(async (item) => {
        const documentRef = doc(firebase, "price", item.id);
        const newData = {
          [item.column]: item.value
        }
        try {
          await updateDoc(documentRef, newData);
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      })
    }
  }
  return (
    <>
      <Nav datafilted={datafilted} onClickNav={onClickNav} showdata={showdata} />
      <Topbar disLog={disLog} />
      <div className='app-page' id='page-overall'>
        <div className='app-content-1'>
          <Connect dataseller={dataseller} onClickNav={onClickNav} showdata={showdata} datafilted={datafilted} setDisLog={setDisLog} setdatasellerNow={setdatasellerNow} />
        </div>
      </div>
      <div className='app-page' id='page-customer'>
        <div className='app-content-1'>
          <Search setSearch={setSearch} dataSearch={dataSearch} datafilted={datafilted} setTypeSearch={setTypeSearch} typeSearch={typeSearch} />
          <List datafilter={datafilter} showdata={showdata} />
        </div>
      </div>
      <div className='app-page' id='page-edit'>
        <div className='app-content-1'>
          {/* <SearchID showdata={showdata} /> */}
          <PageEdit selectData={selectData} showdata={showdata} onClickNav={onClickNav} setEditChange={setEditChange} fnEditChange={fnEditChange} />
        </div>
      </div>
      <div className="app-page" id='page-pay'>
        <div className="app-content-1">
          <SearchID showdata={showdata} />
          < Addfile />
        </div>
      </div>
      <div className="app-page" id='page-print'>
        <div className="app-content-1" id='printcontent'>
          <Print selectData={selectData} />
          <PrintBT onClickNav={onClickNav} />
        </div>
      </div>
      <div className="app-page" id='page-priceset'>
        <div className="app-content-1" id='pricesetcontent'>
          <PriceSet includePrice={includePrice}  fnEditChangePrice={fnEditChangePrice} onClickNav={onClickNav} setIncludePrice={setIncludePrice}/>
        </div>
      </div>
      <Detail selectData={selectData} showdata={showdata} onClickNav={onClickNav} priceJSON={includePrice} numtostr={numtostr} />
      <ChangePass datasellerNow={datasellerNow} setEditSellerChange={setEditSellerChange} fnEditChangeSeller={fnEditChangeSeller} />
    </>
  )
}

export default App
