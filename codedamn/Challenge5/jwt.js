const key = '123456789iuy'

const createToken =() =>{
    let data = {
        id :1,
        'username':'john',
        'role':'admin'
    }
    return jwt.sign (data,key)
}


const verifyToken =(token , key) =>{
    try{
         jwt.verify(token,key)
    } catch (e){
        console.log(e);
    }
    
}

let token = createToken(data , key) // qwer.qwer.qwert
verifyToken(token , key)