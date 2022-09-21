import * as F from "./field-resolvers";
import sinon from "sinon";
import { SchoolType } from "./types";

describe("School field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: SchoolType = {
    id: "12345-6789",
    name: "School Nmae",
    subDomain: "school",
    latitude: "29.244",
    longitude: "-81.051",
    mascot: "foo bar",
    feederTowns: "daytona beach",
    takingPayments: true,
    paymentOptions: 123,
    spendingCapMax: 234,
    paymentCode: "payme",
    smsMessaging: false,
    notifications: 345,
    notes: "something important",
    features: 456,
    kind: "not often enough",
    tracked: true,
    subMerchantId: "345-678-432",
    a2kLinkSchoolId: 567,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("a2kLinkSchoolId", () => {
    const result = F.getA2kLinkSchoolId(parent);
    sinon.assert.match(result, parent.a2kLinkSchoolId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("features", () => {
    const result = F.getFeatures(parent);
    sinon.assert.match(result, parent.features);
  });
  it("feederTowns", () => {
    const result = F.getFeederTowns(parent);
    sinon.assert.match(result, parent.feederTowns);
  });
  it("kind", () => {
    const result = F.getKind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("latitude", () => {
    const result = F.getLatitude(parent);
    sinon.assert.match(result, parent.latitude);
  });
  it("longitude", () => {
    const result = F.getLongitude(parent);
    sinon.assert.match(result, parent.longitude);
  });
  it("mascot", () => {
    const result = F.getMascot(parent);
    sinon.assert.match(result, parent.mascot);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("notes", () => {
    const result = F.getNotes(parent);
    sinon.assert.match(result, parent.notes);
  });
  it("notifications", () => {
    const result = F.getNotifications(parent);
    sinon.assert.match(result, parent.notifications);
  });
  it("paymentCode", () => {
    const result = F.getPaymentCode(parent);
    sinon.assert.match(result, parent.paymentCode);
  });
  it("paymentOptions", () => {
    const result = F.getPaymentOptions(parent);
    sinon.assert.match(result, parent.paymentOptions);
  });
  it("smsMessaging", () => {
    const result = F.getSmsMessaging(parent);
    sinon.assert.match(result, parent.smsMessaging);
  });
  it("spendingCapMax", () => {
    const result = F.getSpendingCapMax(parent);
    sinon.assert.match(result, parent.spendingCapMax);
  });
  it("subDomain", () => {
    const result = F.getSubDomain(parent);
    sinon.assert.match(result, parent.subDomain);
  });
  it("subMerchantId", () => {
    const result = F.getSubMerchantId(parent);
    sinon.assert.match(result, parent.subMerchantId);
  });
  it("takingPayments", () => {
    const result = F.getTakingPayments(parent);
    sinon.assert.match(result, parent.takingPayments);
  });
  it("tracked", () => {
    const result = F.getTracked(parent);
    sinon.assert.match(result, parent.tracked);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
