let speedcat = Math.floor(Math.random() * 100);
let cat = new Cat('tom', 15, speedcat);
let count=0;
let rats = [];

function createRat() {
    for (let i = 0; i < 100; i++) {
        let speedmouse = Math.floor(Math.random() * 100);
        let weight = Math.floor(Math.random() * 10);
        let element = new Mouse('Jerry' + i,weight, speedmouse)
        rats.push(element);
        console.log(element)
    }
}


function display(mouse) {
    document.getElementById('catName').innerHTML = "Full Name Cat: " + cat.nameCat;
    document.getElementById('catWeight').innerHTML = "Cat Weight: " + cat.getWeight() + "kg";
    document.getElementById('ratName').innerHTML = "Full Name Rat: " + mouse.nameMouse;
    document.getElementById('ratWeight').innerHTML = "Rat Weight: " + mouse.weightMouse + " kg";
    document.getElementById('Number of rats captured').innerHTML = "Score:" + count;
}

function catchAll() {

    for (let i=0;i<rats.length;i++){
        if(cat.getSpeedCat() > rats[i].getSpeed()){
            console.log("Catch it!!!");
            count++;
            cat.eatMouse(rats[i].getWeight())
        }else {
            console.log("Catch fail!");
        }
        display(rats[i].getWeight());
    }

}
createRat();
display();




