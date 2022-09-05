"use strict";

const supertest = require("supertest");
const server = require("../server.js");
const request = supertest(server.app);

describe("API server", () => {
  it("Home page works", async () => {
    const res = await request.get("/");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("Hello World");
  });

  it("Person page server", async () => {
    const res = await request.post("/person").send({
      person: { name: "Suhaib", age: 24, gender: "Male" },
    });
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual("Suhaib");
    expect(res.body.age).toEqual(29);
    expect(res.body.gender).toEqual("Male");
  });
});