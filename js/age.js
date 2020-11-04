function ageindays(){
    var year=prompt('what is your birthyear');
var days=(2020 - year) * 365 * 24;
var h1=document.createElement('h1');
var birth=document.createTextNode('you are alive in year for' + days + ' hours');
h1.setAttribute('id','ageindays');
h1.appendChild(birth);
document.getElementById('result').appendChild(h1);

}
function reset()
{
    document.getElementById('ageindays').remove();
}



