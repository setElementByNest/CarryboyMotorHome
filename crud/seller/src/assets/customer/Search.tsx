import { useState } from 'react';
import './search.css'

interface SearchProps {
    setSearch: (value: React.SetStateAction<string>) => void;
    dataSearch: string;
    datafilted: (value: string) => void;
    setTypeSearch: (value: React.SetStateAction<number>) => void;
    typeSearch: number;
}
function Search({ dataSearch, setSearch, datafilted, setTypeSearch, typeSearch }: SearchProps) {
    const [textType, setTextType] = useState<string>('ID')
    const n_typeSearch: string[] = ['ID', 'NAME', 'PHONE']
    return (
        <div className='search'>
            <div className="search-content">
                <input type="text" className='search-input' id='search-input' onFocus={(e) => e.preventDefault()} onChange={(e) => {
                    setSearch(e.target.value);
                    datafilted(e.target.value);
                }} />
                <div className="search-bt" onClick={() => {
                    console.log(dataSearch);
                    let nowtype = typeSearch;
                    if (nowtype >= 3) {
                        nowtype = 0;
                    }
                    setTypeSearch(nowtype + 1);
                    setTextType(n_typeSearch[nowtype]);
                    const inputValue = document.getElementById('search-input') as HTMLInputElement;
                    inputValue.value = '';
                    setSearch('');
                    datafilted('');
                }}><i className="search-i">{textType}</i></div>
            </div>
        </div>
    )
}

export default Search
