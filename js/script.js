var count = document.getElementsByClassName('button');
console.log(count.length);

for (i = 0; i < count.length; i++) {
	console.log(count[i].innerText);
}