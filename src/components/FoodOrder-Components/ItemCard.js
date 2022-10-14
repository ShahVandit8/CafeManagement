import React from 'react'
import PropTypes from 'prop-types'
import { NavHashLink } from 'react-router-hash-link';

function ItemCard({ item, handleClick }) {

    const { Item_Name, Description, Unit_Price } = item;

  return (
    <>
                                    <div className="col-16 col-md-6 mt-4 pr-2" style={{ border: 'none'}}>
                                <div className="shadow border-bottom border-primary p-2 rounded">
                                    <img src="https://i.imgur.com/UxWNRX4.png" style={{ height: 18 }} />
                                    <br />
                                    {/* <p style={{ fontSize: 13, marginTop: 2, color: 'black' }}>Item No: {key}</p> */}
                                    <p style={{ fontSize: 22, marginTop: 2, color: 'black' }}>{Item_Name}</p>
                                    <p style={{ fontSize: 13, color: '#4A4A4A', marginTop: '-12px' }}>{Description}</p>
                                    <p style={{ fontSize: 19, marginTop: 1 }}>₹ {Unit_Price}</p>

                                    <div className="row">
                                        <div className="col-6">
                                            {/* <p style={{ fontSize: 15, marginTop: 1 }}>Qty :
                                                <select style={{ marginLeft: 10 }} name="qty">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                </select>
                                            </p> */}
                                        </div>
                                        <div className="col-6">
                                            <button 
                                            className="btn btn-primary float-right mr-3" 
                                            style={{ width: '90px', fontSize: 13, marginTop: '-5px' }}
                                            onClick={() => handleClick(this)}
                                            > Add </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    </>
  )
}

export default ItemCard

