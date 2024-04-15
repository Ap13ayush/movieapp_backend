const socket = io();
socket.emit('sendMessage', {'name': "Ayush", 'greeting': "hello"});

socket.on("passNotification", (data)=> {
    console.log('response from server', data);
})