let screen = document.getElementById("result");

screen.addEventListener("keyup",(e) =>
{
if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))
{
pass = true;
}
else{
alert("Only numbers are Allowed")
screen.value = "";

}
}
)

function num(numbers)
{
screen.value += numbers ; 
}

// function operation(operators)
// {
//     screen.value+=(operators);
// }
function cleared() {
    screen.value = ""
}
function del() {
    screen.value = screen.value.slice(0,-1);
}
function equal()
{
    try {
        screen.value = eval(screen.value);
    } 
    catch (error)
     {
        alert("given expression is not valid");
    }
   
}