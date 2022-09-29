import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("SupportDocument query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("supportDocuments", () => {
    const stub = sandbox.stub(Q, "getSupportDocuments");
    it("should call getSupportDocuments once", async () => {
      //@ts-expect-error stubbing
      await Q.supportDocuments({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("supportDocument", () => {
    const stub = sandbox.stub(Q, "getSupportDocument");
    const id = "123-456";
    const args = { id };
    it("should call getSupportDocument with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.supportDocument({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
