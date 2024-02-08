import './list.css'
interface Customer {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

interface SearchProps {
    datafilter: Customer[];
    showdata: (value: string) => void;
}
function List({ datafilter, showdata }: SearchProps) {

    return (
        <div className='list'>
            {datafilter.map((item) => {
                return (
                    <div className="list-content" key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name + " " + item.lastname}</div>
                        <div>{item.phone}</div>
                        <div>{item.email}</div>
                        <div>Status</div>
                        <div className="list-bt" onClick={() => {
                            const detailID = document.getElementById('detail') as HTMLElement;
                            detailID.style.display = 'flex';
                            showdata(item.id);
                        }}>Detail</div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
