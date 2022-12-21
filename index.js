var itemList = document.querySelector('#items');

itemList.parentElement.style.backgroundColor='green';

itemList.lastElementChild.style.backgroundColor='blue';

console.log(itemList.lastChild);


itemList.firstElementChild.style.color='lightgreen';

itemList.nextElementSibling.textContent='this is a text';


console.log(itemList.nextSibling);

itemList.previousElementSibling.textContent='this is a list of items';

console.log(itemList.previousSibling);

//Creating 'HEllo world' and placing it before 'item lister'
var newChild = document.createElement('div');
newChild.id ='hello1';
newChild.className='hello';
newChild.setAttribute('title','hello div');
var newdivtext = document.createTextNode('HEllo world');
newChild.appendChild(newdivtext);
console.log(newChild);
var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newChild,h1);

//Creating 'HEllo world' and placing it before 'item1'
var newChild1 = document.createElement('div');
newChild1.id ='hello2';
newChild1.className='hello1';
newChild1.setAttribute('title','hello div1');
var newdivtext1 = document.createTextNode('HEllo world2 ');
newChild1.appendChild(newdivtext1);
var container1 = document.querySelector('body .list-group');
var ul=document.querySelector('ul li');
container1.insertBefore(newChild1,ul);
