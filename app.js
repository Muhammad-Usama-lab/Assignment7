var operator="";
var element="";
var temp=0;

function call(number){
    element=document.getElementById('in');

    element.value += number;
}






    function opr(oper){
    switch(oper){

        case '+' :{
             temp=Number(element.value);
            document.getElementById('in').value="";
            document.getElementById('label').innerHTML=temp+" + ";
            operator='+';
            break;
        }

        case '-' :{
             temp=Number(element.value);
            document.getElementById('in').value="";
            document.getElementById('label').innerHTML=temp+" - ";
            operator='-';
            break;
        }

        case 'x' :{
             temp=Number(element.value);
            document.getElementById('in').value="";
            document.getElementById('label').innerHTML=temp+" x ";
            operator='*';
            break;
        }

        case '/' :{
           temp=Number(element.value);
            document.getElementById('in').value="";
            document.getElementById('label').innerHTML=temp+" / ";
            operator='/';
            break;
        }
    }


}


function calculate(){



    var num=Number(element.value),result;
    switch(operator){
        case '+' :{
            document.getElementById('label').innerHTML="0";
            result= num + temp;
            console.log(result);
            element.value=result;
            break;

        }
        case '-' :{
            document.getElementById('label').innerHTML="0";
            result= temp - num;
            console.log(result);
            element.value=result;
            break;

        }
        case '*' :{
            document.getElementById('label').innerHTML="0";
            result= num * temp;
            console.log(result);
            element.value=result;
            break;

        }
        case '/' :{
            document.getElementById('label').innerHTML="0";
            result= num / temp;
            console.log(result);
            element.value=result;
            break;

        }
        case '%' :{
            document.getElementById('label').innerHTML="0";
            result= (num / 100)*temp;
            console.log(result);
            element.value=result;
            break;

        }
        default:{

            var answer=eval(element.value);
            element.value=answer;
        }

    }
    
    
}

function clearall(){

    element.value="";
    document.getElementById('label').innerHTML="0";
    operator=undefined;
    

}


    
function backspace(){

    var Value=element.value;
    var length=Value.length;
    Value=Value.slice(0,length-1);
    element.value=Value;

}    


function square(){
var Value=Number(element.value);
Value=Math.sqrt(Value);
element.value=Value;
}

function fac(){
    var Value=element.value;
    // var result=0;
    Value=parseInt(Value);
    
    for(var i= Value;i > 1;i--){

        Value=Value*(i-1);

    }

    element.value=Value;

}

function percent(){
    operator='%';
    temp=Number(element.value);
    var fValue=element.value;
    element.value="";
    document.getElementById('label').innerHTML= fValue +" %  of ";


}
