// import { Association } from "../../../../../server/Models/Association";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/dashboard.css'
import Swal from 'sweetalert2';




export default function Associations(){

    const [associations, setAssociations] = useState([]);
    const [notActiveAssociations,setNotActiveAssociations] = useState([]);
    const [associationCount, setAssociationCount] = useState(0);
    const [associationPendingCount, setAssociationPendingCount] = useState(0);
    const [associationPostCount, setAssociationPost] = useState(0)

    useEffect(()=>{
        axios.get('http://localhost:3001/association/count')
        .then(response => (setAssociationCount(response.data)))
        .catch(error => console.log(error));
      },[])


      useEffect(()=>{
        axios.get('http://localhost:3001/count/associationPost')
        .then(response => (setAssociationPost(response.data)))
        .catch(error => console.log(error));
      },[])


      useEffect(()=>{
        axios.get('http://localhost:3001/count/associationspending')
        .then(response => (setAssociationPendingCount(response.data)))
        .catch(error => console.log(error));
      },[])






    const handleActiveAssociation=(id)=>{
        Swal.fire({
           title: 'Do you want to activate this association?',
           showCancelButton: true,
           confirmButtonText: 'Yes',
         }).then((result) => {
           /* Read more about isConfirmed, isDenied below */
           if (result.isConfirmed) {
               axios.put(`/activate/${id}`)
       
             window.location.reload();
           }
         })
       
       .catch(error => {
         console.log(error);
       });

     }




    useEffect(() => {
        axios.get('http://localhost:3001/association')
          .then(response => setAssociations(response.data))
          .catch(error => console.log(error));
      }, []);


      useEffect(() => {
        axios.get('http://localhost:3001/associations/notActive')
          .then(response => setNotActiveAssociations(response.data))
          .catch(error => console.log(error));
      }, []);



    return <div style={{width:"80%"}} className="div1">

<section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-xxl-9 col-lg-8">
                    <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show
                        Menu</button>
                    <div className="dashboard-right-sidebar">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel"
                                aria-labelledby="pills-dashboard-tab">
                                <div className="dashboard-home">
                                    <div className="title">
                                        <h2>Associations</h2>
                                        <span className="title-leaf">
                                            <svg className="icon-width bg-gray">
                                        
                                            </svg>
                                        </span>
                                    </div>

                                      <div className="total-box">
                                        <div className="row g-sm-4 g-3">
                                          
                                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="totle-contain">
                                                    <img src="../../assets/User/images/icon/team.png"
                                                        className="img-1 blur-up lazyload" alt="" />
                                                    <img src="../../assets/User/images/icon/teamD.png" className="blur-up lazyload"
                                                        alt="" />
                                                    <div className="totle-detail">
                                                        <h5>Total Associations</h5>
                                                        <h3>{associationCount}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="totle-contain">
                                                    <img src="../../assets/User/images/icon/file.png"
                                                        className="img-1 blur-up lazyload" alt="" />
                                                    <img src="../../assets/User/images/icon/fileD.png" className="blur-up lazyload"
                                                        alt="" />
                                                    <div className="totle-detail">
                                                        <h5>Total Associations Pending</h5>
                                                        <h3> {associationPendingCount}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="totle-contain">
                                                    <img src="../../assets/User/images/icon/blog.png"
                                                        className="img-1 blur-up lazyload" alt="" />
                                                    <img src="../../assets/User/images/icon/blogD.png"
                                                        className="blur-up lazyload" alt="" />
                                                    <div className="totle-detail">
                                                        <h5>Total Associations Posts</h5>
                                                        <h3>{associationPostCount}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row g-4">
                                       

                                        <div className="col-xxl-6">
                                            <div className="table-responsive dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Not Acitive Associations</h3>
                                                </div>

                                                <table className="table product-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Phone</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {notActiveAssociations.map(notActiveAssociations => (
                                                                    <tr key={notActiveAssociations.id}>
                                                                    <td>{notActiveAssociations.name}</td>
                                                                    <td>{notActiveAssociations.email}</td>
                                                                    <td>{notActiveAssociations.phone}</td>
                                                                    <td><button onClick={() => handleActiveAssociation(notActiveAssociations._id)} className="bg-success text-white" style={{backgroundColor: "green", color: "white", border: "none"}}>Unblock</button></td>

                                                                    </tr>
                                                                ))}

                                                      
                                                       

                                                      
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6">
                                            <div className="order-tab dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>List Of Associations</h3>
                                                </div>

                                                <div className="table-responsive">
                                                    <table className="table order-table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Email</th>
                                                                <th scope="col">Phone</th>
                                                    
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {/* {users && users.map((item) => (
                                                                <tr key={item._id} id={item._id}>
                                                                    <td className="product-image">{item.email}</td>
                                                                    <td>
                                                                    <h6>test</h6>
                                                                    </td>
                                                                    <td>
                                                                    <label className="success">Shipped</label>
                                                                    </td>
                                                                </tr>
                                                                ))} */}
                                                                  {associations.map(association => (
                                                                    <tr key={association.id}>
                                                                    <td>{association.name}</td>
                                                                    <td>{association.email}</td>
                                                                    <td>{association.phone}</td>
                                                                    
                                                                    </tr>
                                                                ))}
                                                         
                                                          

                                                         
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-product" role="tabpanel"
                                aria-labelledby="pills-product-tab">
                                <div className="product-tab">
                                    <div className="title">
                                        <h2>All Product</h2>
                                        <span className="title-leaf">
                                            <svg className="icon-width bg-gray">
                                               
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="table-responsive dashboard-bg-box">
                                        <table className="table product-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Images</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Sales</th>
                                                    <th scope="col">Edit / Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/1.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$25.69</h6>
                                                    </td>
                                                    <td>
                                                        <h6>63</h6>
                                                    </td>
                                                    <td>
                                                        <h6>152</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/2.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$35.36</h6>
                                                    </td>
                                                    <td>
                                                        <h6>14</h6>
                                                    </td>
                                                    <td>
                                                        <h6>34</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/3.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$78.55</h6>
                                                    </td>
                                                    <td>
                                                        <h6>55</h6>
                                                    </td>
                                                    <td>
                                                        <h6>78</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/4.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>healthy Long Life Toned Milk 1 L</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$32.98</h6>
                                                    </td>
                                                    <td>
                                                        <h6>69</h6>
                                                    </td>
                                                    <td>
                                                        <h6>135</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/5.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>Raw Mutton Leg, Packaging 5 Kg</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$36.98</h6>
                                                    </td>
                                                    <td>
                                                        <h6>35</h6>
                                                    </td>
                                                    <td>
                                                        <h6>154</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/6.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>Cold Brew Coffee Instant Coffee 50 g</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$36.58</h6>
                                                    </td>
                                                    <td>
                                                        <h6>69</h6>
                                                    </td>
                                                    <td>
                                                        <h6>168</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-image">
                                                        <img src="../assets/images/vegetable/product/7.png"
                                                            className="img-fluid" alt="" />
                                                    </td>
                                                    <td>
                                                        <h6>SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="theme-color fw-bold">$25.69</h6>
                                                    </td>
                                                    <td>
                                                        <h6>63</h6>
                                                    </td>
                                                    <td>
                                                        <h6>152</h6>
                                                    </td>
                                                    <td className="efit-delete">
                                                        <i data-feather="edit" className="edit"></i>
                                                        <i data-feather="trash-2" className="delete"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <nav className="custome-pagination">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1">
                                                        <i className="fa-solid fa-angles-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="javascript:void(0)">1</a>
                                                </li>
                                                <li className="page-item" aria-current="page">
                                                    <a className="page-link" href="javascript:void(0)">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:void(0)">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:void(0)">
                                                        <i className="fa-solid fa-angles-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-order" role="tabpanel"
                                aria-labelledby="pills-order-tab">
                                <div className="dashboard-order">
                                    <div className="title">
                                        <h2>All Order</h2>
                                        <span className="title-leaf title-leaf-gray">
                                            <svg className="icon-width bg-gray">
                                               
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="order-tab dashboard-bg-box">
                                        <div className="table-responsive">
                                            <table className="table order-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Order ID</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="product-image">#254834</td>
                                                        <td>
                                                            <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                        </td>
                                                        <td>
                                                            <label className="success">Shipped</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="product-image">#355678</td>
                                                        <td>
                                                            <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                                                        </td>
                                                        <td>
                                                            <label className="danger">Pending</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="product-image">#647536</td>
                                                        <td>
                                                            <h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6>
                                                        </td>
                                                        <td>
                                                            <label className="success">Shipped</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="product-image">#125689</td>
                                                        <td>
                                                            <h6>healthy Long Life Toned Milk 1 L</h6>
                                                        </td>
                                                        <td>
                                                            <label className="danger">Pending</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="product-image">#215487</td>
                                                        <td>
                                                            <h6>Raw Mutton Leg, Packaging 5 Kg</h6>
                                                        </td>
                                                        <td>
                                                            <label className="danger">Pending</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="product-image">#365474</td>
                                                        <td>
                                                            <h6>Cold Brew Coffee Instant Coffee 50 g</h6>
                                                        </td>
                                                        <td>
                                                            <label className="success">Shipped</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="product-image">#368415</td>
                                                        <td>
                                                            <h6>SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h6>
                                                        </td>
                                                        <td>
                                                            <label className="danger">Pending</label>
                                                        </td>
                                                        <td>
                                                            <h6>$25.69</h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <nav className="custome-pagination">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1">
                                                        <i className="fa-solid fa-angles-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="javascript:void(0)">1</a>
                                                </li>
                                                <li className="page-item" aria-current="page">
                                                    <a className="page-link" href="javascript:void(0)">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:void(0)">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:void(0)">
                                                        <i className="fa-solid fa-angles-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab">
                                <div className="dashboard-profile">
                                    <div className="title">
                                        <h2>My Profile</h2>
                                        <span className="title-leaf">
                                            <svg className="icon-width bg-gray">
                                               
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="profile-tab dashboard-bg-box">
                                        <div className="dashboard-title dashboard-flex">
                                            <h3>Profile Name</h3>
                                            <button className="btn btn-sm theme-bg-color text-white" data-bs-toggle="modal"
                                                data-bs-target="#edit-profile">Edit Profile</button>
                                        </div>

                                        <ul>
                                            <li>
                                                <h5>Company Name :</h5>
                                                <h5>Grocery Store</h5>
                                            </li>
                                            <li>
                                                <h5>Email Address :</h5>
                                                <h5>joshuadbass@rhyta.com</h5>
                                            </li>
                                            <li>
                                                <h5>Country / Region :</h5>
                                                <h5>107 Veltri Drive</h5>
                                            </li>

                                            <li>
                                                <h5>Year Established :</h5>
                                                <h5>2022</h5>
                                            </li>

                                            <li>
                                                <h5>Total Employees :</h5>
                                                <h5>154 - 360 People</h5>
                                            </li>
                                            <li>
                                                <h5>Category :</h5>
                                                <h5>Grocery</h5>
                                            </li>

                                            <li>
                                                <h5>Street Address :</h5>
                                                <h5>234 High St</h5>
                                            </li>

                                            <li>
                                                <h5>City / State :</h5>
                                                <h5>107 Veltri Drive</h5>
                                            </li>

                                            <li>
                                                <h5>Zip :</h5>
                                                <h5>B23 6SN</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-security" role="tabpanel"
                                aria-labelledby="pills-security-tab">
                                <div className="dashboard-privacy">
                                    <div className="title">
                                        <h2>My Setting</h2>
                                        <span className="title-leaf">
                                            <svg className="icon-width bg-gray">
                                              
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="dashboard-bg-box">
                                        <div className="dashboard-title mb-4">
                                            <h3>Notifications</h3>
                                        </div>

                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="desktop" name="desktop"
                                                    checked />
                                                <label className="form-check-label ms-2" htmlFor="desktop">Show
                                                    Desktop Notifications</label>
                                            </div>
                                        </div>

                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="enable" name="desktop" />
                                                <label className="form-check-label ms-2" htmlFor="enable">Enable
                                                    Notifications</label>
                                            </div>
                                        </div>

                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="activity"
                                                    name="desktop" />
                                                <label className="form-check-label ms-2" htmlFor="activity">Get
                                                    notification for my own activity</label>
                                            </div>
                                        </div>

                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="dnd" name="desktop" />
                                                <label className="form-check-label ms-2" htmlFor="dnd">DND</label>
                                            </div>
                                        </div>

                                        <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Save
                                            Changes</button>
                                    </div>

                                    <div className="dashboard-bg-box">
                                        <div className="dashboard-title mb-4">
                                            <h3>Deactivate Account</h3>
                                        </div>
                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="concern"
                                                    name="concern" />
                                                <label className="form-check-label ms-2" htmlFor="concern">I have a privacy
                                                    concern</label>
                                            </div>
                                        </div>
                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="temporary"
                                                    name="concern" />
                                                <label className="form-check-label ms-2" htmlFor="temporary">This is
                                                    temporary</label>
                                            </div>
                                        </div>
                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="other" name="concern" />
                                                <label className="form-check-label ms-2" htmlFor="other">other</label>
                                            </div>
                                        </div>

                                        <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Deactivate
                                            Account</button>
                                    </div>

                                    <div className="dashboard-bg-box">
                                        <div className="dashboard-title mb-4">
                                            <h3>Delete Account</h3>
                                        </div>
                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="usable" name="usable" />
                                                <label className="form-check-label ms-2" htmlFor="usable">No longer
                                                    usable</label>
                                            </div>
                                        </div>
                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="account" name="usable" />
                                                <label className="form-check-label ms-2" htmlFor="account">Want to switch on
                                                    other
                                                    account</label>
                                            </div>
                                        </div>
                                        <div className="privacy-box">
                                            <div
                                                className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                <input className="form-check-input" type="radio" id="other-2" name="usable" />
                                                <label className="form-check-label ms-2" htmlFor="other-2">Other</label>
                                            </div>
                                        </div>

                                        <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Delete My
                                            Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>






}