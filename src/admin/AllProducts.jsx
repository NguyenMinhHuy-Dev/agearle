import React from 'react';
import { Container, Grid } from '@mui/material';
// import Pic from '../assets/img/Pro_13.jpg';
import '../styles/admin__all-products.css';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


function AllProducts() {

    const {data:productData, loading} = useGetData('products');

    const deleteProduct = async(id) =>{
        await deleteDoc(doc(db,'products',id))
        toast.success('Deleted Success !!')
    }

    // console.log(productData);

  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    loading ? (
                        <h3 className='loading-1'> Loading..... </h3>
                    )  : (
                        productData.map(item =>(
                            <tr key={item.id}>
                        <td>
                            <img src={item.imgUrl} className='all-products' />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>${item.price}</td>
                        <td>
                            <button onClick={()=>{
                                deleteProduct(item.id)}} 
                                className='btn btn-danger'>
                                    Delete
                            </button>
                        </td>
                            </tr> 
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
