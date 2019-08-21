let speedcat = Math.floor(Math.random() * 100);
let cat = new Cat('tom', 15, speedcat);
let count = 0;
let rats = [];

function createRat() {
    for (let i = 0; i < 5; i++) {
        let speedmouse = Math.floor(Math.random() * 100);
        let weight = Math.floor(Math.random() * 10);
        let element = new Mouse('Jerry' + i, weight, speedmouse)
        rats.push(element);
        console.log(element)
    }
}


function display(count) {
    document.getElementById('catName').innerHTML = "Full Name Cat: " + cat.nameCat;
    document.getElementById('catWeight').innerHTML = "Cat Weight: " + cat.getWeight() + "kg";
    document.getElementById('Number of rats captured').innerHTML = "Number of rats captured:" + count;
}

function catchAll() {
    count = 0;
    rats=[];
    cat.setWeight(15);
    createRat();
    let i = 0;
    let c=setInterval(function () {

            if (cat.getSpeedCat() > rats[i].getSpeed()) {
                console.log("Catch it!!!");
                console.log(i);
                count++;
                cat.eatMouse(rats[i].getWeight())
            } else {
                console.log("Catch fail!");
            }
            display(count);
            i++;
            if(i>=rats.length){
                clearInterval(c);

        }

    },100)


}

display();




