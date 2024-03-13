import './detail.css'
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
interface DetailIntf {
    selectData: Customer[];
    showdata: (value: string) => void;
    onClickNav: (value: string) => void;
    priceJSON: includePriceIntf;
    numtostr: (value: number) => string;
}
function Detail({ selectData, showdata, onClickNav, priceJSON, numtostr }: DetailIntf) {
    if (selectData.length == 0) { }
    const clearPDF = () => {
        const idprintA4 = document.getElementById('printA4') as HTMLElement
        const inputs = idprintA4.querySelectorAll('input');
        inputs.forEach((input) => {
            (input as HTMLInputElement).defaultValue = '';
            (input as HTMLInputElement).value = '';
        });
    }
    const addDataPDF = () => {
        const idprintA4 = document.getElementById('printA4') as HTMLElement
        const inputs = idprintA4.querySelectorAll('input');
        inputs.forEach((input) => {
            (input as HTMLInputElement).value = (input as HTMLInputElement).defaultValue;
        });
        let sumprice: number = 0;
        switch (selectData[0].model) {
            case '2.4 ENTRY 2WD A/T':
                sumprice = sumprice + Number(priceJSON.REVO2WDAT);
                break;
            case '2.8 ENTRY 2WD M/T':
                sumprice = sumprice + Number(priceJSON.REVO2WDMT);
                break;
            case '2.8 ENTRY 4WD M/T':
                sumprice = sumprice + Number(priceJSON.REVO4WDMT);
                break;
            case '2.8 ENTRY 4WD A/T':
                sumprice = sumprice + Number(priceJSON.REVO4WDAT);
                break;
            case '2.4 Diesel AT LWB':
                sumprice = sumprice + Number(priceJSON.CHAMP4WDAT);
                break;
            case '2.4 Pro 4WD A/T':
                sumprice = sumprice + Number(priceJSON.TRITON4WDAT);
                break;
        }
        switch (selectData[0].laminate) {
            case 'Lite':
                sumprice = sumprice + Number(priceJSON.LITE);
                break;
            case 'Classic':
                sumprice = sumprice + Number(priceJSON.CLASSIC);
                break;
        }
        switch (selectData[0].reartype) {
            case 'Counter':
                sumprice = sumprice + Number(priceJSON.COUNTER);
                break;
            case 'Wardrobe':
                sumprice = sumprice + Number(priceJSON.WARDROBE);
                break;
        }
        switch (selectData[0].aircon) {
            case 'Standard':
                sumprice = sumprice + Number(priceJSON.AIRSTANDARD);
                break;
            case 'HARRIER plus':
                sumprice = sumprice + Number(priceJSON.AIRHARRIER);
                break;
        }
        switch (selectData[0].battery) {
            case '9,600 Wh':
                sumprice = sumprice + Number(priceJSON.BAT1);
                break;
            case '19,200 Wh':
                sumprice = sumprice + Number(priceJSON.BAT2);
                break;
            case '28,800 Wh':
                sumprice = sumprice + Number(priceJSON.BAT3);
                break;
        }
        switch (selectData[0].powergen) {
            case 'Standard':
                sumprice = sumprice + Number(priceJSON.GENSTANDARD);
                break;
            case 'Dometic':
                sumprice = sumprice + Number(priceJSON.GENDOMETIC);
                break;
        }
        switch (selectData[0].rearbox) {
            case 'Mat Black':
                sumprice = sumprice + Number(priceJSON.BLACK);
                break;
            case 'Gross White':
                sumprice = sumprice + Number(priceJSON.WHITE);
                break;
        }
        switch (selectData[0].kitchen) {
            case 'Yes':
                sumprice = sumprice + Number(priceJSON.KITYES);
                break;
            case 'No':
                sumprice = sumprice + Number(priceJSON.KITNO);
                break;
        }
        switch (selectData[0].suspension) {
            case 'Standard':
                sumprice = sumprice + Number(priceJSON.SUSSTANDARD);
                break;
            case 'AC-POWER':
                sumprice = sumprice + Number(priceJSON.SUSAC);
                break;
        }
        sumprice = sumprice - Math.trunc(Number(selectData[0].discount))
        console.log(sumprice);

        let loanMonths: number = 0;
        switch (selectData[0].finance) {
            case 'Loan 24 months':
                loanMonths = 24;
                break;
            case 'Loan 36 months':
                loanMonths = 36;
                break;
            case 'Loan 48 months':
                loanMonths = 48;
                break;
        }
        const idprintA4_net = document.getElementById('pdf-net') as HTMLInputElement
        const idprintA4_increase = document.getElementById('pdf-increase') as HTMLInputElement
        const idprintA4_period = document.getElementById('pdf-period') as HTMLInputElement
        const idprintA4_downpayment = document.getElementById('pdf-downpayment') as HTMLInputElement
        const idprintA4_regis = document.getElementById('pdf-regis') as HTMLInputElement
        const idprintA4_finalpay = document.getElementById('pdf-finalpay') as HTMLInputElement

        idprintA4_net.value = numtostr(sumprice);
        idprintA4_net.defaultValue = numtostr(sumprice);
        if (selectData[0].finance == 'Cash') {
            idprintA4_downpayment.value = '-';
            idprintA4_downpayment.defaultValue = '-';
            idprintA4_increase.value = '-';
            idprintA4_increase.defaultValue = '-';
            idprintA4_period.value = '-';
            idprintA4_period.defaultValue = '-';
        } else {
            idprintA4_downpayment.value = numtostr(sumprice * 0.25);
            idprintA4_downpayment.defaultValue = numtostr(sumprice * 0.25);
            idprintA4_increase.value = String(3.5);
            idprintA4_increase.defaultValue = String(3.5);
            idprintA4_period.value = numtostr(Math.trunc((sumprice * 0.75 + sumprice * 0.75 * 0.035 * loanMonths / 12) / loanMonths) + 1);
            idprintA4_period.defaultValue = numtostr(Math.trunc((sumprice * 0.75 + sumprice * 0.75 * 0.035 * loanMonths / 12) / loanMonths) + 1);
        }
        if (selectData[0].legalentity == 'Yes') {
            idprintA4_regis.value = '30,000';
            idprintA4_regis.defaultValue = '30,000';
            idprintA4_finalpay.value = numtostr(43662 + 30000 + 3000);
            idprintA4_finalpay.defaultValue = numtostr(43662 + 30000 + 3000);
        } else {
            idprintA4_regis.value = '20,000'
            idprintA4_regis.defaultValue = '20,000'
            idprintA4_finalpay.value = numtostr(43662 + 20000 + 3000);
            idprintA4_finalpay.defaultValue = numtostr(43662 + 20000 + 3000);
        }
    }
    return (
        <div className='detail' id='detail'>
            <div className="detail-content">
                <div className="detail-close" onClick={() => {
                    const detailID = document.getElementById('detail') as HTMLElement;
                    detailID.style.display = 'none';
                    showdata('');
                    clearPDF();
                }}>
                    <i className="material-icons">&#xe5cd;</i>
                </div>
                <h2>Customer Detail</h2>
                {selectData.length === 0 ? (
                    <p>No customer data available.</p>
                ) : (
                    <>
                        <div className="detail-customer">
                            <div>ID :</div>
                            <div>{selectData[0].id}</div>
                            <div>Seller :</div>
                            <div>{selectData[0].seller}</div>
                            <div>Name :</div>
                            <div>{selectData[0].name}</div>
                            <div>Last name :</div>
                            <div>{selectData[0].lastname}</div>
                            <div>Phone :</div>
                            <div>{selectData[0].phone}</div>
                            <div>Email :</div>
                            <div>{selectData[0].email}</div>
                            <div>Brand :</div>
                            <div>{selectData[0].brand}</div>
                            <div>Model :</div>
                            <div>{selectData[0].model}</div>
                            <div>Laminate :</div>
                            <div>{selectData[0].laminate}</div>
                            <div>Reartype :</div>
                            <div>{selectData[0].reartype}</div>
                            <div>Aircon :</div>
                            <div>{selectData[0].aircon}</div>
                            <div>Battery :</div>
                            <div>{selectData[0].battery}</div>
                            <div>Powergen :</div>
                            <div>{selectData[0].powergen}</div>
                            <div>Rearbox :</div>
                            <div>{selectData[0].rearbox}</div>
                            <div>Slide kitchen :</div>
                            <div>{selectData[0].kitchen}</div>
                            <div>Suspension :</div>
                            <div>{selectData[0].suspension}</div>
                            <div>Finance :</div>
                            <div>{selectData[0].finance}</div>
                            <div>Legal Entity :</div>
                            <div>{selectData[0].legalentity}</div>
                            <div>Discount :</div>
                            <div>{numtostr(Math.trunc(Number(selectData[0].discount)))}</div>
                            <div>Status :</div>
                            <div>{selectData[0].status}</div>
                        </div>
                        <div className="detail-group-bt">
                            <div className="button button-darkblue" onClick={() => {
                                const detailID = document.getElementById('detail') as HTMLElement;
                                detailID.style.display = 'none';
                                onClickNav('navmenu3');
                            }}><i className="material-icons">&#xe254;</i>Edit</div>
                            <div className="button button-blue" onClick={() => {
                                const detailID = document.getElementById('detail') as HTMLElement;
                                detailID.style.display = 'none';
                                onClickNav('navmenu5');
                                addDataPDF();
                            }}><i className="material-icons">&#xe8ad;</i>Print</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Detail
