import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import filterredicon from '../images/filterred.png';

function Filter() {
  return (
    <div class="collapse xy" id="collapseExample2">
      <div class="card mxy2">
        <div className="Container">
          <div className="Row">
            <div className="col-md-6 f2">
              <p className="f1">Filters</p>
            </div>
            <div className="col-md-6 c2 ">
              <p className="c1">Clear all</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="dropdown m2x1">
          <p
            data-toggle="collapse"
            href="#collapseExample41"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample41"
          >
            <a className="cardx1">
              Card <ArrowDropDownIcon className="down" />
            </a>
          </p>
          <div class="collapse c1x" id="collapseExample41">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                American Express
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Apple Pay
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                ICICI Bank
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Citi Bank
              </label>
            </div>
          </div>
        </div>
        <hr className="h1x" />
        <div class="dropdown m2x">
          <p
            data-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
          >
            <a className="cardl1">
              {' '}
              Card Limit <ArrowDropDownIcon className="down1" />
            </a>
          </p>
          <div class="collapse c2x" id="collapseExample5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                &lt; INR 2000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                INR 2000 - 7000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                &gt; INR 7000
              </label>
            </div>
          </div>
        </div>
        <hr className="h1x" />
        <div class="dropdown m2x2">
          <p
            data-toggle="collapse"
            href="#collapseExample6"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample6"
          >
            <a className="freq">
              Frequency
              <ArrowDropDownIcon className="down2" />
            </a>
          </p>
          <div class="collapse c3x" id="collapseExample6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Weekly
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Monthly
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Yearly
              </label>
            </div>
          </div>
        </div>
        <hr className="h1x" />
        <div class="dropdown m2x3">
          <p
            data-toggle="collapse"
            href="#collapseExample10"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample10"
          >
            <a className="expd1">
              Expenditure
              <ArrowDropDownIcon className="down3" />
            </a>
          </p>
          <div class="collapse" id="collapseExample10">
            <div class="form-check c4x">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                &lt; INR 2000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                INR 2000 - 7000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                &gt; INR 7000
              </label>
            </div>
          </div>
        </div>
        <hr className="h1x" />
        <div class="dropdown m2x4">
          <p
            data-toggle="collapse"
            href="#collapseExample12"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample12"
          >
            <a className="balan">
              Balance
              <ArrowDropDownIcon className="down4" />
            </a>
          </p>
          <div class="collapse c5x" id="collapseExample12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                &lt; INR 2000
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                INR 2000 - 7000
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                &gt; INR 7000
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
