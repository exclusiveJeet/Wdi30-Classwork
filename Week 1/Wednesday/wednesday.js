/*Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

const greaterNum = function(num1, num2){
    if(num1 > num2)
        return num1;
        else
        return num2;
}
console.log('Greater number of tow is '+ greaterNum(12,40));
/* Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/
const helloWorld = function(lang=""){
    let hello = "\n Hello, World. You selected = ";
    if(lang==="hd")
        hello+="Hindi";
    else if(lang==="ch")
        hello+="Chinese";
    else
        hello+="English";
    
    return hello;
}
console.log(helloWorld('ch'));

/*Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.*/

const assignGrade = function(score){
    let grade="";
    if(score>=90)
        grade="A";
        else if(score>=80)
        grade="B";
        else if(score>=70)
        grade="C";
        else if(score>=50)
        grade="D";
        else
        grade="F";
    
    return grade;
}
console.log("You grade is =" +assignGrade(65));

/*Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".*/

const pluralize = function(noun,number){
    let output = `${number} ${noun}`;

    if(1!==number){
        output+='s';
    }

    return output;
}

console.log(pluralize("Dog",2));


/*Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").*/

const evenOdd = function(){
    for(let i=0;i<=20;i++)
    {
        if((i%2)==0)
            console.log(`${i} is Even`);
        else
        console.log(`${i} is Odd`);
    }
}
evenOdd();

/*Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").*/
const table = function(){

    for(let i=1;i<=10;i++){
        console.log(`${i} * 9 = ${i*9}`);
    }
}
table();

/*Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc*/

const gradeAssign =  function(){
   for(let i=60;i<=100;i++){
       if(i<=89)
        console.log(`Got a B grade with ${i}%`);
        else 
        console.log(`Got A grade with ${i}%`)
   }
   
}
gradeAssign();
