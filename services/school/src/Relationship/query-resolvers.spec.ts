import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Relationship query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("relationships", () => {
    const stub = sandbox.stub(Q, "getRelationships");
    it("should call getRelationships once", async () => {
      //@ts-expect-error stubbing
      await Q.relationships({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("relationship", () => {
    const stub = sandbox.stub(Q, "getRelationship");
    const id = "345";
    const args = { id };
    it("should call getRelationship with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.relationship({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
