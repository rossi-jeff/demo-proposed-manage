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
    number: "987-654-3210",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("number", () => {
    const result = F.getNumber(parent);
    sinon.assert.match(result, parent.number);
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
