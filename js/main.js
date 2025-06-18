console.log("JavaScript File is linked");

const fruits = document.querySelectorAll("#grapes, #strawberry, #watermelon, #mango, #peach, #orange");
console.log(fruits);

function logId() {
    console.log(this.id);
}

 fruits.forEach(fruit => fruit.addEventListener('click', logId));

 
  

