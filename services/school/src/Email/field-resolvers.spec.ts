import * as F from "./field-resolvers";
import sinon from "sinon";
import { EmailType } from "./types";

describe("Email field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: EmailType = {
    id: "123-456",
    type: "PERSONAL",
    address: "foo@bar.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("address", () => {
    const result = F.getAddress(parent);
    sinon.assert.match(result, parent.address);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("type", () => {
    const result = F.getType(parent);
    sinon.assert.match(result, parent.type);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
