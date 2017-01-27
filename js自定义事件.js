function EventTarget(){
this.handlers = {};//存储事件处理程序,由n个键值对组成,键表示事件名,值是一个由事件处理程序组成的数组
}

EventTarget.prototype = {

constructor:EventTarget,

//添加事件
addHandler:function(type,handler){

    if(typeof this.handlers[type] == "undefined"){
        this.handlers[type] = [];
    }
    this.handlers[type].push(handler);

},

//触发事件
fire:function(event){

    if(!event.target){
        event.target = this;
    }

    if(this.handlers[event.type] instanceof Array){

            var handlers = this.handlers[event.type];
            for(var i=0,len=handlers.length;i < len;i++){
                //将event传递给事件处理程序,event.target代表对象本身,
                event.type代表事件名,你可以根据情况为添加event属性
                handlers[i](event);
            }
    }

},

//移除事件
removeHandler:function(type,handler){

    if(this.handlers[type] instanceof Array){

        var handlers=this.handlers[type];

        for(var i=0,len=handlers.length;i < len; i++){
            if(handlers[i] == handler){
                break;
            }
        }

        handlers.splice(i,1);
    }
}

};

var eventObj=new EventTarget(); //实例化一个EventTarget类型

var handler=function(){
    alert('event');
};  //事件处理程序

eventObj.addHandler('alert',handler); //为eventObj对象添加一个事件处理程序`handler`

event.fire({type:'alert'});  //触发eventObj对象中的事件处理程序`handler`

event.removeHandler('alert',handler);  //删除eventObj对象中的事件处理程序`handler`


//原型式继承
var object=function(o){
    function F(){}
    F.prototype=o;
    return new F();
};


//subType继承superType的原型对象
var inheritPrototype=function(subType,superType){

    var prototype=object(superType.prototype);
    prototype.constructor=subType;
    subType.prototype=prototype;

}

function Person(name,age){

    EventTarget.call(this);//继承EventTarget的属性
    this.name = name;
    this.age = age;
}

inheritPrototype(Person,EventTarget);//继承EventTarget的方法

Person.prototype.say=function(message){
    this.fire({type:'message',message:message}); //触发事件
};

//事件处理程序
var handMessage=function(event){

    alert(event.target.name + "says:" + event.message);

};

var person=new Person('yhlf',29);
person.addHandler('message',handMessage);
person.say('Hi there');
