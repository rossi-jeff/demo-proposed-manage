import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Occurance query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("occurances", () => {
    const stub = sandbox.stub(Q, "getOccurances");
    it("should call getOccurances once", async () => {
      //@ts-expect-error stubbing
      await Q.occurances({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("occurance", () => {
    const stub = sandbox.stub(Q, "getOccurance");
    const id = "qwerty";
    const args = { id };
    it("should call getOccurance with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.occurance({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
