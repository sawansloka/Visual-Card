import React from 'react';
import drop from '../images/Vector (8).png';

function AddCard() {
  return (
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title1" id="exampleModalLongTitle">
              Add Card
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" className="closetb">
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body xt">
            <h4 className="acnt">Account Information</h4>
            <br />
            <p className="empname">
              Employee name<x className="star">*</x>
            </p>
            <input type="text" className="name" />
            <p className="bnkname">
              Bank Name<x className="star">*</x>
            </p>
            <input type="text" className="bnkname" />
            <p className="acntno">
              Account Number<x className="star">*</x>
            </p>
            <input type="Number" className="acnmbr" />
            <p className="code">
              IFSC code<x className="star">*</x>
            </p>
            <input type="text" className="ifsc1" />
            <div className="Container">
              <div className="Row">
                <div className="col-md-6 ">
                  <p className="cdl">
                    {' '}
                    Card limit<x className="star">*</x>
                  </p>
                  <input
                    type="Number"
                    placeholder="INR 5000.00"
                    className="crdlimit"
                  />
                </div>
                <div className="col-md-6 fr">
                  Frequency<x className="star">*</x>
                  <input type="text" placeholder="Monthly" className="month" />
                  <img src={drop} className="drop" />
                </div>
              </div>
            </div>
            <p className="bal1">
              Balance<x className="star">*</x>
            </p>
            <input type="text" className="blntx1" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-info">
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCard;
