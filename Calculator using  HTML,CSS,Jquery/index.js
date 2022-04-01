
var display=$("#display");
function insertNurmber(number){
    var existingValue= display.val();
    
    display.val(existingValue+number);
    
}

function calculate(){
    display.val(eval(display.val()))

}
function cleare(){
    display.val("")

}