import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, MenuItem, Select } from '@mui/material'
import useGetData from '../custom-hooks/useGetData'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { NavLink } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { confirmAlert } from 'react-confirm-alert';

const Users = () => {

    const {data: usersData, loading} = useGetData('users');
    const [users, setUsers] = useState(usersData);

    const [typeUser, setTypeUser] = useState('');

    const deleteUser = async(id) => {
        await deleteDoc(doc(db,'users',id))
        toast.success('Users Deleted!!')
    }
    const handleSearch = e =>{
        const searchTerm = e.target.value;

    };
    const handleTypeUser =  e => {
        setTypeUser(e.target.value);
        if (e.target.value == "2") {
            setUsers(usersData)
        } 
        else if (e.target.value === "1") {
            const filteredUsers = usersData.filter(
                (item) => item.type === "1"
            );
        
            setUsers(filteredUsers)
        }
        else {
            const filteredUsers = usersData.filter(
                (item) => item.type === "0"
            );
        
            setUsers(filteredUsers)
        }
    }

    function submit (id){
        confirmAlert({
          title: "WARNING",
          message: "Are you sure to delete this user?",
          buttons: [
            {
              label: "Yes",
              onClick: () => deleteUser(id),
            },
            {
              label: "No"
            }
          ]
        })
      }

    useEffect(() => {
        const getUsers = async () => {
            const newUsers = usersData;
            setUsers(newUsers);
        }
        getUsers(); 
    },[loading])
  return (
    <section className="admin_section">
        <Container>
            <Grid container>
                <Grid items xs = {12}>
                    <div className='section_header'>
                        <span>Users</span>
                        <div className="nav_action">
                            <div className="search__box">
                                <input type="text" placeholder = "Search......" onChange={handleSearch} />
                                <span>
                                    <SearchIcon/>
                                </span>
                            </div>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <Select 
                                    variant="outlined"
                                    defaultValue=""
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value={typeUser}
                                    onChange={handleTypeUser}
                                >
                                    <MenuItem value="" disabled>
                                        Type
                                    </MenuItem>
                                    <MenuItem value="2">All</MenuItem> 
                                    <MenuItem value="1">Admin</MenuItem>
                                    <MenuItem value="0">Customer</MenuItem> 
                                </Select>
                            </FormControl>
                            <div className='import_button nav_button'> 
                                <UploadFileIcon className='nav_button_icon'/>
                                <span>Import</span>
                            </div>
                            <div className='export_button nav_button'> 
                                <FileDownloadIcon className='nav_button_icon'/>
                                <span>Export</span>
                            </div>
                            <div className='add_button nav_button'>
                                <NavLink to='/dashboard/add-user' style={{textDecorationLine: 'none', color: "black"}}>
                                    <AddToQueueIcon className='nav_button_icon'/>
                                    <span>New</span>
                                </NavLink>
                            </div>
                        </div> 
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <h3 className='loading-1'>Loading.....</h3>
                            ) : (
                                users ?.map(user =>(
                                    <tr key={user.uid}>
                                        <td>
                                            <img src={user.photoURL} className='admin__users'/>
                                        </td>
                                        <td>{user.displayName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.type === "0" ? "Customer" : user.type === "3" ? "Employee" : "Admin"}</td>
                                        <td>
                                            {user.type !== "0" && (
                                                <>
                                                    <NavLink to={`/dashboard/edit-user/${user.id}`} className='btn ' style={{textDecorationLine: 'none', color: "black"}}>
                                                        Edit
                                                    </NavLink>
                                                    <button className='btn btn-danger'onClick={()=>{
                                                        submit(user.uid)
                                                    }}>
                                                        Delete
                                                    </button>
                                                </>
                                            )}
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