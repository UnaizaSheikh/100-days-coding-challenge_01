var laptop = {
    make: "Hp",
    model: "ProBook",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.make, " ").concat(this.model, " ").concat(this.year, "."));
    }
};
laptop.describe();
