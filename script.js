

let operation={
    status:0
    ,first_input:''
    ,second_input:''
    ,operation:''
    ,answer:''
}
let history={
    status:0
    ,first_input:''
    ,second_input:''
    ,operation:''
    ,answer:''
}

//update screen
let input = document.getElementById('input');
let his_view = document.getElementById('history1')
function update_screen(){
    input.innerText=`${operation.first_input} ${operation.operation} ${operation.second_input}`;
    if(!operation.answer==''){
        input.innerText+= ` = ${operation.answer}`;
    }
    his_view.innerText=`${history.first_input} ${history.operation} ${history.second_input}`;
    if(!history.answer==''){
        his_view.innerText+= ` = ${history.answer}`;
    }
}


//button click event
let btn_press = document.getElementsByClassName('btn');
let btn_list =[...btn_press];
btn_list.forEach(e=>{
    e.addEventListener('click', Receiver);
})


function Receiver(){
    //is number
    if(!isNaN(this.innerText) || this.innerText=='.'){
        if(operation.status==0){
            operation.first_input += this.innerText;
        }else if(operation.status==1){
            operation.second_input += this.innerText;
        }else{
            clear();
            operation.first_input += this.innerText;
        }
    }
    //is backspace
    if(this.innerText=='_<'){
        if(operation.status==2){
            operation.answer='';
            operation.status=1;
        }else if(operation.status==1){
            operation.second_input='';
            operation.operation='';
            operation.status=0;
        }else{
            operation.first_input='';
        }
    }
    //is sign
    if(this.innerText=='+' || this.innerText=='-' || this.innerText=='*' || this.innerText=='/' || this.innerText=='^' || this.innerText=='%'){
        if(operation.first_input==''){
            alert('please enter a number first')
        }else if(operation.status==2){
            let ans = operation.answer;
            clear();
            operation.first_input=ans;
            operation.status=1;
            operation.operation=this.innerText;
        }else {
            operation.status=1;
            operation.operation=this.innerText;           
        }
    }
    //is clear
    if(this.innerText=='Clear'){
        clear();
    }
    //is equals
    if(this.innerText=='='){
        if(operation.status==1){
            operation.status=2;
            //+
            if(operation.operation=='+'){
                operation.answer= parseFloat(operation.first_input)+parseFloat(operation.second_input);
            }
            //-
            if(operation.operation=='-'){
                operation.answer= parseFloat(operation.first_input)-parseFloat(operation.second_input);
            }
            //*
            if(operation.operation=='*'){
                operation.answer= parseFloat(operation.first_input)*parseFloat(operation.second_input);
            }
            ///
            if(operation.operation=='/'){
                operation.answer= parseFloat(operation.first_input)/parseFloat(operation.second_input);
            }
            //%
            if(operation.operation=='%'){
                operation.answer= parseFloat(operation.first_input)%parseFloat(operation.second_input);
            }
            //^
            if(operation.operation=='^'){
                operation.answer= parseFloat(operation.first_input)**parseFloat(operation.second_input);
            }
        }else{
            alert('invalid operation');
            clear();
        }
    }



    update_screen();
}

let his = document.querySelector('.his')


//clear
function clear(){
    history=operation;
    his.classList.add('his1')
    operation={
        status:0
        ,first_input:''
        ,second_input:''
        ,operation:''
        ,answer:''
    }   
    update_screen(operation);
}



his.addEventListener('click',function(){
        operation = history;
        update_screen(operation);
});











