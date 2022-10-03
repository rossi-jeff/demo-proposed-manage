import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("MedicalForm query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("medicalForms", () => {
    const stub = sandbox.stub(Q, "getMedicalForms");
    it("should call geMedicalForms once", async () => {
      //@ts-expect-error stubbing
      await Q.medicalForms({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("medicalForm", () => {
    const stub = sandbox.stub(Q, "getMedicalForm");
    const id = "456";
    const args = { id };
    it("should call getMedicalForm with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.medicalForm({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
