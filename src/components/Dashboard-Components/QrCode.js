import React from 'react'

const QrCode = () => {
  return (
    <div>
      <img className="mx-auto mt-5 d-block" style={{width: 250, height: 250}} src="https://qrtiger.com/temp/1664970488169.png" alt="Qr Code" />
      <button type="submit" className="btn btn-primary mt-4 btn-block" style={{color: 'white'}}>Generate QR Code</button>
    </div>
  )
}

export default QrCode
