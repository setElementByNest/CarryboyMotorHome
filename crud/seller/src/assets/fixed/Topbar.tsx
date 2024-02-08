import { Alert } from 'antd'
import './topbar.css'

function Topbar() {
    return (
        <div className='topbar'>
            <div style={{position: 'fixed', top: '75px', right: '25px', transform: 'translate(300px, 0)', transition: 'all 0.2s'}} id='alertsuccess'>
                <Alert message="Save successfully" type="success" showIcon style={{ width: '250px' }} />
            </div>
            <div className="topbar-content">
                <i className="material-icons">&#xe5d2;</i>
                <div className="topbar-user">
                    <h4>K. Natsakorn</h4>
                    <i className="material-icons">&#xe7fd;</i>
                </div>
            </div>
        </div>
    )
}

export default Topbar
