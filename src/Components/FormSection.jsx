import React from 'react';
function FormSection() {
  return (
    <div id="myProjectForm" className="section3">
      <div style={{}} className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + '/image/1.png'}
              alt="mo3az"
              className="image-section3 lign-items-center justify-content-center scrollScale"
              width="auto"
              height="300px"
            ></img>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" id="inp" placeholder="First Name"></input>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="inp" placeholder="Last Name"></input>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="inp" placeholder="Email Address"></input>
            </div>
            <div className="form-group">
              <input type="text" className="form-control screen" id="inp" placeholder="Phone Number"></input>
            </div>
            <div className="form-group">
              <textarea
                style={{ width: 'auto' }}
                className="form-control"
                id="comment"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-outline-light text-dark"
              style={{ width: '150px', height: ' 50px', marginLeft: '20px', fontSize: '25px' }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
