import './priceSet.css'
import { useState } from 'react';

interface includePriceIntf {
    collection: string;
    REVO2WDAT: string;
    REVO2WDMT: string;
    REVO4WDMT: string;
    REVO4WDAT: string;
    CHAMP4WDAT: string;
    TRITON4WDAT: string;
    LITE: string;
    CLASSIC: string;
    COUNTER: string;
    WARDROBE: string;
    AIRSTANDARD: string;
    AIRHARRIER: string;
    BAT1: string;
    BAT2: string;
    BAT3: string;
    GENSTANDARD: string;
    GENDOMETIC: string;
    BLACK: string;
    WHITE: string;
    KITYES: string;
    KITNO: string;
    SUSSTANDARD: string;
    SUSAC: string;
}
interface editChangeIntf {
    database: string;
    id: string;
    column: string;
    value: string;
}

interface Props {
    includePrice: includePriceIntf;
    setIncludePrice: (value: React.SetStateAction<includePriceIntf>) => void;
    fnEditChangePrice: (value: editChangeIntf[]) => void;
    onClickNav: (value: string) => void;
}
function PriceSet({ includePrice, fnEditChangePrice, onClickNav, setIncludePrice }: Props) {
    const [editChange, setEditChange] = useState<editChangeIntf[]>([]);
    const handleChange = (database: string, id: string, column: string, value: string) => {
        setEditChange(prev => [...prev, { database: database, id: id, column: column, value: value }])
    };
    const clicksuccess = () => {
        const idalert = document.getElementById('alertsuccess') as HTMLElement;
        idalert.style.transform = "translate(0, 0)";
        setTimeout(() => { idalert.style.transform = "translate(300px, 0)"; }, 1000);
    }
    return (
        <div className='priceset'>
            <h1>Cost of MotorHome</h1>
            <hr style={{width: '90%', margin: '0 0 25px 0'}}/>
            <div className="priceset-content">
                <h3>TOYOTA HILUX REVO 2.4 ENTRY 2WD A/T :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'vehicle', 'REVO2WDAT', e.target.value) }} placeholder={includePrice.REVO2WDAT} defaultValue={includePrice.REVO2WDAT} />
                <h3>TOYOTA HILUX REVO 2.8 ENTRY 2WD M/T :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'vehicle', 'REVO2WDMT', e.target.value) }} placeholder={includePrice.REVO2WDMT} defaultValue={includePrice.REVO2WDMT} />
                <h3>TOYOTA HILUX REVO 2.8 ENTRY 4WD M/T :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'vehicle', 'REVO4WDMT', e.target.value) }} placeholder={includePrice.REVO4WDMT} defaultValue={includePrice.REVO4WDMT} />
                <h3>TOYOTA HILUX REVO 2.8 ENTRY 4WD A/T :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'vehicle', 'REVO4WDAT', e.target.value) }} placeholder={includePrice.REVO4WDAT} defaultValue={includePrice.REVO4WDAT} />
                <h3>TOYOTA HILUX CHAMP 2.4 Diesel AT LWB :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'vehicle', 'CHAMP4WDAT', e.target.value) }} placeholder={includePrice.CHAMP4WDAT} defaultValue={includePrice.CHAMP4WDAT} />
                <h3>MITSUBISHI TRITON 2.4 Pro 4WD A/T :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'vehicle', 'TRITON4WDAT', e.target.value) }} placeholder={includePrice.TRITON4WDAT} defaultValue={includePrice.TRITON4WDAT} />
                <hr />
                <hr />
                <h3>Laminate Lite :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'laminate', 'LITE', e.target.value) }} placeholder={includePrice.LITE} defaultValue={includePrice.LITE} />
                <h3>Laminate CLASSIC :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'laminate', 'CLASSIC', e.target.value) }} placeholder={includePrice.CLASSIC} defaultValue={includePrice.CLASSIC} />
                <hr />
                <hr />
                <h3>Rear Type Counter :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'reartype', 'COUNTER', e.target.value) }} placeholder={includePrice.COUNTER} defaultValue={includePrice.COUNTER} />
                <h3>Rear Type Wardrobe :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'reartype', 'WARDROBE', e.target.value) }} placeholder={includePrice.WARDROBE} defaultValue={includePrice.WARDROBE} />
                <hr />
                <hr />
                <h3>Air Condition Standard :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'aircon', 'AIRSTANDARD', e.target.value) }} placeholder={includePrice.AIRSTANDARD} defaultValue={includePrice.AIRSTANDARD} />
                <h3>Air Condition HARRIER plus :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'aircon', 'AIRHARRIER', e.target.value) }} placeholder={includePrice.AIRHARRIER} defaultValue={includePrice.AIRHARRIER} />
                <hr />
                <hr />
                <h3>Battery 9,600 Wh :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'battery', 'BAT1', e.target.value) }} placeholder={includePrice.BAT1} defaultValue={includePrice.BAT1} />
                <h3>Battery 19,200 Wh :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'battery', 'BAT2', e.target.value) }} placeholder={includePrice.BAT2} defaultValue={includePrice.BAT2} />
                <h3>Battery 28,800 Wh :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'battery', 'BAT3', e.target.value) }} placeholder={includePrice.BAT3} defaultValue={includePrice.BAT3} />
                <hr />
                <hr />
                <h3>Power Generator Standard :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'powergen', 'GENSTANDARD', e.target.value) }} placeholder={includePrice.GENSTANDARD} defaultValue={includePrice.GENSTANDARD} />
                <h3>Power Generator Dometic :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'powergen', 'GENDOMETIC', e.target.value) }} placeholder={includePrice.GENDOMETIC} defaultValue={includePrice.GENDOMETIC} />
                <hr />
                <hr />
                <h3>Rear Box Mat Black :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'rearbox', 'BLACK', e.target.value) }} placeholder={includePrice.BLACK} defaultValue={includePrice.BLACK} />
                <h3>Rear Box Gross White :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'rearbox', 'WHITE', e.target.value) }} placeholder={includePrice.WHITE} defaultValue={includePrice.WHITE} />
                <hr />
                <hr />
                <h3>Slide Kitchen :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'kitchen', 'KITYES', e.target.value) }} placeholder={includePrice.KITYES} defaultValue={includePrice.KITYES} />
                <hr />
                <hr />
                <h3>Suspension Standard :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'suspension', 'SUSSTANDARD', e.target.value) }} placeholder={includePrice.SUSSTANDARD} defaultValue={includePrice.SUSSTANDARD} />
                <h3>Suspension AC-POWER :</h3>
                <input type="text" onBlur={(e) => { handleChange('price', 'suspension', 'SUSAC', e.target.value) }} placeholder={includePrice.SUSAC} defaultValue={includePrice.SUSAC} />
                <hr />
                <hr />
            </div>
            <div className="detail-group-bt">
                <div className="button button-blue" onClick={() => {
                    // console.log(editChange.length);
                    editChange.map((item:editChangeIntf) => {
                        setIncludePrice(prev => ({ ...prev, [item.column]: item.value}));
                    })
                    clicksuccess();
                    fnEditChangePrice(editChange);
                    setEditChange([]);
                    onClickNav('navmenu1');
                }}><i className="material-icons">&#xe161;</i>Save</div>
                <div className="button button-darkblue" onClick={() => { setEditChange([]); onClickNav('navmenu1');}}><i className="material-icons">&#xe5cd;</i>Cancel</div>
            </div>
        </div>
    )
}

export default PriceSet
