/* Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

const favRecipe = function(){
    const myRecipe = [
        {name: "Chicken 65",
         Origin : "India",
         ingredients : ["Chicken","Cynamonn","Chilli","Yoghurt","Egg"]
        },
        {
            name : "Kidney Beans",
            Origin : "India",
            ingredients :["Onions","Salt","Coriandor powder","Beans","Tomatos"]
        }
      ];

      for(let i=0; i<myRecipe.length; i++){
          console.log(`Recipe ${i+1} is ${myRecipe[i].name}`);
      
          
          console.log("Ingredients")
          for(j=0;j<myRecipe[i].ingredients.length;j++)  
            console.log(myRecipe[i].ingredients[j]);
      }
}
favRecipe();


/*Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'*/

const book = function(){
const book = [
    {name: "Discovery of India",Author: "J.Nehru", alreadyRead:true},
    {name: "Mahabharat", Author: "Veda Vyasa",alreadyRead :false},
    {name: "3 Idiots",Author: "Unknown",alreadyRead :false}
];

    for(let i=0;i<book.length;i++){
        if(!book[i].alreadyRead){                      // Checking if book has been read or not
            console.log(`You must read ${book[i].name} written by ${book[i].Author}`);
        }
    }
}
book();