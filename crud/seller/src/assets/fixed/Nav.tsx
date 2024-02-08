import { useEffect } from 'react';
import './nav.css'
interface Props {
    datafilted: (value: string) => void,
    onClickNav: (value: string) => void,
    showdata: (value: string) => void;
}
function Nav({ datafilted, onClickNav, showdata }: Props) {
    useEffect(() => {onClickNav('navmenu1'); datafilted('');}, [1])
    return (
        <div className='nav'>
            <div className="nav-content">
                <div className="nav-logo" onClick={() => {
                    datafilted('')
                }}>
                    <img src="/logo.png" alt="" />
                    MotorHome Server</div>
                <div className="nav-menu">
                    <div className="nav-menu-i" id='navmenu1' onClick={() => {onClickNav('navmenu1'); showdata('');  datafilted('');}}>Overall</div>
                    <div className="nav-menu-i" id='navmenu2' onClick={() => {onClickNav('navmenu2'); showdata('');  datafilted('');}}>Customer</div>
                    <div className="nav-menu-i" id='navmenu3' onClick={() => {onClickNav('navmenu3'); showdata('');  datafilted('');}}>Edit</div>
                    <div className="nav-menu-i" id='navmenu4' onClick={() => {onClickNav('navmenu4'); showdata('');  datafilted('');}}>Payment</div>
                    <div className="nav-menu-i" id='navmenu5' onClick={() => {onClickNav('navmenu5'); showdata('');  datafilted('');}}>Print</div>
                    <div className="nav-menu-i" id='navmenu6' onClick={() => {onClickNav('navmenu6'); showdata('');  datafilted('');}}>History</div>
                </div>
                {/* <div className="nav-seller">
                    <div className="nav-seller-img">S</div>
                    <h4>Seller Carryboy</h4>
                </div> */}
            </div>
        </div>
    )
}

export default Nav