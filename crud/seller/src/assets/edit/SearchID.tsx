import { useState } from 'react';
import './searchID.css'

interface SearchIDIntf {
    showdata: (value: string) => void;
}
function SearchID({ showdata }: SearchIDIntf) {
    const [inputID, setInputID] = useState<string>('');
    const handleKeywordKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            showdata('');
            setTimeout(() => {
                showdata(inputID);
            }, 100);
        }
    };
    return (
        <div className='searchID'>
            <div className="searchID-content">
                <h3>ID :</h3>
                <input type="text" onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                    setInputID(e.target.value);
                }}
                    onKeyDown={handleKeywordKeyPress}/>
                <div className='searchID-editBT' onClick={
                    () => {
                        showdata('');
                        setTimeout(() => { showdata(inputID) }, 100);
                    }
                }>EDIT</div>
            </div>
        </div>
    )
}

export default SearchID
