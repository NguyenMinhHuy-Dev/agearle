import React from 'react'
import { Container,Grid } from '@mui/material'
import useGetData from '../custom-hooks/useGetData'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

const Users = () => {

    const {data: usersData, loading} = useGetData('users');

    const deleteUser = async(id) => {
        await deleteDoc(doc(db,'users',id))
        toast.success('Users Deleted!!')
    }
  return (
    <section>
        <Container>
            <Grid container>
                <Grid items xs = {12}>
                    <h1 className='admin__users-title'>Users</h1>
                </Grid>
                <Grid items xs = {12}>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <h3 className='loading-1'>Loading.....</h3>
                            ) : (
                                usersData ?.map(user =>(
                                    <tr key={user.uid}>
                                        <td>
                                            <img src={user.photoURL} className='admin__users'/>
                                        </td>
                                        <td>{user.displayName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>
                                            <button className='btn btn-danger'onClick={()=>{
                                                deleteUser(user.uid)
                                            }}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </Grid>
            </Grid>
        </Container>
    </section>
  )
}

export default Users