import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
export default function Interface({}) {

  const Account = useRef()
  const Type = useRef()
  const FirstChar = useRef()
  const FirstNum = useRef()
  const Taille = useRef()

  const HandleAddNew =(e)=>{
    e.preventDefault()
    const data = {
      Account : Account.current.value,
      Type : Type.current.value,
      FirstChar : FirstChar.current.value,
      FirstNum : FirstNum.current.value,
      Taille : Taille.current.value,
    };
    setCarnet(...carnet,data)
    console.log(carnet)


  } 

  const handleClose =()=>{
    setOpen(!open)

  }
  return (
    <>
      
      <style>
      {`
         .card {
        }
        .CarnetForm {
          display: ${open ? 'block' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw; /* Use viewport width */
          height: 100vh; /* Use viewport height */
          z-index: 999; /* Increase z-index to ensure it's above other elements */
        }
        
        `}
      </style>

      
      <div className={`container mt-5 CarnetForm ${open? "active" : "inactive"}`} >
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Add Carnet</h1>
          <hr />
          <form>
            <div className="form-group">
              <label htmlFor="selectAccount">Account</label>
              <select className="form-control" name="selectAccount" id="selectAccount" ref={Account} > 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="selectType">Type</label>
              <select className="form-control" name="selectType" id="selectType" ref={Type} >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
                <option value="e">e</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="FirstChar">First Character</label>
              <input type="text" className="form-control" name="FirstChar" id="FirstChar" ref={FirstChar} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="FirstNum">First Number</label>
                <input type="number" className="form-control" name="FirstNum" id="FirstNum" ref={FirstNum} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="selectTaille">Taille</label>
              <select className="form-control" name="selectTaille" id="selectTaille" ref={Taille}>
                <option value="25">25 page</option>
                <option value="50">50 page</option>
                <option value="100">100 page</option>
              </select>
            </div>
            <div className="row">
              <div className="col-7 text-right">
                <Link to={'/Acounte'} type="button" className="btn btn-danger mt-3" onClick={handleClose}>Back</Link>
              </div>
              <div className="col-5 text-middle">
                <button type="submit" className="btn btn-primary btn-block mt-3" onClick={HandleAddNew}>Ajouter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}