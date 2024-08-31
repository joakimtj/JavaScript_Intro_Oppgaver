// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {
  let array = text.split(/\W+/);
  array.pop(); // Remove the trailing empty string ''
  
  let longestWord = array[0];
  for (let i = 0; i < array.length; i++) 
    if (longestWord.length < array[i].length)
      longestWord = array[i];
  
  return longestWord;
};

const div = document.createElement('div');
const content = document.createTextNode(`The longest word is: ${longestWord()}`);
div.appendChild(content);
const body = document.querySelector('body');
body.appendChild(div);
console.log(longestWord());
