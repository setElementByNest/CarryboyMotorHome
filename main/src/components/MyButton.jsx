import React from 'react'
function hoverin(e) {
  e.target.style.background = '#aa0000'
}
function hoverout(e) {
  e.target.style.background = '#cc0000'
}
function buttonclickbanner() {
  window.open('https://carryboymotorhome.com/build-rv/')
}
function BuildyourrvButton() {
  return (
    <button 
    onMouseEnter={hoverin}
    onMouseLeave={hoverout}
    onClick={buttonclickbanner}
    style={
      {
        background: '#cc0000',
        padding: '1vh 1.5vw',
        fontSize: '2vh',
        border: 'none',
        borderRadius: '5px',
        color: '#ffffff',
        marginTop: '2vh',
        boxShadow: '0 0 15px 5px #000000aa',
        cursor: 'pointer'
      }
    }>BUILD YOUR RV</button>
  )
}

export default BuildyourrvButton