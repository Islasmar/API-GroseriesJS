import productDAO from "../dao/products.dao.js";
 export const getAll=(req,res)=>{
    productDAO.getAll()
        .then(products=> res.json({all: products}))
        .catch(err=> res.json({status:"Server not available"}))
 }
 export const getOne=(req,res)=>{

    productDAO.getOne(req.params.barcode)
        .then(result=> res.json({product:result}))
        .catch(err=> res.json({
            status:"Server not available"
        }))
 }

 export const insertOne=(req,res)=>{

    console.log(req.body)
    productDAO.insertOne(req.body)
    .then(result=> 
        res.json({status: "Product saved"}))
    .catch(err=> res.json({ status:"Product not saved"}))
 }

 export const updateOne = (req,res)=>{
    productDAO.updateOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message:"Product not found"
            }) : res.json({status: "Product updated"})
        })
        .catch(err=> res.status(500).json({ error: err }))
 }
 export const deleteOne = (req,res)=>{
    productDAO.deleteOne(req.params.barcode)
        .then(result => {
            !result ? res.json({
                message:"Product not found"
            }) : res.json({status: "Product deleted"})
        })
        .catch(err=> res.json({ status:"Product not deleted"}))
 }

