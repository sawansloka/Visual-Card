import React from 'react';
import '../style.css';
import Active from './home';
import Filter from './Filter';
import dashicon from '../images/Vector.png';
import pytmicon from '../images/Vector (1).png';
import balicon from '../images/Vector (2).png';
import accicon from '../images/Vector (3).png';
import bankicon from '../images/Vector (4).png';
import repoicon from '../images/Vector (5).png';
import searchicon from '../images/Vector (6).png';
import filtericon from '../images/Vector (7).png';
import noticon from '../images/Frame.png';
import headphicon from '../images/Frame (1).png';
import personicon from '../images/Frame (2).png';

function Main() {
  return (
    <div className="Container">
      <div className="Row">
        <div className="col-md-2 my">
          <h1 className="cmpname">Company</h1>
          <div className="cmp">
            <p>
              <img src={dashicon} className="dashicon" />
              <a className="Dashboard">Dashboard</a>
            </p>
            <br />
            <p>
              <img src={pytmicon} className="pymicon" />
              <a className="Payments">Payments</a>
            </p>
            <br />
            <p>
              <img src={balicon} className="balicon" />
              <a className="Balances">Balances</a>
            </p>
            <br />
            <p>
              <img src={accicon} className="accicon" />
              <a className="Accounting">Accounting</a>
            </p>
            <br />
            <p
              data-toggle="collapse"
              href="#collapseExample7"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample7"
            >
              <img src={bankicon} className="bankicon" />
              <a className="Banking">Banking</a>
            </p>
            <p class="collapse" id="collapseExample7" className="bank1">
              Your wallet
              <br />
              <br />
              <a className="bank2">Expenses</a>
              <br /> <br />{' '}
              <a
                data-toggle="collapse"
                href="#collapseExample8"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample8"
                className="Vcard"
              >
                Virtual cards{' '}
              </a>
              <br />
              <br />
              <a className="Pcard">Physical cards</a>
            </p>
            <br />
            <p>
              <img src={repoicon} className="repo1icon" />
              <a className="Reports">Reports</a>
            </p>
            <div className="Footer">
              <hr className="bod1" />
              <p>Total Expenditure</p>
              <p className="exp">INR 7,000.00</p>
              <p> Total Balance</p>
              <p className="bal">INR 13,000.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-10 my2">
          <div className="Container big">
            <div className="Row">
              <div className="col-md-6 srch1">
                <a className="Searchicon">
                  <img src={searchicon} />
                </a>
                <input type="text" placeholder="Search" className="search" />
              </div>
              <div className="col-md-6 navx">
                <img src={noticon} className="noticon" />
                <img src={headphicon} className="headphicon" />
                <img src={personicon} className="repoicon" />
              </div>
            </div>
          </div>
          <hr className="bod2" />
          <div class="collapse vc1" id="collapseExample8">
            <h1 className="crd"> Virtual cards </h1>
            <div className="Container bigb">
              <div className="Row">
                <div className="col-md-6 m31">
                  <p className="navbar">
                    <a
                      className="filt1"
                      data-toggle="collapse"
                      href="#collapseExample2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    >
                      <img src={filtericon} className="filtericon" />
                      <a className="filt2">Filters</a>
                    </a>{' '}
                    <br />
                    <x
                      className="activ"
                      data-toggle="collapse"
                      href="#collapseExample3"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample3"
                    >
                      Active
                    </x>{' '}
                    <a className="blocked">Blocked</a>
                  </p>
                </div>
                <div className="col-md-6 m32">
                  <p className="navbar">
                    <x className="edit">Edit Card</x>{' '}
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      + Add Card{' '}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <hr className="bod3" />
          </div>
          <Active />
          <Filter />
        </div>
      </div>
    </div>
  );
}
export default Main;
