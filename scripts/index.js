let api = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

// let main = document.querySelector(".menu").addEventListener("click",getData);


//Get inital Data in Console
getData()

async function getData(){
    try{
        let productList = await fetch(api)
        let res = await productList.json();

        //Append data from console to DOM
        appendData(res.meals)
    }catch (error){
        console.log("Please check you api or data in getDatafunction")
    }
}


//Add item to Cart Local storage

let cart = localStorage.getItem("cart")

if((cart == null) || (cart == undefined)){

    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
    cartCount(cart);

}else{

    cart = JSON.parse(cart)
    cartCount(cart)

}


function cartCount(cart){
    let count = document.getElementById("count");
    count.textContent = `Cart Count : ${cart.length}`
}

function price(min, max){
    return Math.floor(Math.random()*(Max - min)+min);
}


// Append funtion to add item from apt ro DSM

function appendData(data) {
    // console.log(data)
    let container = document.querySelector("#menu");
    // container.innerHTML = "";

    data.forEach(function(d){

        var div = document.createElement("div");

        let img = document.createElement("img")
        img.src = d.strMealThumb
       
        let p1 = document.createElement("p")
        p1.textContent = d.strMeal

        let p2 = document.createElement("p")
        p2.textContent = "Rs -  " + 250
        
        // "INR" + price(min, max);

        let btn = document.createElement("button")
        btn.setAttribute("id",("addtocart"))
        btn.textContent = "Add To Cart"
        btn.onclick = function(event){
            console.log(div)
            addtocart(data)
        }

        function addtocart(data){
            let cart = JSON.parse(localStorage.getItem("cart"));
    
            cart.push(d)
    
            localStorage.setItem("cart",JSON.stringify(cart))
            cartCount(cart)
        }

        div.append(img,p1,p2,btn)
        container.append(div)

    })
    

    
}




