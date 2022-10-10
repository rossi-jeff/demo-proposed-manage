import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("ParticipantInformationConfiguration query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("participantInformationConfigurations", () => {
    const stub = sandbox.stub(Q, "getParticipantInformationConfigurations");
    it("should call getParticipantInformationConfigurations once", async () => {
      //@ts-expect-error stubbing
      await Q.participantInformationConfigurations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("participantInformationConfiguration", () => {
    const stub = sandbox.stub(Q, "getParticipantInformationConfiguration");
    const id = "123";
    const args = { id };
    it("should call getParticipantInformationConfiguration with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.participantInformationConfiguration({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
