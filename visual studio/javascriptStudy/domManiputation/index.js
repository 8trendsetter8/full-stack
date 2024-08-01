const divs = document.createElement('div');
document.body.append(divs);
divs.style.backgroundColor = "red";
document.getElementsByClassName('center');

var img = document.createElement('img');
var img = document.getElementsByClassName('center')
img.src = "../../pictures/R.jpg";

var h1 = document.createElement('h1');
var h1 = document.getElementById('h1');
h1.textContent = "hi everyone";

const paragraph = document.createElement('p');
paragraph.style.backgroundColor = 'red';
paragraph.style.color = 'white';

const span = document.createElement('span');
const strong = span.createElement('strong');
strong.textContent = "this is a very strong text";

const newDiv = document.createElement('div');

var firstSpan = document.createElement('span');
var secondSpan = document.createElement('span');
var thirdSpan = document.createElement('span');

firstSpan.id = 'span1';
secondSpan.id = 'span2';
thirdSpan.id = 'span3';

secondSpan.remove();

firstSpan.textContent = 'span tag';
firstSpan.style.color = 'red';

thirdSpan.textContent = 'span tag';
thirdSpan.style.color = 'red';




/*
const div = document.getElementsByClassName("center");
//const div = document.getElementsByClassName("div-class");
const span = div.getElementById('span-2');

div.append(img);
span.remove();
h1.innerText("hi everyone");
span.innerHtml = '<strong></strong>';
Strong.innerText = "this is a very strong text";
p.style.backgroundColor = 'red';
p.style.color = 'white';
*/
