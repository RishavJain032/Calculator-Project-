let output = document.getElementById("cal")
function display(num){
    output.value += num;

}
function calculate(){
    try{
        output.value = eval(output.value);

    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    output.value = "";
}
function off(){
    output.value = "";
}
function del(){
    output.value = output.value.slice(0,-1);
}