import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

const { Schema } = mongoose;

const MerySchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
});

const Blog = mongoose.model('Blog', MerySchema);

app.get('/meryem', async (req, res) =>{
    const getAll= await Blog.find()
  res.send(getAll)
})
app.get('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const getByID = await Blog.findById(id)
  res.send(getByID)
})
app.delete('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const deleteProduct = await Blog.findByIdAndDelete(id)
  res.send(deleteProduct)
})
app.post('/meryem', async (req, res)=> {
  const obj= req.body
    const addProduct =new Blog(obj)
    await addProduct.save()
  res.send(addProduct)
})
app.put('/meryem/:id', async (req, res)=> {
    const {id}=req.params
    const obj= req.body
      const updateProduct =await Blog.findByIdAndUpdate(id,obj)
    res.send(updateProduct)
  })

  mongoose.connect('mongodb+srv://meryemosmanova24:meryemosmanova24@codem.0uejvk1.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(3000)