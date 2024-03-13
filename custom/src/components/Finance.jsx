import React, {useState} from 'react'
import './Finance.css'

sessionStorage.setItem('discount', '0');
sessionStorage.setItem('seller', '');
sessionStorage.setItem('loan', '');

function Finance({ numtostr, allPrice, setAllData }) {

    const [nLoan, setNLoan] = useState(0)

    let sumcost = (allPrice.model + allPrice.laminate + allPrice.reartype + allPrice.aircon + allPrice.battery + allPrice.powergen + allPrice.rearbox + allPrice.kitchen + allPrice.suspension);
    let downpay = Math.trunc(sumcost * 0.25);
    let sumfinance = nLoan == 0 ? 0 : Math.trunc((sumcost * 0.75 + sumcost * 0.75 * 0.035 * (nLoan / 12)) / nLoan) + 1;
    const costtern = (x) => {
        document.getElementById('finance-term-1').style.outline = 'none';
        document.getElementById('finance-term-2').style.outline = 'none';
        document.getElementById('finance-term-3').style.outline = 'none';
        document.getElementById('finance-term-' + x).style.outline = '#cc0000 solid 2px';
        setNLoan((x + 1) * 12);
        setAllData(prev => ({...prev, finance: 'Loan ' + ((x + 1) * 12) + ' months'}));
    }
    function financeoption(x) {
        switch (x) {
            case 'Cash':
                document.getElementById('finance-switch-1').style.background = '#ffffff';
                document.getElementById('finance-switch-1').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('finance-switch-2').style.background = 'none';
                document.getElementById('finance-switch-2').style.boxShadow = 'none';
                document.getElementById('loan').style.display = 'none';
                setAllData(prev => ({...prev, finance: 'Cash'}));
                break;
            case 'Loan':
                document.getElementById('finance-switch-1').style.background = 'none';
                document.getElementById('finance-switch-1').style.boxShadow = 'none';
                document.getElementById('finance-switch-2').style.background = '#ffffff';
                document.getElementById('finance-switch-2').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('loan').style.display = 'block';
                setAllData(prev => ({...prev, finance: 'Loan 24 months'}));
                costtern(1);
                break;
        }
    } 
    return (
        <div className='finance'>
            <div className='finance-top'>
                <h2>Finance Option</h2>
            </div>
            <h4>Finance option and terms will be confirmed after order.</h4>
            <div className='finance-switch'>
                <h3 className='finance-switch-n' id='finance-switch-1' onClick={() => { financeoption('Cash') }}>Cash</h3>
                <h3 className='finance-switch-n' id='finance-switch-2' onClick={() => { financeoption('Loan') }}>Loan</h3>
            </div>
            <div>
                <div className='finance-namecost'>
                    <h3>Net price (Vat 7%)</h3>
                    <h4 id='finance-namecost-before'>{numtostr(sumcost)}</h4>
                </div>
                <div className='finance-namecost' style={{ display: 'none' }}>
                    <h3>Discount</h3>
                    <h4 id='finance-namecost-discount'>0 THB</h4>
                </div>
                <div className='finance-namecost' style={{ display: 'none' }}>
                    <h3>Price after savings</h3>
                    <h4 id='finance-namecost-after'>--</h4>
                </div>
            </div>
            <div style={{ margin: '0 0 20px' }} id='loan'>
                <div className='finance-namecost'>
                    <h3>Downpayment 25%</h3>
                    <h4 id='finance-downpayment'>{numtostr(downpay)}</h4>
                </div>
                <div className='finance-namecost'>
                    <h3>Term :</h3>
                    <div className='finance-term' id='finance-term'>
                        <div className='finance-term-n' id='finance-term-1' onClick={() => { costtern(1) }}>24</div>
                        <div className='finance-term-n' id='finance-term-2' onClick={() => { costtern(2) }}>36</div>
                        <div className='finance-term-n' id='finance-term-3' onClick={() => { costtern(3) }}>48</div>
                        <h4>months</h4>
                    </div>
                </div>
                <hr />
                <div className='finance-namecost'>
                    <h3>Loan Payment</h3>
                    <div className='finance-loan'>
                        <h4 id='finance-loan'>{numtostr(sumfinance)}</h4>
                        <h4 style={{ margin: '0 0 0 5px' }}> /month</h4>
                    </div>
                </div>
                <hr />
            </div>
            <div>
                <div className='finance-increatcost'>
                    <h3>Insurance costs and the Act</h3>
                    <h4 id='finance-increat-act'>43,662 THB</h4>
                </div>
                <div className='finance-increatcost'>
                    <h3>Vehicle registration fee</h3>
                    <h4 id='finance-increat-vreg'>20,000 THB</h4>
                </div>
                <div className='finance-increatcost'>
                    <h3>Red license plate (refundable)</h3>
                    <h4 id='finance-increat-license'>3,000 THB</h4>
                </div>
                <hr />
                <div className='finance-increatcost'>
                    <h3 style={{ margin: '2px 0', fontWeight: '400' }}> Total cost at pickup day</h3>
                    <h4 style={{ margin: '2px 0', fontWeight: '400' }} id='finance-increat-all'>66,662 THB</h4>
                </div>
                <hr />


            </div>
        </div>
    )
}

export default Finance
