import { Router } from "express"
import { ProductMongoManager } from "../dao/managerDB/ProductMongoManager.js"
import {uploader} from '../utils/multer.js'
import { addProduct, deleteProduct, getProductByID, getProducts, updateProduct } from "../dao/controllers/product.controller.js"
import { authorization } from "../middleware/auth.js"


const productRouter = Router()

// ** Métodos con Mongoose
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-                M O N G O O  D B             -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`

productRouter.get("/", authorization('Usuario'), getProducts);
productRouter.get("/:pId", authorization('Usuario'), getProductByID);
productRouter.post('/',uploader.single('file'), authorization('admin'), addProduct);
productRouter.put('/:pId', authorization('admin'), updateProduct);
productRouter.delete('/:pId', authorization('admin'), deleteProduct);


export default productRouter
