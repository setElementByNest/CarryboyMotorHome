import React, { useEffect, useState } from 'react'
import './Content.css'
import Notic from './Notic'
import Vehicle from './Vehicle'
import Laminate from './Laminate'
import Reartype from './Reartype'
import Air from './Air'
import Battery from './Battery'
import Generator from './Generator'
import Rearbox from './Rearbox'
import Kitchen from './Kitchen'
import Suspension from './Suspension'
import Nextcustom from './Nextcustom'
import Costlabel from './Costlabel'
import Listrv from './Listrv'
import Switchpayment from './Switchpayment'
import Finance from './Finance'
import Formmail from './Formmail'
import Popdiscount from './Popdiscount'
import axios from 'axios'
/*
import mysql from 'mysql'
import cors from 'cors'
import axios from 'axios'
import express from 'express'


const app = express()
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'motorhome_carryboymotorhome',
    password: 'Nest1007',
    database: 'motorhome_carryboymotorhome'
})

app.get('/', (re, res) => {
    return res.json("From backend side")
})

app.get('/seller', (req, res) => {
    const sql = "SELECT * FROM seller";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8082, () => {
    console.log("listening")
})
*/
function Content() {

  const [dataSeller, setdataSeller] = useState([]);

  const getdata = () => {
    console.log("Next")
    /*
    axios.get('http://localhost:8082/seller').then((response) => {
      setdataSeller(response.data);
      console.log(response.data);

    });*/
  }
  /*  
    useEffect(() => {
      fetch('http://localhost:8082/seller')
      .then(res => res.json())
      .then(data => {setdataSeller(data);})
      .catch(err => console.log(err));
    })
  */

  const calcost = () => {

    let nameBrand = sessionStorage.getItem('namebrand');

    let nameVehicle = sessionStorage.getItem('namevehicle');
    let nameLaminate = sessionStorage.getItem('namelaminate');
    let nameReartype = sessionStorage.getItem('namereartype');
    let nameAir = sessionStorage.getItem('nameair');
    let nameBattery = sessionStorage.getItem('namebat');
    let nameGen = sessionStorage.getItem('namegen');
    let nameRearbox = sessionStorage.getItem('namerearbox');
    let nameKitchen = sessionStorage.getItem('namekitchen');
    let nameSus = sessionStorage.getItem('namesus');

    let costVehicle = Number(sessionStorage.getItem('costvehicle'));
    let costLaminate = Number(sessionStorage.getItem('costlaminate'));
    let costReartype = Number(sessionStorage.getItem('costreartype'));
    let costAir = Number(sessionStorage.getItem('costair'));
    let costBattery = Number(sessionStorage.getItem('costbat'));
    let costGen = Number(sessionStorage.getItem('costgen'));
    let costRearbox = Number(sessionStorage.getItem('costrearbox'));
    let costKitchen = Number(sessionStorage.getItem('costkitchen'));
    let costSus = Number(sessionStorage.getItem('costsus'));

    let sumcostint = costVehicle + costLaminate + costReartype + costAir + costBattery + costGen + costRearbox + costKitchen + costSus;
    let sumcost = numtostr(costVehicle + costLaminate + costReartype + costAir + costBattery + costGen + costRearbox + costKitchen + costSus);

    document.getElementById('list-name-vehical').innerHTML = nameBrand + ' : ' + nameVehicle;
    document.getElementById('list-name-laminate').innerHTML = 'Laminate : ' + nameLaminate;
    document.getElementById('list-name-rtp').innerHTML = 'Rear Type : ' + nameReartype;
    document.getElementById('list-name-air').innerHTML = 'Air Condition : ' + nameAir;
    document.getElementById('list-name-bat').innerHTML = 'Battery : ' + nameBattery;
    document.getElementById('list-name-gen').innerHTML = 'Generator : ' + nameGen;
    document.getElementById('list-name-rbx').innerHTML = 'Rear Box : ' + nameRearbox;
    document.getElementById('list-name-kit').innerHTML = 'Slide Kitchen : ' + nameKitchen;
    document.getElementById('list-name-sus').innerHTML = 'Suspension : ' + nameSus;

    document.getElementById('list-cost-vehical').innerHTML = numtostr(costVehicle);
    document.getElementById('list-cost-laminate').innerHTML = numtostr(costLaminate);
    document.getElementById('list-cost-rtp').innerHTML = numtostr(costReartype);
    document.getElementById('list-cost-air').innerHTML = numtostr(costAir);
    document.getElementById('list-cost-bat').innerHTML = numtostr(costBattery);
    document.getElementById('list-cost-gen').innerHTML = numtostr(costGen);
    document.getElementById('list-cost-rbx').innerHTML = numtostr(costRearbox);
    document.getElementById('list-cost-kit').innerHTML = numtostr(costKitchen);
    document.getElementById('list-cost-sus').innerHTML = numtostr(costSus);

    document.getElementById('nav-cost').innerHTML = sumcost;
    document.getElementById('costlabel').innerHTML = sumcost;
    document.getElementById('list-cost-total').innerHTML = sumcost;
    document.getElementById('finance-namecost-before').innerHTML = sumcost;

    return sumcostint
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

  const costtern = (x) => {
    document.getElementById('finance-term-1').style.outline = 'none';
    document.getElementById('finance-term-2').style.outline = 'none';
    document.getElementById('finance-term-3').style.outline = 'none';
    let sumcost = sessionStorage.getItem('priceafterdis');
    let sumfinance = Math.trunc((sumcost * 0.75 + sumcost * 0.75 * 0.035 * ((x + 1) * 12 / 12)) / ((x + 1) * 12)) + 1;
    document.getElementById('finance-downpayment').innerHTML = numtostr(Math.trunc(Number(sessionStorage.getItem('priceafterdis')) * 0.25));
    document.getElementById('finance-loan').innerHTML = numtostr(sumfinance);
    document.getElementById('finance-term-' + x).style.outline = '#cc0000 solid 2px';
    sessionStorage.setItem('loan', (12 * (1 + x)) + ' months');
  }
  return (
    <div className='content'>
      <div className='content-img' id='content-img'></div>
      <div className='content-data'>
        <div className='content-custom' id='contentcustom'>
          <h1 id='content-custom'>Build Your RV</h1>
          <Notic />
          <Vehicle calcost={calcost} />
          <Laminate calcost={calcost} />
          <Reartype calcost={calcost} />
          <Air calcost={calcost} />
          <Battery calcost={calcost} />
          <Generator calcost={calcost} />
          <Rearbox calcost={calcost} />
          <Kitchen calcost={calcost} />
          <Suspension calcost={calcost} />
          <Nextcustom calcost={calcost} numtostr={numtostr} getdata={getdata} />
          <Costlabel />
        </div>
        <div className='content-payment' id='content-payment'>
          <a href="#content-custom" className='payment-back' onClick={() => {
            document.getElementById('labelcost').style.opacity = '1';
          }}> <i className='material-icons'>&#xe5cb;</i> Edit Your RV</a>
          <Listrv />
          <Switchpayment />
          <Finance costtern={costtern} numtostr={numtostr} />
          <Formmail numtostr={numtostr} />
          <Popdiscount calcost={calcost} numtostr={numtostr} costtern={costtern} dataSeller={dataSeller} />
        </div>
      </div>
    </div>
  )
}

export default Content
