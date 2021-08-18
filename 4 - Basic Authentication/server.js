const express = require('express');
const app = express();
const PORT = 3004;
 
app.post("/", async (req, res) => {
	// check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

	/*
	For the sake of simplicity i'm not creating any user service which will communicate with 
	the database to authenticate user. 
	Something like this: const user = await userService.authenticate({ username, password });
	*/ 

	if (username != 'raghava_123' || password != 'Raghava.1234') {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }else{
		res.status(200).json({
			message: `Hi I'm Raghava Reddy. This is a simple Example of basic authentication.`
		})
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});