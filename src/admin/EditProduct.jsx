import React, { useEffect, useState } from 'react'
import { 
  Container,
  FormGroup,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button
} from '@mui/material'
import {toast} from 'react-toastify' 

import { db,storage } from '../config/firebase'
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {collection, addDoc, getDoc, doc, updateDoc} from 'firebase/firestore'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function EditProducts() {

  const [enterTag, setEnterTag] = useState('');
  const [enterTitle, setEntertitle] = useState('')
  const [enterShortDesc, setEnterShortDesc] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterImportPrice, setEnterImportPrice] = useState('')
  const [enterSalePrice, setEnterSalePrice] = useState('')
  const [enterQuantity, setEnterQuantity] = useState('')
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading,setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const editProduct = async e => {
    e.preventDefault()
    setLoading(true)

    const docRef = doc(db, "products", id);

    if (enterProductImg) {
        const storageRef = ref(storage, `prodcutImages/${Date.now() + enterProductImg.name}`)
        const uploadTask = uploadBytesResumable(storageRef,enterProductImg)
        uploadTask.on(() =>{
            toast.error('images not uploaded')
          }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
              await updateDoc(docRef, {
                productName : enterTitle,
                shortDesc : enterShortDesc,
                description : enterDescription,
                category : enterCategory,
                importedPrice : enterImportPrice,
                salePrice : enterSalePrice,
                quantity: enterQuantity,
                imgUrl : downloadURL,
                title: enterTag
              })
            })
          })
          
          setLoading(false)
          toast.success("Product Successfully added!!")
          navigate('/dashboard/all-products'); 
    }
    else {
        await updateDoc(docRef, {
          productName : enterTitle,
          shortDesc : enterShortDesc,
          description : enterDescription,
          category : enterCategory,
          importedPrice : enterImportPrice,
          salePrice : enterSalePrice,
          quantity: enterQuantity, 
          title: enterTag
        })
          
        setLoading(false)
        toast.success("Product Successfully added!!")
        navigate('/dashboard/all-products'); 
    }
 
  }

  const getProduct = async() => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setEnterTag(docSnap.data().title);
        setEntertitle(docSnap.data().productName);
        setEnterShortDesc(docSnap.data().shortDesc);
        setEnterCategory(docSnap.data().category);
        setEnterImportPrice(docSnap.data().importedPrice);
        setEnterSalePrice(docSnap.data().salePrice);
        setEnterQuantity(docSnap.data().quantity);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <section className='admin_section'>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {
              loading ? <h1 className='py-5'>Loading.........</h1> : <>
              <NavLink to='/dashboard/all-products' style={{textDecorationLine: 'none', color: "black"}}> 
                Comeback
              </NavLink>
              <h1 className='title'>Edit Product</h1>
              <form onSubmit={editProduct}>
              <FormGroup>
                <TextField
                  label="Product Name"
                  variant="outlined"
                  placeholder="Enter product title"
                  fullWidth
                  margin="normal"
                  value={enterTitle}
                  onChange={e=> setEntertitle(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  type="file" 
                  onChange={e => setEnterProductImg(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </FormGroup> 

              <FormGroup>
                <FormControl fullWidth margin="normal">
                  <Select 
                    variant="outlined"
                    defaultValue=""
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    value={enterCategory}
                    onChange={e=> setEnterCategory(e.target.value)}
                  >
                    <MenuItem value="" disabled>
                      Category
                    </MenuItem>
                    <MenuItem value="mouse">Mouse</MenuItem>
                    <MenuItem value="keyboard">Keyboard</MenuItem>
                    <MenuItem value="headphones">Headphones</MenuItem>
                    <MenuItem value="monitor">Monitor</MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>

              <FormGroup>
                <FormControl fullWidth margin="normal">
                  <Select 
                    variant="outlined"
                    defaultValue=""
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    value={enterTag}
                    onChange={e=> setEnterTag(e.target.value)}
                  >
                    <MenuItem value="" disabled>
                      Title
                    </MenuItem>
                    <MenuItem value="Trending">Trending</MenuItem>
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="Popular">Popular</MenuItem>
                    <MenuItem value="BestSales">BestSales</MenuItem> 
                  </Select>
                </FormControl>
              </FormGroup>

              {/* <FormGroup>
                <TextField
                  label="Short Description"
                  variant="outlined"
                  placeholder="Enter short product description"
                  fullWidth
                  margin="normal"
                  value={enterShortDesc}
                  onChange={e=> setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup> */}

              <FormGroup>
                <TextField
                  label="Short Description"
                  variant="outlined"
                  placeholder="Enter product description"
                  fullWidth
                  margin="normal"
                  value={enterShortDesc}
                  onChange={e=> setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  label="Imported Price"
                  variant="outlined"
                  placeholder="Enter product price"
                  fullWidth
                  margin="normal"
                  type="number"
                  InputProps={{
                    startAdornment: "$"
                  }}
                  value={enterImportPrice}
                  onChange={e=> setEnterImportPrice(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  label="Sale Price"
                  variant="outlined"
                  placeholder="Enter product price"
                  fullWidth
                  margin="normal"
                  type="number"
                  InputProps={{
                    startAdornment: "$"
                  }}
                  value={enterSalePrice}
                  onChange={e=> setEnterSalePrice(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <TextField 
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={enterQuantity}
                    onChange={e=> setEnterQuantity(e.target.value)}
                    required 
                  />
              </FormGroup>
              <Button variant="contained" color="primary" type="submit" className='addProductButton'>
                Save Changes
              </Button>
            </form>
              </>
            }
            
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default EditProducts;