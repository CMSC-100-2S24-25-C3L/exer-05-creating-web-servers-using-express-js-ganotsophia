import needle from 'needle';

// needle.get('http://localhost:3000/', (err, res) => {
// console.log(res.body); // prints the body of the response message. In
// //this case, “Hello”
// });

needle.post(
    'http://localhost:3000/add-book',
        {   name: 'Harry Potter and the Chamber of Secrets', 
        isbn: '9780439064873', 
        author: 'J.K. Rowling', 
        date: '1998' }, // can be an object or a string
    { json: true },  
    (err, res) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log(res.body);  
        }    }
    );

    needle.get('http://localhost:3000/find-by-isbn-author?isbn=9780439064873&author=J.K.%20Rowling', (err, res) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log(res.body);  
        }
    });
    
    // const author: 'J.K. Rowling', 
    needle.get(`http://localhost:3000/find-by-author?author=J.K. Rowling`, (err, res) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log(res.body);  
        }
    });