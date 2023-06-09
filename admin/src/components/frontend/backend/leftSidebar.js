import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class leftSidebar extends Component {
  render() {
    return (
      <>
        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Agent </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    {/* <Link to="javascript:void(0);"> Agent Create </Link> */}
                    <a href="javascript:void(0);">Agent Create</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Agent Edit</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Agent Delete</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Agent List</a>
                  </li>
                </ul>
              </li>

              <li>
                <Link  to="/agent-bal-list" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Agent Balance Transfer</span>
                </Link>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Agent Balance Report</span>
                </a>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">User List</span>
                </a>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Withdraw </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Pending</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Paid</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Rejected</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Block</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Game </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Live Casino</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">E-sports</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Sports</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Quick Bet</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Settings </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="has-arrow "
                      ariaExpanded="false"
                    >
                      <i className="material-icons">trending_up</i>
                      <span className="nav-text">Basic Info </span>
                    </a>

                    <ul ariaExpanded="false">
                      <li>
                        <a href="javascript:void(0);">Edit</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Website Manage</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Slide Manage</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">SMS Setup </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Payment Gateway </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Notice Manage </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Promo Code Manage</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">P2p Manage </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="has-arrow "
                      ariaExpanded="false"
                    >
                      <i className="material-icons">trending_up</i>
                      <span className="nav-text">Pending Order </span>
                    </a>

                    <ul ariaExpanded="false">
                      <li>
                        <a href="javascript:void(0);">Pending</a>
                      </li>

                      <li>
                        <a href="javascript:void(0);">Paid</a>
                      </li>

                      <li>
                        <a href="javascript:void(0);">Rejected</a>
                      </li>

                      <li>
                        <a href="javascript:void(0);">Block</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Payment Gateway Setup </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">P2p Report</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Game Setup (Decimal, Fraction)</span>
                </a>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Translator</span>
                </a>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Report </span>
                </a>

                <ul ariaExpanded="false">
                  

                  <li>
                    <a href="javascript:void(0);">
                    Current Bet
                      </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Stack Bet</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Pending Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Realise Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Blocked Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Win Bet </a>
                  </li>
                  
                  <li>
                    <a href="javascript:void(0);"> Lost Bet </a>
                  </li>
                  
                  <li>
                    <a href="javascript:void(0);"> Referral Income  </a>
                  </li>

                </ul>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Audit Report</span>
                </a>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Activity Logs</span>
                </a>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Profile Manage </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Profile Setting</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Password Manage</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">2-factor Authentication </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Logout</span>
                </a>
              </li>

              {/* <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Trading </span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="market.html">Market</a>
                  </li>
                  <li>
                    <a href="ico-listing.html">ICO Listing</a>
                  </li>
                  <li>
                    <a href="p2p.html">P2P</a>
                  </li>
                  <li>
                    <a href="future.html">Future</a>
                  </li>
                  <li>
                    <a href="intraday-trading.html">Intraday Trading</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons">currency_bitcoin</i>
                  <span className="nav-text">Crypto</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="crypto.html">Market Watch</a>
                  </li>
                  <li>
                    <a href="ico-listing-filter.html">ICO Listing Filter</a>
                  </li>
                  <li>
                    <a href="coin-details.html">Coin Details</a>
                  </li>
                  <li>
                    <a href="exchange.html">Exchange</a>
                  </li>
                  <li>
                    <a href="banking.html">Banking</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons">description</i>
                  <span className="nav-text">Reports</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="history.html">History</a>
                  </li>
                  <li>
                    <a href="orders.html">Orders</a>
                  </li>
                  <li>
                    <a href="reports.html">Report</a>
                  </li>
                  <li>
                    <a href="user.html">User</a>
                  </li>
                  <li>
                    <a href="contact.html">Contacts</a>
                  </li>
                  <li>
                    <a href="activity.html">Activity</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons"> app_registration </i>
                  <span className="nav-text">Apps</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="app-profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="edit-profile.html">Edit Profile</a>
                  </li>
                  <li>
                    <a href="post-details.html">Post Details</a>
                  </li>
                  <li>
                    <a className="has-arrow" href="#" ariaExpanded="false">
                      Email
                    </a>
                    <ul ariaExpanded="false">
                      <li>
                        <a href="email-compose.html">Compose</a>
                      </li>
                      <li>
                        <a href="email-inbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="email-read.html">Read</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="app-calender.html">Calendar</a>
                  </li>
                  <li>
                    <a className="has-arrow" href="#" ariaExpanded="false">
                      Shop
                    </a>
                    <ul ariaExpanded="false">
                      <li>
                        <a href="ecom-product-grid.html">Product Grid</a>
                      </li>
                      <li>
                        <a href="ecom-product-list.html">Product List</a>
                      </li>
                      <li>
                        <a href="ecom-product-detail.html">Product Details</a>
                      </li>
                      <li>
                        <a href="ecom-product-order.html">Order</a>
                      </li>
                      <li>
                        <a href="ecom-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="ecom-invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="ecom-customers.html">Customers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons"> assessment </i>
                  <span className="nav-text">Charts</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="chart-flot.html">Flot</a>
                  </li>
                  <li>
                    <a href="chart-morris.html">Morris</a>
                  </li>
                  <li>
                    <a href="chart-chartjs.html">Chartjs</a>
                  </li>
                  <li>
                    <a href="chart-chartist.html">Chartist</a>
                  </li>
                  <li>
                    <a href="chart-sparkline.html">Sparkline</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons"> favorite </i>
                  <span className="nav-text">Bootstrap</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="ui-accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="ui-alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="ui-badge.html">Badge</a>
                  </li>
                  <li>
                    <a href="ui-button.html">Button</a>
                  </li>
                  <li>
                    <a href="ui-modal.html">Modal</a>
                  </li>
                  <li>
                    <a href="ui-button-group.html">Button Group</a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">List Group</a>
                  </li>
                  <li>
                    <a href="ui-card.html">Cards</a>
                  </li>
                  <li>
                    <a href="ui-carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="ui-dropdown.html">Dropdown</a>
                  </li>
                  <li>
                    <a href="ui-popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="ui-progressbar.html">Progressbar</a>
                  </li>
                  <li>
                    <a href="ui-tab.html">Tab</a>
                  </li>
                  <li>
                    <a href="ui-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="ui-pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="ui-grid.html">Grid</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons"> extension </i>
                  <span className="nav-text">Plugins</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="uc-select2.html">Select 2</a>
                  </li>
                  <li>
                    <a href="uc-nestable.html">Nestable</a>
                  </li>
                  <li>
                    <a href="uc-noui-slider.html">Noui Slider</a>
                  </li>
                  <li>
                    <a href="uc-sweetalert.html">Sweet Alert</a>
                  </li>
                  <li>
                    <a href="uc-toastr.html">Toastr</a>
                  </li>
                  <li>
                    <a href="map-jqvmap.html">Jqv Map</a>
                  </li>
                  <li>
                    <a href="uc-lightgallery.html">Light Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="widget-basic.html" className="" ariaExpanded="false">
                  <i className="bi bi-gear-wide"></i>
                  <span className="nav-text">Widget</span>
                </a>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons"> insert_drive_file </i>
                  <span className="nav-text">Forms</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="form-element.html">Form Elements</a>
                  </li>
                  <li>
                    <a href="form-wizard.html">Wizard</a>
                  </li>
                  <li>
                    <a href="form-ckeditor.html">CkEditor</a>
                  </li>
                  <li>
                    <a href="form-pickers.html">Pickers</a>
                  </li>
                  <li>
                    <a href="form-validation.html">Form Validate</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons"> table_chart </i>
                  <span className="nav-text">Table</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="table-bootstrap-basic.html">Bootstrap</a>
                  </li>
                  <li>
                    <a href="table-datatable-basic.html">Datatable</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow " href="#" ariaExpanded="false">
                  <i className="material-icons">article</i>
                  <span className="nav-text">Pages</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a className="has-arrow" href="#" ariaExpanded="false">
                      Error
                    </a>
                    <ul ariaExpanded="false">
                      <li>
                        <a href="page-error-400.html">Error 400</a>
                      </li>
                      <li>
                        <a href="page-error-403.html">Error 403</a>
                      </li>
                      <li>
                        <a href="page-error-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="page-error-500.html">Error 500</a>
                      </li>
                      <li>
                        <a href="page-error-503.html">Error 503</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-lock-screen.html">Lock Screen</a>
                  </li>
                  <li>
                    <a href="empty-page.html">Empty Page</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
