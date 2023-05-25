import React, { useState } from "react";
import "./styles/styles.scss";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show} centered>
      <i className="fa-solid fa-xmark" />
      <div className="row justify-content-between">
        <div className="col-lg-7 col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <i className="fa-regular fa-credit-card" />
                  </div>
                  <h1 className="logo-text mb-0">
                    AceCoin<span>Pay</span>
                  </h1>
                </div>
                <div />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="timer d-flex align-items-center justify-content-center">
                <h4>0</h4>
              </div>
              <div className="timer d-flex align-items-center justify-content-center">
                <h4>1</h4>
              </div>
              <span id="column">:</span>
              <div className="timer d-flex align-items-center justify-content-center">
                <h4>1</h4>
              </div>
              <div className="timer d-flex align-items-center justify-content-center">
                <h4>9</h4>
              </div>
            </div>
          </div>
          <div className="d-lg-flex d-md-block d-flex justify-content-between align-items-center mb-2">
            <div>
              <h3>Card Number</h3>
              <p>Enter the 16-digit Card Number on the Card</p>
            </div>
            <button id="edit-btn" className="mb-md-2">
              <i className="fa-solid fa-pen" />
              Edit
            </button>
          </div>
          <div className="card-number d-flex justify-content-between mb-4">
            <div className="d-flex align-items-center">
              <img src="./img/mastercard.png" alt="mastercard" />
              <input type="number" placeholder={2412} />
              <i className="fa-solid fa-minus" />
              <input type="number" placeholder={2412} />
              <i className="fa-solid fa-minus" />
              <input type="number" placeholder={2412} />
              <i className="fa-solid fa-minus" />
              <input type="number" placeholder={2412} />
            </div>
            <img src="/img/checkmark.png" alt="mastercard" />
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-5">
              <h3>CVV Number</h3>
              <p>Enter the 3 or 4 digit number on the Card</p>
            </div>
            <div className="col-7 mb-4">
              <div className="input d-flex justify-content-between align-items-center">
                <input type="number" placeholder={123} />
                <i className="fa-solid fa-grip" />
              </div>
            </div>
            <div className="col-5">
              <h3>Expiry Date</h3>
              <p>Enter the Expiration date of the Card</p>
            </div>
            <div className="col-7 d-flex align-items-center mb-4">
              <div className="input">
                <input type="number" placeholder="09" />
              </div>
              <span>/</span>
              <div className="input">
                <input type="number" placeholder="22" />
              </div>
            </div>
            <div className="col-5">
              <h3>Password</h3>
              <p>Enter Your Dynamic Password</p>
            </div>
            <div className="col-7">
              <div className="input password d-flex justify-content-between align-items-center">
                <input type="password" placeholder="........" />
                <i className="fa-solid fa-grip" />
              </div>
            </div>
          </div>
          <button id="pay">Pay Now</button>
        </div>
        <div className="col-lg-4 col-md-6 mb-md-0 mt-md-0 mt-5">
          <div className="details">
            <div className="card">
              <div className="d-flex justify-content-between align-items-center">
                <img id="sim" src="./img/sim.png" alt="" />
                <i className="fa-solid fa-wifi" />
              </div>
              <p>Jonathan Micheal</p>
              <h4>
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                <span>3456</span>
              </h4>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <h5>09 / 22</h5>
                <div>
                  <img id="mastercard" src="/img/mastercard.png" alt="" />
                  <h6>mastercard</h6>
                </div>
              </div>
            </div>
            <div className="top">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>Company</p>
                <div className="d-flex">
                  <div className="logo d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-apple" />
                  </div>
                  <h4>Apple</h4>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>Order Number</p>
                <h4>1266201</h4>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>Product</p>
                <h4>MacBook Air</h4>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-5">
                <p>VAT (20%)</p>
                <h4>$100.00</h4>
              </div>
            </div>
            <div className="bottom d-flex justify-content-between align-items-center">
              <div>
                <p>You have to Pay</p>
                <h3>
                  549.<span>99</span>
                  <span>USD</span>
                </h3>
              </div>
              <i className="fa-solid fa-file-invoice" />
            </div>
            <div className="circle right" />
            <div className="circle left" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default App;
