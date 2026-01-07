import express from "express"
import Book from "../model/bookModel.js"
const router = express.Router();


//add a book
router.post("/" ,async (req,res)=>{
    try {
        if(!req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message: "all fields is required when add book"
            })
        }

        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const saveBook = await Book.create(newBook)
        return res.status(200).send({
            code:200,
            message:"Book is created!",
            data:saveBook,
        })
    } catch (error) {
        console.log(err.message);
        return res.status(400).send({
            code:400,
            message:"require error",
            "data":error.message
        })
        
    }
})

router.get("/",async (req,res)=>{
    try {
        const books = await Book.find({})
        return res.status(200).send({
            code:200,
            message:"all books is geted",
            data:books
        })
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({
            code:400,
            message:"require error",
            "data":error.message
        })
        
    }
})

router.get("/:id",async (req,res)=>{

    try {
        const {id} = req.params
        const book = await Book.findById(id)
        return res.status(200).send({
            code:200,
            message:"all books is geted",
            data:book
        })
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({
            code:400,
            message:"require error",
            "data":error.message
        })
        
    }
})

router.put("/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(400).send({
                code:400,
                message:"book is not found",
            })
        }

        return res.status(200).send({
            code:200,
            message:"book updated successfully",
            data:result
        })
        
    } catch (error) {
        console.log("error.message");
        return res.status(500).send({
            code:500,
            message:"reqire error",
            data:error.message,
        })
    }
})


router.delete("/:id" ,async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(400).send({
                code:400,
                message:"book is not found",
            })
        }
        return res.status(400).send({
            code:200,
            message:"book is deleted",
        })
    } catch (error) {
        
    }
})

export default router;