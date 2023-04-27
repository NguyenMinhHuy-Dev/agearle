import { Button, Container, Grid, TextField } from "@mui/material";
import img1 from '../assets/img/Count_2.png'
import img2 from '../assets/img/Home-3.png'
import { NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

export const LimitedProducts = () => {
    function submit (id){
        confirmAlert({
          title: "WARNING",
          message: "Are you sure to delete this user?",
          buttons: [
            {
              label: "Yes",
            //   onClick: () => deleteUser(id),
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
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}> 
                        <TextField fullWidth id="outlined-basic" label="Title" variant="outlined" margin="normal"/>
                        <TextField fullWidth id="outlined-basic" label="Date" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} md={4}> 
                        <TextField
                            type="file"  
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField type="number" fullWidth label="Numerical order" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} md={12} style={{textAlign: 'right'}}>
                        <Button margin="normal" size="large" variant="contained">Add</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <table>
                            <thead> 
                                <th>N.O</th>
                                <th>Title</th>
                                <th>Product Image</th>
                                <th>Date</th> 
                                <th>Status</th> 
                                <th>Action</th> 
                            </thead>
                            <tbody>
                                <tr>
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
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}