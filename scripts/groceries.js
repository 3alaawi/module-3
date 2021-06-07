	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: true,
		diabetic: true,
		price: 5.99
	},
	{
		name: "bread",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: true,
		diabetic: true,
		price: 4.99
	},
	{
		name: "milk",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: true,
		diabetic: true,
		price: 4.99
	},
	{
		name: "almonds",
		lactoseIntolerant: true,
		nutAllergies: false,
		organic: true,
		diabetic: true,
		price: 4.99
	},
	{
		name: "cheese crackers",
		lactoseIntolerant: false,
		nutAllergies: true,
		organic: false,
		diabetic: false,
		price: 3.99
	},
	{
		name: "almond ice cream",
		lactoseIntolerant: false,
		nutAllergies: false,
		organic: false,
		diabetic: false,
		price: 2.99
	},
	{
		name: "nut free candy",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: false,
		diabetic: false,
		price: 1.99
	},
	{
		name: "mango",
		lactoseIntolerant: true,
		nutAllergies: true,
		organic: true,
		diabetic: true,
		price: 1.59
	},
	{
		name: "peanut butter",
		lactoseIntolerant: true,
		nutAllergies: false,
		organic: false,
		diabetic: false,
		price: 1.49
	},
	{
		name: "cereal bar",
		lactoseIntolerant: false,
		nutAllergies: false,
		organic: false,
		diabetic: false,
		price: 0.49
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseIntolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerantOrganic") && (prods[i].lactoseIntolerant == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutAllergies") && (prods[i].nutAllergies == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutAllergiesOrganic") && (prods[i].nutAllergies == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerantNutAllergies") && (prods[i].nutAllergies == true) && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerantNutAllergiesOrganic") && (prods[i].nutAllergies == true) && (prods[i].lactoseIntolerant == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Diabetic") && (prods[i].diabetic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}