import * as F from "./field-resolvers";
import sinon from "sinon";
import { InviteType } from "./types";

describe("Invite field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: InviteType = {
    id: "123-456",
    personId: "234-567",
    invitedById: "345-678",
    schoolId: "456-789",
    accepted: false,
    secret: "Su93rS3cr37!",
    createdAt: now,
    updatedAt: now,
  };
  it("accepted", () => {
    const result = F.getAccepted(parent);
    sinon.assert.match(result, parent.accepted);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("invitedById", () => {
    const result = F.getInvitedById(parent);
    sinon.assert.match(result, parent.invitedById);
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("secret", () => {
    const result = F.getSecret(parent);
    sinon.assert.match(result, parent.secret);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
