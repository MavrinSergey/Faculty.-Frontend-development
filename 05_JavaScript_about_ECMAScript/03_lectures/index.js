const obj1 = {
    name: "obj1",
    entry() {
        return `dfgdfd ${this.name}`
    }
}
const obj2 = {
    name: "obj2",
    __proto__: obj1,

}
console.log(obj1.entry());
console.log(obj1.entry.call(obj2));