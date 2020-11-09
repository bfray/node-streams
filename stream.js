const http = require('http');
const fs = require('fs');

const write = (chunk) => {
    fs.writeFile('message.txt', chunk, (err) => {
        if (err) throw err;
        console.log('File has been saved');
    })
}

const server = http.createServer((req, res) => {
    let body = '';

    req.setEncoding('utf-8');

    req.on('data', (chunk) => {
        body += chunk;
    })

    req.on('end', () => {
        try {
            data = JSON.parse(JSON.stringify(body));
            write(data)
            res.write(data)
            res.end()
        }

        catch (er) {
            res.statusCode = 400;
            return res.end(`err:${er}, error message: ${er.message}`)
        }
    });
});

server.listen(1337);