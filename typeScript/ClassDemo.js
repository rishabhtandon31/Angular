var Associate = /** @class */ (function () {
    function Associate(associateId, firstName, lastName, basicSalary) {
        this.associateId = associateId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.basicSalary = basicSalary;
    }
    Associate.prototype.calculateTotalSalary = function () {
        this.hra = this.basicSalary * 10 / 100;
        this.ta = this.basicSalary * 7 / 100;
        this.da = this.basicSalary * 6 / 100;
        this.totalSalary = this.basicSalary + this.hra + this.ta + this.da;
    };
    Associate.prototype.toString = function () {
        return this.associateId + " " + this.firstName + " " + this.lastName + " " + this.basicSalary + " " + this.hra + " " + this.ta + " " + this.da + " " + this.totalSalary;
    };
    return Associate;
}());
var associatesList = new Array(3);
associatesList[0] = new Associate(101, "Rishabh", "Tandon", 50000);
associatesList[1] = new Associate(102, "Deepak", "Mittal", 60000);
associatesList[2] = new Associate(103, "Ayush", "goel", 70000);
associatesList.forEach(function (associate) {
    associate.calculateTotalSalary();
    console.log(associate.toString());
});
