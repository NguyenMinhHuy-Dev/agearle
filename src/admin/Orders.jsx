import React, { useState } from 'react'
import { Container, Grid } from '@mui/material'
// import '../styles/Orders.css'
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { NavLink } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; 
import PrintIcon from '@mui/icons-material/Print';
import { ExportCSV } from '../actions/ExportExcel';
import useGetData from '../custom-hooks/useGetData';

const Orders = () => {
  const {data:ordersData, loading} = useGetData('orders');

  const [orders, setOrders] = useState([]);
  
  const handleSearch = e =>{
    const searchTerm = e.target.value;

  };

  const handleDetail = (id) => {
    document.getElementById(id).classList.toggle('active');
    // console.log(id);
  }

  const handlePrint = () => {

  }

  
  return (
    <section className="admin_section">
      <Container>
        <Grid container> 
          <Grid item xs={12}>
            <div className='section_header'>
              <span>Orders</span>
              <div className="nav_action">
                <div className="search__box">
                  <input type="text" placeholder = "Search......" onChange={handleSearch} />
                  <span>
                      <SearchIcon/>
                  </span>
                </div> 
                {/* <div className='export_button nav_button'> 
                  <FileDownloadIcon className='nav_button_icon'/>
                  <span>Export</span>
                </div>  */}
                
                <ExportCSV csvData={ordersData} fileName="Orders"/>
              </div> 
            </div>

            <table className='orders-table'>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Note</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {ordersData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(item => {
                  return ( 
                    <>
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.customerName}</td>
                        <td>{item.customerPhone}</td>
                        <td>{item.address}</td>
                        <td>{item.note}</td>
                        <td>{(new Date(item.date)).toLocaleString('vi-VN')}</td>
                        <td>{item.total.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</td>
                        <td className={`${item.status}`}>{item.status}</td>
                        <td>
                          <div onClick={e => {handleDetail(item.id)}} className='detail_button nav_button'> 
                            <ArrowDropDownIcon className='nav_button_icon'/>
                            {/* <span>Detail</span> */}
                          </div>
                          <div onClick={handlePrint} className='print_button nav_button'>
                            <PrintIcon className='nav_button_icon'/>
                            <span>Print</span>
                          </div>
                        </td>
                      </tr>   
                      <tr>
                        <td colSpan='9' className='under' id={`${item.id}`}>
                            <div className='bill'>  
                              <span className='bill-info'><b>Order ID:</b> {item.id}</span>
                              <span className='bill-info'><b>Date:</b> {(new Date(item.date)).toLocaleString('vi-VN')}</span>
                              <span className='bill-info'><b>Status:</b> {item.status}</span>
                              <div className='line'></div>
                              <span className='bill-info'><b>Customer's name:</b> {item.customerName}</span>
                              <span className='bill-info'><b>Customer's phone:</b> {item.customerPhone}</span>
                              <span className='bill-info'><b>Customer's address:</b> {item.address}</span>
                              <table>
                                <thead>
                                  <th>#</th>
                                  <th>Product name</th>
                                  <th>Quantity</th>
                                  <th>Price</th> 
                                  <th>Sub Total</th> 
                                </thead>
                                <tbody>
                                  {item.items.map((product, index) => {
                                    return (
                                      <tr key={product.id}>
                                        <td>{index + 1}</td>
                                        <td style={{textAlign: 'justify'}}>{product.productName}</td>
                                        <td>{product.quantity}</td>
                                        <td>{parseInt(product.salePrice).toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</td>
                                        <td>{parseInt(product.totalPrice).toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</td>
                                      </tr>
                                    )
                                  })}
                                  {/* <tr>
                                    <td>1</td>
                                    <td style={{textAlign: 'justify'}}>Chuột DareU RGB Superlight Wireless Pink</td>
                                    <td>1</td>
                                    <td>690.000đ</td>
                                  </tr> */}
                                </tbody>
                              </table>
                              <span className='bill-info money'><b>Total:</b> {item.total.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</span>
                              <div className='line'></div>
                              
                            </div>
                        </td>
                      </tr>
                    </>
                  )
                })} 

                {/* <tr>
                  <td>OD01</td>
                  <td>Nguyễn Thị Huyền Trâm</td>
                  <td>0888278748</td>
                  <td>Quận 12</td>
                  <td>Giao trước 12 giờ</td>
                  <td>24/04/2023</td>
                  <td>690.000đ</td>
                  <td className='delivering'>Delivering</td>
                  <td>
                    <div onClick={e => {handleDetail('OD01')}} className='detail_button nav_button'> 
                      <ArrowDropDownIcon className='nav_button_icon'/> 
                    </div>
                    <div onClick={handlePrint} className='print_button nav_button'>
                      <PrintIcon className='nav_button_icon'/>
                      <span>Print</span>
                    </div>
                  </td>
                </tr>  
                <tr>
                  <td colSpan='9' className='under' id='OD01'>
                      <div className='bill'> 

                        <span className='bill-info'><b>Order ID:</b> OD01</span>
                        <span className='bill-info'><b>Date:</b> 24/04/2023</span>
                        <span className='bill-info'><b>Status:</b> Delivering</span>
                        <div className='line'></div>
                        <span className='bill-info'><b>Customer's name:</b> Nguyễn Thị Huyền Trâm</span>
                        <span className='bill-info'><b>Customer's phone:</b> 0888278748</span>
                        <span className='bill-info'><b>Customer's address:</b> Quận 12</span>
                        <table>
                          <thead>
                            <th>#</th>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price</th> 
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td style={{textAlign: 'justify'}}>Chuột DareU RGB Superlight Wireless Pink</td>
                              <td>1</td>
                              <td>690.000đ</td>
                            </tr>
                          </tbody>
                        </table>
                        <span className='bill-info money'><b>Total:</b> 690.000đ</span>
                        <div className='line'></div>
                        
                      </div>
                  </td>
                </tr> */}

                {/* <tr>
                  <td>OD02</td>
                  <td>Trần Tấn Trung</td>
                  <td>01265814111</td>
                  <td>Bà Điểm</td>
                  <td></td>
                  <td>22/04/2023</td>
                  <td>2.390.000đ</td>
                  <td className='done'>Done</td>
                  <td>
                    <div onClick={e => {handleDetail('OD02')}} className='detail_button nav_button'> 
                      <ArrowDropDownIcon className='nav_button_icon'/> 
                    </div>
                    <div onClick={handlePrint} className='print_button nav_button'>
                      <PrintIcon className='nav_button_icon'/>
                      <span>Print</span>
                    </div>
                  </td>
                </tr>  
                <tr>
                  <td colSpan='9' className='under' id='OD02'>
                      <div className='bill'> 
                        <span className='bill-info'><b>Order ID:</b> OD02</span>
                        <span className='bill-info'><b>Date:</b> 22/04/2023</span>
                        <span className='bill-info'><b>Status:</b> Done</span>
                        <div className='line'></div>
                        <span className='bill-info'><b>Customer's name:</b> Trần Tấn Trung</span>
                        <span className='bill-info'><b>Customer's phone:</b> 01265814111</span>
                        <span className='bill-info'><b>Customer's address:</b> Bà Điểm</span>
                        <table>
                          <thead>
                            <th>#</th>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price</th> 
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td style={{textAlign: 'justify'}}>Bàn phím AKKO ACR Pro 68</td>
                              <td>1</td>
                              <td>2.390.000đ</td>
                            </tr>
                          </tbody>
                        </table>
                        <span className='bill-info money'><b>Total:</b> 2.390.000đ</span>
                        <div className='line'></div>
                        
                      </div>
                  </td>
                </tr> */}
                
                {/* <tr>
                  <td>OD03</td>
                  <td>Nguyễn Văn Toàn</td>
                  <td>0933512513</td>
                  <td>Đăk Lăk</td>
                  <td>Giao cuối tuần</td>
                  <td>23/04/2023</td>
                  <td>790.000đ</td>
                  <td className='cancel'>Cancel</td>
                  <td>
                    <div onClick={e => {handleDetail('OD03')}} className='detail_button nav_button'> 
                      <ArrowDropDownIcon className='nav_button_icon'/> 
                    </div>
                    <div onClick={handlePrint} className='print_button nav_button'>
                      <PrintIcon className='nav_button_icon'/>
                      <span>Print</span>
                    </div>
                  </td>
                </tr>  
                <tr>
                  <td colSpan='9' className='under' id='OD03'>
                      <div className='bill'> 

                        <span className='bill-info'><b>Order ID:</b> OD03</span>
                        <span className='bill-info'><b>Date:</b> 23/04/2023</span>
                        <span className='bill-info'><b>Status:</b> Cancel</span>
                        <div className='line'></div>
                        <span className='bill-info'><b>Customer's name:</b> Nguyễn Văn Toàn</span>
                        <span className='bill-info'><b>Customer's phone:</b> 0933512513</span>
                        <span className='bill-info'><b>Customer's address:</b> Đăk Lăk</span>
                        <table>
                          <thead>
                            <th>#</th>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price</th> 
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td style={{textAlign: 'justify'}}>Tai nghe Havit H2008D</td>
                              <td>1</td>
                              <td>790.000đ</td>
                            </tr>
                          </tbody>
                        </table>
                        <span className='bill-info money'><b>Total:</b> 790.000đ</span>
                        <div className='line'></div>
                        
                      </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Orders