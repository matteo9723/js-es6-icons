const arr = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let main = document.getElementById('main');
let select=document.getElementById('select');

// tutte le tessere di default 

for(let i in arr){
	main.innerHTML+=`
	<div class="card">
	<i class="${arr[i].family} ${arr[i].prefix}${arr[i].name} ${arr[i].color}"></i>
	<div class="text "> ${arr[i].name} </div>
	</div>`;
}


select.addEventListener('click',function(){
	
	// reset 
	main.innerHTML = '';

	let valoreSelect = document.getElementById("select").value;

	// ANIMAL 
	
	if(valoreSelect == 'animal' ){
		const selezione = arr.filter((x)=>{
			
			return x.type == 'animal';
		});
		for(let i in selezione){

			main.innerHTML+=`
			<div class="card">
			<i class="${selezione[i].family} ${selezione[i].prefix}${selezione[i].name} ${selezione[i].color}"></i>
			<div class="text "> ${selezione[i].name} </div>
			</div>`;
		}
	}

	// VEGETABLE

	if(valoreSelect == 'vegetable' ){
		const selezione = arr.filter((x)=>{
			
			return x.type == 'vegetable';
		});
		for(let i in selezione){

			main.innerHTML+=`
			<div class="card">
			<i class="${selezione[i].family} ${selezione[i].prefix}${selezione[i].name} ${selezione[i].color}"></i>
			<div class="text "> ${selezione[i].name} </div>
			</div>`;
		}
	}

	// USER 

	if(valoreSelect == 'user' ){
		const selezione = arr.filter((x)=>{
			
			return x.type == 'user';
		});
		for(let i in selezione){

			main.innerHTML+=`
			<div class="card">
			<i class="${selezione[i].family} ${selezione[i].prefix}${selezione[i].name} ${selezione[i].color}"></i>
			<div class="text "> ${selezione[i].name} </div>
			</div>`;
		}
	}

	if(valoreSelect == 'all' ){
		for(let i in arr){

			main.innerHTML+=`
			<div class="card">
			<i class="${arr[i].family} ${arr[i].prefix}${arr[i].name} ${arr[i].color}"></i>
			<div class="text "> ${arr[i].name} </div>
			</div>`;
		}
	}

});



