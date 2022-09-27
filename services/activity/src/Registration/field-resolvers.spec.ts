import * as F from "./field-resolvers";
import sinon from "sinon";
import { RegistrationType } from "./types";

describe("Registration field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: RegistrationType = {
    id: "123-456",
    activityId: "234-567",
    participantId: "345-678",
    registeredById: "456-789",
    paid: false,
    season: "Summer",
    groupId: "567-890",
    tShirtSize: "M",
    weight: 142,
    height: 62,
    comment: "foo bar biz baz",
    tryout: true,
    state: 123,
    paymentOptionsComment: "blah blah blah",
    participationStatus: "ready to go",
    paymentCodeId: "CC",
    shortSize: "L",
    equipmentJerseySize: "XL",
    equipmentPantSize: "L",
    equipmentJacketSize: "XL",
    equipmentShoeSize: "10",
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("comment", () => {
    const result = F.getComment(parent);
    sinon.assert.match(result, parent.comment);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("equipmentJacketSize", () => {
    const result = F.getEquipmentJacketSize(parent);
    sinon.assert.match(result, parent.equipmentJacketSize);
  });
  it("equipmentJerseySize", () => {
    const result = F.getEquipmentJerseySize(parent);
    sinon.assert.match(result, parent.equipmentJerseySize);
  });
  it("equipmentPantSize", () => {
    const result = F.getEquipmentPantSize(parent);
    sinon.assert.match(result, parent.equipmentPantSize);
  });
  it("equipmentShoeSize", () => {
    const result = F.getEquipmentShoeSize(parent);
    sinon.assert.match(result, parent.equipmentShoeSize);
  });
  it("groupId", () => {
    const result = F.getGroupId(parent);
    sinon.assert.match(result, parent.groupId);
  });
  it("height", () => {
    const result = F.getHeight(parent);
    sinon.assert.match(result, parent.height);
  });
  it("paid", () => {
    const result = F.getPaid(parent);
    sinon.assert.match(result, parent.paid);
  });
  it("participantId", () => {
    const result = F.getParticipantId(parent);
    sinon.assert.match(result, parent.participantId);
  });
  it("participationStatus", () => {
    const result = F.getParticipationStatus(parent);
    sinon.assert.match(result, parent.participationStatus);
  });
  it("paymentCodeId", () => {
    const result = F.getPaymentCodeId(parent);
    sinon.assert.match(result, parent.paymentCodeId);
  });
  it("paymentOptionsComment", () => {
    const result = F.getPaymentOptionsComment(parent);
    sinon.assert.match(result, parent.paymentOptionsComment);
  });
  it("registeredById", () => {
    const result = F.getRegisteredById(parent);
    sinon.assert.match(result, parent.registeredById);
  });
  it("season", () => {
    const result = F.getSeason(parent);
    sinon.assert.match(result, parent.season);
  });
  it("shortSize", () => {
    const result = F.getShortSize(parent);
    sinon.assert.match(result, parent.shortSize);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("tShirtSize", () => {
    const result = F.getTShirtSize(parent);
    sinon.assert.match(result, parent.tShirtSize);
  });
  it("tryout", () => {
    const result = F.getTryout(parent);
    sinon.assert.match(result, parent.tryout);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("weight", () => {
    const result = F.getWeight(parent);
    sinon.assert.match(result, parent.weight);
  });
});
