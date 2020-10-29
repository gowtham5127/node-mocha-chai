const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('home page');
})
app.get('/test-page', function(req, res) {
    const a1 = 10;
    const a2 = 20;
    if (a1+a2 === 30) {
        const successResponse = {
            status: 1,
            data: [
                obj = { 
                    id: 1,
                    name: 'Lucas',
                    add: 'Washington, D.C.',
                    pin: '20001'
                }
            ],
            message: 'two value are equal',
        }
        res.status(200).send(successResponse);
    }
})
// app.post('/page/:id', function(req, res) {
//     console.log(req.params.id);s
// })
app.listen(3000, console.log('server started'));