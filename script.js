const billAmt = document.querySelector("#billAmt");
const cashGiven = document.querySelector("#cashGiven");
const submitBtn = document.querySelector("#submitBtn");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const Node= document.querySelectorAll(".noOfNotes");
const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];

function clearNoOfNotes(){
    for(let i=0; i<arrayNoteAmt.length; i++)
    {
        Node[i+1].innerText = "";
    }
}

function compare(remainder, noteAmt, index){
    if(remainder >= noteAmt){
        let notes = Math.floor(remainder/noteAmt);
        remainder = remainder - notes*noteAmt;
        Node[index+1].innerText =`${notes}`;
}                                               
    return remainder;
}   

function calculate(bill ,cash){
    clearNoOfNotes();
    let returnAmt = cash-bill;
    if(returnAmt<1){
        output1.innerText="No amount should be returned";
        return;
    }
    //Showing the amount to be returned
    output2.style.display = "block";
    output1.innerText = "Return Change " + `${returnAmt}`;

    for(let i=0; i<arrayNoteAmt.length; i++){
        returnAmt= compare(returnAmt, arrayNoteAmt[i], i);
    } 
}



submitBtn.addEventListener( 'click',()=>{
    let billValue= Number(billAmt.value);
    let cashValue= Number(cashGiven.value);
    if( billValue>0 && cashValue>0){
        if(!Number.isInteger(cashValue)){
            output1.innerText ="Enter valid amount in cash given field";
            output2.style.display = "none";
            return;
        }
        if(billValue > cashValue){
            output1.innerText ="Cash is less than bill, please enter right amount";
            output2.style.display = "none";
            return;
        }
        //if input is valid, calculate no. of notes
        calculate(billValue, cashValue);
    }
    else{
        let text="Enter valid bill amount and cash given to continue";
        output2.style.display = "none";
        output1.innerText = text;
    }

})