import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Ticket query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("tickets", () => {
    const stub = sandbox.stub(Q, "getTickets");
    it("should call getTickets once", async () => {
      //@ts-expect-error stubbing
      await Q.tickets({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("ticket", () => {
    const stub = sandbox.stub(Q, "getTicket");
    const id = "456-789";
    const args = { id };
    it("should call getTicket with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.ticket({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
