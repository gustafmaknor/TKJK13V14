var categories=[
		{
			id:1,
			name:'Dam'
		},
		{
			id:2,
			name:'Herr'
		}
	]

var products=[
		{
			name:'Sneakers',
			size:40,
			color:'White',
			category:2
		},
		{
			name:'Boots',
			size:36,
			color:'Röda',
			category:1
		},
		{
			name:'Stövlar',
			size:47,
			color:'Gummigröna',
			category:1
		},
		{
			name:'Snygg sandal',
			size:42,
			color:'Vit med brasiliens logga på',
			category:2
		},
		{
			name:'Foppaskor',
			size:38,
			color:'Vet vi inte för täckt med addons',
			category:1
		},
		{
			name:'Dojja',
			size:38,
			color:'Vet vi inte för täckt med addons',
			category:1
		}
	]


for(var i=0;i<100;i++){
	console.log(i);
}

function loadCategories(){
	//Deklarera en variabel för att vet var knapparna skall hamna
	var placeHolder;
	placeHolder=document.getElementById('menu');
	
	//For-loopen går igenom alla kategorier i vår categories.array
	//Räknaren i ökar med 1 för varje varv loopen utför
	for(var i=0;i<categories.length;i++){

		//För varje kategori skapar vi ett nytt element
		var categoryButton=document.createElement('button');
		//Det nya elementet ger vi en text som är kategorins namn
		categoryButton.innerText=categories[i].name;

		categoryButton.onclick=loadProducts;

		//Slutligen lägger vi på det nya elementet på placeholdern, alltså vårt menyelement
		placeHolder.appendChild(categoryButton);
	}

}
function loadProducts(){
	var placeHolder=document.getElementById('products');

	for(var i=0;i<products.length;i++){
		var product=document.createElement('div');
		product.className="product";
		product.onmouseover=hoverProduct;
		product.onmouseout=leaveProduct;


		var productHeader=document.createElement('h2');
		var productSize=document.createElement('span');

		productHeader.innerText=products[i].name;
		product.appendChild(productHeader);

		productSize.innerHTML=products[i].size;
		product.appendChild(productSize);

		placeHolder.appendChild(product);

	}

}
function leaveProduct(){
	this.className="product";
}
function hoverProduct(){
	this.className="productHover";
}
window.onload=loadCategories;