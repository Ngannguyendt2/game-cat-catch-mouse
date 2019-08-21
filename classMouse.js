let Mouse = function (nameMouse, weightMouse, speedMouse, isDie) {
    this.nameMouse = nameMouse;
    this.weightMouse = weightMouse;
    this.speedMouse = speedMouse;
    this.isDie = isDie;
    this.speak = function () {
        alert('Chit chit');
    };

    this.getSpeed = function () {
        return this.speedMouse;
    };
    this.getWeight = function () {
        return weightMouse;
    }

    this.setSpeed = function (speed) {
        this.speedMouse = speed;

    };

    this.getIsdie = function () {
        return this.isDie;
    };

    this.setIsdie = function (isdie) {
        this.isDie = isdie;
    };

}