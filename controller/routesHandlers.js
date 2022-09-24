const books = require('../model/books')

//find all books
async function findBooks(req,res){
    res.render('form')
}

//create books
async function createBooks(req,res){
    const book = new books({
        title: req.body.title,
        authors: req.body.authors,
        tel: req.body.tel
    });
    await book.save();
    res.redirect('/find')
}


//find a book
async function findBook(req, res){
   
        const book = await books.find()
        res.render('find', {book : book}) 
}

async function updateBook(req, res){
    try{
        const book = await books.findByIdAndUpdate({_id: req.params.id}, { 
            title: req.body.title,
            authors: req.body.authors,
            tel: req.body.tel
        })
         
        res.redirect('/find')
    }catch(err){
        res.status(404).send("Book not found!")
        console.log(err)
    }
}

async function del(req, res){
const del = await books.findByIdAndRemove({_id: req.params.id})
 res.redirect('/find')
}

async function getUpdate(req, res){
    const db = await books.findById(req.params.id);
    res.render('update', {book : db})
}


module.exports={
 findBooks: findBooks,
 createBooks: createBooks,
 findBook: findBook,
 updateBook: updateBook,
 del: del,
 getUpdate: getUpdate
}