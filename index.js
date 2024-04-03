// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    name.push(name)
    return cats

}




function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}


function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}



function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}





function appendCat(name) {
    const newCats = cats.slice();
    newCats.push(name); 
    return newCats; 
}





function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats; 
}




function removeLastCat(){
    cats.pop()
    return cats
}


function removeFirstCat() {
    cats.shift(); 
    return cats; 
}

