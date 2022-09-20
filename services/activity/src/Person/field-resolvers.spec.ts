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
  it("allowedToLogin", () => {
    const result = F.getAllowedToLogin(parent);
    sinon.assert.match(result, parent.allowedToLogin);
  });
  it("firstName", () => {
    const result = F.getFirstName(parent);
    sinon.assert.match(result, parent.firstName);
  });
  it("lastName", () => {
    const result = F.getLastName(parent);
    sinon.assert.match(result, parent.lastName);
  });
  it("passWord", () => {
    const result = F.getPassWord(parent);
    sinon.assert.match(result, parent.passWord);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("userName", () => {
    const result = F.getUserName(parent);
    sinon.assert.match(result, parent.userName);
  });
});
