import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Person query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("people", () => {
    const stub = sandbox.stub(Q, "getPeople");
    it("should call getPeople once", () => {
      //@ts-expect-error stubbing
      Q.people({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("person", () => {
    const stub = sandbox.stub(Q, "getPerson");
    const id = "1234-5678";
    const args = { id };
    it("should call getPerson with args given", () => {
      //@ts-expect-error stubbing
      Q.person({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
