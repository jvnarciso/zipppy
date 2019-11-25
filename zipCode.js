window.onload = () => {
	const form = document.querySelector("#firstForm");
	console.log(form);
	form.addEventListener("submit", zipSearch);
}
async function zipSearch(event) {
	event.preventDefault();
	console.log(event);
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	console.log(data.body);
	const json = await data.json();
	console.log(json);
	const input = document.querySelector("#firstInput");
	console.log(input.value);
}
//const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
//	data.then(function(response) {
//const json = response.json();
//	json.then(function(jsonResponse) {
//console.log('tits', jsonResponse)})
//});