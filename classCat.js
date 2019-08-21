
let Cat = function (nameCat, weightCat, speedCat) {
    this.nameCat = nameCat;
    this.weightCat = weightCat;
    this.speedCat = speedCat;
    this.speak = function () {
        alert('Meo meo');
    };

    this.getSpeedCat = function () {
        return this.speedCat;
    };

    this.checkMouse = function (food) {
        this.food = food;
        return this.food;
    }
    this.catchMouse = function () {
        if (this.getSpeedCat() > this.food.getSpeed()) {
            alert("Jerry die");
        }
        else {
            alert("Cat can't catch mouse");
        }
    };

    this.eatMouse = function (weight) {
        this.weightCat += weight;
    };
    this.getWeight = function () {
        return this.weightCat;
    };

    this.setWeight=function (weight) {
        this.weightCat=weight;
    }

};