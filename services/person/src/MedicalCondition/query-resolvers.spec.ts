import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("MedicalCondition query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("medicalConditions", () => {
    const stub = sandbox.stub(Q, "getMedicalConditions");
    it("should call getMedicalConditions once", async () => {
      //@ts-expect-error stubbing
      await Q.medicalConditions({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("medicalCondition", () => {
    const stub = sandbox.stub(Q, "getMedicalCondition");
    const id = "234=567";
    const args = { id };
    it("should call getMedicalCondition with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.medicalCondition({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
