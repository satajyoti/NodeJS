var event=require('events')
var myeventemitter=new event.EventEmitter();
myeventemitter.on('someevent',(msg)=>{
    console.log(msg);
})

myeventemitter.emit('someevent','my test event');
