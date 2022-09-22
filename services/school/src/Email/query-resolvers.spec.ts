import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Email query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("emails", () => {
    const stub = sandbox.stub(Q, "getEmails");
    it("should call getEmails once", async () => {
      //@ts-expect-error stubbing
      await Q.emails({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("email", () => {
    const stub = sandbox.stub(Q, "getEmail");
    const id = "123-456";
    const args = { id };
    it("should call getEmail with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.email({}, args, {});
      sinon.assert.calledWith(stub, args);
    });
  });
});
