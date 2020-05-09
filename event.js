var event=require('events')
var util=require('util')
var myeventemitter=new event.EventEmitter();
myeventemitter.on('someevent',(msg)=>{
    console.log(msg);
})

myeventemitter.emit('someevent','my test event');

var person=function(name){
    this.name=name
}
util.inherits(person,event.EventEmitter)

var james=new person('james')
var sachin=new person('sachin')
var virat=new person('virat')
var persons=[james,sachin,virat]
persons.forEach((p)=>{
        p.on('speak',(msg)=>{
                console.log(`${msg} said by ${p.name}`)
        })
})

james.emit('speak','I want to ball');
sachin.emit('speak','I want to bat');
virat.emit('speak','I want to be captain');



