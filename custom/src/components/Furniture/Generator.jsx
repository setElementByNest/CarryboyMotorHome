import React from 'react'
import './Generator.css'

function Generator({ numtostr, setAllData, setAllPrice, includePrice }) {
    const genPrice = [Number(includePrice.GENSTANDARD), Number(includePrice.GENDOMETIC)];
    const genName = ['Standard', 'Dometic'];
    function clickgen(x) {
        setAllData(prevState => ({...prevState, powergen: genName[x]}));
        setAllPrice(prevState => ({...prevState, powergen: genPrice[x]}));
        switch (x) {
            case 0:
                document.getElementById('generator-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('generator-2').style.outline = "none";
                document.getElementById('content-img').style.background = "url('img-custom/gen/carryboy-motorhome-rv-feature-generator-Standard.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 1:
                document.getElementById('generator-1').style.outline = "none";
                document.getElementById('generator-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('content-img').style.background = "url('img-custom/gen/carryboy-motorhome-rv-feature-generator-Dometic.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
    }
    return (
        <div className='generator'>
            <h2>Power Generator</h2>
            <div className='generator-list-n' id='generator-1' onClick={() => clickgen(0)}>
                <div className='generator-list-n-top'>
                    <h3>{genName[0]}</h3>
                    <h3>{numtostr(genPrice[0])}</h3>
                </div>
            </div>
            <div className='generator-list-n' id='generator-2' onClick={() => clickgen(1)}>
                <div className='generator-list-n-top'>
                    <h3>{genName[1]}</h3>
                    <h3>Option</h3>
                </div>
            </div>
        </div>
    )
}

export default Generator
