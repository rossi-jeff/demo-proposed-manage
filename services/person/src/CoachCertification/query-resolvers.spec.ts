import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("CoachCertification query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("coachCertifications", () => {
    const stub = sandbox.stub(Q, "getCoachCertifications");
    it("schould call getCoachCertifications once", async () => {
      //@ts-expect-error stubbing
      await Q.coachCertifications({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("coachCertification", () => {
    const stub = sandbox.stub(Q, "getCoachCertification");
    const id = "456";
    const args = { id };
    it("should call getCoachCertification with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.coachCertification({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
