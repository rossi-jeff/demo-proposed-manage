import { db as adminDb } from "../services/admin/src/db";
import { db as schoolDb } from "../services/school/src/db";
import { db as activityDb } from "../services/activity/src/db";
import { School } from "../services/admin/generated/admin-db";
import {
  Activity,
  Address,
  Email,
  SchoolAddress,
  SchoolEmail,
} from "../services/school/generated/school-db";
import {
  Person,
  PersonAddress,
  PersonEmail,
} from "../services/activity/generated/activity-db";
import { logger } from "./logger";
import { sample } from "./sample";
import { AddresTypeEnum } from "../services/school/src/Address/types";
import { EmailTypeEnum } from "../services/school/src/Email/types";

import {
  randBoolean,
  randCompanyName,
  randWord,
  randNumber,
  randLatitude,
  randLongitude,
  randSuperheroName,
  randCity,
  randAbbreviation,
  randSentence,
  randUuid,
  randCatchPhrase,
  randPastDate,
  randRecentDate,
  randPassword,
  randEmail,
  randFirstName,
  randLastName,
  randGender,
  randFutureDate,
  randFullName,
  randPhoneNumber,
  randLanguage,
  randStreetAddress,
  randState,
  randZipCode,
} from "@ngneat/falso";

const count = {
  schools: 5,
  activities: 3,
  people: 3,
  emails: 2,
};

const emailTypes = [EmailTypeEnum.BUSINESS, EmailTypeEnum.PERSONAL];

const clear = async () => {
  // delete childeren first due to constraints
  // activity db
  await activityDb.client.personAddress.deleteMany({});
  await activityDb.client.personEmail.deleteMany({});
  await activityDb.client.person.deleteMany({});
  // school db
  await schoolDb.client.schoolAddress.deleteMany({});
  await schoolDb.client.address.deleteMany({});
  await schoolDb.client.schoolEmail.deleteMany({});
  await schoolDb.client.email.deleteMany({});
  await schoolDb.client.activity.deleteMany({});
  // admin db
  await adminDb.client.school.deleteMany({});
};

