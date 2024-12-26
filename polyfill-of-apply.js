const person = {
  firstName: "John",
  lastName: "Doe",
  address: "Noida",
};

const personDetails = function (profession, salary) {
  return `Hello👋, my name is ${this.firstName} ${this.lastName} and my working profession is ${profession} with ${salary}₹ salary. Currently living in ${this.address}.`;
};

const defaultApply = personDetails.apply(person, ["Frontend Developer", "10"]);
console.log("defaultApply:", defaultApply);

Function.prototype.customApply = function (context, argsArr) {
  if (typeof this !== "function") throw new Error(`${this} is not a function.`);
  if (!Array.isArray(argsArr))
    throw new Error(`Second argument must be an array.`);
  context.function = this;
  return context.function(...argsArr);
};

const customApply = personDetails.customApply(person, [
  "Backend Developer",
  "12",
]);
console.log("customApply:", customApply);
