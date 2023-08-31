const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

let sharedData = ''; // Data to be shared collaboratively

io.on('connection', (socket) => {
  socket.emit('dataUpdated', sharedData); // Send current data to the connected user

  socket.on('updateData', (newData) => {
    sharedData = newData;
    io.emit('dataUpdated', sharedData); // Broadcast the updated data to all connected users
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
