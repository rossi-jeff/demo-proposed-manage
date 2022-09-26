import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Event query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("events", () => {
    const stub = sandbox.stub(Q, "getEvents");
    it("should call getEvents once", async () => {
      //@ts-expect-error stubbing
      await Q.events({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("event", () => {
    const stub = sandbox.stub(Q, "getEvent");
    const id = "123-456";
    const args = { id };
    it("should call getEvent with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.event({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
