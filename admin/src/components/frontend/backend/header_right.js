
import React, { useState } from "react";
// import NavBarContainer from "../../nav/navbar_container";


export default class header_right extends React.Component{

  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);

  }

  // logout

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
}

  render() {
   
    
    return (
      <>
         <div className="header">
            <div className="header-content">
              <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                    <div className="dashboard_bar">Dashboard</div>
                  </div>
                  <div className="navbar-nav header-right">
                    <div className="nav-item d-flex align-items-center">
                      <div className="input-group search-area">
                        <span className="input-group-text">
                          <a href="javascript:void(0)">
                            {/* <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.5605 18.4395L16.7527 14.6317C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6317 16.7527L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9747 21.1462 19.0252 20.5605 18.4395V18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5V10.5Z"
                                fill="var(--primary)"
                              />
                            </svg> */}
                          </a>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search here..."
                        />
                      </div>
                    </div>
                    <div className="dz-side-menu">
                      <div className="search-coundry d-flex align-items-center">
                        <img src="assets/images/United.png" alt="" />
                        <select className="default-select dashboard-select image-select">
                          <option data-display="Eng">Eng</option>
                          <option value="2">Af</option>
                          <option value="2">Al</option>
                        </select>
                      </div>
                      <div className="sidebar-social-link ">
                        <ul>
                          <li className="nav-item dropdown notification_dropdown">
                            <a
                              className="nav-link "
                              href="#"
                              data-bs-toggle="dropdown"
                            >
                              {/* <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.4023 13.4798C20.7599 13.6577 21.0359 13.9387 21.23 14.2197C21.6082 14.8003 21.5775 15.5121 21.2096 16.1395L20.4942 17.2634C20.1161 17.8627 19.411 18.2373 18.6854 18.2373C18.3277 18.2373 17.9291 18.1437 17.6021 17.9564C17.3364 17.7972 17.0298 17.741 16.7028 17.741C15.691 17.741 14.8428 18.5183 14.8121 19.4455C14.8121 20.5225 13.8719 21.3653 12.6967 21.3653H11.3068C10.1214 21.3653 9.18116 20.5225 9.18116 19.4455C9.16072 18.5183 8.3125 17.741 7.30076 17.741C6.96351 17.741 6.65693 17.7972 6.40144 17.9564C6.07441 18.1437 5.66563 18.2373 5.31816 18.2373C4.58235 18.2373 3.8772 17.8627 3.49908 17.2634L2.79393 16.1395C2.4158 15.5308 2.39536 14.8003 2.77349 14.2197C2.937 13.9387 3.24359 13.6577 3.59106 13.4798C3.8772 13.3487 4.06116 13.1333 4.23489 12.8804C4.74587 12.075 4.43928 11.0167 3.57062 10.5391C2.55888 10.0053 2.23185 8.81591 2.81437 7.88875L3.49908 6.78366C4.09181 5.8565 5.35904 5.52871 6.381 6.0719C7.2701 6.52143 8.42491 6.22174 8.94611 5.4257C9.10962 5.16347 9.2016 4.88251 9.18116 4.60156C9.16072 4.23631 9.27314 3.8898 9.46731 3.60884C9.84543 3.0282 10.5301 2.65359 11.2762 2.63486H12.7171C13.4734 2.63486 14.1581 3.0282 14.5362 3.60884C14.7202 3.8898 14.8428 4.23631 14.8121 4.60156C14.7917 4.88251 14.8837 5.16347 15.0472 5.4257C15.5684 6.22174 16.7232 6.52143 17.6225 6.0719C18.6343 5.52871 19.9117 5.8565 20.4942 6.78366L21.1789 7.88875C21.7717 8.81591 21.4447 10.0053 20.4227 10.5391C19.554 11.0167 19.2474 12.075 19.7686 12.8804C19.9322 13.1333 20.1161 13.3487 20.4023 13.4798ZM9.10962 12.0095C9.10962 13.4798 10.4075 14.6505 12.012 14.6505C13.6165 14.6505 14.8837 13.4798 14.8837 12.0095C14.8837 10.5391 13.6165 9.3591 12.012 9.3591C10.4075 9.3591 9.10962 10.5391 9.10962 12.0095Z"
                                  fill="#130F26"
                                />
                              </svg> */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <div
                                id="DZ_W_TimeLine02"
                                className="widget-timeline dz-scroll style-1 p-3 height370"
                              >
                                <h4 className="text-center border-bottom pb-2">
                                  Notications
                                </h4>
                                <ul className="timeline">
                                  <li>
                                    <div className="timeline-badge primary"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>10 minutes ago</span>
                                      <h6 className="mb-0">
                                        Youtube, a video-sharing website, goes
                                        live{" "}
                                        <strong className="text-primary">
                                          $500
                                        </strong>
                                        .
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge info"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        New order placed{" "}
                                        <strong className="text-info">
                                          #XF-2356.
                                        </strong>
                                      </h6>
                                      <p className="mb-0">
                                        Quisque a consequat ante Sit amet magna
                                        at volutapt...
                                      </p>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge danger"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>30 minutes ago</span>
                                      <h6 className="mb-0">
                                        john just buy your product{" "}
                                        <strong className="text-warning">
                                          Sell $250
                                        </strong>
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge success"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>15 minutes ago</span>
                                      <h6 className="mb-0">
                                        StumbleUpon is acquired by eBay.{" "}
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge warning"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        Mashable, a news website and blog, goes
                                        live.
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge dark"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        Mashable, a news website and blog, goes
                                        live.
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge primary"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>10 minutes ago</span>
                                      <h6 className="mb-0">
                                        Youtube, a video-sharing website, goes
                                        live{" "}
                                        <strong className="text-primary">
                                          $500
                                        </strong>
                                        .
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge info"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        New order placed{" "}
                                        <strong className="text-info">
                                          #XF-2356.
                                        </strong>
                                      </h6>
                                      <p className="mb-0">
                                        Quisque a consequat ante Sit amet magna
                                        at volutapt...
                                      </p>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge danger"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>30 minutes ago</span>
                                      <h6 className="mb-0">
                                        john just buy your product{" "}
                                        <strong className="text-warning">
                                          Sell $250
                                        </strong>
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge success"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>15 minutes ago</span>
                                      <h6 className="mb-0">
                                        StumbleUpon is acquired by eBay.{" "}
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge warning"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        Mashable, a news website and blog, goes
                                        live.
                                      </h6>
                                    </a>
                                  </li>
                                  <li>
                                    <div className="timeline-badge dark"></div>
                                    <a
                                      className="timeline-panel text-muted"
                                      href="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        Mashable, a news website and blog, goes
                                        live.
                                      </h6>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <a
                                className="all-notification"
                                href="#"
                              >
                                See all notifications{" "}
                                <i className="ti-arrow-end"></i>
                              </a>
                            </div>
                          </li>

                          <li className="nav-item dropdown notification_dropdown">
                            <a
                              className="nav-link bell-link "
                              href="#"
                            >
                              {/* <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.9394 3.57129C18.2804 3.57129 19.5704 4.06765 20.5194 4.95828C21.4694 5.84704 22.0004 7.04579 22.0004 8.30073V15.6993C22.0004 18.3122 19.7304 20.4287 16.9394 20.4287H7.0604C4.2694 20.4287 2.0004 18.3122 2.0004 15.6993V8.30073C2.0004 5.68783 4.2594 3.57129 7.0604 3.57129H16.9394ZM18.5304 9.69615L18.6104 9.62123C18.8494 9.34964 18.8494 8.9563 18.5994 8.68471C18.4604 8.54517 18.2694 8.45994 18.0704 8.44121C17.8604 8.43091 17.6604 8.4974 17.5094 8.62852L13.0004 12C12.4204 12.4505 11.5894 12.4505 11.0004 12L6.5004 8.62852C6.1894 8.41312 5.7594 8.44121 5.5004 8.69407C5.2304 8.94693 5.2004 9.34964 5.4294 9.6306L5.5604 9.75234L10.1104 13.077C10.6704 13.4891 11.3494 13.7138 12.0604 13.7138C12.7694 13.7138 13.4604 13.4891 14.0194 13.077L18.5304 9.69615Z"
                                  fill="#130F26"
                                />
                              </svg> */}
                            </a>
                          </li>
                          <li className="nav-item dropdown notification_dropdown">
                            <a
                              className="nav-link"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                            >
                              {/* <svg
                                width="24"
                                height="23"
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M18.7071 8.56414C18.7071 9.74035 19.039 10.4336 19.7695 11.2325C20.3231 11.8211 20.5 12.5766 20.5 13.3963C20.5 14.215 20.2128 14.9923 19.6373 15.6233C18.884 16.3798 17.8215 16.8627 16.7372 16.9466C15.1659 17.0721 13.5937 17.1777 12.0005 17.1777C10.4063 17.1777 8.83505 17.1145 7.26375 16.9466C6.17846 16.8627 5.11602 16.3798 4.36367 15.6233C3.78822 14.9923 3.5 14.215 3.5 13.3963C3.5 12.5766 3.6779 11.8211 4.23049 11.2325C4.98384 10.4336 5.29392 9.74035 5.29392 8.56414V8.16515C5.29392 6.58996 5.71333 5.55995 6.577 4.55164C7.86106 3.08114 9.91935 2.19922 11.9558 2.19922H12.0452C14.1254 2.19922 16.2502 3.12359 17.5125 4.65728C18.3314 5.64484 18.7071 6.63146 18.7071 8.16515V8.56414ZM9.07367 19.1136C9.07367 18.642 9.53582 18.426 9.96318 18.3336C10.4631 18.2345 13.5093 18.2345 14.0092 18.3336C14.4366 18.426 14.8987 18.642 14.8987 19.1136C14.8738 19.5626 14.5926 19.9606 14.204 20.2134C13.7001 20.5813 13.1088 20.8143 12.4906 20.8982C12.1487 20.9397 11.8128 20.9407 11.4828 20.8982C10.8636 20.8143 10.2723 20.5813 9.76938 20.2125C9.37978 19.9606 9.09852 19.5626 9.07367 19.1136Z"
                                  fill="#130F26"
                                />
                              </svg> */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <div
                                id="DZ_W_Notification1"
                                className="widget-media dz-scroll p-3"
                                style={{ height: "380px" }}
                              >
                                <ul className="timeline">
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2">
                                        <img
                                          alt="image"
                                          width="50"
                                          src="assets/images/avatar/1.jpg"
                                        />
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Dr sultads Send you Photo
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-info">
                                        KG
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Resport created successfully
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-success">
                                        <i className="fa fa-home"></i>
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Reminder : Treatment Time!
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2">
                                        <img
                                          alt="image"
                                          width="50"
                                          src="assets/images/avatar/1.jpg"
                                        />
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Dr sultads Send you Photo
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-danger">
                                        KG
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Resport created successfully
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-primary">
                                        <i className="fa fa-home"></i>
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Reminder : Treatment Time!
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2">
                                        <img
                                          alt="image"
                                          width="50"
                                          src="assets/images/avatar/1.jpg"
                                        />
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Dr sultads Send you Photo
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-info">
                                        KG
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Resport created successfully
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-success">
                                        <i className="fa fa-home"></i>
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Reminder : Treatment Time!
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2">
                                        <img
                                          alt="image"
                                          width="50"
                                          src="assets/images/avatar/1.jpg"
                                        />
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Dr sultads Send you Photo
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-danger">
                                        KG
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Resport created successfully
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="timeline-panel">
                                      <div className="media me-2 media-primary">
                                        <i className="fa fa-home"></i>
                                      </div>
                                      <div className="media-body">
                                        <h6 className="mb-1">
                                          Reminder : Treatment Time!
                                        </h6>
                                        <small className="d-block">
                                          29 July 2020 - 02:26 PM
                                        </small>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <a
                                className="all-notification"
                                href="#"
                              >
                                See all notifications{" "}
                                <i className="ti-arrow-end"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <ul>
                        <li className="nav-item dropdown header-profile">
                          <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            <img src="assets/images/profile/pic1.jpg" alt="" />
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            style={{}}
                          >
                            <a
                              href="app-profile.html"
                              className="dropdown-item ai-icon "
                            >
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                className="svg-main-icon"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                    fill="var(--primary)"
                                    fill-rule="nonzero"
                                  />
                                </g>
                              </svg> */}
                              <span className="ms-2">Profile </span>
                            </a>
                            <a
                              href="email-inbox.html"
                              className="dropdown-item ai-icon "
                            >
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                className="svg-main-icon"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <path
                                    d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z"
                                    fill="var(--primary)"
                                  />
                                </g>
                              </svg> */}
                              <span className="ms-2">Message </span>
                            </a>
                            <a
                              href="email-inbox.html"
                              className="dropdown-item ai-icon "
                            >
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                className="svg-main-icon"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <path
                                    d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                    fill="var(--primary)"
                                  />
                                  <circle
                                    fill="var(--primary)"
                                    opacity="0.3"
                                    cx="19.5"
                                    cy="17.5"
                                    r="2.5"
                                  />
                                </g>
                              </svg> */}
                              <span className="ms-2">Notification </span>
                            </a>
                            <a
                              href="settings.html"
                              className="dropdown-item ai-icon "
                            >
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                className="svg-main-icon"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <path
                                    d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                    fill="var(--primary)"
                                    fill-rule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                    fill="var(--primary)"
                                  />
                                </g>
                              </svg> */}
                              <span className="ms-2">Settings </span>
                            </a>
                            <a
                              href="#"
                              className="dropdown-item ai-icon"
                            >
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--primary)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                              </svg> */}
                              <span className="ms-2">
                                {/* Logout  */}
                                <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
                                </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
      </>
    )
  }
}
