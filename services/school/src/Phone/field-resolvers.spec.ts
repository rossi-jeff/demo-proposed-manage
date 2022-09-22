import * as F from "./field-resolvers";
import sinon from "sinon";
import { PhoneType } from "./types";

describe("Phone field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: PhoneType = {
    id: "123-456",
    type: "HOME",
    numnber: "987-654-3210",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("numnber", () => {
    const result = F.getNumnber(parent);
    sinon.assert.match(result, parent.numnber);
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
