import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Consent query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("consents", () => {
    const stub = sandbox.stub(Q, "getConsents");
    it("should call getConsents once", async () => {
      //@ts-expect-error stubbing
      await Q.consents({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("consent", () => {
    const stub = sandbox.stub(Q, "getConsent");
    const id = "abc-def";
    const args = { id };
    it("should call getConsent with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.consent({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
