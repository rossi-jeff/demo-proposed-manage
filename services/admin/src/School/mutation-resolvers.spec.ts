import * as M from "./mutation-resolvers";
import sinon from "sinon";
import { SchoolCreateInput, SchoolInput } from "../../generated/graphql";

const sandbox = sinon.createSandbox();

describe("School mutation resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("schoolCreate", () => {
    const stub = sandbox.stub(M, "createSchool");
    const input: SchoolCreateInput = {
      name: "Foo Bar Academy",
      subDomain: "foobar",
    };
    const args = { input };
    it("should call createSchool with proper args", async () => {
      //@ts-expect-error stubbing
      await M.schoolCreate({}, args, {});
      sandbox.assert.calledWith(stub, input);
    });
  });
  describe("schoolUpdate", () => {
    const stub = sandbox.stub(M, "updateSchool");
    const id = "12345";
    const updates: SchoolInput = {
      subDomain: "barfoo",
    };
    const args = { id, updates };
    it("should call updateSchool with proper args", async () => {
      //@ts-expect-error stubbing
      await M.schoolUpdate({}, args, {});
      sandbox.assert.calledWith(stub, id, updates);
    });
  });
});
