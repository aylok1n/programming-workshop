export default class Complex {
    constructor(re = 0, im = 0) {
        this.re = re;
        this.im = im;
    }

    toString() {
        return `${this.re}${this.im > 0 ? ` + ${Math.abs(this.im)}i` : this.im < 0 ? ` - ${Math.abs(this.im)}i` : ''}`;
    }

    getRe() {
        return this.re;
    }

    getIm() {
        return this.im;
    }

    static add(c1, c2) {
        return new Complex(c1.re + c2.re, c1.im + c2.im);
    }

    static sub(c1, c2) {
        return new Complex(c1.re - c2.re, c1.im - c2.im);
    }

    static mult(c1, c2) {
        return new Complex(
            c1.re * c2.re - c1.im * c2.im,
            c1.re * c2.im + c1.im * c2.re
        );
    }

    static div(c1, c2) {
        let squares = c2.re ** 2 + c2.im ** 2;
        return new Complex(
            (c1.re * c2.re + c1.im * c2.im) / squares,
            (c2.re * c1.im - c1.re * c2.im) / squares,
        );
    }

    static expJ(value) { // exp(j*a)
        return new Complex(Math.cos(value), Math.sin(value));
    }


    static ln(c) {
        return new Complex(
            Math.log(
                Math.sqrt(
                    Math.pow(c.re, 2) + Math.pow(c.im, 2)
                )
            ),
            1 / Math.tan(c.im / c.re)
        );
    }

    static task(xMin, xMax, h) {
        let array = [];
        let x = xMin;
        let j = new Complex(0, 1);
        do {
            let mult = new Complex();
            for (let k = 0; k <= 10; k++) {
                let topNumerator = this.mult(
                    this.sub(
                        this.sub(
                            j,
                            new Complex(2 * k)
                        ),
                        new Complex(3)
                    ),
                    new Complex(x)
                )
                let topDenominator = this.sub(j, new Complex(x * k))
                let numerator = this.add(j, this.div(topNumerator, topDenominator))
                let denominator = this.mult(j, new Complex(x))
                let result = this.div(numerator, denominator);
                mult = this.mult(mult, result);
            }
            array.push({
                re: mult.getRe(),
                im: mult.getIm(),
                x
            });

            x += h;
        } while (x < xMax);
        return array;
    }
}