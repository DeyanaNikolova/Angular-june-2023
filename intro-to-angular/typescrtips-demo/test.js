var isEven = false;
var num = 4;
var str = "";
var peshoUser = {
    name: "Pesho",
    age: 21,
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    return AnotherUserClass;
}());
var user2List = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 }
];
peshoUser.age = 1;
user2List.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    console.log("".concat(id, ": ").concat(firstName));
});
