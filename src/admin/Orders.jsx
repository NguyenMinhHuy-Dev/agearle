import React from 'react'
import { Container, Grid } from '@mui/material'
// import '../styles/Orders.css'
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { NavLink } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Orders = () => {
  
  const handleSearch = e =>{
    const searchTerm = e.target.value;

  };

  const handleDetail = () => {

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
                <div className='export_button nav_button'> 
                  <FileDownloadIcon className='nav_button_icon'/>
                  <span>Export</span>
                </div> 
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
                <tr>
                  <td>OD01</td>
                  <td>Nguyễn Thị Huyền Trâm</td>
                  <td>0888278748</td>
                  <td>Quận 12</td>
                  <td>Giao trước 12 giờ</td>
                  <td>24/04/2023</td>
                  <td>690.000đ</td>
                  <td className='delivering'>Delivering</td>
                  <td>
                  <div className='detail_button nav_button'> 
                    <ArrowDropDownIcon className='nav_button_icon'/>
                    <span>Detail</span>
                  </div>
                  </td>
                </tr>  

                <tr>
                  <td>OD02</td>
                  <td>Trần Tấn Trung</td>
                  <td>01265814111</td>
                  <td>Bà Điểm</td>
                  <td></td>
                  <td>22/04/2023</td>
                  <td>2.390.000đ</td>
                  <td className='done'>Done</td>
                  <td>
                  <div className='detail_button nav_button'> 
                    <ArrowDropDownIcon className='nav_button_icon'/>
                    <span>Detail</span>
                  </div>
                  </td>
                </tr>  
                
                <tr>
                  <td>OD03</td>
                  <td>Nguyễn Văn Toàn</td>
                  <td>0933512513</td>
                  <td>Đăk Lăk</td>
                  <td>Giao cuối tuần</td>
                  <td>23/04/2023</td>
                  <td>790.000đ</td>
                  <td className='cancel'>Cancel</td>
                  <td>
                  <div className='detail_button nav_button'> 
                    <ArrowDropDownIcon className='nav_button_icon'/>
                    <span>Detail</span>
                  </div>
                  </td>
                </tr>  
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Orders