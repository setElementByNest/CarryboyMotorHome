import { EyeInvisibleOutlined, EyeTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { useState } from 'react';
//import { useState, useRef } from 'react';
import './changepass.css'
interface sellerIntf {
    id: string;
    name: string;
    lastname: string;
    user: string;
    password: string;
}
interface editChangeIntf {
    database: string;
    id: string;
    column: string;
    value: string;
}
interface Props {
    datasellerNow: sellerIntf,
    setEditSellerChange: (value: React.SetStateAction<editChangeIntf>) => void;
    fnEditChangeSeller: () => void
}
function ChangePass({ datasellerNow, fnEditChangeSeller, setEditSellerChange }: Props) {
    const [passOld, setPassOld] = useState<string>('')
    const [passNew1, setPassNew1] = useState<string>('')
    const [passNew2, setPassNew2] = useState<string>('')
    const [passOK, setPassOK] = useState<boolean>(false)
    const [passMatch, setPassMatch] = useState<boolean>(false)
    const [passChange, setPassChange] = useState<boolean>(false)
    //const passwordRef = useRef(null);
    const text = <span><ExclamationCircleOutlined style={{ marginRight: '4px' }} /> Incorrect. Please try again</span>;
    const text2 = <span><ExclamationCircleOutlined style={{ marginRight: '4px' }} /> Not Match. Please try again</span>;
    const text3 = <span>Password was change</span>;
    const handleChange = (database: string, id: string, column: string, value: string) => {
        setEditSellerChange({ database: database, id: id, column: column, value: value });
    };
    return (
        <div className="changepass" id="changepass">
            <div className="changepass-content">
                <h2>Change Password</h2>
                <h4>Old Password :</h4>
                <Input.Password
                    placeholder="Old password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ margin: '5px 0 0 0' }}
                    onChange={(e) => { setPassOld(e.target.value); }}
                    value={passOld}
                />
                <Tooltip placement="right" color='red' title={text} open={passOK}></Tooltip>

                <h4>New Password :</h4>
                <Input.Password
                    placeholder="New password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ margin: '5px 0 0 0' }}
                    onChange={(e) => { setPassNew1(e.target.value); handleChange('seller', datasellerNow.id, 'password', e.target.value) }}
                    value={passNew1}
                />
                <Tooltip placement="right" color='red' title={text2} open={passMatch}></Tooltip>
                <Input.Password
                    placeholder="New password again"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    style={{ margin: '5px 0 0 0' }}
                    onChange={(e) => setPassNew2(e.target.value)}
                    value={passNew2}
                />
                <Tooltip placement="right" color='green' title={text3} open={passChange}></Tooltip>
                <div className="detail-group-bt">
                    <div className="button button-blue" onClick={() => {
                        if (datasellerNow.password == passOld) {
                            if (passNew1 == passNew2 && passNew1.length > 0) {
                                fnEditChangeSeller();
                                setPassOld('');
                                setPassNew1('');
                                setPassNew2('');
                                setTimeout(() => { window.location.reload() }, 750);
                                setPassChange(true);
                            } else {
                                setPassMatch(true);
                                setTimeout(() => { setPassMatch(false) }, 1000);
                            }
                        } else {
                            setPassOK(true);
                            setTimeout(() => { setPassOK(false) }, 1000);
                        }
                    }}><i className="material-icons">&#xe161;</i>Change</div>
                    <div className="button button-darkblue" onClick={() => {
                        const IDchangepass = document.getElementById('changepass') as HTMLElement;
                        IDchangepass.style.display = 'none';
                        setPassOld('');
                        setPassNew1('');
                        setPassNew2('');
                    }}><i className="material-icons">&#xe5cd;</i>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default ChangePass
