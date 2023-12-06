import React from 'react'
import './Popdiscount.css'


function Popdiscount({ calcost, numtostr, costtern, dataSeller }) {
    function login2cal() {
        let sellername = document.getElementById('sellername').value;
        let sellerpassword = document.getElementById('sellerpassword').value;
        //let n_dataSeller = dataSeller.length;
        //for (let i = 1; i <= n_dataSeller; i++) {
            //if (sellername == dataSeller[i - 1].name & sellerpassword == dataSeller[i - 1].pass) {
            if (sellername == 'user' & sellerpassword == '1234') {
                document.getElementById('popdiscount-login').style.display = 'none';
                document.getElementById('popdiscount-cal').style.display = 'flex';
                sessionStorage.setItem('discounttype', '%');
                document.getElementById('pricebfdis').innerHTML = numtostr(calcost());
                document.getElementById('priceafterdis').innerHTML = numtostr(calcost());
                document.getElementById('dis-text-link').innerHTML = '-';
                sessionStorage.setItem('discount', '0');
                document.getElementById('pct-numshow').innerHTML = '';
                sessionStorage.setItem('priceafterdis', calcost());
                sessionStorage.setItem('seller', sellername);
            }
            else{
                document.getElementById('login-button').style.background = '#000000';
                setTimeout(() => {document.getElementById('login-button').style.transform = "translate(-25px, 0)"}, 100);
                setTimeout(() => {document.getElementById('login-button').style.transform = "translate(25px, 0)"}, 200);
                setTimeout(() => {document.getElementById('login-button').style.transform = "translate(0, 0)"; document.getElementById('login-button').style.background = '#aa0000';}, 300);

            }
        //}
    }
    function closepopdiscount() {
        document.getElementById('popdiscount').style.display = 'none';
        document.getElementById('sellername').value = '';
        document.getElementById('sellerpassword').value = '';
    }
    function calfunc(x) {
        let numshow = sessionStorage.getItem('discount');
        switch (x) {
            case 'clear':
                sessionStorage.setItem('discount', '0');
                break;
            case 'THB':
                sessionStorage.setItem('discounttype', 'THB');
                document.getElementById('dis-thb').style.background = '#aaaaaa';
                document.getElementById('dis-ps').style.background = '#eeeeee';
                break;
            case '%':
                sessionStorage.setItem('discounttype', '%');
                document.getElementById('dis-ps').style.background = '#aaaaaa';
                document.getElementById('dis-thb').style.background = '#eeeeee';
                break;
            default:
                sessionStorage.setItem('discount', numshow + x);
                break;
        }
        let numshowtype = sessionStorage.getItem('discounttype');
        document.getElementById('pct-numshow').innerHTML = str2cost(sessionStorage.getItem('discount'), numshowtype);
        document.getElementById('dis-text-link').innerHTML = '- ' + str2cost(sessionStorage.getItem('discount'), numshowtype);
        let priceafterdis;
        switch (numshowtype) {
            case 'THB':
                priceafterdis = calcost() - Number(sessionStorage.getItem('discount'));
                break;
            case '%':
                priceafterdis = Math.trunc(calcost() * (1 - Number(sessionStorage.getItem('discount')) / 100));
                break;
        }
        sessionStorage.setItem('priceafterdis', priceafterdis);
        document.getElementById('priceafterdis').innerHTML = str2cost(priceafterdis, 'THB');

    }
    function savefn() {
        document.getElementById('finance-namecost-discount').innerHTML = document.getElementById('dis-text-link').innerHTML;
        document.getElementById('finance-namecost-after').innerHTML = document.getElementById('priceafterdis').innerHTML;
        costtern(1);
        closepopdiscount();
    }
    function str2cost(x, y) {
        let xs = String(Number(x));
        let lx = xs.length;
        let xrt = "";
        if (xs == '0') {
            xrt = "";
            sessionStorage.setItem('discount', '');
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
            xrt += ' ' + y
        }
        return xrt
    }
    return (
        <div className='popdiscount' id='popdiscount'>
            <div className='popdiscount-login' id='popdiscount-login'>
                <h2>Log in</h2>
                <h3>Seller</h3>
                <input type="text" name='sellername' id='sellername' />
                <h3>Password</h3>
                <input type="password" name='sellerpassword' id='sellerpassword' />
                <a href='#content-payment' className='popdiscount-login-button' onClick={login2cal} id='login-button'>Log in</a>
                <a href='#content-payment' className="popdiscount-login-close material-icons" onClick={closepopdiscount}>&#xe5cd;</a>
            </div>
            <div className='popdiscount-cal' id='popdiscount-cal'>
                <div className='popdiscount-cal-show'>
                    <h2>Discount</h2>
                    <div className='dis-text'>
                        <h3>Price before discount</h3>
                        <h3 id='pricebfdis'>100,000 THB</h3>
                    </div>
                    <div className='dis-text'>
                        <h3>Price discount</h3>
                        <h3 id='dis-text-link'>-</h3>
                    </div>
                    <hr />
                    <div className='dis-text'>
                        <h3 style={{ fontWeight: '400', color: '#aa0000' }}>Price after discount</h3>
                        <h3 style={{ fontWeight: '400', color: '#aa0000' }} id='priceafterdis'>99,000 THB</h3>
                    </div>
                    <hr />
                    <div className='dis-button'>
                        <div className='dis-button-c' onClick={closepopdiscount}>Cancel</div>
                        <div className='dis-button-s' onClick={savefn}>Save</div>
                    </div>
                </div>
                <div className='popdiscount-cal-type'>
                    <h2>Control</h2>
                    <div className='pct-numshow' id='pct-numshow'></div>
                    <div className='pct-pad'>
                        <div onClick={() => calfunc('clear')}>Clear</div>
                        <div onClick={() => calfunc('THB')} id='dis-thb'>THB</div>
                        <div onClick={() => calfunc('%')} id='dis-ps'>%</div>
                        <div onClick={() => calfunc('1')}>1</div>
                        <div onClick={() => calfunc('2')}>2</div>
                        <div onClick={() => calfunc('3')}>3</div>
                        <div onClick={() => calfunc('4')}>4</div>
                        <div onClick={() => calfunc('5')}>5</div>
                        <div onClick={() => calfunc('6')}>6</div>
                        <div onClick={() => calfunc('7')}>7</div>
                        <div onClick={() => calfunc('8')}>8</div>
                        <div onClick={() => calfunc('9')}>9</div>
                        <div></div>
                        <div onClick={() => calfunc('0')}>0</div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Popdiscount
