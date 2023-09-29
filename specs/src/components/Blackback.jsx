import React from "react";

function Blackback() {
    return (
        <div style={{
            height: '100vh',
            width: '0vw',
            position: 'fixed',
            zIndex: '1',
            background: 'linear-gradient(to left, #000000AA, #00000000)',
            bottom: '0',
            right: '0',
            transition: 'ease-in-out all 0.3s'
        }}
        id="bb"></div>
    )
}

export default Blackback