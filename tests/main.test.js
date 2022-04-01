const expect = require('chai').expect;
const addNums = require('../src/main');

describe("addNums()",()=>{
    it("should be a function",()=>{
        expect(addNums).to.be.a('function');
    });
    it("should add two stringified numbers",()=>{
        let expected = 12;
        let actual = addNums('5','7');
        expect(actual).to.equal(expected);
    })
    it("should return error message if param types are not numbers or stringified numbers",()=>{
        let a = {};
        let b = [];
        let actual = addNums(a,b);
        let expected = 'please pass in numbers';
        expect(actual).to.equal(expected);
    })
    it("should use default params if no params are passed in",()=>{
        let actual = addNums();
        expect(actual).to.equal(0);
    })
});