import React from "react";
import './Option.css'
import jsonData from '../json/DataPopup.json'

function Option_1() {
    function clickpop(partA, partB) {
        let data = jsonData[partA][0][partB];
        let npage = jsonData[partA][0][partB]["npage"];
        sessionStorage.setItem('npage', npage)
        console.log(npage);
        document.body.style.overflow = 'hidden';
        let i = 0;
        for(i = 1; i < (npage+1); i++){
            document.getElementById('popup').style.display = 'flex' ;
            document.getElementById('popupimg' + i).style.background = "url(/img_index/" + data["page0" + i]["img"] + ")" ;
            document.getElementById('popupimg' + i).style.backgroundPosition = 'center center' ;
            document.getElementById('popupimg' + i).style.backgroundSize = 'cover' ;
            document.getElementById('popuphead' + i).innerHTML = data["page0" + i]["head"] ;
            document.getElementById('popupdetail' + i).innerHTML = data["page0" + i]["detail"] ;
        }
        document.getElementById('scrollpopupl').style.opacity = '0'
        if(npage == 1){
            document.getElementById('scrollpopupR').style.opacity = '0'
            document.getElementById('noticslide').style.opacity = '0'
        }else{
            document.getElementById('scrollpopupR').style.opacity = '1'
            document.getElementById('noticslide').style.opacity = '1'
        }
        for (let j = 1; j < 10; j++) {
            document.getElementById('popupbox' + j).style.display = 'flex'
            if(j <= 4){
                document.getElementById('npage' + j).style.display = 'flex'
            }
        }
        for (let i = npage; i < 9; i++) {
            document.getElementById('popupbox' + (i + 1)).style.display = 'none'
            if(i <= 4){
                document.getElementById('npage' + (i + 1)).style.display = 'none'
            }
        }
        document.getElementById('npage1').style.outline = '#ffffffdd solid 0.2vw'
        document.getElementById('npage2').style.outline = '#ffffff00 solid 0.2vw'
        document.getElementById('npage3').style.outline = '#ffffff00 solid 0.2vw'
        document.getElementById('npage4').style.outline = '#ffffff00 solid 0.2vw'
        document.getElementById('npage5').style.outline = '#ffffff00 solid 0.2vw'
    }
    return (
        <div className="option">
            <div className="optionmain">
                <div className="optionsub_1">
                    <h2>OPTION</h2>
                </div>
                <div className="optionsub_2">
                    <div className="optionsub_2_imgset">
                        <div className="optionsub_2_group opimg1" onClick={() => clickpop('option', 'suspension')}>
                            <div className="gradientopimg">
                                <h3>Suspension</h3>
                                <div style={{
                                    fontSize: '12px',
                                    marginBottom: '20px'
                                }}><div className="u_naja">More Information <div className="fa fa-angle-right" style={{ marginLeft: '10px' }}></div></div></div>
                            </div>
                        </div>
                        <div className="optionsub_2_group opimg2" onClick={() => clickpop('option', 'kitchen')}>
                            <div className="gradientopimg">
                                <h3>Kitchen slide</h3>
                                <div style={{
                                    fontSize: '12px',
                                    marginBottom: '20px'
                                }}><div className="u_naja">More Information <div className="fa fa-angle-right" style={{ marginLeft: '10px' }}></div></div></div>
                            </div>
                        </div>
                        <div className="optionsub_2_group opimg3" onClick={() => clickpop('option', 'air')}>
                            <div className="gradientopimg">
                                <h3>Air conditioner</h3>
                                <div style={{
                                    fontSize: '12px',
                                    marginBottom: '20px'
                                }}><div className="u_naja">More Information <div className="fa fa-angle-right" style={{ marginLeft: '10px' }}></div></div></div>
                            </div>
                        </div>
                        <div className="optionsub_2_group opimg4" onClick={() => clickpop('option', 'gen')}>
                            <div className="gradientopimg">
                                <h3>Power Generator</h3>
                                <div style={{
                                    fontSize: '12px',
                                    marginBottom: '20px'
                                }}><div className="u_naja">More Information <div className="fa fa-angle-right" style={{ marginLeft: '10px' }}></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Option_1