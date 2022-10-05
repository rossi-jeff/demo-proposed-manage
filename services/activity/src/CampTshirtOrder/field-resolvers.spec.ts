import * as F from "./field-resolvers";
import { CampTshirtOrderType } from "./types";
import sinon from "sinon";

describe("CampTshirtOrder field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: CampTshirtOrderType = {
    id: "123",
    ventureId: "456",
    coachId: "789",
    schoolId: "234",
    season: "Fall",
    organizationName: "School Name",
    ventureName: "Venture Name",
    organizationColor1: "Red",
    organizationColor2: "Blue",
    coachName: "John Doe",
    coachEmail: "jdoe@example.com",
    coachPhoneNumber: "999-888-7777",
    deliveryDate: now,
    campDataSubmitted: true,
    orderDate: now,
    template: "Camp Template",
    topLineText: "foo bar",
    middleLineText: "biz baz",
    bottomLineText: "buz buz buz",
    tShirtColor: "Yellow",
    orderOptions: 123,
    shirtSizes: "XXL",
    participants: "The Team",
    tShirtQuantity: 234,
    overfillPercentage: 456,
    mascotFile: "/path/to/the/file.ext",
    createdAt: now,
    updatedAt: now,
  };
  it("bottomLineText", () => {
    const result = F.getBottomLineText(parent);
    sinon.assert.match(result, parent.bottomLineText);
  });
  it("campDataSubmitted", () => {
    const result = F.getCampDataSubmitted(parent);
    sinon.assert.match(result, parent.campDataSubmitted);
  });
  it("coachEmail", () => {
    const result = F.getCoachEmail(parent);
    sinon.assert.match(result, parent.coachEmail);
  });
  it("coachId", () => {
    const result = F.getCoachId(parent);
    sinon.assert.match(result, parent.coachId);
  });
  it("coachName", () => {
    const result = F.getCoachName(parent);
    sinon.assert.match(result, parent.coachName);
  });
  it("coachPhoneNumber", () => {
    const result = F.getCoachPhoneNumber(parent);
    sinon.assert.match(result, parent.coachPhoneNumber);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("deliveryDate", () => {
    const result = F.getDeliveryDate(parent);
    sinon.assert.match(result, parent.deliveryDate?.toString());
  });
  it("mascotFile", () => {
    const result = F.getMascotFile(parent);
    sinon.assert.match(result, parent.mascotFile);
  });
  it("middleLineText", () => {
    const result = F.getMiddleLineText(parent);
    sinon.assert.match(result, parent.middleLineText);
  });
  it("orderDate", () => {
    const result = F.getOrderDate(parent);
    sinon.assert.match(result, parent.orderDate?.toString());
  });
  it("orderOptions", () => {
    const result = F.getOrderOptions(parent);
    sinon.assert.match(result, parent.orderOptions);
  });
  it("organizationColor1", () => {
    const result = F.getOrganizationColor1(parent);
    sinon.assert.match(result, parent.organizationColor1);
  });
  it("organizationColor2", () => {
    const result = F.getOrganizationColor2(parent);
    sinon.assert.match(result, parent.organizationColor2);
  });
  it("organizationName", () => {
    const result = F.getOrganizationName(parent);
    sinon.assert.match(result, parent.organizationName);
  });
  it("overfillPercentage", () => {
    const result = F.getOverfillPercentage(parent);
    sinon.assert.match(result, parent.overfillPercentage);
  });
  it("participants", () => {
    const result = F.getParticipants(parent);
    sinon.assert.match(result, parent.participants);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("season", () => {
    const result = F.getSeason(parent);
    sinon.assert.match(result, parent.season);
  });
  it("shirtSizes", () => {
    const result = F.getShirtSizes(parent);
    sinon.assert.match(result, parent.shirtSizes);
  });
  it("tShirtColor", () => {
    const result = F.getTShirtColor(parent);
    sinon.assert.match(result, parent.tShirtColor);
  });
  it("tShirtQuantity", () => {
    const result = F.getTShirtQuantity(parent);
    sinon.assert.match(result, parent.tShirtQuantity);
  });
  it("template", () => {
    const result = F.getTemplate(parent);
    sinon.assert.match(result, parent.template);
  });
  it("topLineText", () => {
    const result = F.getTopLineText(parent);
    sinon.assert.match(result, parent.topLineText);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("ventureId", () => {
    const result = F.getVentureId(parent);
    sinon.assert.match(result, parent.ventureId);
  });
  it("ventureName", () => {
    const result = F.getVentureName(parent);
    sinon.assert.match(result, parent.ventureName);
  });
});
