import ProductDTO from "../dtos/product.dto.js"

export class ProductRepository {
    constructor(dao){
        this.dao = dao;
    }
    getProducts = async (req, res) => {
        try {
          const { limit, page, sort, query, category, stockAvailability } = req.query
        //   const products = new ProductMongoManager()
      
          const resultado = await this.dao.getProducts(limit, page, sort, query, category, stockAvailability)
      
          if (resultado.message==="OK")
          {
            return res.status(200).json(resultado)
          }
          res.status(400).json(resultado)
        } 
        catch (err) {
          res.status(400).json({message: err})
        }
      }
}
export const getProducts = async (req, res) => {
    try {
      const { limit, page, sort, query, category, stockAvailability } = req.query
      const products = new ProductMongoManager()
  
      const resultado = await products.getProducts(limit, page, sort, query, category, stockAvailability)
  
      if (resultado.message==="OK")
      {
        return res.status(200).json(resultado)
      }
      res.status(400).json(resultado)
    } 
    catch (err) {
      res.status(400).json({message: err})
    }
  }

  export const getProductByID = async (req, res) => {
    try{
      const {pId}=req.params
      const products = new ProductMongoManager()
  
      const resultado = await products.getProductById(pId)
      if (resultado.message==="OK"){
        return res.status(200).json(resultado)
      }
      res.status(400).json(resultado)
    }
    catch(err)
    {
      res.status(400).json({message: "El producto no existe"})
    }
  } 

  export const addProduct = async (req,res)=>{ 
    try{
      const products = new ProductMongoManager();
      const newProduct = new ProductDTO(req.body);
      const resultado = await products.addProduct(newProduct)  
      if (resultado.message==="OK"){
        return res.status(200).json(resultado)
      }
      res.status(400).json(resultado)
    }
    catch(err){
      res.status(400).json({message: err})
    }
  }

  export const updateProduct = async (req,res)=>{
    try{
      const {pId} = req.params
      const updateProd= req.body
      const products = new ProductMongoManager()
  
      const resultado = await products.updateProduct(pId, updateProd)
  
      if (resultado.message==="OK"){
        return res.status(200).json(resultado)
      }
      res.status(400).json(resultado)
    }
    catch(err){
      res.status(400).json({menssage: 'err'})
    }
  }

  export const deleteProduct = async (req,res)=>{
    try{
      const {pId} = req.params
      const products = new ProductMongoManager()
  
      const deleted = await products.deleteProduct(pId)
  
      if (deleted.message==="OK")
        return res.status(200).json(deleted.rdo)
  
      return res.status(404).json(deleted.rdo)
    }
    catch(err){
      res.status(400).json({menssage: err})
    }
  }