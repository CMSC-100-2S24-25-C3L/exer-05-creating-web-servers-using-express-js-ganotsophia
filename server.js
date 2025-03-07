import express from 'express';
import {appendFileSync, readFile, openSync, writeFile, writeFileSync} from 'node:fs'

// instantiate the server
const app = express();
app.use(express.json());


app.listen(3000, () => { console.log('Server started at port 3000')} );

app.post('/add-book', (req, res) => {
    res.send('Received a POST request' + req.body.name);
    let fd;
    const{name,isbn,author,date} = req.body;


    try{
        fd = openSync('books.txt', 'a');
        appendFileSync(fd, `${name}, ${isbn}, ${author}, ${date} \n`, 'utf8');
    
        console.log({success: true });
    }catch (err){
        console.log({success:false})};
    });



app.get('/find-by-isbn-author', (req, res) => {
    
    const {isbn, author} = req.query;

    readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        // const books = data.trim().split('\n').filter(line => line !== '');

        // const foundBooks = books.filter(book => {
        //     const [name, bookIsbn, bookAuthor, date] = book.split(',').map(s => s.trim());
        //     return (isbn && bookIsbn === isbn) || (author && bookAuthor === author);
        // });
        // res.json({foundBooks});

    })

})

    // app.get('/find-by-author', (req, res) => {
    
    //     const { author} = req.query;
    
    //     readFile('books.txt', 'utf8', (err, data) => {
    //         if (err) {
    //             res.status(500).send('Error reading file');
    //             return;
    //         }
    
    //         // const books = data.trim().split('\n').filter(line => line !== '');
    
    //         // const foundBooks = books.filter(book => {
    //         //     const [name, bookIsbn, bookAuthor, date] = book.split(',').map(s => s.trim());
    //         //     return (isbn && bookIsbn === isbn) || (author && bookAuthor === author);
    //         // });
    //         // res.json({foundBooks});
    
            
    // });





