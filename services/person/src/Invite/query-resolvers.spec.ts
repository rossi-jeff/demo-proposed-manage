import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Invite query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("invites", () => {
    const stub = sandbox.stub(Q, "getInvites");
    it("should call getInvites once", async () => {
      //@ts-expect-error stubbing
      await Q.invites({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("invite", () => {
    const stub = sandbox.stub(Q, "getInvite");
    const id = "345-678";
    const args = { id };
    it("should call getInvite with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.invite({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
