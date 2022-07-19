const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>');
        res.write('Learn Nodejs - Lec 1');
        res.write('</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action="message" method="POST">');
        res.write('<h1>Enter Message</h1><input type="text" name="message" />');
        res.write('<button>Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    } 

    if(url === '/message' && req.method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            console.log('chunk', chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const message = Buffer.concat(body).toString();
            console.log('My parsed body ', message);
            const m = message.split('=')[0]; 
            fs.writeFileSync('messages.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
}

module.exports = requestHandler;