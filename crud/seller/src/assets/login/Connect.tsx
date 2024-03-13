import './connect.css'
import { useState } from 'react';
import { LoadingOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Spin, Input } from 'antd';
interface sellerIntf {
    id: string;
    name: string;
    lastname: string;
    user: string;
    password: string;
}
interface Props {
    dataseller: sellerIntf[],
    datafilted: (value: string) => void,
    onClickNav: (value: string) => void,
    showdata: (value: string) => void;
    setDisLog: (value: React.SetStateAction<boolean>) => void,
    setdatasellerNow: (value: React.SetStateAction<sellerIntf>) => void,
}
function Connect({ dataseller, onClickNav, datafilted, showdata, setDisLog, setdatasellerNow }: Props) {
    const correctLogin = (nameSeller: string) => {
        const idlabellogin = document.getElementById('labellogin') as HTMLElement
        const idtopbaruser = document.getElementById('topbar-user') as HTMLElement
        idlabellogin.innerHTML = "Welcome, K. " + nameSeller;
        idtopbaruser.innerHTML = nameSeller;
        // console.log('OK');
        const idConnectLogin = document.getElementById('connect-login') as HTMLElement
        const idnavmenu = document.getElementById('blacknav') as HTMLElement
        idConnectLogin.style.display = 'none';
        idnavmenu.style.display = 'none';
        setDisLog(false);

        if (window.screen.width < 1000) {
            onClickNav('navmenu2');
            showdata('');
            datafilted('');
        }
    }
    const wrongLogin = () => {
        const idbtlogin = document.getElementById('btlogin') as HTMLElement
        idbtlogin.style.background = '#cc0000';
        idbtlogin.style.transform = 'translate(-20%, 0)';
        setTimeout(() => { idbtlogin.style.transform = 'translate(20%, 0)'; }, 100)
        setTimeout(() => { idbtlogin.style.transform = 'translate(0, 0)'; }, 200)
        setTimeout(() => { idbtlogin.style.background = '#1990ff'; }, 400)
        // console.log('NG');
    }
    const clickConnect = (still: string) => {
        // console.log(dataseller.length)
        let sellerLoginPass: boolean = false;
        let nameSeller: string = ""
        if (still != '') {
            dataseller.map((item: sellerIntf) => {
                // console.log(item.name + " " + item.lastname)
                // console.log(item.name + " " + item.lastname == still)
                if (item.name + " " + item.lastname == still) {
                    sellerLoginPass = true;
                    nameSeller = item.name + " " + item.lastname;
                    let sellerJSON: sellerIntf = {
                        id: item.id,
                        name: item.name,
                        lastname: item.lastname,
                        user: item.user,
                        password: item.password,
                    }
                    setdatasellerNow(sellerJSON);
                    // console.log(nameSeller)
                }
            })
        } else {
            if (dataseller.length > 0) {
                dataseller.map((item: sellerIntf) => {
                    if (item.user == TypingUser && item.password == TypingPass) {
                        sellerLoginPass = true;
                        nameSeller = item.name + " " + item.lastname;
                        let sellerJSON: sellerIntf = {
                            id: item.id,
                            name: item.name,
                            lastname: item.lastname,
                            user: item.user,
                            password: item.password,
                        }
                        setdatasellerNow(sellerJSON);
                    }
                })
                // console.log(dataseller.length);
                // console.log(dataseller[dataseller.length - 1].name.includes("ล"));
            } else {
                const idConnectLoad = document.getElementById('connect-load') as HTMLElement
                const idConnectLogin = document.getElementById('connect-login') as HTMLElement
                idConnectLoad.style.display = 'flex';
                idConnectLogin.style.display = 'none';
                const idalert = document.getElementById('alert503') as HTMLElement;
                idalert.style.transform = "translate(0, 0)";
                setTimeout(() => { idalert.style.transform = "translate(300px, 0)"; }, 1500);
                setTimeout(() => { window.location.reload() }, 2000)
            }
        }
        sellerLoginPass ? correctLogin(nameSeller) : wrongLogin();
        localStorage.setItem('userSeller', nameSeller)
        localStorage.setItem('userSellerTime', String(Date.now()));
    }
    const [TypingUser, setTypingUser] = useState<string>('');
    const [TypingPass, setTypingPass] = useState<string>('');
    const [checkLogin, setcheckLogin] = useState<boolean>(true)
    if (checkLogin && dataseller.length > 0) {
        const storedData: string | null = localStorage.getItem('userSeller');
        const storedDataTime: string | null = localStorage.getItem('userSellerTime');
        if (storedData != null && storedData != '') {
            if (Date.now() - Number(storedDataTime) < (1000 * 60 * 60 * 3)) {
                setTimeout(() => {
                    localStorage.setItem('userSellerTime', String(Date.now()));
                    clickConnect(storedData);
                }, 500)
            } else {
                localStorage.setItem('userSeller', '');
                localStorage.setItem('userSellerTime', '');
            }
        }
        setcheckLogin(false);
    }
    return (
        <div className='connect' id='connect'>
            <div className='connect-content' id='connect-content'>
                <div className="connect-img">
                    <img src="/logo.png" alt="" width={100} />
                    <h2 id='labellogin'>Carryboy MotorHome Server</h2>
                </div>
            </div>
            <div className='connect-load' id='connect-load'>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
            </div>
            <div className="connect-login" id='connect-login'>
                <Input placeholder="User" prefix={<UserOutlined />} onChange={(e) => setTypingUser(e.target.value)} />
                <Input.Password
                    placeholder="Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ margin: '5px 0 0 0' }}
                    onChange={(e) => setTypingPass(e.target.value)}
                />
                <div className="button button-blue" id='btlogin' onClick={() => clickConnect('')}>Log in</div>
            </div>
        </div>
    )
}

export default Connect
