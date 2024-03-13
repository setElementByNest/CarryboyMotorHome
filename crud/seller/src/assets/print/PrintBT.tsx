import './printbt.css'
interface Props {
    onClickNav: (value: string) => void
}
function PrintBT({ onClickNav }: Props) {
    function printElement() {
        const pageelement = document.getElementById('printA4') as HTMLElement
        var printContent = pageelement.innerHTML;
        // var originalContent = document.body.innerHTML;
        const newWindow = window.open('', '_blank');
        var csstext1 = `
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap');
            * {
                opacity: 0;
                margin: 0;
                padding: 0;
                font-family: 'Kanit', sans-serif;
                font-weight: 300;
                -webkit-user-select: auto;
                /* Safari */
                -ms-user-select: auto;
                /* IE 10 and IE 11 */
                user-select: auto;
                /* Standard syntax */
                -webkit-tap-highlight-color: transparent;
            }
            .printA4 {
                width: 575px;
                height: 742px;
                border: #00000044 solid 1px;
                border-radius: 4px;
                padding: 50px 10px;
                display: flex;
                flex-wrap: wrap;
                align-content: flex-start;
                position: relative;
                background: #ffffff;
            }
            
            .A4-topgroup {
                display: flex;
            }
            
            .A4-brand img {
                width: 80%;
                margin: 0 0 5% 0;
                object-fit: contain;
            }
            
            .A4-brand {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 35%;
            }
            
            .A4-brand h3 {
                font-size: 60%;
                font-weight: 400
            }
            
            .A4-head {
                width: 55%;
                padding: 0 5%;
                display: flex;
                flex-direction: column;
                align-items: center;
                transform: translate(0, -10px);
            }
            
            .A4-head-red {
                color: #cc0000;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .A4-head-red h1 {
                font-size: 150%;
                font-weight: 500;
            }
            
            .A4-head-red h2 {
                font-size: 80%;
                font-weight: 500;
                transform: translate(0, -30%);
                margin: 0 0 5px;
            }
            
            .A4-head-info {
                width: 100%;
            }
            
            .A4-head-info div {
                display: grid;
                width: 100%;
                margin: 0;
            }
            
            .A4-head-info h3 {
                font-size: 60%;
                font-weight: 400;
                text-wrap: nowrap;
            }
            
            .A4-head-info h4 {
                font-size: 50%;
                font-weight: 400;
            
            }
            
            .A4-head-info input {
                font-size: 80%;
                width: 100%;
                margin: 0 0 1px 5px;
                background: none;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #000000;
                outline: none;
                padding: 0;
                transform: translate(0, -30%);
            }
            
            .A4-head-info input:focus {
                margin: 0 0 0px 5px;
                border-bottom: #1990ff solid 2px;
            }
            
            .A4-id {
                position: absolute;
                display: flex;
                top: 0;
                right: 0;
                width: 25%;
                background: #cc0000;
                padding: 0 10px;
            }
            
            .A4-id h3 {
                font-size: 80%;
                font-weight: 400;
                color: #ffffff;
            }
            
            .A4-id input {
                font-size: 100%;
                width: 70%;
                margin: 0 0 1px 5px;
                background: none;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #ffffff;
                outline: none;
                padding: 0;
                font-weight: 400;
            }
            
            .A4-id input:focus {
                margin: 0 0 0px 5px;
                border-bottom: #1990ff solid 2px;
            }
        `
        var csstext2 = `
            .A4-list1 {
                background: #cc0000;
                border-radius: 6px;
                width: 90%;
                display: flex;
                align-items: center;
                padding: 2px 5%;
            }
            
            .A4-list1 h2 {
                font-size: 13px;
                color: #ffffff;
                font-weight: 400;
                margin: 0 5px 0 0;
                text-wrap: nowrap;
            }
            
            .A4-list1 input {
                font-size: 15px;
                width: 50%;
                margin: 0 15px 1px 5px;
                background: #ffffff;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #000000;
                outline: none;
                padding: 2px 10px;
                font-weight: 400;
                border-radius: 4px;
            }
            
            .A4-list1 input:focus {
                margin: 0 15px 0px 5px;
                border-bottom: #1990ff solid 2px;
            }
            
            .A4-list2 {
                width: 96%;
                display: flex;
                flex-direction: column;
                margin: 0 2%;
            }
            
            .A4-list2 h2 {
                font-size: 16px;
                margin: 5px 0 2px;
                font-weight: 400;
            }
            
            .A4-list2 h3 {
                font-size: 12px;
                margin: 10px 0 10px 15px;
                font-weight: 400;
                color: #00000088;
                text-decoration: underline;
            }
            .A4-list2 td {
                font-size: 70%;
                font-weight: 300;
            }
            
            .A4-list2 input {
                font-size: 100%;
                width: 80%;
                margin: 0 15px 1px 5px;
                background: #ffffff;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #000000;
                outline: none;
                padding: 0 10px;
                font-weight: 400;
            }
            
            .A4-list2 input:focus {
                margin: 0 15px 0px 5px;
                border-bottom: #1990ff solid 2px;
            }
            
            .A4-finance {
                width: 100%;
            }
            
            .A4-finance-head {
                background: #000000;
                border-radius: 6px;
                width: 90%;
                display: flex;
                align-items: center;
                padding: 1% 5%;
                margin: 10px 0;
            }
            .A4-finance-head h3 {
                color: #ffffff;
                font-size: 14px;
                font-weight: 400;
            }
            .A4-finance-list {
                width: 96%;
                margin: 0 2%;
                display: flex;
            }
            .A4-finance-list input {
                font-size: 100%;
                width: 80%;
                margin: 0 15px 1px 5px;
                background: #ffffff;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #000000;
                outline: none;
                padding: 0 10px;
                font-weight: 400;
                text-align: end;
            }
            
            .A4-finance-list input:focus {
                margin: 0 15px 0px 5px;
                border-bottom: #1990ff solid 2px;
            }
            .A4-finance-list td {
                font-size: 70%;
                font-weight: 300;
                text-wrap: nowrap;
            }
            
            .A4-finance-list-1 {
                width: 98%;
                margin: 0 2% 0 0;
            }
            .A4-finance-list-2 {
                width: 98%;
                margin: 0 0 0 2%;
            }
            .A4-finance-type {
                width: 96%;
                margin: 0 2%;
                display: flex;
            }
            
            .A4-finance-type h3 {
                font-size: 14px;
                font-weight: 400;
            }
            .A4-finance-type input {
                font-size: 100%;
                width: 25%;
                background: #ffffff;
                border: none;
                color: #000000;
                outline: none;
                padding: 0 10px;
                font-weight: 400;
                text-align: start;
            }
        `
        var csstext3 = `
            .A4-promise {
                width: 96%;
                margin: 0 2%;
                display: inline-flex;
                flex-wrap: wrap;
            }
            
            .A4-promise h3 {
                font-size: 12px;
                font-weight: 500;
            }
            .A4-promise input {
                font-size: 80%;
                width: 60%;
                margin: 0 5px 0 0;
                transform: translate(0, -5px);
                background: #ffffff;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #000000;
                outline: none;
                padding: 2px 10px;
                font-weight: 400;
                text-align: end;
            
            }
            
            .A4-promise input:focus {
                border-bottom: #1990ff solid 1px;
            }
            
            .A4-signgroup {
                width: 100%;
                display: grid;
                justify-content: center;
                grid-template-columns: auto auto;
            }
            
            .A4-signgroup-content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: center;
                margin: 15px 15px 0;
            }
            
            .A4-signgroup-content h3 {
                font-size: 10px;
                font-weight: 300;
            }
            .A4-signgroup-content-up {
                display: flex;
            }
            
            .A4-signgroup-content-down {
                display: flex;
                transform: translate(20px, 0);
            }
            .A4-signgroup-content input {
                font-size: 60%;
                width: 150px;
                margin: 0 5px;
                transform: translate(0, -5px);
                background: #ffffff;
                border: none;
                border-bottom: #000000 dotted 1px;
                color: #000000;
                outline: none;
                padding: 2px 10px;
                font-weight: 400;
                text-align: center;
            
            }
            
            .A4-signgroup-content input:focus {
                border-bottom: #1990ff solid 1px;
            }
        `
        var csstext4 = `
            @media print {
                *{
                    opacity: 1;
                }
                :root {
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                }
                #root {
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                }
                html {
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                }
                body {
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                    width: 210mm;
                    /* A4 width */
                    height: 257mm;
                    /* A4 height */
                    padding: 50px 10px;
                    overflow: hidden;
                }
                .A4-brand img {
                    width: 6cm;
                    height: 2cm;
                    margin: 0 0 5% 0;
                    object-fit: contain;
                }
                .A4-brand h3 {
                    font-size: 0.3cm;
                }
                .A4-head-red h1 {
                    font-size: 1cm;
                }
                .A4-head-red h2 {
                    font-size: 0.6cm;
                }
                .A4-head-info h3 {
                    font-size: 0.4cm;
                }
                .A4-head-info h4 {
                    font-size: 0.25cm;
                }
                .A4-head-info input {
                    font-size: 0.4cm;
                }
                .A4-list1 h2 {
                    font-size: 0.6cm;
                }
                .A4-list1 input {
                    font-size: 0.6cm;
                }
                .A4-list2 h2 {
                    font-size: 0.5cm;
                }
                .A4-list2 h3 {
                    font-size: 0.4cm;
                }
                .A4-list2 td {
                    font-size: 0.4cm;
                }
                .A4-list2 input {
                    font-size: 0.4cm;
                }
                .A4-finance-head h3 {
                    font-size: 0.6cm;
                }
                .A4-finance-list input {
                    font-size: 0.4cm;
                }
                .A4-finance-list td {
                    font-size: 0.4cm;
                }
                .A4-finance-type h3 {
                    font-size:  0.5cm;
                }
                .A4-finance-type input {
                    font-size:  0.5cm;
                }
                .A4-promise h3 {
                    font-size: 0.35cm;
                }
                .A4-promise input {
                    font-size: 0.35cm;
                }
                .A4-signgroup-content h3 {
                    font-size: 0.35cm;
                }
                .A4-signgroup-content input {
                    font-size: 0.35cm;
                }
                .A4-signgroup-content {
                    margin: 0.5cm 15px 0;
                }
            }
        `
        if (newWindow) {
            newWindow.document.write('<html><head><title>Print</title><style>');
            newWindow.document.write(csstext1);
            newWindow.document.write(csstext2);
            newWindow.document.write(csstext3);
            newWindow.document.write(csstext4);
            newWindow.document.write('</style></head><body>');
            newWindow.document.write(printContent);
            newWindow.document.write('</body></html>');
            newWindow.document.close();
            newWindow.focus(); // Required for some browsers to process the content
            newWindow.print();
            setTimeout(() => {
                // This checks if the new window is still open before attempting to close it
                if (!newWindow.closed) {
                    newWindow.close();
                }
            }, 0);
        } else {
            alert('Failed to open the new window. Please check your popup blocker settings.');
        }

        // document.body.innerHTML = printContent;
        // window.print();
        // document.body.innerHTML = originalContent;
    }

    return (
        <div className='printbt'>
            <div className="button button-blue" onClick={printElement} ><i className="material-icons">&#xe8ad;</i>Print</div>
            {/* <div className="button button-blue" onClick={() => {
                const idnameofPDF = document.getElementById('pdf-name') as HTMLInputElement
                idnameofPDF.value = 'Hi every one';
                idnameofPDF.defaultValue = 'Hi every one';
            }}><i className="material-icons">&#xe2c4;</i>Download</div> */}
            <div className="button button-darkblue" onClick={() => { onClickNav('navmenu2') }}><i className="material-icons">&#xe5cd;</i>Cancel</div>
        </div>
    )
}

export default PrintBT
