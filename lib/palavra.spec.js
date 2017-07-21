"use strict"

const palavra = require("./palavra")
const expect = require("chai").expect

describe("Palavra module", () => {
    it("should export a function", () => {
        expect(palavra).to.be.a("function")
    })
    it("palavra() should return a text", () => {
        expect(palavra()).to.be.a("string")
    })
    it("palavra() should return a single word", () => {
        expect(palavra().split(" ").length).to.equal(1)
    })
    it("palavra() should return a valid word", () => {
        expect(palavra()).to.have.lengthOf.above(0)
    })
    it("palavra(NaN) should return a single word", () => {
        expect(palavra("blah").split(" ").length).to.equal(1)
    })
    it("palavra(fn) should return a single word", () => {
        expect(palavra(()=>3).split(" ").length).to.equal(1)
    })
    it("palavra(0) should return a single word", () => {
        expect(palavra(0).split(" ").length).to.equal(1)
    })
    it("palavra(-14332) should return a single word", () => {
        expect(palavra(-14332).split(" ").length).to.equal(1)
    })
    it("palavra(3) should return a text", () => {
        expect(palavra(3)).to.be.a("string")
    })
    it("palavra(3) should return 3 words", () => {
        expect(palavra(3).split(" ").length).to.equal(3)
    })
    it("palavra(3)[0] should return a valid word", () => {
        expect(palavra(3)[0].trim()).to.have.lengthOf.above(0)
    })
})
