import React from "react";

const AddNewpost = () => {
  return (
    <div>
      <div className="container">
        <div className="row maheshbg">
          <div className="form-group">
            <input
              type="text"
              name=""
              placeholder="Enter Your Title"
              className="form-control my-3"
              id=""
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name=""
              placeholder="Enter Your Content"
              className="form-control my-2"
              id=""
            />

            <button className="btn btn-primary my-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewpost;
