import React from 'react'

function Footer() {
  return (
    <div style={{height: '50px', width: '100%', backgroundColor: 'black', textAlign:'center' , color: 'white', padding: '5px', marginTop: '-20px'}}>
        <p>Copyright &copy; {new Date().getFullYear()} ♥  RAHUL - All Rights Reserved</p>
    </div>
  )
}

export default Footer