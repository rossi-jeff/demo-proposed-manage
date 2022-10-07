import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("LegalVideoConsent query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("legalVideoConsents", () => {
    const stub = sandbox.stub(Q, "getLegalVideoConsents");
    it("should call getLegalVideoConsents once", async () => {
      //@ts-expect-error stubbing
      await Q.legalVideoConsents({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("legalVideoConsent", () => {
    const stub = sandbox.stub(Q, "getLegalVideoConsent");
    const id = "987-654-321";
    const args = { id };
    it("should call getLegalVideoConsent with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.legalVideoConsent({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
