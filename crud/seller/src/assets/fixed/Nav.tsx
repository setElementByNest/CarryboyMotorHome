import { useEffect } from 'react';
import './nav.css'
interface Props {
    datafilted: (value: string) => void,
    onClickNav: (value: string) => void,
    showdata: (value: string) => void;
}
function Nav({ datafilted, onClickNav, showdata }: Props) {
    useEffect(() => {onClickNav('navmenu1'); datafilted('');}, [1])
    const clearPDF = () => {
        const idprintA4 = document.getElementById('printA4') as HTMLElement
        const inputs = idprintA4.querySelectorAll('input');
        inputs.forEach((input) => {
            (input as HTMLInputElement).defaultValue = '';
            (input as HTMLInputElement).value = '';
        });
    }
    const onclose = () => {
        if(window.screen.width < 1000){
            const IDnav = document.getElementById('nav') as HTMLElement;
            const IDnavback = document.getElementById('navback') as HTMLElement;
            IDnav.style.transform = 'translate(-100%, 0)';
            IDnavback.style.opacity = '0';
        }
    }
    return (
        <div className='nav' id='nav'>
            <div className="navback" id='navback' onClick={() => onclose()}></div>
            <div className="nav-content">
                <div className="nav-logo" onClick={() => {
                    datafilted('')
                }}>
                    <img src="/logo.png" alt="" />
                    MotorHome Server</div>
                <div className="nav-menu" id='nav-menu'>
                    <div className="blacknav" id='blacknav'></div>
                    <div className="nav-menu-i" id='navmenu1' onClick={() => {onClickNav('navmenu1'); showdata('');  datafilted(''); clearPDF(); onclose();}}><i className="material-icons">&#xe5c3;</i>Home</div>
                    <div className="nav-menu-i" id='navmenu2' onClick={() => {onClickNav('navmenu2'); showdata('');  datafilted(''); clearPDF(); onclose();}}><i className="material-icons">&#xf233;</i>Customer</div>
                    <div className="nav-menu-i" id='navmenu3'><i className="material-icons">&#xe745;</i>Edit</div>
                    {/* <div className="nav-menu-i" id='navmenu4' onClick={() => {onClickNav('navmenu4'); showdata('');  datafilted(''); clearPDF();}}>Payment</div> */}
                    <div className="nav-menu-i" id='navmenu5'><i className="material-icons">&#xe8ad;</i>Print</div>
                    <div className="nav-menu-i" id='navmenu6' onClick={() => {onClickNav('navmenu6'); showdata('');  datafilted(''); clearPDF(); onclose();}}><i className="material-icons">&#xf05b;</i>Price</div>
                    {/* <div className="nav-menu-i" id='navmenu6' onClick={() => {onClickNav('navmenu6'); showdata('');  datafilted(''); clearPDF();}}>History</div> */}
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