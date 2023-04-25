import React from 'react';
import { Container, Grid } from '@mui/material';
// import Pic from '../assets/img/Pro_13.jpg';
import '../styles/admin__all-products.css';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { NavLink } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import UploadFileIcon from '@mui/icons-material/UploadFile';


function AllProducts() {

    const {data:productData, loading} = useGetData('products');

    const deleteProduct = async(id) =>{
        await deleteDoc(doc(db,'products',id))
        toast.success('Deleted Success !!')
    }

    const handleSearch = e =>{
        const searchTerm = e.target.value;

    };

    
    function submit (id){
      confirmAlert({
        title: "WARNING",
        message: "Are you sure to delete this product?",
        buttons: [
          {
            label: "Yes",
            onClick: () => deleteProduct(id),
          },
          {
            label: "No"
          }
        ]
      })
    }

  return (
    <section className="admin_section">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className='section_header'>
              <span>Products</span>
              <div className="nav_action">
                <div className="search__box">
                  <input type="text" placeholder = "Search......" onChange={handleSearch} />
                  <span>
                      <SearchIcon/>
                  </span>
                </div>
                <div className='import_button nav_button'> 
                    <UploadFileIcon className='nav_button_icon'/>
                    <span>Import</span>
                </div>
                <div className='export_button nav_button'> 
                  <FileDownloadIcon className='nav_button_icon'/>
                  <span>Export</span>
                </div>
                <div className='add_button nav_button'>
                  <NavLink to='/dashboard/add-product' style={{textDecorationLine: 'none', color: "black"}}>
                    <AddToQueueIcon className='nav_button_icon'/>
                    <span>New</span>
                  </NavLink>
                </div>
              </div> 
            </div>

            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Imoprted Price</th>
                  <th>Sale Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    loading ? (
                        <h3 className='loading-1'> Loading..... </h3>
                    )  : (
                        productData.map(item =>(
                          <>
                          <tr key={item.id}>
                            <td>
                                <img src={item.imgUrl} className='all-products' />
                            </td>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.importedPrice}</td>
                            <td>{item.salePrice}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <NavLink to={`/dashboard/edit-product/${item.id}`} className='btn ' style={{textDecorationLine: 'none', color: "black"}}>
                                    Edit
                                </NavLink>
                                <button onClick={()=>{
                                    submit(item.id)}} 
                                    className='btn btn-danger'>
                                        Delete
                                </button> 
                            </td>
                          </tr> 
                          </>
                        ))
                    ) 
                }
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AllProducts;