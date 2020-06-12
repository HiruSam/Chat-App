const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connect', (socket) => {

    console.log('connect');

        socket.on('disconnect', () => {
            console.log('disconnect');
        })
    });


server.listen(PORT, () => console.log('Server has started on port' ${PORT}));