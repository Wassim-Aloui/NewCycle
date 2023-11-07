import { Link } from "react-router-dom";

export default function Sidebar(){
    return <div>
      
      <div className="custom-row">
<div className="sidebar-col">
                    <div className="category-menu">
                        <a href="index.html" className="web-logo nav-logo">
                            <img src="../../assets/User/images/logo/1.png" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                        <ul>
                            <li>
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/shortlist.png" className="blur-up lazyload" alt="" />
                                    <h5>

                                    <Link to="/admin">Users</Link>

                                    </h5>
                                </div>
                            </li>
                            <li>
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/associations.png" className="blur-up lazyload" alt="" />
                                    <h5>
                                       <Link to="/admin/associations">Associations</Link>
                                    </h5>
                                </div>
                            </li>
                            <li>
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/post.png" className="blur-up lazyload" alt="" />
                                    <h5>
                                    <Link to="/allPosts">Posts</Link>
                                    </h5>
                                </div>
                            </li>
                            {/* <li>
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/post.png" className="blur-up lazyload" alt="" />
                                    <h5>
                                    <Link to="/allPostsAsso">All association posts</Link>
                                    </h5>
                                </div>
                            </li> */}
                            <li>
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/box.png" className="blur-up lazyload" alt="" />
                                    <h5>
                                        <Link to="/admin/products">Products</Link>
                                    </h5>
                                </div>
                            </li>
                            <li>
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/report.png" className="blur-up lazyload" alt="" />
                                    <h5>
                                    <Link to="/admin/reports">Reports</Link>
                                    </h5>
                                </div>
                            </li>
                           
                            <li className="pb-30">
                                <div className="category-list">
                                    <img src="../../assets/User/images/logo/categories.png" className="blur-up lazyload" alt="" />
                                    <h5>
                                    <Link to="/categorie">Categories</Link>
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

































{/* <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="../../assets/User/images/logo/1.png" className="mr-2" alt="logo"/></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="icon-bell mx-0"></i>
              <span className="count"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="../../assets/Admin/images/faces/face28.jpg" alt="profile"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item">
                <i className="ti-settings text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item">
                <i className="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
          <li className="nav-item nav-settings d-none d-lg-flex">
            <a className="nav-link" href="#">
              <i className="icon-ellipsis"></i>
            </a>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>

    <div className="container-fluid page-body-wrapper">
    
      <div className="theme-setting-wrapper">
        <div id="settings-trigger"><i className="ti-settings"></i></div>
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close ti-close"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles success"></div>
            <div className="tiles warning"></div>
            <div className="tiles danger"></div>
            <div className="tiles info"></div>
            <div className="tiles dark"></div>
            <div className="tiles default"></div>
          </div>
        </div>
      </div>
      <div id="right-sidebar" className="settings-panel">
        <i className="settings-close ti-close"></i>
        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        <div className="tab-content" id="setting-content">
          <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
            <div className="add-items d-flex px-3 mb-0">
              <form className="form w-100">
                <div className="form-group d-flex">
                  <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                  <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                </div>
              </form>
            </div>
            <div className="list-wrapper px-3">
              <ul className="d-flex flex-column-reverse todo-list">
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Team review meeting at 3.00 PM
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Prepare for presentation
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Resolve all the low priority tickets due today
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li className="completed">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" checked />
                      Schedule meeting for next week
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
                <li className="completed">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" checked />
                      Project review
                    </label>
                  </div>
                  <i className="remove ti-close"></i>
                </li>
              </ul>
            </div>
            <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
            <div className="events pt-4 px-3">
              <div className="wrapper d-flex mb-2">
                <i className="ti-control-record text-primary mr-2"></i>
                <span>Feb 11 2018</span>
              </div>
              <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p className="text-gray mb-0">The total number of sessions</p>
            </div>
            <div className="events pt-4 px-3">
              <div className="wrapper d-flex mb-2">
                <i className="ti-control-record text-primary mr-2"></i>
                <span>Feb 7 2018</span>
              </div>
              <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p className="text-gray mb-0 ">Call Sarah Graves</p>
            </div>
          </div>
          
          <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
            <div className="d-flex align-items-center justify-content-between border-bottom">
              <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
              <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
            </div>
            <ul className="chat-list">
              <li className="list active">
                <div className="profile"><img src="../../assets/Admin/images/faces/face1.jpg" alt="image" /><span className="online"></span></div>
                <div className="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">19 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../assets/Admin/images/faces/face2.jpg" alt="image" /><span className="offline"></span></div>
                <div className="info">
                  <div className="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                <small className="text-muted my-auto">23 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../assets/Admin/images/faces/face3.jpg" alt="image" /><span className="online"></span></div>
                <div className="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">14 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../assets/Admin/images/faces/face4.jpg" alt="image" /><span className="offline"></span></div>
                <div className="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small className="text-muted my-auto">2 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../assets/Admin/images/faces/face5.jpg" alt="image" /><span className="online"></span></div>
                <div className="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">5 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../assets/Admin/images/faces/face6.jpg" alt="image" /><span className="online"></span></div>
                <div className="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i className="icon-columns menu-icon"></i>
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i className="icon-bar-graph menu-icon"></i>
              <span className="menu-title">Charts</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i className="icon-grid-2 menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i className="icon-contract menu-icon"></i>
              <span className="menu-title">Icons</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i className="icon-head menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
              <i className="icon-ban menu-icon"></i>
              <span className="menu-title">Error pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="error">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/documentation/documentation.html">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    

    </div>  */}

    
    </div>
}