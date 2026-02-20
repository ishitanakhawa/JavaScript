class Student{

    constructor(fname){
        this.fname = fname

    }
    learn(){
        return this.fname + " is learning"
        // console.log("Learning");
        //ram is learning
    }

    static bunk(){
        console.log("bunking...");
    }
}

let Anna = new Student('Ram');
console.log(Anna.learn());
// Student.bunk()

 class user extends Student{
    constructor(fname,email){
        super (fname)
        this.email = email
    }
    login(){
        return this.learn()
    }

 }

let user1 = new user()
// user1.login();