const seed = async () => {
  await clear();

  let data;
  const ids: { [key: string]: string[] } = {};
  let school: School;
  let activity: Activity;
  let person: Person;
  let email: Email;
  let schoolEmail: SchoolEmail;
  let personEmail: PersonEmail;
  let address: Address;
  let schoolAddress: SchoolAddress;
  let personAddress: PersonAddress;

  const now = new Date();
  for (let s = 0; s < count.schools; s++) {
    data = {
      name: randCompanyName(),
      subDomain: randWord(),
      latitude: randLatitude().toString(),
      longitude: randLongitude().toString(),
      mascot: randSuperheroName(),
      feederTowns: randCity(),
      takingPayments: randBoolean(),
      paymentOptions: randNumber({ min: 1, max: 1000 }),
      spendingCapMax: randNumber({ min: 1, max: 1000 }),
      paymentCode: randAbbreviation(),
      smsMessaging: randBoolean(),
      notifications: randNumber({ min: 1, max: 1000 }),
      notes: randSentence(),
      features: randNumber({ min: 1, max: 1000 }),
      kind: randCatchPhrase(),
      tracked: randBoolean(),
      subMerchantId: randUuid(),
      a2kLinkSchoolId: randNumber({ min: 1, max: 1000 }),
      createdAt: now,
      updatedAt: now,
    };
    school = await adminDb.client.school.create({ data });
    logger.info(`school ${school.id}: ${school.name}`);

    for (let e = 0; e < count.emails; e++) {
      data = {
        type: sample(emailTypes) ?? EmailTypeEnum.BUSINESS,
        address: randEmail(),
        createdAt: now,
        updatedAt: now,
      };
      email = await schoolDb.client.email.create({ data });
      logger.info(`email ${email.id}: ${email.address}`);

      data = {
        schoolId: school.id,
        emailId: email.id,
        createdAt: now,
        updatedAt: now,
      };
      schoolEmail = await schoolDb.client.schoolEmail.create({ data });
      logger.info(`school email ${schoolEmail.id}`);
    } // end email loop

    data = {
      type: AddresTypeEnum.BUSINESS,
      lineOne: randStreetAddress(),
      lineTwo: "",
      city: randCity(),
      state: randState(),
      zipCode: randZipCode(),
      createdAt: now,
      updatedAt: now,
    };
    address = await schoolDb.client.address.create({ data });
    logger.info(`addess ${address.id}: ${address.lineOne}`);

    data = {
      schoolId: school.id,
      addressId: address.id,
      createdAt: now,
      updatedAt: now,
    };
    schoolAddress = await schoolDb.client.schoolAddress.create({ data });
    logger.info(`school addess: ${schoolAddress.id}`);

    ids.people = [];
    for (let p = 0; p < count.people; p++) {
      data = {
        userName: randEmail(),
        passWord: randPassword(),
        schoolId: school.id,
        allowedToLogin: randBoolean(),
        firstName: randFirstName(),
        lastName: randLastName(),
        sex: randGender(),
        birthDate: randPastDate({ years: 16 }),
        highSchoolGraduationYear: randFutureDate().getFullYear().toString(),
        insuranceCompany: randCompanyName(),
        insuranceAccountNumber: randUuid(),
        physicianName: randFullName(),
        physicianPhone: randPhoneNumber(),
        studentId: randUuid(),
        schoolTransferredFrom: randCompanyName(),
        medicalInformation: randSentence(),
        acceptsCOPPA: randBoolean(),
        optsInToCommunications: randBoolean(),
        physicalDate: randRecentDate(),
        credit: randNumber({ min: 1, max: 1000 }),
        ethnicity: randLanguage(),
        firstEnrollmentDate: randRecentDate(),
        participationStatus: randSentence(),
        gpa: randNumber({ min: 1, max: 1000 }),
        felonyInfo: randNumber({ min: 1, max: 1000 }),
        notifications: randNumber({ min: 1, max: 1000 }),
        concussionTestDate: randRecentDate(),
        adData: randSentence(),
        createdAt: now,
        updatedAt: now,
      };
      person = await activityDb.client.person.create({ data });
      ids.people.push(person.id);
      logger.info(`person ${person.id}: ${person.userName}`);

      for (let e = 0; e < count.emails; e++) {
        data = {
          type: sample(emailTypes) ?? EmailTypeEnum.PERSONAL,
          address: randEmail(),
          createdAt: now,
          updatedAt: now,
        };
        email = await schoolDb.client.email.create({ data });
        logger.info(`email ${email.id}: ${email.address}`);

        data = {
          personId: person.id,
          emailId: email.id,
          createdAt: now,
          updatedAt: now,
        };
        personEmail = await activityDb.client.personEmail.create({ data });
        logger.info(`person email ${personEmail.id}`);
      } // end email loop

      data = {
        type: AddresTypeEnum.PERSONAL,
        lineOne: randStreetAddress(),
        lineTwo: "",
        city: randCity(),
        state: randState(),
        zipCode: randZipCode(),
        createdAt: now,
        updatedAt: now,
      };
      address = await schoolDb.client.address.create({ data });
      logger.info(`addess ${address.id}: ${address.lineOne}`);

      data = {
        personId: person.id,
        addressId: address.id,
        createdAt: now,
        updatedAt: now,
      };
      personAddress = await activityDb.client.personAddress.create({ data });
      logger.info(`person address: ${personAddress.id}`);
    } // end people loop

    ids.activities = [];
    for (let a = 0; a < count.activities; a++) {
      data = {
        schoolId: school.id,
        registerable: randBoolean(),
        active: randBoolean(),
        archived: randBoolean(),
        steps: randNumber({ min: 1, max: 1000 }),
        emailFooter: randSentence(),
        termsAndConditions: randSentence(),
        kind: randCatchPhrase(),
        leadInMessage: randSentence(),
        noCut: randBoolean(),
        currentSeason: "Fall",
        athleticSeason: "Fall",
        createdAt: now,
        updatedAt: now,
      };
      activity = await schoolDb.client.activity.create({ data });
      ids.activities.push(activity.id);
      logger.info(`activity ${activity.id}: ${activity.kind}`);
    } // end activites loop
    logger.info(`person id: ${sample(ids.people)}`);
  } // end school loop
};

seed()
  .then(() => logger.info("seed complete"))
  .catch((e) => logger.error(e));
