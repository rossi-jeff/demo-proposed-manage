import * as F from "./field-resolvers";
import sinon from "sinon";
import { PersonType } from "./types";

describe("Person field resolvers", () => {
  beforeEach(() => {
    sinon.reset();
  });
  const parent: PersonType = {
    id: "id-string",
    userName: "foo@bar.com",
    passWord: "S3cr3t!",
    schoolId: "school-id",
    allowedToLogin: false,
    firstName: "John",
    lastName: "Doe",
    sex: "Male",
    birthDate: new Date(),
    highSchoolGraduationYear: "1985",
    insuranceCompany: "Insurance Co",
    insuranceAccountNumber: "12345",
    physicianName: "Dr. Strange",
    physicianPhone: "999-888-7777",
    studentId: "54321",
    schoolTransferredFrom: "some other school",
    medicalInformation: "biz baz buz",
    acceptsCOPPA: true,
    optsInToCommunications: true,
    physicalDate: new Date(),
    credit: 123,
    ethnicity: "foo bar",
    firstEnrollmentDate: new Date(),
    participationStatus: "all in",
    gpa: 3.5,
    felonyInfo: 321,
    notifications: 432,
    concussionTestDate: new Date(),
    adData: "blah blah blah",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("acceptsCOPPA", () => {
    const result = F.getAcceptsCOPPA(parent);
    sinon.assert.match(result, parent.acceptsCOPPA);
  });
  it("adData", () => {
    const result = F.getAdData(parent);
    sinon.assert.match(result, parent.adData);
  });
  it("allowedToLogin", () => {
    const result = F.getAllowedToLogin(parent);
    sinon.assert.match(result, parent.allowedToLogin);
  });
  it("birthDate", () => {
    const result = F.getBirthDate(parent);
    sinon.assert.match(result, parent.birthDate?.toString());
  });
  it("concussionTestDate", () => {
    const result = F.getConcussionTestDate(parent);
    sinon.assert.match(result, parent.concussionTestDate?.toString());
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("credit", () => {
    const result = F.getCredit(parent);
    sinon.assert.match(result, parent.credit);
  });
  it("ethnicity", () => {
    const result = F.getEthnicity(parent);
    sinon.assert.match(result, parent.ethnicity);
  });
  it("felonyInfo", () => {
    const result = F.getFelonyInfo(parent);
    sinon.assert.match(result, parent.felonyInfo);
  });
  it("firstEnrollmentDate", () => {
    const result = F.getFirstEnrollmentDate(parent);
    sinon.assert.match(result, parent.firstEnrollmentDate?.toString());
  });
  it("firstName", () => {
    const result = F.getFirstName(parent);
    sinon.assert.match(result, parent.firstName);
  });
  it("gpa", () => {
    const result = F.getGpa(parent);
    sinon.assert.match(result, parent.gpa);
  });
  it("highSchoolGraduationYear", () => {
    const result = F.getHighSchoolGraduationYear(parent);
    sinon.assert.match(result, parent.highSchoolGraduationYear);
  });
  it("insuranceAccountNumber", () => {
    const result = F.getInsuranceAccountNumber(parent);
    sinon.assert.match(result, parent.insuranceAccountNumber);
  });
  it("insuranceCompany", () => {
    const result = F.getInsuranceCompany(parent);
    sinon.assert.match(result, parent.insuranceCompany);
  });
  it("lastName", () => {
    const result = F.getLastName(parent);
    sinon.assert.match(result, parent.lastName);
  });
  it("medicalInformation", () => {
    const result = F.getMedicalInformation(parent);
    sinon.assert.match(result, parent.medicalInformation);
  });
  it("notifications", () => {
    const result = F.getNotifications(parent);
    sinon.assert.match(result, parent.notifications);
  });
  it("optsInToCommunications", () => {
    const result = F.getOptsInToCommunications(parent);
    sinon.assert.match(result, parent.optsInToCommunications);
  });
  it("participationStatus", () => {
    const result = F.getParticipationStatus(parent);
    sinon.assert.match(result, parent.participationStatus);
  });
  it("passWord", () => {
    const result = F.getPassWord(parent);
    sinon.assert.match(result, parent.passWord);
  });
  it("physicalDate", () => {
    const result = F.getPhysicalDate(parent);
    sinon.assert.match(result, parent.physicalDate?.toString());
  });
  it("physicianName", () => {
    const result = F.getPhysicianName(parent);
    sinon.assert.match(result, parent.physicianName);
  });
  it("physicianPhone", () => {
    const result = F.getPhysicianPhone(parent);
    sinon.assert.match(result, parent.physicianPhone);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("schoolTransferredFrom", () => {
    const result = F.getSchoolTransferredFrom(parent);
    sinon.assert.match(result, parent.schoolTransferredFrom);
  });
  it("sex", () => {
    const result = F.getSex(parent);
    sinon.assert.match(result, parent.sex);
  });
  it("studentId", () => {
    const result = F.getStudentId(parent);
    sinon.assert.match(result, parent.studentId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("userName", () => {
    const result = F.getUserName(parent);
    sinon.assert.match(result, parent.userName);
  });
});
