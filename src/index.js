module.exports = function toReadable (number) {
  let obj={
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
  }
 let objD = {20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'};
  let res=''
    // for(let keyD in objD){
    if(number.toString().length===1 || (number.toString().length===2 && number<14)){
      
       return obj[number]
    }else if(number.toString().length===2 && number>=13 && number<20){

      if(+number!==18&&+number!==15){
        res=`${res}${obj[+number.toString().slice(1,2)]+"teen"}`
      }else if(+number===18){
        res=`${res}${obj[+number.toString().slice(1,2)]+"een"}`
      }
      else if(+number===15){
        res=`${res}${obj[+number.toString().slice(1,2)].toString().slice(0,2)+"fteen"}`
      }
    }
    
    else if(number.toString().length===2 && number >=20){
      
      res=`${res}${objD[Number(number.toString().slice(0,1)+"0")]}`
      if(+number.toString().slice(1,2)!==0){
        res=`${res}${" "+obj[+number.toString().slice(1,2)]}`
      }else{
        res=`${res}`
      } 
    }
    else if(number.toString().length===3){
      res=`${res}${obj[+number.toString().slice(0,1)]+" hundred"}`
    
      if(+number.toString().slice(1,2)>=2 ){
   
        if(Number(number.toString().slice(1,2)+"0") !==0){
          res=`${res}${" "+objD[Number(number.toString().slice(1,2)+"0")]}`

        }else{
          res=`${res}`
        }
     
        if(+number.toString().slice(2,3)!==0){
          res=`${res}${" "+obj[+number.toString().slice(2,3)]}`
        }else{
          res=`${res}`
        } 
      }
      else if(+number.toString().slice(1,2)===0 && +number.toString().slice(2,3)===0){
        res=`${res}`
    
      }
      else if(+number.toString().slice(1,2)!==0 && +number.toString().slice(2,3)>3){

        if(+number.toString().slice(2,3)!==8&&+number.toString().slice(2,3)!==5){
          res=`${res}${" "+obj[+number.toString().slice(2,3)]+"teen"}`
        }else if(+number.toString().slice(2,3)===8){
          res=`${res}${" "+obj[+number.toString().slice(2,3)]+"een"}`
        }
        else if(+number.toString().slice(2,3)===5){
          res=`${res}${" "+obj[+number.toString().slice(2,3)].toString().slice(0,2)+"fteen"}`
        }
      }else{
        if(+number.toString().length<2){
          res=`${res}${" "+obj[+number.toString().slice(2,3)]}`
        }else{
          res=`${res}${" "+obj[+number.toString().slice(1,3)]}`
        }
        
      }
    }
    return res
}

