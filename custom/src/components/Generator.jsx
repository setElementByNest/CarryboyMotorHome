import React from 'react'
import './Generator.css'

sessionStorage.setItem('namegen', 'Standard (3,300 Watt)');
sessionStorage.setItem('costgen', 0);

function Generator({ calcost }) {
    function clickgen(n, c) {
        switch (n) {
            case 'Standard (3,300 Watt)':
                document.getElementById('generator-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('generator-2').style.outline = "none";
                document.getElementById('content-img').style.background = "url('img-custom/gen/carryboy-motorhome-rv-feature-generator-Standard.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 'Dometic (2,100 Watt)':
                document.getElementById('generator-1').style.outline = "none";
                document.getElementById('generator-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('content-img').style.background = "url('img-custom/gen/carryboy-motorhome-rv-feature-generator-Dometic.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
        sessionStorage.setItem('namegen', n);
        sessionStorage.setItem('costgen', c);
        calcost();
    }
    return (
        <div className='generator'>
            <h2>Power Generator</h2>
            <div className='generator-list-n' id='generator-1' onClick={() => clickgen('Standard (3,300 Watt)', 0)}>
                <div className='generator-list-n-top'>
                    <h3>Standard (3,300 Watt)</h3>
                    <h3>Option</h3>
                </div>
            </div>
            <div className='generator-list-n' id='generator-2' onClick={() => clickgen('Dometic (2,100 Watt)', 0)}>
                <div className='generator-list-n-top'>
                    <h3>Dometic (2,100 Watt)</h3>
                    <h3>Option</h3>
                </div>
            </div>
        </div>
    )
}

export default Generator
