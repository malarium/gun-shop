const weapon = [  //all items from the shop as objects
  { name: "The Grim Reaper",
    price: 300,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Duty Calls",
    price: 7000,
    image: "gun2.png",
    new: true,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Last Hope",
    price: 2000,
    image: "gun.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Kill'em all",
    price: 2500,
    image: "gun1.png",
    new: true,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Baby tool",
    price: 600,
    image: "gun2.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Rest in pieces",
    price: 3000,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Sir, yes sir!",
    price: 20000,
    image: "gun.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Sweeper",
    price: 2700,
    image: "gun2.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "The Pale Doom",
    price: 300,
    image: "gun.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Vengance",
    price: 700,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Axe",
    price: 2000,
    image: "gun2.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Hammer",
    price: 2500,
    image: "gun.png",
    new: true,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Fuck ya'all",
    price: 600,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Deamon hit",
    price: 6100,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Hannibal",
    price: 200,
    image: "gun.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Daddy's home!",
    price: 2500,
    image: "gun2.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Devil's kiss",
    price: 1600,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Scythe",
    price: 3000,
    image: "gun.png",
    new: true,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Friendly fire",
    price: 1200,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Disney's princess",
    price: 61000,
    image: "gun.png",
    new: true,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Willma, I'm home!",
    price: 2000,
    image: "gun2.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Let's play!",
    price: 2250,
    image: "gun1.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "X-Files",
    price: 1000,
    image: "gun2.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  },
  { name: "Mr. President",
    price: 300,
    image: "gun.png",
    new: false,
    owned: false,
    tooExpensive: false,
    inCart: false
  }
];

const gunsDisplay = document.querySelector("#gunsDisplay");//here we show guns in shop
const gunCart = document.querySelector("#cart"); //here is shopping cart
const gunsAmountInCart = document.querySelector("#amountOfItems"); //how many items in cart
const money = document.querySelector("#money"); //how much money player's have
const totalPrice = document.querySelector("#totalPrice"); //total price of all guns in cart
let playerMoney = 5000; // initial amout of player's cash
let howManyInCart = 0; // initial number of guns in cart
let total = 0; //initial value of total shopping


money.textContent = playerMoney;
gunsAmountInCart.textContent = howManyInCart + " items in the cart";
totalPrice.textContent = "Buy for "+ total;

//Check which elements is weapon array are too expensive
const expensive = weapon => {
  weapon.filter(item => {
    let numberOfItem = weapon.indexOf(item); //numberOfItem is now the number of chosen element from weapon array
    if (item.price > playerMoney) {
      weapon[numberOfItem].tooExpensive = true;
    } else {
      weapon[numberOfItem].tooExpensive = false;
    }
  });
}
expensive(weapon);
// Function that dynamically creates items for display based on objects' values stored in 'weapon' variable
const createGun = weapon => {
  let gun = document.createElement("div"); //create another gun item for display
  gun.classList.add("gunItem");            // use the styles
  gun.style.background = "darkgrey center no-repeat"; //get image of the gun
  gun.style.backgroundImage = "url(img/"+`${weapon.image}`+")";
  gun.style.backgroundSize = "115px"; //size of gun's image

  let gunName = document.createElement("p"); //create item's name tag
  gunName.textContent = `${weapon.name}`; //get name
  gunName.classList.add("gunName");       //style it

  let gunNew = document.createElement("p"); //create 'new' element
  gunNew.textContent = "New";
  gunNew.classList.add("new");
  if (`${weapon.new}`=== 'true') {  // display new when actually new
    console.log(`${weapon.new}`);
    gunNew.style.display = "block";
  }

  let gunPrice = document.createElement("p"); //create element for item's price
  if (`${weapon.owned}` === 'true') {  //check for additional conditions (inCart, tooExpensive or Owned) CHANGED === 'true'
    gunPrice.textContent = "Owned";
    gunPrice.style.backgroundColor = "darkslateblue";
    gunName.style.backgroundColor = "darkslateblue";
  } else if (`${weapon.inCart}` === 'true') {
    gunPrice.textContent = "in Cart";
    gunPrice.style.backgroundColor = "lightslategrey";
    gunName.style.backgroundColor = "lightslategrey";
    gun.style.cursor = 'pointer';
    gunName.style.cursor = "default";
    gunPrice.style.cursor = "default";
  } else if (`${weapon.tooExpensive}` === 'true') {
    gunPrice.textContent = `${weapon.price}`;
    gunPrice.style.backgroundColor = 'darkred';
    gunName.style.backgroundColor = 'darkred';
  } else {
    gunPrice.textContent = `${weapon.price}`; //get the price
    gun.style.cursor = 'pointer';
    gunName.style.cursor = "default";
    gunPrice.style.cursor = "default";
  }
  gunPrice.classList.add("gunPrice"); //style it with predefined class
  gun.appendChild(gunName); //Prepare the whole gunItem
  gun.appendChild(gunNew);
  gun.appendChild(gunPrice);
  gunsDisplay.appendChild(gun);
};

//make all items in shop appear
const displayShop = () => {
  gunsDisplay.innerHTML = "";
  weapon.forEach (item => createGun(item));
}
displayShop();

//function to create gun image in Cart
const createGunInCart = weapon => {
  let gunToBuy = document.createElement("div");
  gunToBuy.classList.add("itemInCart");

  let gunInfo = document.createElement("div");
  gunInfo.classList.add("itemInfo");
  gunInfo.style.backgroundImage = "url(img/"+`${weapon.image}`+")";

  let name = document.createElement("p");
  name.textContent = `${weapon.name}`;
  name.classList.add("itemName");

  let price = document.createElement("p");
  price.textContent = `${weapon.price}`;
  price.classList.add("itemPrice");

  gunInfo.appendChild(name);
  gunInfo.appendChild(price);
  gunToBuy.appendChild(gunInfo);
  gunCart.appendChild(gunToBuy);
};

const updateCartInfo = () => { //function that displays info on number of items in cart
  howManyInCart === 1 ? gunsAmountInCart.textContent = howManyInCart + " item in cart" : gunsAmountInCart.textContent = howManyInCart + " items in cart"; //grammar matters ;)
  money.textContent = playerMoney; //update player's money
}

const removeFromCart = e => { //callback function called in addToCart if price === 'in Cart'
  let name = e.srcElement.firstChild.innerText || e.srcElement.firstChild.textContent; // this is the name of gun in cart clicked again (Chrome and Opera)
  let elem = gunCart.querySelectorAll(".itemInCart"); //compare names
  elem.forEach(one => {
    if(one.children[0].firstChild.innerText === name) { // if name is the same
      let cost = one.children[0].lastChild.innerText;
      one.parentNode.removeChild(one); //remove from nodes collection
      let parsed = parseInt(cost);  //give player's money back
      total -= parsed;
      totalPrice.textContent = "Buy for "+ total;
      howManyInCart--; //one item less in cart
      updateCartInfo();
    }
  });
}

//function that adds and removes items to/from cart on click
const addToCart = e => {
  let gunName = e.srcElement.firstChild.innerText;
  let gunPrice = e.srcElement.lastChild.innerText;
  let numberOfItem = 0;

  if (gunPrice === "in Cart") {
      weapon.filter(item => {
        if (item.name === gunName) {
          numberOfItem = weapon.indexOf(item); //numberOfItem is now the number of chosen element from weapon array
        }
      });
      weapon[numberOfItem].inCart = false;
      removeFromCart(event);
      let a = parseInt(playerMoney); //player money in variable a
      let b = weapon[numberOfItem].price; //gun price in b
      a += b; //when replacing item from the basket - give money back
      playerMoney = a;
      expensive(weapon);
      money.textContent = playerMoney;
      displayShop();
  } else if (gunName !== "in Cart") { //if not in cart already
    if (isNaN(gunPrice)) { // if item owned
      return;
    } else if (gunPrice > playerMoney){ // if too expensive
      return;
    } else { // add to cart
      weapon.filter(item => {
        if (item.name === gunName) {
          numberOfItem = weapon.indexOf(item); //numberOfItem is now the number of chosen element from weapon array
        }
      });
      weapon[numberOfItem].inCart = true; //change inCart value to true in weapon array
      createGunInCart(weapon[numberOfItem]); //add that element to cart
      playerMoney -= gunPrice; //reduce amount of money
      expensive(weapon); // check which are too expensive after this choice
      displayShop(); // show shop after changes
      let parsed = parseInt(gunPrice);
      total += parsed;
      totalPrice.textContent = "Buy for "+ total;
      howManyInCart++;
      updateCartInfo();
    }
  }
}

const purchase = () => {
  //clear the cart
  while (gunCart.firstChild) {
    gunCart.removeChild(gunCart.firstChild);
  }
  howManyInCart = 0;
  gunsAmountInCart.textContent = howManyInCart + " items in cart";
  total = 0;
  totalPrice.textContent = "Buy for "+ total;

  //change all 'in Cart' to 'owned'
  weapon.forEach(item => {
    if (item.inCart === true) {
      item.inCart = false;
      item.owned = true;
    }
  });
  displayShop();
}

const clickInCart = e => { //function to deal when item was clicked inside cart
  let price = 0;
  weapon.forEach(item => {
    if (item.name === e.srcElement.firstChild.textContent) { //compare names
      item.inCart = false; //set inCart to false
      price = item.price;
    }
  });
  playerMoney += price; //return player's money
  removeFromCart(e); //get item out of cart
  expensive(weapon); // check what player can now afford
  displayShop(); // display after changes
}

//Event listeners
//when player clicks on gun in the shop
gunsDisplay.addEventListener("click", function(event) {
  addToCart(event);
});
//when player clicks 'buy for' button in cart
totalPrice.addEventListener("click", function(){
  purchase();
});
//when player clicks on gun in the cart
gunCart.addEventListener("click", function(event) {
  clickInCart(event);
});
