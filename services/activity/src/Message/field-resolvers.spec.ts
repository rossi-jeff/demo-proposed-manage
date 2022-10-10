import * as F from "./field-resolvers";
import { MessageType } from "./types";
import sinon from "sinon";

describe("Message field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: MessageType = {
    id: "123",
    schoolId: "456",
    activityId: "789",
    ventureId: "234",
    status: "Unread",
    message: "foo bar biz baz buz",
    groupId: "567",
    senderId: "890",
    eventId: "654",
    messageType: 123,
    superadminMessage: false,
    documentFileName: "/path/to/the/file.ext",
    documentContentType: "text/html",
    documentFileSize: 345,
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("documentContentType", () => {
    const result = F.getDocumentContentType(parent);
    sinon.assert.match(result, parent.documentContentType);
  });
  it("documentFileName", () => {
    const result = F.getDocumentFileName(parent);
    sinon.assert.match(result, parent.documentFileName);
  });
  it("documentFileSize", () => {
    const result = F.getDocumentFileSize(parent);
    sinon.assert.match(result, parent.documentFileSize);
  });
  it("eventId", () => {
    const result = F.getEventId(parent);
    sinon.assert.match(result, parent.eventId);
  });
  it("groupId", () => {
    const result = F.getGroupId(parent);
    sinon.assert.match(result, parent.groupId);
  });
  it("message", () => {
    const result = F.getMessage(parent);
    sinon.assert.match(result, parent.message);
  });
  it("messageType", () => {
    const result = F.getMessageType(parent);
    sinon.assert.match(result, parent.messageType);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("senderId", () => {
    const result = F.getSenderId(parent);
    sinon.assert.match(result, parent.senderId);
  });
  it("status", () => {
    const result = F.getStatus(parent);
    sinon.assert.match(result, parent.status);
  });
  it("superadminMessage", () => {
    const result = F.getSuperadminMessage(parent);
    sinon.assert.match(result, parent.superadminMessage);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("ventureId", () => {
    const result = F.getVentureId(parent);
    sinon.assert.match(result, parent.ventureId);
  });
});
