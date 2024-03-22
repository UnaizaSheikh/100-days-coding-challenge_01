let laptop = {
  make: "Hp",
  model: "ProBook",
  year: 2021,
  describe: function () {
    console.log(`This laptop is a ${this.make} ${this.model} ${this.year}.`);
  },
};
laptop.describe();
