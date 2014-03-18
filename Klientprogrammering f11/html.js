

var ram = document.createElement('div');
ram.className='higscoreitm';
var name = document.createElement('h2');
name.className='highscoreTitle';
var point = document.createElement('p');

name.innerHTML = highscoreLista[0].name;
point.innerHTML = highscoreLista[0].point;

ram.appendChild(name);
ram.appendChild(point);

document.getElementById('placeholder').appendChild(ram);