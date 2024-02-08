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
interface DetailIntf {
    selectData: Customer[];
    showdata: (value: string) => void;
    onClickNav: (value: string) => void,
}
function Detail({ selectData, showdata, onClickNav }: DetailIntf) {
    if (selectData.length == 0) { }
    return (
        <div className='detail' id='detail'>
            <div className="detail-content">
                <div className="detail-close" onClick={() => {
                    const detailID = document.getElementById('detail') as HTMLElement;
                    detailID.style.display = 'none';
                    showdata('');
                }}>
                    <i className="material-icons">&#xe5cd;</i>
                </div>
                <h2>Customer Detail</h2>
                {selectData.length === 0 ? (
                    <p>No customer data available.</p>
                ) : (
                    <div className="detail-customer">
                        <table>
                            <tbody>
                                <tr>
                                    <td>ID :</td>
                                    <td>{selectData[0].id}</td>
                                    <td>Seller :</td>
                                    <td>{selectData[0].seller}</td>
                                </tr>
                                <tr>
                                    <td>Name :</td>
                                    <td>{selectData[0].name}</td>
                                    <td>Last name :</td>
                                    <td>{selectData[0].lastname}</td>
                                </tr>
                                <tr>
                                    <td>Phone :</td>
                                    <td>{selectData[0].phone}</td>
                                    <td>Email :</td>
                                    <td>{selectData[0].email}</td>
                                </tr>
                                <tr>
                                    <td>Brand :</td>
                                    <td>{selectData[0].brand}</td>
                                    <td>Model :</td>
                                    <td>{selectData[0].model}</td>
                                </tr>
                                <tr>
                                    <td>Laminate :</td>
                                    <td>{selectData[0].laminate}</td>
                                    <td>Reartype :</td>
                                    <td>{selectData[0].reartype}</td>
                                </tr>
                                <tr>
                                    <td>Aircon :</td>
                                    <td>{selectData[0].aircon}</td>
                                    <td>Battery :</td>
                                    <td>{selectData[0].battery}</td>
                                </tr>
                                <tr>
                                    <td>Powergen :</td>
                                    <td>{selectData[0].powergen}</td>
                                    <td>Rearbox :</td>
                                    <td>{selectData[0].rearbox}</td>
                                </tr>
                                <tr>
                                    <td>Slide kitchen :</td>
                                    <td>{selectData[0].kitchen}</td>
                                    <td>Suspension :</td>
                                    <td>{selectData[0].suspension}</td>
                                </tr>
                                <tr>
                                    <td>Finance :</td>
                                    <td>{selectData[0].finance}</td>
                                    <td>Legal Entity :</td>
                                    <td>{selectData[0].legalentity}</td>
                                </tr>
                                <tr>
                                    <td>Discount :</td>
                                    <td>{selectData[0].discount}</td>
                                    <td>Status :</td>
                                    <td>{selectData[0].status}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="detail-group-bt">
                            <div className="detail-edit" onClick={() => {
                                const detailID = document.getElementById('detail') as HTMLElement;
                                detailID.style.display = 'none';
                                onClickNav('navmenu3');
                            }}>Edit</div>
                            <div className="detail-payment">Payment</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Detail
