import { useState } from 'react';
import { Select } from 'antd';
import './pageedit.css'
interface Customer {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    brand: string;
    model: string;
    laminate: string;
    reartype: string;
    aircon: string;
    battery: string;
    powergen: string;
    rearbox: string;
    kitchen: string;
    suspension: string;
    finance: string;
    legalentity: string;
    seller: string;
    discount: string;
    status: string;
}
interface editChangeIntf {
    database: string;
    id: string;
    column: string;
    value: string;
}
interface PageEditIntf {
    selectData: Customer[];
    showdata: (value: string) => void;
    onClickNav: (value: string) => void;
    setEditChange: (value: React.SetStateAction<editChangeIntf[]>) => void;
    fnEditChange: () => void;
}

function PageEdit({ selectData, showdata, onClickNav, setEditChange, fnEditChange }: PageEditIntf) {
    // const datacustomer: string[] = [
    //     'id', 'name', 'lastname', 'phone', 'email', 'brand', 'model', 'laminate', 
    //     'reartype', 'aircon', 'battery', 'powergen', 'rearbox', 'kitchen', 
    //     'suspension', 'finance', 'legalentity', 'seller', 'discount', 'status'
    // ];

    const [selectREVO, setselectREVO] = useState<boolean>(true);
    const [selectCHAMP, setselectCHAMP] = useState<boolean>(true);
    const [selectTRITON, setselectTRITON] = useState<boolean>(true);
    const [startPart, setStartPart] = useState<boolean>(true);

    const onBrandChange = (value: string) => {
        if (selectData.length != 0) {
            switch (value) {
                case 'TOYOTA HILUX REVO':
                    setselectREVO(false);
                    setselectCHAMP(true);
                    setselectTRITON(true);
                    break;
                case 'TOYOTA HILUX CHAMP':
                    setselectREVO(true);
                    setselectCHAMP(false);
                    setselectTRITON(true);
                    break;
                case 'MITSUBISHI TRITON':
                    setselectREVO(true);
                    setselectCHAMP(true);
                    setselectTRITON(false);
                    break;
            }
        }
    }
    if (startPart) {
        if (selectData.length == 1) {
            onBrandChange(selectData[0].brand);
            setStartPart(false);
        }
    }
    const handleChange = (database: string, id: string, column: string, value: string) => {
        setEditChange(prev => [...prev, { database: database, id: id, column: column, value: value }])
    };

    // const handleInputChange = (field: string, value: string) => {
    //     setdataedit(currentData => {
    //         const updatedData = currentData.map((item, index) => {
    //             if (index === 0) {
    //                 return { ...item, [field]: value };
    //             }
    //             return item;
    //         });
    //         return updatedData;
    //     });
    // };

    const clicksuccess = () => {
        const idalert = document.getElementById('alertsuccess') as HTMLElement;
        idalert.style.transform = "translate(0, 0)";
        setTimeout(() => { idalert.style.transform = "translate(300px, 0)"; }, 1000);
    }
    return (
        <div className='pageEdit' onLoad={() => { onBrandChange(selectData[0].brand) }}>
            <div className="pageEdit-content">{selectData.length === 0 ? (
                <p style={{ margin: '50px 0 0 0' }}></p>
                // <p>No customer data available.</p>
            ) : (
                <>
                    <div className="pageEdit-customer">
                        <div>ID :</div>
                        <div> {selectData[0].id}</div>
                        <div>Seller :</div>
                        <div> <input type="text" placeholder={selectData[0].seller} defaultValue={selectData[0].seller} /></div>
                        <div>Name :</div>
                        <div> <input type="text" onChange={(e) => { handleChange('customer', selectData[0].id, 'name', e.target.value) }} defaultValue={selectData[0].name} /></div>
                        <div>Last name :</div>
                        <div> <input type="text" onChange={(e) => { handleChange('customer', selectData[0].id, 'lastname', e.target.value) }} placeholder={selectData[0].lastname} defaultValue={selectData[0].lastname} /></div>
                        <div>Phone :</div>
                        <div> <input type="text" onChange={(e) => { handleChange('customer', selectData[0].id, 'phone', e.target.value) }} placeholder={selectData[0].phone} defaultValue={selectData[0].phone} /></div>
                        <div>Email :</div>
                        <div> <input type="text" onChange={(e) => { handleChange('customer', selectData[0].id, 'email', e.target.value) }} placeholder={selectData[0].email} defaultValue={selectData[0].email} /></div>
                        <div>Brand :</div>
                        {/* <div> <input type="text" placeholder={selectData[0].brand} /></div> */}
                        <div>
                            <Select
                                defaultValue={selectData[0].brand}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'brand', value); onBrandChange(value) }}
                                options={[
                                    { value: 'TOYOTA HILUX REVO', label: 'TOYOTA HILUX REVO' },
                                    { value: 'TOYOTA HILUX CHAMP', label: 'TOYOTA HILUX CHAMP' },
                                    { value: 'MITSUBISHI TRITON', label: 'MITSUBISHI TRITON' }
                                ]}
                            />
                        </div>
                        <div>Model :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].model}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'model', value) }}
                                options={[
                                    { value: '2.4 ENTRY 2WD A/T', label: '2.4 ENTRY 2WD A/T', disabled: selectREVO },
                                    { value: '2.8 ENTRY 2WD M/T', label: '2.8 ENTRY 2WD M/T', disabled: selectREVO },
                                    { value: '2.8 ENTRY 4WD M/T', label: '2.8 ENTRY 4WD M/T', disabled: selectREVO },
                                    { value: '2.8 ENTRY 4WD A/T', label: '2.8 ENTRY 4WD A/T', disabled: selectREVO },
                                    { value: '2.4 Diesel AT LWB', label: '2.4 Diesel AT LWB', disabled: selectCHAMP },
                                    { value: '2.4 Pro 4WD A/T', label: '2.4 Pro 4WD A/T', disabled: selectTRITON }
                                ]}
                            />
                        </div>
                        <div>Laminate :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].laminate}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'laminate', value) }}
                                options={[
                                    { value: 'Lite', label: 'Lite' },
                                    { value: 'Classic', label: 'Classic' }
                                ]}
                            />
                        </div>
                        <div>Reartype :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].reartype}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'reartype', value) }}
                                options={[
                                    { value: 'Counter', label: 'Counter' },
                                    { value: 'Wardrobe', label: 'Wardrobe' }
                                ]}
                            />
                        </div>
                        <div>Aircon :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].aircon}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'aircon', value) }}
                                options={[
                                    { value: 'Standard', label: 'Standard' },
                                    { value: 'HARRIER plus', label: 'HARRIER plus' }
                                ]}
                            />
                        </div>
                        <div>Battery :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].battery}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'battery', value) }}
                                options={[
                                    { value: '9,600 Wh', label: '9,600 Wh' },
                                    { value: '19,200 Wh', label: '19,200 Wh' },
                                    { value: '28,800 Wh', label: '28,800 Wh' }
                                ]}
                            />
                        </div>
                        <div>Powergen :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].powergen}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'powergen', value) }}
                                options={[
                                    { value: 'Standard', label: 'Standard' },
                                    { value: 'Dometic', label: 'Dometic' }
                                ]}
                            />
                        </div>
                        <div>Rearbox :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].rearbox}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'rearbox', value) }}
                                options={[
                                    { value: 'Mat Black', label: 'Mat Black' },
                                    { value: 'Gross White', label: 'Gross White' }
                                ]}
                            />
                        </div>
                        <div>Slide kitchen :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].kitchen}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'kitchen', value) }}
                                options={[
                                    { value: 'Yes', label: 'Yes' },
                                    { value: 'No', label: 'No' }
                                ]}
                            />
                        </div>
                        <div>Suspension :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].suspension}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'suspension', value) }}
                                options={[
                                    { value: 'Standard', label: 'Standard' },
                                    { value: 'AC-POWER', label: 'AC-POWER' }
                                ]}
                            />
                        </div>
                        <div>Finance :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].finance}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'finance', value) }}
                                options={[
                                    { value: 'Cash', label: 'Cash' },
                                    { value: 'Loan 24 months', label: 'Loan 24 months' },
                                    { value: 'Loan 36 months', label: 'Loan 36 months' },
                                    { value: 'Loan 48 months', label: 'Loan 48 months' }
                                ]}
                            />
                        </div>
                        <div>Legal Entity :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].legalentity}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'legalentity', value) }}
                                options={[
                                    { value: 'No', label: 'No' },
                                    { value: 'Yes', label: 'Yes' }
                                ]}
                            />
                        </div>
                        <div>Discount :</div>
                        <div> <input type="text" placeholder={selectData[0].discount} onChange={(e) => { handleChange('customer', selectData[0].id, 'discount', e.target.value) }} defaultValue={selectData[0].discount} /></div>
                        <div>Status :</div>
                        <div>
                            <Select
                                defaultValue={selectData[0].status}
                                className="pageEdit-input"
                                onChange={(value) => { handleChange('customer', selectData[0].id, 'status', value) }}
                                options={[
                                    { value: 'Wait', label: 'Wait' },
                                    { value: 'Contacted', label: 'Contacted' },
                                    { value: 'Payed', label: 'Payed' },
                                    { value: 'Cancel', label: 'Cancel' }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="detail-group-bt">
                        <div className="button button-blue" onClick={() => {
                            clicksuccess();
                            fnEditChange();
                            onClickNav('navmenu2');
                            showdata('');
                            setStartPart(true);
                            // let dataeditname: string = selectData[0].name;
                            // let dataeditbrand: string = selectData[0].brand;
                            // dataedit[0].name != '' ? (dataeditname = dataedit[0].name) : (dataeditname = dataeditname);
                            // dataedit[0].brand != '' ? (dataeditbrand = dataedit[0].brand) : (dataeditbrand = dataeditbrand);
                            // console.log("UPDATE customer SET name = '" + dataeditname + "' WHERE id = '" + selectData[0].id + "'");
                            // console.log("UPDATE customer SET brand = '" + dataeditbrand + "' WHERE id = '" + selectData[0].id + "'");
                            // dataedit[0].name = '';
                            // dataedit[0].brand = '';
                        }}><i className="material-icons">&#xe161;</i>Save</div>
                        <div className="button button-darkblue" onClick={() => { onClickNav('navmenu2'); showdata(''); setEditChange([]); setStartPart(true); }}><i className="material-icons">&#xe5cd;</i>Cancel</div>
                    </div>
                </>
            )}
            </div>
        </div>
    )
}

export default PageEdit
