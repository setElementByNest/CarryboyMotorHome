import React from 'react'
import './Finance.css'

sessionStorage.setItem('discount', '0');
sessionStorage.setItem('seller', '');
sessionStorage.setItem('financetype', 'Cash');
sessionStorage.setItem('loan', '');

function Finance({ costtern, numtostr }) {
    function financeoption(x) {
        switch (x) {
            case 'Cash':
                document.getElementById('finance-switch-1').style.background = '#ffffff';
                document.getElementById('finance-switch-1').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('finance-switch-2').style.background = 'none';
                document.getElementById('finance-switch-2').style.boxShadow = 'none';
                document.getElementById('loan').style.display = 'none';
                sessionStorage.setItem('loan', '');
                sessionStorage.setItem('financetype', 'Cash');
                break;
            case 'Loan':
                document.getElementById('finance-switch-1').style.background = 'none';
                document.getElementById('finance-switch-1').style.boxShadow = 'none';
                document.getElementById('finance-switch-2').style.background = '#ffffff';
                document.getElementById('finance-switch-2').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('loan').style.display = 'block';
                sessionStorage.setItem('loan', '24 months');
                sessionStorage.setItem('financetype', 'Loan');
                costtern(1);
                break;

        }
    }
    function openlogin(){
        document.getElementById('popdiscount').style.display = 'flex';
        document.getElementById('popdiscount-login').style.display = 'flex';
        document.getElementById('popdiscount-cal').style.display = 'none';
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
                    <h3>Price before savings</h3>
                    <h4 id='finance-namecost-before'>--</h4>
                </div>
                <div className='finance-namecost'>
                    <h3>Discount <span className='finance-login' onClick={openlogin}>Log in</span></h3>
                    <h4 id='finance-namecost-discount'>0 THB</h4>
                </div>
                <div className='finance-namecost'>
                    <h3>Price after savings</h3>
                    <h4 id='finance-namecost-after'>--</h4>
                </div>
            </div>
            <div style={{ margin: '20px 0' }} id='loan'>
                <div className='finance-namecost'>
                    <h3>Downpayment 25%</h3>
                    <h4 id='finance-downpayment'>--</h4>
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
                        <h4 id='finance-loan'>--</h4>
                        <h4 style={{ margin: '0 0 0 5px' }}> /month</h4>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Finance
