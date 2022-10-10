import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("TicketRegistration query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("ticketRegistrations", () => {
    const stub = sandbox.stub(Q, "getTicketRegistrations");
    it("should call getTicketRegistrations once", async () => {
      //@ts-expect-error stubbing
      await Q.ticketRegistrations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("ticketRegistration", () => {
    const stub = sandbox.stub(Q, "getTicketRegistration");
    const id = "345";
    const args = { id };
    it("should call getTicketRegistration with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.ticketRegistration({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
