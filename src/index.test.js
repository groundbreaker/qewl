const expect = require("chai").expect;
const client = require("../test/mock-client").default;
const resources = {
  account: {
    detail: { fields: "id name" },
    list: {
      fields: "id name status"
    }
  },
  app: {
    detail: { fields: "id name" },
    list: {
      fields: "id status"
    }
  }
};
const Qewl = require("./index.js").default;

describe("Qewl", () => {
  let service;

  beforeEach(() => {
    service = new Qewl(client, resources);
  });

  it("should initialize Qewl", function() {
    expect(service).to.be.an.instanceof(Qewl);
  });
});
