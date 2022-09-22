import { db as adminDb } from "../services/admin/src/db";
import { db as schoolDb } from "../services/school/src/db";
import { db as activityDb } from "../services/activity/src/db";
import { School } from "../services/admin/generated/admin-db";
import {
  Activity,
  Phone,
  SchoolPhone,
} from "../services/school/generated/school-db";
import {
  Person,
  PersonPhone,
} from "../services/activity/generated/activity-db";
import { logger } from "./logger";
import { sample } from "./sample";
import { PhoneTypeEnum } from "../services/school/src/Phone/types";

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
} from "@ngneat/falso";

const phoneTypes = [
  PhoneTypeEnum.CELL,
  PhoneTypeEnum.FAX,
  PhoneTypeEnum.HOME,
  PhoneTypeEnum.OFFICE,
];

const count = {
  schools: 5,
  activities: 3,
  people: 3,
  phones: 2,
};

const clear = async () => {
  // delete childeren first due to constraints
  // activity db
  await activityDb.client.personPhone.deleteMany({});
  await activityDb.client.person.deleteMany({});
  // school db
  await schoolDb.client.schoolPhone.deleteMany({});
  await schoolDb.client.phone.deleteMany({});
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
  let phone: Phone;
  let schoolPhone: SchoolPhone;
  let personPhone: PersonPhone;
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

    for (let ph = 0; ph < count.phones; ph++) {
      data = {
        type: sample(phoneTypes) ?? PhoneTypeEnum.OFFICE,
        numnber: randPhoneNumber(),
        createdAt: now,
        updatedAt: now,
      };
      phone = await schoolDb.client.phone.create({ data });
      logger.info(`phone ${phone.id}: ${phone.numnber}`);

      data = {
        schoolId: school.id,
        phoneId: phone.id,
        createdAt: now,
        updatedAt: now,
      };
      schoolPhone = await schoolDb.client.schoolPhone.create({ data });
      logger.info(`school phone ${schoolPhone.id}`);
    } // end phone loop

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

      for (let ph = 0; ph < count.phones; ph++) {
        data = {
          type: sample(phoneTypes) ?? PhoneTypeEnum.OFFICE,
          numnber: randPhoneNumber(),
          createdAt: now,
          updatedAt: now,
        };
        phone = await schoolDb.client.phone.create({ data });
        logger.info(`phone ${phone.id}: ${phone.numnber}`);

        data = {
          personId: person.id,
          phoneId: phone.id,
          createdAt: now,
          updatedAt: now,
        };
        personPhone = await activityDb.client.personPhone.create({ data });
        logger.info(`person phone ${personPhone.id}`);
      } // end phone loop
    } // emnd people loop

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
