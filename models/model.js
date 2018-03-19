﻿class Model {
    constructor() {
        this.eventPropertyChanged = null;

        // Depending on associated the SVG element, not all of these parameters will be used.
        this._tx = 0;
        this._ty = 0;
        this._x = 0;   
        this._y = 0;
        this._x1 = 0;
        this._y1 = 0;
        this._x2 = 0;
        this._y2 = 0;
        this._width = 0;
        this._height = 0;
        this._cx = 0;
        this._cy = 0;
        this._r = 0;
        this._d = null;
    }

    get tx() { return this._tx; }
    get ty() { return this._ty; }
    get x() { return this._x; }
    get y() { return this._y; }
    get x1() { return this._x1; }
    get y1() { return this._y1; }
    get x2() { return this._x2; }
    get y2() { return this._y2; }
    get width() { return this._width; }
    get height() { return this._height; }
    get cx() { return this._cx; }
    get cy() { return this._cy; }
    get r() { return this._r; }
    get d() { return this._d; }

    propertyChanged(propertyName, value) {
        if (this.eventPropertyChanged != null) {
            this.eventPropertyChanged(propertyName, value);
        }
    }

    updateTranslation(evt) {
        this._tx += evt.movementX;
        this._ty += evt.movementY;
    }

    // All models have a translation 
    setTranslate(x, y) {
        this.translation = "translate(" + x + "," + y + ")";
        // later to be extended to build the transform so that it includes rotation and other things we can do.
        this.transform = this.translation;
    }

    set transform(value) {
        this._transform = value;
        this.propertyChanged("transform", value);
    }
}
