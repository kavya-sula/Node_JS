const EvenEmitter=require("events");
class Emitter extends EvenEmitter{

}
const MyEm=new Emitter();
MyEm.on("Kavya",()=>{
    console.log("An Event Occured 1")
});
MyEm.on("Kavya",()=>{
    console.log("An Event Occured 2")
});
MyEm.on("Kavya",(x)=>{
    console.log("An Event Occured with variable")
    console.log(x)
});
MyEm.once("Chitty",()=>{
    console.log("An Event Occured once")
});

MyEm.emit("Kavya");
MyEm.emit("Kavya","Ha")
MyEm.emit("Chitty")
MyEm.emit("Chitty")