import React from 'react';
import dropicon from '../images/Vector (8).png';
import '../App.css';
import filterredicon from '../images/filterred.png';

function home() {
  return (
    <div class="collapse" id="collapseExample3">
      <div className="Container nb2">
        <div className="Row">
          <div className="col-md-3 nv1">
            <p>Employee ID</p>
            <br />
            <p className="empid">
              AAS# 123-456
              <hr className="nv1x" />
              AAS# 123-456
              <hr className="nv1x" />
              AAS# 123-456
              <hr className="nv1x" />
              AAS# 123-456
              <hr className="nv1x" />
            </p>
          </div>
          <div className="col-md-3 nv2">
            <p>Card</p>
            <br />
            American Express
            <hr className="nv3x" />
            American Express
            <hr className="nv3x" />
            American Express
            <hr className="nv3x" />
            American Express
            <hr className="nv3x" />
          </div>
          <div className="col-md-2 nv3">
            <p>Card limit</p>
            <br />
            INR 5000.00
            <hr className="nv2x" />
            INR 5000.00
            <hr className="nv2x" />
            INR 5000.00
            <hr className="nv2x" />
            INR 5000.00
            <hr className="nv2x" />
          </div>
          <div className="col-md-2 nv4">
            <p>
              Expenditure <img src={dropicon} />
            </p>
            <br />
            INR 1000.00
            <hr className="nv4x" />
            INR 1000.00
            <hr className="nv4x" />
            INR 4000.00
            <hr className="nv4x" />
            INR 1000.00
            <hr className="nv4x" />
          </div>
          <div className="col-md-2 nv5">
            <p>Balance</p>
            <br />
            <p className="bln">
              INR 4000.00
              <hr className="nv5x" />
              INR 4000.00
              <hr className="nv5x" />
              INR 1000.00
              <hr className="nv5x" />
              INR 4000.00
              <hr className="nv5x" />
            </p>
          </div>
        </div>
      </div>

      <div className="Container">
        <div className="Row">
          <div className="col-md-3">
            <p className="navbar">4 results</p>
          </div>
          <div className="col-md-9">
            <p className="navbar">
              <x className="pre">Previous</x>
              <x className="next">Next</x>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
