import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Phone query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("phones", () => {
    const stub = sandbox.stub(Q, "getPhones");
    it("should call getPhones once", async () => {
      //@ts-expect-error stubbing
      await Q.phones({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("phone", () => {
    const stub = sandbox.stub(Q, "getPhone");
    const id = "123-456";
    const args = { id };
    it("should call getPhone with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.phone({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
