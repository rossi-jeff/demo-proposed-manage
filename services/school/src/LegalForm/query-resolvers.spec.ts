import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("LegalForm query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("legalForms", () => {
    const stub = sandbox.stub(Q, "getLegalForms");
    it("should call getLegalForms once", async () => {
      //@ts-expect-error stubbing
      await Q.legalForms({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("legalForm", () => {
    const stub = sandbox.stub(Q, "getLegalForm");
    const id = "123-456";
    const args = { id };
    it("should call getLegalForm with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.legalForm({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
