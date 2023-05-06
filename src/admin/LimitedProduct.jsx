import { Button, Container, Grid, TextField } from "@mui/material";
import img1 from '../assets/img/Count_2.png'
import img2 from '../assets/img/Home-3.png'
import { NavLink, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import useGetData from "../custom-hooks/useGetData";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const LimitedProducts = () => {
    
    const {data:limitProducts, loading} = useGetData('limited products');

    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [date, setDate] = useState("");
    const [no, setNo] = useState("");

    const [isEdit, setIsEdit] = useState(false);
    const [id, setID] = useState('');

    function submit (id){
        confirmAlert({
          title: "WARNING",
          message: "Are you sure to delete this user?",
          buttons: [
            {
              label: "Yes",
              onClick: () => handleDelete(id),
            },
            {
              label: "No"
            }
          ]
        })
    }

    const navigate = useNavigate();

    const handleAdd = async e => {
        const docRef = collection(db,'limited products')

        const storageRef = ref(storage, `limitedImages/${Date.now() + file.name}`)
        const uploadTask = uploadBytesResumable(storageRef,file)

        uploadTask.on(() =>{
            toast.error('images not uploaded')
          }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
              await addDoc(docRef, {
                title,
                imgUrl : downloadURL,
                // status: "Waiting",
                date,
              })
            }).then(() => { 
                setFile(null);
                setTitle("");
              toast.success("Successfully added!!")
              window.location.reload();
            //   navigate('/dashboard/limited-products');
            })
          })

        // setFile(null);
        // setTitle("");
    }

    const handleEdit = async () => { 

        const docRef = doc(db, "limited products", id);

        if (file) {
            const storageRef = ref(storage, `limitedImages/${Date.now() + file.name}`)
            const uploadTask = uploadBytesResumable(storageRef,file)
            await uploadTask.on(() =>{
                toast.error('images not uploaded')
            }, async ()=>{
                await getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
                    await updateDoc(docRef, {
                        title,
                        imgUrl : downloadURL,
                        // status: "Waiting",
                        date,
                    }).then(() => {
                        setFile(null);
                        setTitle("");
                        setID('');
                        setIsEdit(false);
                        setFile(null);
                        setTitle("");
                        toast.success("Successfully edited!!")
                        navigate('/dashboard/limited-products'); 
                    })
                })
            }) 
        }
        else {
            await updateDoc(docRef, {
                title, 
                // status: "Waiting",
                date,
            }).then (() => {
                setFile(null);
                setTitle("");
                setID('');
                setIsEdit(false);
                toast.success("Successfully edited!!")
                navigate('/dashboard/limited-products'); 
            })
             
        } 
    }
    const getProduct = async (id) => {
        setIsEdit(isEdit => !isEdit)
        setID(id)
        const docRef = doc(db, "limited products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) { 
            setTitle(docSnap.data().title);
            setDate(docSnap.data().date);  
        }
      }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db,'limited products',id))
        toast.success('Deleted Success !!')
    }
    useEffect(() => {
        
    }, [loading])

    return (
        <section className="admin_section">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}> 
                        <TextField fullWidth id="outlined-basic" label="Title" value={title} onChange={e => setTitle(e.target.value)} variant="outlined" margin="normal"/>
                        <TextField fullWidth id="outlined-basic" type="date"  value={date} onChange={e => setDate(e.target.value)}  variant="outlined" />
                    </Grid>
                    <Grid item xs={6} md={4}> 
                        <TextField
                            type="file"  
                            variant="outlined"
                            fullWidth
                            margin="normal"
                             onChange={e => setFile(e.target.files[0])} 
                            required
                        />
                        <TextField type="number" fullWidth value={no} onChange={e => setNo(e.target.value)}  label="Numerical order" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} md={12} style={{textAlign: 'right'}}>
                        {isEdit && <Button margin="normal" onClick={handleEdit} size="large" variant="contained">Save</Button>}
                        {!isEdit && <Button margin="normal" onClick={handleAdd} size="large" variant="contained">Add</Button>}
                        
                    </Grid>
                    <Grid item xs={12}>
                        
                        <table>
                            <thead>  
                                <th>Title</th>
                                <th>Product Image</th>
                                <th>Date</th> 
                                {/* <th>Status</th>  */}
                                <th>Action</th> 
                            </thead>
                            <tbody>
                                {limitProducts.map(item => {
                                    return (
                                        <tr> 
                                            <td>{item.title}</td>
                                            <td>
                                                <img className='all-products' src={item.imgUrl} />
                                            </td>
                                            <td>{item.date}</td>
                                            {/* <td className="delivering">{item.status}</td> */}
                                            <td>
                                                <NavLink className='btn ' onClick={e => getProduct(item.id)} style={{textDecorationLine: 'none', color: "black"}}>
                                                    Edit
                                                </NavLink>
                                                <button className='btn btn-danger'onClick={() => {submit(item.id)}}>
                                                        Delete
                                                </button> 
                                            </td>
                                        </tr>
                                    )
                                })}
                                {/* <tr>
                                    <td>1</td>
                                    <td>Quality Headphone</td>
                                    <td>
                                        <img className='all-products' src={img1} />
                                    </td>
                                    <td>27/04/2023</td>
                                    <td className="delivering">Counting</td>
                                    <td>
                                        <NavLink className='btn ' style={{textDecorationLine: 'none', color: "black"}}>
                                            Edit
                                        </NavLink>
                                        <button className='btn btn-danger'onClick={() => {submit(1)}}>
                                                Delete
                                        </button> 
                                    </td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Quality Headphone</td>
                                    <td>
                                        <img className='all-products' src={img2} />
                                    </td>
                                    <td>30/04/2023</td>
                                    <td className="done">Waiting</td>
                                    <td>
                                        <NavLink className='btn ' style={{textDecorationLine: 'none', color: "black"}}>
                                            Edit
                                        </NavLink>
                                        <button className='btn btn-danger' onClick={() => {submit(2)}}>
                                                Delete
                                        </button> 
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}