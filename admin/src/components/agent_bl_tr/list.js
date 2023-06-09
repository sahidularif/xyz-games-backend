import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class list extends Component {
  render() {
    return (
      <>
        <div class="content-body">
          <div class="container-fluid">

            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <h4 className="card-title">Agent Balance Transfer List</h4>

                  <button type="button" className="btn btn-success float-right">
                    <Link to="/agent-bal-tr" >
                        Balance Transfer
                    </Link>
                    
                    </button>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: "50px" }}>
                            <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                              <label
                                className="form-check-label"
                                for="checkAll"
                              ></label>
                            </div>
                          </th>
                          <th>
                            <strong> NO</strong>
                          </th>
                          <th>
                            <strong>Agent Name</strong>
                          </th>
                          <th>
                            <strong>Email</strong>
                          </th>
                          <th>
                            <strong>Amount</strong>
                          </th>
                          <th>
                            <strong>Status</strong>
                          </th>
                          <th>
                            <strong></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox2"
                                required=""
                              />
                              <label
                                className="form-check-label"
                                for="customCheckBox2"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <strong>542</strong>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="images/avatar/1.jpg"
                                className="rounded-lg me-2"
                                width="24"
                                alt=""
                              />
                              <span className="w-space-no">Dr. Jackson</span>
                            </div>
                          </td>
                          <td>example@example.com </td>
                          <td>01 August 2020</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <i className="fa fa-circle text-success me-1"></i>{" "}
                              Successful
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <a
                                href="#"
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger shadow btn-xs sharp"
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox3"
                                required=""
                              />
                              <label
                                className="form-check-label"
                                for="customCheckBox3"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <strong>542</strong>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="images/avatar/2.jpg"
                                className="rounded-lg me-2"
                                width="24"
                                alt=""
                              />{" "}
                              <span className="w-space-no">Dr. Jackson</span>
                            </div>
                          </td>
                          <td>example@example.com </td>
                          <td>01 August 2020</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <i className="fa fa-circle text-danger me-1"></i>{" "}
                              Canceled
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <a
                                href="#"
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger shadow btn-xs sharp"
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox4"
                                required=""
                              />
                              <label
                                className="form-check-label"
                                for="customCheckBox4"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <strong>542</strong>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="images/avatar/3.jpg"
                                className="rounded-lg me-2"
                                width="24"
                                alt=""
                              />{" "}
                              <span className="w-space-no">Dr. Jackson</span>
                            </div>
                          </td>
                          <td>example@example.com </td>
                          <td>01 August 2020</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <i className="fa fa-circle text-warning me-1"></i>{" "}
                              Pending
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <a
                                href="#"
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger shadow btn-xs sharp"
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}
