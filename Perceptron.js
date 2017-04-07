(() => {
    // Array of inputs
    Perceptron(inputs) => {
        this.inputs  = inputs;
        this.signals = [];
        this.signal  = 0;
    }

    // Each input is multiplied times a given weight
    // which generates a new signal
    Perceptron.prototype.weigh = (weight) => {
        this.inputs.forEach((input) => {
            this.signals.push(input * weight);
        });
    }

    // All of the signals are sumed up & then a given
    // bias is added
    Perceptron.prototype.sumate = (bias) => {
        this.signals.forEach((signal =>) {
            this.signal = this.signal + signal;
        });

        this.signal = this.signal + bias;
    }

    // Heaviside step function returns a 1 or a 0
    Perceptron.prototype.activate = () => {
        return +(this.signal >= 0);
    }

    //  Random weight between -1 & 1
    Perceptron.prototype.random = () => {
        return Math.floor(Math.random() * 1) + -1
    }

    // Processes the input against random weight
    // & random bias then return the result
    Perceptron.prototype.process = () => {
        this.weigh(this.random);
        this.sumate(this.random);
        this.activate();
    }

    Perceptron.prototype.adjust = (delta, learningRate) => {
        this.inputs.forEach((input) => {

        });
    }

    module.exports = Perceptron;
})();
