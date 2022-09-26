import { db as adminDb } from "../services/admin/src/db";
import { db as schoolDb } from "../services/school/src/db";
import { db as activityDb } from "../services/activity/src/db";
import { db as personDb } from "../services/person/src/db";
import { School } from "../services/admin/generated/admin-db";
import { Group, Event } from "../services/activity/generated/activity-db";
import {
  Activity,
  Address,
  Email,
  LegalForm,
  Person,
  PersonAddress,
  PersonEmail,
  PersonPhone,
  Phone,
  SchoolAddress,
  SchoolEmail,
  SchoolPhone,
} from "../services/school/generated/school-db";
import { EmergencyContact } from "../services/person/generated/person-db";
import { logger } from "./logger";
import { sample } from "./sample";
import { AddresTypeEnum } from "../services/school/src/Address/types";
import { EmailTypeEnum } from "../services/school/src/Email/types";
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
  randStreetAddress,
  randState,
  randZipCode,
  randFilePath,
  randSports,
  randAddress,
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
  emails: 2,
  emergencyContacts: 2,
  legalForms: 2,
  groups: 3,
  events: 2,
};

const emailTypes = [EmailTypeEnum.BUSINESS, EmailTypeEnum.PERSONAL];

const relationships = [
  "Motheer",
  "Father",
  "Sister",
  "Brother",
  "Aunt",
  "Uncle",
  "Grandmother",
  "Grandfather",
];

const clear = async () => {
  // delete childeren first due to constraints
  // activity db
  await activityDb.client.event.deleteMany({});
  await activityDb.client.group.deleteMany({});
  // school db
  await schoolDb.client.personPhone.deleteMany({});
  await schoolDb.client.personAddress.deleteMany({});
  await schoolDb.client.personEmail.deleteMany({});
  await schoolDb.client.schoolAddress.deleteMany({});
  await schoolDb.client.address.deleteMany({});
  await schoolDb.client.schoolEmail.deleteMany({});
  await schoolDb.client.email.deleteMany({});
  await schoolDb.client.schoolPhone.deleteMany({});
  await schoolDb.client.phone.deleteMany({});
  await schoolDb.client.legalForm.deleteMany({});
  await schoolDb.client.activity.deleteMany({});
  await schoolDb.client.person.deleteMany({});
  // person db
  await personDb.client.emergencyContact.deleteMany({});
  // admin db
  await adminDb.client.school.deleteMany({});
  logger.info("data cleared");
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
  let email: Email;
  let schoolEmail: SchoolEmail;
  let personEmail: PersonEmail;
  let address: Address;
  let schoolAddress: SchoolAddress;
  let personAddress: PersonAddress;
  let emergencyContact: EmergencyContact;
  let legalForm: LegalForm;
  let group: Group;
  let event: Event;

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

    for (let ph = 0; ph < count.phones; ph++) {
      data = {
        type: sample(phoneTypes) ?? PhoneTypeEnum.OFFICE,
        number: randPhoneNumber(),
        createdAt: now,
        updatedAt: now,
      };
      phone = await schoolDb.client.phone.create({ data });
      logger.info(`phone ${phone.id}: ${phone.number}`);

      data = {
        schoolId: school.id,
        phoneId: phone.id,
        createdAt: now,
        updatedAt: now,
      };
      schoolPhone = await schoolDb.client.schoolPhone.create({ data });
      logger.info(`school phone ${schoolPhone.id}`);
    } // end phone loop

    for (let l = 0; l < count.legalForms; l++) {
      data = {
        schoolId: school.id,
        name: randCatchPhrase(),
        checkboxText: randSentence(),
        emailToChild: randBoolean(),
        file: randFilePath(),
        requireStudentSignOff: randBoolean(),
        state: randNumber({ min: 1, max: 1000 }),
        createdAt: now,
        updatedAt: now,
      };
      legalForm = await schoolDb.client.legalForm.create({ data });
      logger.info(`legal form ${legalForm.id}: ${legalForm.name}`);
    } // end legal form loop

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
      person = await schoolDb.client.person.create({ data });
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
        personEmail = await schoolDb.client.personEmail.create({ data });
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
      personAddress = await schoolDb.client.personAddress.create({ data });
      logger.info(`person address: ${personAddress.id}`);

      for (let ph = 0; ph < count.phones; ph++) {
        data = {
          type: sample(phoneTypes) ?? PhoneTypeEnum.OFFICE,
          number: randPhoneNumber(),
          createdAt: now,
          updatedAt: now,
        };
        phone = await schoolDb.client.phone.create({ data });
        logger.info(`phone ${phone.id}: ${phone.number}`);

        data = {
          personId: person.id,
          phoneId: phone.id,
          createdAt: now,
          updatedAt: now,
        };
        personPhone = await schoolDb.client.personPhone.create({ data });
        logger.info(`person phone ${personPhone.id}`);
      } // end phone loop

      for (let e = 0; e < count.emergencyContacts; e++) {
        data = {
          personId: person.id,
          firstName: randFirstName(),
          lastName: randLastName(),
          phoneNumber: randPhoneNumber(),
          relationship: sample(relationships),
          createdAt: now,
          updatedAt: now,
        };
        emergencyContact = await personDb.client.emergencyContact.create({
          data,
        });
        logger.info(
          `emergency contact ${emergencyContact.id}: ${emergencyContact.phoneNumber}`
        );
      } // end emergency contact loop
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

      for (let g = 0; g < count.groups; g++) {
        data = {
          activityId: activity.id,
          name: randCatchPhrase(),
          level: randNumber({ min: 1, max: 1000 }).toString(),
          gender: randGender(),
          a2kSiteschoolsportId: randNumber({ min: 1, max: 1000 }),
          sportName: randSports(),
          rosterwebserviceAccess: randBoolean(),
          state: randNumber({ min: 1, max: 1000 }),
          createdAt: now,
          updatedAt: now,
        };
        group = await activityDb.client.group.create({ data });
        logger.info(`group ${group.id}: ${group.name}`);
      } // end group loop

      for (let e = 0; e < count.events; e++) {
        data = {
          activityId: activity.id,
          name: randCatchPhrase(),
          description: randSentence(),
          registerable: randBoolean(),
          director: randFullName(),
          startTime: randFutureDate(),
          endTime: randFutureDate(),
          studentOnly: randBoolean(),
          location: randStreetAddress(),
          registrationStart: randFutureDate(),
          registrationEnd: randFutureDate(),
          cancelled: randBoolean(),
          state: randNumber({ min: 1, max: 1000 }),
          eventDate: randFutureDate(),
          maxTicketCapacity: randNumber({ min: 1, max: 1000 }),
          createdAt: now,
          updatedAt: now,
        };
        event = await activityDb.client.event.create({ data });
        logger.info(`event ${event.id}: ${event.name}`);
      } // end events loop
    } // end activites loop
  } // end school loop
};

seed()
  .then(() => logger.info("seed complete"))
  .catch((e) => logger.error(e));

// clear().then(() => logger.info('data cleared'))
