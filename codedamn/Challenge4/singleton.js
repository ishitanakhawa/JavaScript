class Singleton{
     static instance;
     constructor(){
        if(Singleton.instance){
            throw Error('Use getInstance to create obj');
        }
        Singleton.instance = this;
     }
    static  getInstance(){
        if(!Singleton.instance){
          Singleton.instance = new Singleton()
        }
      return Singleton.instance
    }

    message(){
        return'Hello Singleton!'
    }
}

let one = new Singleton();
let obj = new Singleton()
obj.message()