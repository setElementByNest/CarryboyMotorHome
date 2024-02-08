import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Nav from './assets/fixed/Nav'
import Search from './assets/customer/Search'
import List from './assets/customer/List'
import Detail from './assets/customer/Detail'
import Topbar from './assets/fixed/Topbar'
import SearchID from './assets/edit/SearchID'
import PageEdit from './assets/edit/PageEdit'

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
const dataJSON = [{
  id: '',
  name: '',
  lastname: '',
  phone: '',
  email: '',
  brand: '',
  model: '',
  laminate: '',
  reartype: '',
  aircon: '',
  battery: '',
  powergen: '',
  rearbox: '',
  kitchen: '',
  suspension: '',
  finance: '',
  legalentity: '',
  seller: '',
  discount: '',
  status: ''
}]
function App() {
  const [dataorder, setdataorder] = useState<Dataorder[]>([]);
  const [dataSearch, setSearch] = useState<string>("");
  const [typeSearch, setTypeSearch] = useState<number>(1);
  const [datafilter, setdatafilter] = useState<Dataorder[]>([]);
  const [selectData, setselectData] = useState<Dataorder[]>([]);
  const [dataedit, setdataedit] = useState<Dataorder[]>(dataJSON);
  function datafilted(key: string) {
    let res: Dataorder[] = []
    switch (typeSearch) {
      case 1:
        res = dataorder.filter(data => data.id.includes(key));
        break;
      case 2:
        res = dataorder.filter(data => data.name.includes(key));
        break;
      case 3:
        res = dataorder.filter(data => data.phone.includes(key));
        break;
    }
    setdatafilter(res);
  }
  function showdata(id: string) {
    let resshow2: Dataorder[] = dataorder.filter(data => data.id.includes(id));
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
    const navid1 = document.getElementById('navmenu1') as HTMLElement;
    const navid2 = document.getElementById('navmenu2') as HTMLElement;
    const navid3 = document.getElementById('navmenu3') as HTMLElement;
    const navid4 = document.getElementById('navmenu4') as HTMLElement;
    const navid5 = document.getElementById('navmenu5') as HTMLElement;
    const navid6 = document.getElementById('navmenu6') as HTMLElement;
    const navcss = "width: 80%; padding: 4% 10%; border-bottom: #00000022 solid 1px; color: #ffffff; cursor: pointer; font-weight: 200;"
    navid1.style.cssText = navcss
    navid2.style.cssText = navcss
    navid3.style.cssText = navcss
    navid4.style.cssText = navcss
    navid5.style.cssText = navcss
    navid6.style.cssText = navcss
    const navnow = document.getElementById(id) as HTMLElement;
    navnow.style.cssText = "background: #1990ff; font-weight: 400;"
    const idcustomer = document.getElementById('page-customer') as HTMLElement;
    const idedit = document.getElementById('page-edit') as HTMLElement;
    switch (id) {
      case 'navmenu2':
        idcustomer.style.display = 'flex';
        idedit.style.display = 'none';
        break;
      case 'navmenu3':
        idcustomer.style.display = 'none';
        idedit.style.display = 'flex';
        break;
      default:
        idcustomer.style.display = 'none';
        idedit.style.display = 'none';
        break;
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/data').then((res) => {
      setdataorder(res.data as Dataorder[]);
    });
  }, [1])

  return (
    <>
      <Nav datafilted={datafilted} onClickNav={onClickNav} showdata={showdata}/>
      <Topbar />
      <div className='app-page' id='page-customer'>
        <div className='app-content-1'>
          <Search setSearch={setSearch} dataSearch={dataSearch} datafilted={datafilted} setTypeSearch={setTypeSearch} typeSearch={typeSearch} />
          <List datafilter={datafilter} showdata={showdata} />
        </div>
      </div>
      <div className='app-page' id='page-edit'>
        <div className='app-content-1'>
          <SearchID showdata={showdata} />
          <PageEdit selectData={selectData} dataedit={dataedit} setdataedit={setdataedit} showdata={showdata}/>
        </div>
      </div>
      <Detail selectData={selectData} showdata={showdata} onClickNav={onClickNav}/>
    </>
  )
}

export default App
