import { Alert, Dropdown, MenuProps } from 'antd'
import './topbar.css'

const items: MenuProps['items'] = [
    {
        key: 'changepass',
        danger: true,
        label: (
            <div onClick={() => {
                const IDchangepass = document.getElementById('changepass') as HTMLElement;
                IDchangepass.style.display = 'flex';
            }}>Change Password</div>
        )
    },
    {
        key: 'logout',
        danger: true,
        label: (
            <div onClick={() => {
                localStorage.setItem('userSeller', '');
                window.location.reload()
            }}>Log Out</div>
        )
    }
]

interface Props {
    disLog: boolean
}

function Topbar({ disLog }: Props) {
    const onopen = () => {
        const IDnav = document.getElementById('nav') as HTMLElement;
        const IDnavback = document.getElementById('navback') as HTMLElement;
        IDnav.style.transform = 'translate(0%, 0)';
        IDnavback.style.opacity = '1';
    }
    return (
        <div className='topbar'>
            <div style={{ position: 'fixed', top: '75px', right: '25px', transform: 'translate(300px, 0)', transition: 'all 0.2s' }} id='alertsuccess'>
                <Alert message="Save successfully" type="success" showIcon style={{ width: '250px' }} />
            </div>
            <div style={{ position: 'fixed', top: '75px', right: '25px', transform: 'translate(300px, 0)', transition: 'all 0.2s' }} id='alertunsuccess'>
                <Alert message="Unsuccessfully" type='error' showIcon style={{ width: '250px' }} />
            </div>
            <div style={{ position: 'fixed', top: '75px', right: '25px', transform: 'translate(300px, 0)', transition: 'all 0.2s' }} id='alert503'>
                <Alert message="503 Service Unavailable" type='error' showIcon style={{ width: '250px' }} />
            </div>
            <div className="topbar-content">
                <i className="material-icons topbarmobile" onClick={() => onopen()}>&#xe5d2;</i>
                <Dropdown menu={{ items }} disabled={disLog}>
                    <div className="topbar-user">
                        <h4 id='topbar-user'>Log in</h4>
                        <i className="material-icons">&#xe7fd;</i>
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default Topbar
