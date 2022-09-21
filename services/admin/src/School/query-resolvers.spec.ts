import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("School query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("schools", () => {
    const stub = sandbox.stub(Q, "getSchools");
    it("should call getSchools once", async () => {
      //@ts-expect-error stubbing
      await Q.schools({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("school", () => {
    const stub = sandbox.stub(Q, "getSchool");
    const id = "123-456-789";
    const args = { id };
    it("should call getSchool with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.school({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
