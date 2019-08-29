class Lamp {
    constructor(color) {
        this.color = color;
        this.on = false;
    }
    set color (color) {
        this.color = color;
    }
    get color () {
        return this.color;
    }
    toggle_switch() {
        if (this.on == false) {
            return this.on == true;
        }
        else if (this.on == true) {
            return this.on == false;
        }
    }

    state() {
        if (this.on == false) {
            return "The lamp is off.";
        }
        else {
            return = "The lamp is on.";
        }
    }
}

let lamp = new Lamp("Blue");