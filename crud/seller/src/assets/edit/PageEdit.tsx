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
interface PageEditIntf {
    selectData: Customer[];
    setdataedit: (value: React.SetStateAction<Customer[]>) => void;
    dataedit: Customer[];
    showdata: (value: string) => void;
}

function PageEdit({ selectData, setdataedit, showdata }: PageEditIntf) {
    // const datalist: string[] = [
    //     'id', 'name', 'lastname', 'phone', 'email', 'brand', 'model', 'laminate', 
    //     'reartype', 'aircon', 'battery', 'powergen', 'rearbox', 'kitchen', 
    //     'suspension', 'finance', 'legalentity', 'seller', 'discount', 'status'
    // ];

    const [selectREVO, setselectREVO] = useState<boolean>(true);
    const [selectCHAMP, setselectCHAMP] = useState<boolean>(true);
    const [selectTRITON, setselectTRITON] = useState<boolean>(true);
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [selectedModel, setSelectedModel] = useState<string>('');
    const [selectedLaminate, setSelectedLaminate] = useState<string>('');
    const [selectedReartype, setSelectedReartype] = useState<string>('');
    const [selectedAircon, setSelectedAircon] = useState<string>('');
    const [selectedBattery, setSelectedBattery] = useState<string>('');
    const [selectedPowergen, setSelectedPowergen] = useState<string>('');
    const [selectedRearbox, setSelectedRearbox] = useState<string>('');
    const [selectedKitchen, setSelectedKitchen] = useState<string>('');
    const [selectedSuspension, setSelectedSuspension] = useState<string>('');
    const [selectedFinance, setSelectedFinance] = useState<string>('');
    const [selectedLegalEntity, setSelectedLegalEntity] = useState<string>('');
    const [selectedStatus, setSelectedStatus] = useState<string>('');

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
    const handleChange = (value: string, field: string) => {
        switch (field) {
            case 'brand':
                setSelectedBrand(value);
                onBrandChange(value);
                break;
            case 'model':
                setSelectedModel(value);
                break;
            case 'laminate':
                setSelectedLaminate(value);
                break;
            case 'reartype':
                setSelectedReartype(value);
                break;
            case 'aircon':
                setSelectedAircon(value);
                break;
            case 'battery':
                setSelectedBattery(value);
                break;
            case 'powergen':
                setSelectedPowergen(value);
                break;
            case 'rearbox':
                setSelectedRearbox(value);
                break;
            case 'kitchen':
                setSelectedKitchen(value);
                break;
            case 'suspension':
                setSelectedSuspension(value);
                break;
            case 'finance':
                setSelectedFinance(value);
                break;
            case 'legalentity':
                setSelectedLegalEntity(value);
                break;
            case 'status':
                setSelectedStatus(value);
                break;
            default:
                break;
        }
    };
    const handleInputChange = (field: string, value: string) => {
        setdataedit(currentData => {
            const updatedData = currentData.map((item, index) => {
                if (index === 0) {
                    return { ...item, [field]: value };
                }
                return item;
            });
            return updatedData;
        });
    };

    const clicksuccess = () => {
        const idalert = document.getElementById('alertsuccess') as HTMLElement;
        idalert.style.transform = "translate(0, 0)";
        setTimeout(() => {idalert.style.transform = "translate(300px, 0)";}, 1000);
    }

    return (
        <div className='pageEdit' onLoad={() => { onBrandChange(selectData[0].brand) }}>
            <div className="pageEdit-content">{selectData.length === 0 ? (
                <p style={{ margin: '50px 0 0 0' }}></p>
                // <p>No customer data available.</p>
            ) : (
                <div className="detail-customer">
                    <table>
                        <tbody>
                            <tr>
                                <td>ID :</td>
                                <td> {selectData[0].id}</td>
                                <td>Seller :</td>
                                <td> <input type="text" placeholder={selectData[0].seller} defaultValue={selectData[0].seller} /></td>
                            </tr>
                            <tr>
                                <td>Name :</td>
                                <td> <input type="text" onChange={(e) => handleInputChange('name', e.target.value)} placeholder={selectData[0].name} defaultValue={selectData[0].name} /></td>
                                <td>Last name :</td>
                                <td> <input type="text" placeholder={selectData[0].lastname} defaultValue={selectData[0].lastname} /></td>
                            </tr>
                            <tr>
                                <td>Phone :</td>
                                <td> <input type="text" placeholder={selectData[0].phone} defaultValue={selectData[0].phone} /></td>
                                <td>Email :</td>
                                <td> <input type="text" placeholder={selectData[0].email} defaultValue={selectData[0].email} /></td>
                            </tr>
                            <tr>
                                <td>Brand :</td>
                                {/* <td> <input type="text" placeholder={selectData[0].brand} /></td> */}
                                <td>
                                    <Select
                                        defaultValue={selectData[0].brand}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'brand') }}
                                        options={[
                                            { value: 'TOYOTA HILUX REVO', label: 'TOYOTA HILUX REVO' },
                                            { value: 'TOYOTA HILUX CHAMP', label: 'TOYOTA HILUX CHAMP' },
                                            { value: 'MITSUBISHI TRITON', label: 'MITSUBISHI TRITON' }
                                        ]}
                                    />
                                </td>
                                <td>Model :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].model}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'model') }}
                                        options={[
                                            { value: '2.4 ENTRY 2WD A/T', label: '2.4 ENTRY 2WD A/T', disabled: selectREVO },
                                            { value: '2.8 ENTRY 2WD M/T', label: '2.8 ENTRY 2WD M/T', disabled: selectREVO },
                                            { value: '2.8 ENTRY 4WD M/T', label: '2.8 ENTRY 4WD M/T', disabled: selectREVO },
                                            { value: '2.8 ENTRY 4WD A/T', label: '2.8 ENTRY 4WD A/T', disabled: selectREVO },
                                            { value: '2.4 Diesel AT LWB', label: '2.4 Diesel AT LWB', disabled: selectCHAMP },
                                            { value: '2.4 Pro 4WD A/T', label: '2.4 Pro 4WD A/T', disabled: selectTRITON }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Laminate :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].laminate}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'laminate') }}
                                        options={[
                                            { value: 'Lite', label: 'Lite' },
                                            { value: 'Classic', label: 'Classic' }
                                        ]}
                                    />
                                </td>
                                <td>Reartype :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].reartype}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'reartype') }}
                                        options={[
                                            { value: 'Counter', label: 'Counter' },
                                            { value: 'Wardrobe', label: 'Wardrobe' }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Aircon :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].aircon}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'aircon') }}
                                        options={[
                                            { value: 'Standard', label: 'Standard' },
                                            { value: 'HARRIER plus', label: 'HARRIER plus' }
                                        ]}
                                    />
                                </td>
                                <td>Battery :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].battery}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'battery') }}
                                        options={[
                                            { value: '9,600 Wh', label: '9,600 Wh' },
                                            { value: '19,200 Wh', label: '19,200 Wh' },
                                            { value: '28,800 Wh', label: '28,800 Wh' }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Powergen :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].powergen}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'powergen') }}
                                        options={[
                                            { value: 'Standard', label: 'Standard' },
                                            { value: 'Dometic', label: 'Dometic' }
                                        ]}
                                    />
                                </td>
                                <td>Rearbox :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].rearbox}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'rearbox') }}
                                        options={[
                                            { value: 'Mat Black', label: 'Mat Black' },
                                            { value: 'Gross White', label: 'Gross White' }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Slide kitchen :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].kitchen}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'kitchen') }}
                                        options={[
                                            { value: 'Yes', label: 'Yes' },
                                            { value: 'No', label: 'No' }
                                        ]}
                                    />
                                </td>
                                <td>Suspension :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].suspension}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'suspension') }}
                                        options={[
                                            { value: 'Standard', label: 'Standard' },
                                            { value: 'AC-POWER', label: 'AC-POWER' }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Finance :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].finance}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'finance') }}
                                        options={[
                                            { value: 'Cash', label: 'Cash' },
                                            { value: 'Loan 24 months', label: 'Loan 24 months' },
                                            { value: 'Loan 36 months', label: 'Loan 36 months' },
                                            { value: 'Loan 48 months', label: 'Loan 48 months' }
                                        ]}
                                    />
                                </td>
                                <td>Legal Entity :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].legalentity}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'legalentity') }}
                                        options={[
                                            { value: 'No', label: 'No' },
                                            { value: 'Yes', label: 'Yes' }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Discount :</td>
                                <td> <input type="text" placeholder={selectData[0].discount} defaultValue={selectData[0].discount} /></td>
                                <td>Status :</td>
                                <td>
                                    <Select
                                        defaultValue={selectData[0].status}
                                        style={{ width: 200 }}
                                        onChange={(value) => { handleChange(value, 'status') }}
                                        options={[
                                            { value: 'Process', label: 'Process' },
                                            { value: 'Cancel', label: 'Cancel' }
                                        ]}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="detail-group-bt">
                        <div className="detail-edit" onClick={() => {
                            clicksuccess();
                            selectedBrand != '' ? (console.log("UPDATE list SET brand = '" + selectedBrand + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedModel != '' ? (console.log("UPDATE list SET model = '" + selectedModel + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedLaminate != '' ? (console.log("UPDATE list SET laminate = '" + selectedLaminate + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedReartype != '' ? (console.log("UPDATE list SET reartype = '" + selectedReartype + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedAircon != '' ? (console.log("UPDATE list SET aircon = '" + selectedAircon + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedBattery != '' ? (console.log("UPDATE list SET battery = '" + selectedBattery + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedPowergen != '' ? (console.log("UPDATE list SET powergen = '" + selectedPowergen + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedRearbox != '' ? (console.log("UPDATE list SET rearbox = '" + selectedRearbox + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedKitchen != '' ? (console.log("UPDATE list SET kitchen = '" + selectedKitchen + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedSuspension != '' ? (console.log("UPDATE list SET suspension = '" + selectedSuspension + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedFinance != '' ? (console.log("UPDATE finance SET finance = '" + selectedFinance + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedLegalEntity != '' ? (console.log("UPDATE finance SET legalentity = '" + selectedLegalEntity + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            selectedStatus != '' ? (console.log("UPDATE status SET status = '" + selectedStatus + "' WHERE id = '" + selectData[0].id + "'")) : (console.log());
                            setSelectedBrand('');
                            setSelectedModel('');
                            setSelectedLaminate('');
                            setSelectedReartype('');
                            setSelectedAircon('');
                            setSelectedBattery('');
                            setSelectedPowergen('');
                            setSelectedRearbox('');
                            setSelectedKitchen('');
                            setSelectedSuspension('');
                            setSelectedFinance('');
                            setSelectedLegalEntity('');
                            setSelectedStatus('');

                            // let dataeditname: string = selectData[0].name;
                            // let dataeditbrand: string = selectData[0].brand;
                            // dataedit[0].name != '' ? (dataeditname = dataedit[0].name) : (dataeditname = dataeditname);
                            // dataedit[0].brand != '' ? (dataeditbrand = dataedit[0].brand) : (dataeditbrand = dataeditbrand);
                            // console.log("UPDATE customer SET name = '" + dataeditname + "' WHERE id = '" + selectData[0].id + "'");
                            // console.log("UPDATE customer SET brand = '" + dataeditbrand + "' WHERE id = '" + selectData[0].id + "'");
                            // dataedit[0].name = '';
                            // dataedit[0].brand = '';
                        }}>Save</div>
                        <div className="detail-payment" onClick={() => showdata('')}>Cancel</div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default PageEdit
