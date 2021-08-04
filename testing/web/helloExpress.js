const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req, res) => {
	res.send('This is my Express Homepage');
});

router.get('/status', (req,res) => {
	res.send('Healthy');
}); 

router.get('/metrics', (req, res) => {
	res.send('UserCount : 1, UserCountActive: 1');
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Server is listening at port ' + (process.env.port || 3000)); 
