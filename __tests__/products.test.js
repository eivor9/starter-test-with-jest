const { getFullName, getProductsPurchased } = require("../src/products.js");

describe("getFullName()", () => {
    it("should display a full first and last name", () => {
        const input = { names: { first: "Chelsea", surname: "Hernandez" } };
        const actual = getFullName(input);
        const expected = input.names.first + " " + input.names.surname;
        expect(actual).toEqual(expected);
      });
    });

describe("getProductsPurchase()", () => {
    it("should list all products tied to contact", () => {
        const input = {purchased: [{name: "iPhone 13 mini"}, {name: "M3 iMac"}, {name: "iPad Mini 6"}, {name: "Apple Watch Series 9 45mm"}]};
        const expected = input.purchased.map(x => x.name);
        const actual = getProductsPurchased(input);
        expect(actual).toEqual(expected);
    });
    it("should acknowledge that there are 0 products purchased", () => {
        const input = {purchased: []};
        const expected = "No products purchased.";
        const actual = getProductsPurchased(input);
        expect(actual).toEqual(expected);
    });
    it("should return the name of the one and only purchased product", () => {
        const input = {purchased: [{name: "iPhone 13 mini"}]};
        const expected = input.purchased[0].name;
        const actual = getProductsPurchased(input);
        expect(actual).toEqual(expected);
    });
});