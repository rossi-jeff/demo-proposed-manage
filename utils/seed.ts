import { db as adminDb } from "../services/admin/src/db";
import { db as schoolDb } from "../services/school/src/db";
import { db as activityDb } from "../services/activity/src/db";
import { db as personDb } from "../services/person/src/db";
import {
  Role,
  School,
  SupportDocument,
} from "../services/admin/generated/admin-db";
import {
  AwardAssignment,
  CampShortOrder,
  CampTshirtOrder,
  Consent,
  Event,
  FuelMyClubActivity,
  FuelMyClubFundraiser,
  FuelMyClubRegistration,
  Group,
  GroupAward,
  GroupAwardAssignment,
  GroupRegistration,
  LineItem,
  Message,
  Occurance,
  Record,
  RecordAssignment,
  Registration,
  Roster,
  Ticket,
  Venture,
} from "../services/activity/generated/activity-db";
import {
  Activity,
  ActivityFee,
  Address,
  Award,
  Color,
  CustomDiscount,
  CustomQuestion,
  Email,
  FeatureForSeason,
  Fee,
  FuelMyClubOrganization,
  LegalForm,
  LegalVideo,
  MedicalForm,
  PaymentCode,
  ParticipantInformationConfiguration,
  Person,
  PersonAddress,
  PersonEmail,
  PersonPhone,
  Phone,
  Relationship,
  SchoolAddress,
  SchoolEmail,
  SchoolFee,
  SchoolPhone,
} from "../services/school/generated/school-db";
import {
  Affiliation,
  AlergicCondition,
  CoachCertification,
  CustomAnswer,
  DirectingRole,
  EmergencyContact,
  Invite,
  Invoice,
  InvoiceTransaction,
  LegalVideoConsent,
  MedicalCondition,
  MessagePerson,
} from "../services/person/generated/person-db";
import { logger } from "./logger";
import { sample } from "./sample";
import { AddresTypeEnum } from "../services/school/src/Address/types";
import { EmailTypeEnum } from "../services/school/src/Email/types";
import { PhoneTypeEnum } from "../services/school/src/Phone/types";
import { FeeTypeEnum } from "../services/school/src/Fee/types";

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
  randColor,
  randProductAdjective,
  randVerb,
} from "@ngneat/falso";

const phoneTypes = [
  PhoneTypeEnum.CELL,
  PhoneTypeEnum.FAX,
  PhoneTypeEnum.HOME,
  PhoneTypeEnum.OFFICE,
];

const count = {
  activities: 3,
  affiliations: 3,
  alergies: 2,
  awards: 3,
  awardAssignments: 2,
  campTShirts: 2,
  coachCertifications: 3,
  colors: 3,
  consents: 2,
  customAnswers: 2,
  customDiscounts: 2,
  customQuestions: 3,
  docs: 3,
  emails: 2,
  emergencyContacts: 2,
  events: 2,
  features: 3,
  fees: 3,
  fundraisers: 3,
  groups: 3,
  groupAwards: 3,
  groupRegistrations: 2,
  invites: 2,
  invoices: 2,
  legalForms: 2,
  legalVideos: 3,
  legalVideoConsents: 2,
  medicalConditions: 2,
  medicalForms: 3,
  messages: 3,
  messageRecipients: 2,
  occurances: 2,
  paymentCodes: 3,
  people: 5,
  phones: 2,
  records: 3,
  recordAssignments: 2,
  registrations: 5,
  relationships: 3,
  roles: 3,
  rosters: 2,
  schools: 5,
  tickets: 3,
  ventures: 2,
};

const emailTypes = [EmailTypeEnum.BUSINESS, EmailTypeEnum.PERSONAL];

const feeTypes = [FeeTypeEnum.FLAT, FeeTypeEnum.PERCENTAGE];

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
const seasons = ["Winter", "Spring", "Summer", "Fall"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const clear = async () => {
  // delete childeren first due to constraints
  // activity db
  await activityDb.client.occurance.deleteMany({});
  await activityDb.client.message.deleteMany({});
  await activityDb.client.recordAssignment.deleteMany({});
  await activityDb.client.record.deleteMany({});
  await activityDb.client.fuelMyClubFundraiser.deleteMany({});
  await activityDb.client.fuelMyClubActivity.deleteMany({});
  await activityDb.client.fuelMyClubRegistration.deleteMany({});
  await activityDb.client.groupAwardAssignment.deleteMany({});
  await activityDb.client.groupAward.deleteMany({});
  await activityDb.client.campShortOrder.deleteMany({});
  await activityDb.client.campTshirtOrder.deleteMany({});
  await activityDb.client.awardAssignment.deleteMany({});
  await activityDb.client.lineItem.deleteMany({});
  await activityDb.client.consent.deleteMany({});
  await activityDb.client.ticket.deleteMany({});
  await activityDb.client.groupRegistration.deleteMany({});
  await activityDb.client.roster.deleteMany({});
  await activityDb.client.registration.deleteMany({});
  await activityDb.client.venture.deleteMany({});
  await activityDb.client.event.deleteMany({});
  await activityDb.client.group.deleteMany({});
  // school db
  await schoolDb.client.relationship.deleteMany({});
  await schoolDb.client.participantInformationConfiguration.deleteMany({});
  await schoolDb.client.legalVideo.deleteMany({});
  await schoolDb.client.fuelMyClubOrganization.deleteMany({});
  await schoolDb.client.featureForSeason.deleteMany({});
  await schoolDb.client.customQuestion.deleteMany({});
  await schoolDb.client.customDiscount.deleteMany({});
  await schoolDb.client.medicalForm.deleteMany({});
  await schoolDb.client.award.deleteMany({});
  await schoolDb.client.paymentCode.deleteMany({});
  await schoolDb.client.activityFee.deleteMany({});
  await schoolDb.client.schoolFee.deleteMany({});
  await schoolDb.client.fee.deleteMany({});
  await schoolDb.client.color.deleteMany({});
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
  await personDb.client.messagePerson.deleteMany({});
  await personDb.client.legalVideoConsent.deleteMany({});
  await personDb.client.customAnswer.deleteMany({});
  await personDb.client.directingRole.deleteMany({});
  await personDb.client.coachCertification.deleteMany({});
  await personDb.client.invoice.deleteMany;
  await personDb.client.invoiceTransaction.deleteMany;
  await personDb.client.affiliation.deleteMany({});
  await personDb.client.medicalCondition.deleteMany({});
  await personDb.client.invite.deleteMany({});
  await personDb.client.alergicCondition.deleteMany({});
  await personDb.client.emergencyContact.deleteMany({});
  // admin db
  await adminDb.client.supportDocument.deleteMany({});
  await adminDb.client.role.deleteMany({});
  await adminDb.client.school.deleteMany({});
  logger.info("data cleared");
};

const seed = async () => {
  await clear();

  let data;
  const ids: { [key: string]: string[] } = {};

  let activity: Activity;
  let activityFee: ActivityFee;
  let address: Address;
  let affiliation: Affiliation;
  let alergy: AlergicCondition;
  let award: Award;
  let awardAssignment: AwardAssignment;
  let campShorts: CampShortOrder;
  let campTShirt: CampTshirtOrder;
  let coachCertification: CoachCertification;
  let color: Color;
  let consent: Consent;
  let customAnswer: CustomAnswer;
  let customDiscount: CustomDiscount;
  let customQuestion: CustomQuestion;
  let directingRole: DirectingRole;
  let doc: SupportDocument;
  let email: Email;
  let emergencyContact: EmergencyContact;
  let event: Event;
  let feature: FeatureForSeason;
  let fee: Fee;
  let fuelActivity: FuelMyClubActivity;
  let fuelFundraiser: FuelMyClubFundraiser;
  let fuelOrganization: FuelMyClubOrganization;
  let fuelRegistration: FuelMyClubRegistration;
  let group: Group;
  let groupAward: GroupAward;
  let groupAwardAssignment: GroupAwardAssignment;
  let groupRegistration: GroupRegistration;
  let invite: Invite;
  let invoice: Invoice;
  let invoiceTransaction: InvoiceTransaction;
  let legalForm: LegalForm;
  let legalVideo: LegalVideo;
  let legalVideoConsent: LegalVideoConsent;
  let lineItem: LineItem;
  let occurance: Occurance;
  let medical: MedicalCondition;
  let medicalForm: MedicalForm;
  let message: Message;
  let messagePerson: MessagePerson;
  let paymentCode: PaymentCode;
  let person: Person;
  let personAddress: PersonAddress;
  let personEmail: PersonEmail;
  let personPhone: PersonPhone;
  let phone: Phone;
  let piConfig: ParticipantInformationConfiguration;
  let record: Record;
  let recordAssignment: RecordAssignment;
  let registration: Registration;
  let relationship: Relationship;
  let role: Role;
  let roster: Roster;
  let school: School;
  let schoolAddress: SchoolAddress;
  let schoolEmail: SchoolEmail;
  let schoolFee: SchoolFee;
  let schoolPhone: SchoolPhone;
  let ticket: Ticket;
  let venture: Venture;

  const now = new Date();

  for (let d = 0; d < count.docs; d++) {
    data = {
      name: randCatchPhrase(),
      documentText: randSentence(),
      sectionHeader: randSentence(),
      createdAt: now,
      updatedAt: now,
    };
    doc = await adminDb.client.supportDocument.create({ data });
    logger.info(`document ${doc.id}`);
  } // end support docunents loop

  for (let r = 0; r < count.roles; r++) {
    data = {
      name: randColor(),
      isAdmin: randBoolean(),
      createdAt: now,
      updatedAt: now,
    };
    role = await adminDb.client.role.create({ data });
    logger.info(`role ${role.id}: ${role.name}`);
  } // end roles loop

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

    data = {
      schoolId: school.id,
      data: randSentence(),
      fmcOrganization: randCompanyName(),
      fmcFundraiser: randCatchPhrase(),
      fmcParticipant: randFullName(),
      salesLink: randUuid(),
      createdAt: now,
      updatedAt: now,
    };
    fuelOrganization = await schoolDb.client.fuelMyClubOrganization.create({
      data,
    });
    logger.info(`fuel organization ${fuelOrganization.id}`);

    for (let f = 0; f < count.features; f++) {
      data = {
        schoolId: school.id,
        season: sample(seasons),
        feature: randCatchPhrase(),
        createdAt: now,
        updatedAt: now,
      };
      feature = await schoolDb.client.featureForSeason.create({ data });
      logger.info(`feature ${feature.id}: ${feature.season}`);
    } // end features loop

    for (let c = 0; c < count.customQuestions; c++) {
      data = {
        schoolId: school.id,
        state: randState(),
        question: randCatchPhrase(),
        questionType: randCatchPhrase(),
        questionOptions: randCatchPhrase(),
        active: randBoolean(),
        required: randBoolean(),
        dependentOn: randNumber({ min: 1, max: 1000 }),
        dependentAnswer: randCatchPhrase(),
        sortOrder: randNumber({ min: 1, max: 1000 }),
        activityType: randSports(),
        createdAt: now,
        updatedAt: now,
      };
      customQuestion = await schoolDb.client.customQuestion.create({ data });
      logger.info(`custom question ${customQuestion.id}`);
    } // end custom questions loop

    ids.awards = [];
    for (let a = 0; a < count.awards; a++) {
      data = {
        schoolId: school.id,
        name: randCatchPhrase(),
        position: randNumber({ min: 1, max: 1000 }),
        active: randBoolean(),
        createdAt: now,
        updatedAt: now,
      };
      award = await schoolDb.client.award.create({ data });
      ids.awards.push(award.id);
      logger.info(`award ${award.id}: ${award.name}`);
    } // end awards loop

    for (let m = 0; m < count.medicalForms; m++) {
      data = {
        schoolId: school.id,
        name: randCatchPhrase(),
        file: randFilePath(),
        freshmanOnly: randBoolean(),
        createdAt: now,
        updatedAt: now,
      };
      medicalForm = await schoolDb.client.medicalForm.create({ data });
      logger.info(`medical form ${medicalForm.id}: ${medicalForm.file}`);
    } // end medical forms loop

    for (let p = 0; p < count.paymentCodes; p++) {
      data = {
        schoolId: school.id,
        name: randCatchPhrase(),
        code: randAbbreviation(),
        active: randBoolean(),
        createdAt: now,
        updatedAt: now,
      };
      paymentCode = await schoolDb.client.paymentCode.create({ data });
      logger.info(`payment code ${paymentCode.id}: ${paymentCode.code}`);
    } // end payment codes loop

    for (let c = 0; c < count.colors; c++) {
      data = {
        schoolId: school.id,
        name: randColor(),
        createdAt: now,
        updatedAt: now,
      };
      color = await schoolDb.client.color.create({ data });
      logger.info(`color ${color.id}: ${color.name}`);
    } // end colors loop

    for (let f = 0; f < count.fees; f++) {
      data = {
        name: randWord(),
        type: sample(feeTypes) ?? FeeTypeEnum.FLAT,
        amount: randNumber({ min: 1, max: 100 }),
        createdAt: now,
        updatedAt: now,
      };
      fee = await schoolDb.client.fee.create({ data });
      logger.info(`fee ${fee.id}: ${fee.amount}`);

      data = {
        schoolId: school.id,
        feeId: fee.id,
        createdAt: now,
        updatedAt: now,
      };
      schoolFee = await schoolDb.client.schoolFee.create({ data });
      logger.info(`school fee ${schoolFee.id}`);
    } // end fees loop

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

    ids.legalForms = [];
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
      ids.legalForms.push(legalForm.id);
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

      for (let a = 0; a < count.alergies; a++) {
        data = {
          personId: person.id,
          allergyCondition: randCatchPhrase(),
          severity: randProductAdjective(),
          reaction: randVerb(),
          createdAt: now,
          updatedAt: now,
        };
        alergy = await personDb.client.alergicCondition.create({ data });
        logger.info(
          `alergic condition ${alergy.id}: ${alergy.allergyCondition}`
        );
      } // end alergic conditions loop

      for (let m = 0; m < count.medicalConditions; m++) {
        data = {
          personId: person.id,
          name: randCatchPhrase(),
          physician: randFullName(),
          dateOfDiagnosis: randRecentDate(),
          emergencyPlan: randSentence(),
          createdAt: now,
          updatedAt: now,
        };
        medical = await personDb.client.medicalCondition.create({ data });
        logger.info(`medical condition ${medical.id}: ${medical.name}`);
      } // end medical conditions loop

      for (let i = 0; i < count.invoices; i++) {
        data = {
          personId: person.id,
          credit: randNumber({ min: 1, max: 1000 }),
          createdAt: now,
          updatedAt: now,
        };
        invoice = await personDb.client.invoice.create({ data });
        logger.info(`invoice ${invoice.id}: ${invoice.credit}`);

        data = {
          remoteId: randUuid(),
          status: randWord(),
          invoiceId: invoice.id,
          paymentType: randAbbreviation(),
          adminFlag: randBoolean(),
          problemStatusAt: now,
          details: randSentence(),
          createdAt: now,
          updatedAt: now,
        };
        invoiceTransaction = await personDb.client.invoiceTransaction.create({
          data,
        });
        logger.info(`invoice transaction ${invoiceTransaction.id}`);

        await personDb.client.invoice.update({
          where: { id: invoice.id },
          data: { invoiceTransactionId: invoiceTransaction.id },
        });
      }
    } // end people loop

    for (let r = 0; r < count.relationships; r++) {
      data = {
        subjectId: sample(ids.people),
        receiverId: sample(ids.people),
        relationshipType: sample(relationships),
        createdAt: now,
        updatedAt: now,
      };
      relationship = await schoolDb.client.relationship.create({ data });
      logger.info(`relationship ${relationship.id}`);
    } // end relationships loop

    for (let lv = 0; lv < count.legalVideos; lv++) {
      data = {
        schoolId: school.id,
        name: randCatchPhrase(),
        checkboxText: randSentence(),
        remoteId: randUuid(),
        requireStudentSignOff: randBoolean(),
        createdAt: now,
        updatedAt: now,
      };
      legalVideo = await schoolDb.client.legalVideo.create({ data });
      logger.info(`legal video ${legalVideo.id}`);

      for (let lvc = 0; lvc < count.legalVideoConsents; lvc++) {
        data = {
          legalVideoId: legalVideo.id,
          personId: sample(ids.people),
          season: sample(seasons),
          createdAt: now,
          updatedAt: now,
        };
        legalVideoConsent = await personDb.client.legalVideoConsent.create({
          data,
        });
        logger.info(`legal video consent ${legalVideoConsent.id}`);
      } // end legal video consent loop
    } // end legal videos loop

    for (let c = 0; c < count.customQuestions; c++) {
      data = {
        schoolId: school.id,
        state: randState(),
        question: randCatchPhrase(),
        questionType: randCatchPhrase(),
        questionOptions: randCatchPhrase(),
        active: randBoolean(),
        required: randBoolean(),
        dependentOn: randNumber({ min: 1, max: 1000 }),
        dependentAnswer: randCatchPhrase(),
        sortOrder: randNumber({ min: 1, max: 1000 }),
        activityType: randSports(),
        createdAt: now,
        updatedAt: now,
      };
      customQuestion = await schoolDb.client.customQuestion.create({ data });
      logger.info(`custom question ${customQuestion.id}`);

      for (let ca = 0; ca < count.customAnswers; ca++) {
        data = {
          personId: sample(ids.people) ?? "",
          questionId: customQuestion.id,
          answer: randCatchPhrase(),
          createdAt: now,
          updatedAt: now,
        };
        customAnswer = await personDb.client.customAnswer.create({ data });
        logger.info(`custom answer ${customAnswer.id}`);
      } // end custom answers loop
    } // end custom questions loop

    for (let c = 0; c < count.coachCertifications; c++) {
      data = {
        personId: sample(ids.people) ?? "",
        value: randWord(),
        state: randState(),
        code: randAbbreviation(),
        createdAt: now,
        updatedAt: now,
      };
      coachCertification = await personDb.client.coachCertification.create({
        data,
      });
      logger.info(
        `coach certification ${coachCertification.id}: ${coachCertification.code}`
      );
    } // end coach certifications loop

    for (let a = 0; a < count.affiliations; a++) {
      data = {
        schoolId: school.id,
        personId: sample(ids.people) ?? "",
        affiliationType: randCatchPhrase(),
        createdAt: now,
        updatedAt: now,
      };
      affiliation = await personDb.client.affiliation.create({ data });
      logger.info(`affiliation ${affiliation.id}`);
    } // end affiliations loop

    for (let i = 0; i < count.invites; i++) {
      data = {
        schoolId: school.id,
        personId: sample(ids.people),
        invitedById: sample(ids.people),
        accepted: randBoolean(),
        secret: randUuid(),
        createdAt: now,
        updatedAt: now,
      };
      invite = await personDb.client.invite.create({ data });
      logger.info(`invite ${invite.id}`);
    } // end invites loop

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

      data = {
        activityId: activity.id,
        externalFmcOrganizationId: randUuid(),
        createdAt: now,
        updatedAt: now,
      };
      fuelActivity = await activityDb.client.fuelMyClubActivity.create({
        data,
      });
      logger.info(`fuel activity ${fuelActivity.id}`);
      for (let ff = 0; ff < count.fundraisers; ff++) {
        data = {
          fuelMyClubActivityId: fuelActivity.id,
          season: sample(seasons),
          externalFmcFundraiserId: randUuid(),
          contactPersonId: sample(ids.people),
          config: randNumber({ min: 1, max: 1000 }),
          leadInMessage: randSentence(),
          createdAt: now,
          updatedAt: now,
        };
        fuelFundraiser = await activityDb.client.fuelMyClubFundraiser.create({
          data,
        });
        logger.info(`fuel fundraiser ${fuelFundraiser.id}`);
      } // end fundraisers loop

      data = {
        schoolId: school.id,
        activityId: activity.id,
        key: randWord(),
        visible: randBoolean(),
        required: randBoolean(),
        activityKind: randSports(),
        createdAt: now,
        updatedAt: now,
      };
      piConfig =
        await schoolDb.client.participantInformationConfiguration.create({
          data,
        });
      logger.info(`pi config ${piConfig.id}`);

      for (let c = 0; c < count.customDiscounts; c++) {
        data = {
          activityId: activity.id,
          schoolId: school.id,
          kind: randCatchPhrase(),
          condition: randNumber({ min: 1, max: 1000 }),
          active: randBoolean(),
          discountedFee: randNumber({ min: 1, max: 1000 }),
          secondaryCondition: randSentence(),
          createdAt: now,
          updatedAt: now,
        };
        customDiscount = await schoolDb.client.customDiscount.create({ data });
        logger.info(
          `custom discount ${customDiscount.id}: ${customDiscount.discountedFee}`
        );
      } // end custom discounts loop

      ids.groups = [];
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
        ids.groups.push(group.id);
        logger.info(`group ${group.id}: ${group.name}`);

        ids.records = [];
        for (let r = 0; r < count.records; r++) {
          data = {
            groupId: group.id,
            sportCode: randAbbreviation(),
            title: randCatchPhrase(),
            recordCode: randAbbreviation(),
            unit: randWord(),
            kind: randWord(),
            createdAt: now,
            updatedAt: now,
          };
          record = await activityDb.client.record.create({ data });
          ids.records.push(record.id);
          logger.info(`record ${record.id}`);
        } // end records loop

        ids.groupAwards = [];
        for (let ga = 0; ga < count.groupAwards; ga++) {
          data = {
            groupId: group.id,
            name: randCatchPhrase(),
            state: randNumber({ min: 1, max: 1000 }),
            createdAt: now,
            updatedAt: now,
          };
          groupAward = await activityDb.client.groupAward.create({ data });
          ids.groupAwards.push(groupAward.id);
          logger.info(`group award ${groupAward.id}: ${groupAward.name}`);
        } // end group awards loop

        ids.registrations = [];
        for (let r = 0; r < count.registrations; r++) {
          data = {
            activityId: activity.id,
            participantId: sample(ids.people),
            registeredById: sample(ids.people),
            paid: randBoolean(),
            season: sample(seasons),
            groupId: group.id,
            tShirtSize: sample(sizes),
            weight: randNumber({ min: 1, max: 200 }),
            height: randNumber({ min: 1, max: 200 }),
            comment: randSentence(),
            tryout: randBoolean(),
            state: randNumber({ min: 1, max: 1000 }),
            paymentOptionsComment: randSentence(),
            participationStatus: randWord(),
            paymentCodeId: randAbbreviation(),
            shortSize: sample(sizes),
            equipmentJerseySize: sample(sizes),
            equipmentPantSize: sample(sizes),
            equipmentJacketSize: sample(sizes),
            equipmentShoeSize: randNumber({ min: 6, max: 15 }).toString(),
            createdAt: now,
            updatedAt: now,
          };
          registration = await activityDb.client.registration.create({ data });
          ids.registrations.push(registration.id);
          logger.info(`registration ${registration.id}`);

          data = {
            registrationId: registration.id,
            data: randSentence(),
            createdAt: now,
            updatedAt: now,
          };
          fuelRegistration =
            await activityDb.client.fuelMyClubRegistration.create({ data });
          logger.info(`fuel registration ${fuelRegistration.id}`);

          for (let c = 0; c < count.consents; c++) {
            data = {
              legalFormId: sample(ids.legalForms) ?? "",
              registrationId: registration.id,
              accepted: randBoolean(),
              checkboxText: randCatchPhrase(),
              sha1: randUuid(),
              createdAt: now,
              updatedAt: now,
            };
            consent = await activityDb.client.consent.create({ data });
            logger.info(`consent ${consent.id}: ${consent.checkboxText}`);
          } // end consents loop
        } // end registrations loop

        for (let r = 0; r < count.rosters; r++) {
          data = {
            groupId: group.id,
            season: sample(seasons),
            final: randBoolean(),
            createdAt: now,
            updatedAt: now,
          };
          roster = await activityDb.client.roster.create({ data });
          logger.info(`roster ${roster.id}: ${roster.season}`);

          for (let gr = 0; gr < count.groupRegistrations; gr++) {
            data = {
              groupId: group.id,
              rosterId: roster.id,
              registrationId: sample(ids.registrations),
              finalizeDate: randRecentDate(),
              jerseyNumber: randNumber({ min: 0, max: 100 }).toString(),
              position: randWord(),
              state: randNumber({ min: 1, max: 1000 }),
              createdAt: now,
              updatedAt: now,
            };
            groupRegistration =
              await activityDb.client.groupRegistration.create({ data });
            logger.info(`group registration ${groupRegistration.id}`);

            data = {
              recipientId: groupRegistration.id,
              awardId: sample(ids.groupAwards) ?? "",
              state: randNumber({ min: 1, max: 1000 }),
              createdAt: now,
              updatedAt: now,
            };
            groupAwardAssignment =
              await activityDb.client.groupAwardAssignment.create({ data });
            logger.info(`group award assignment ${groupAwardAssignment.id}`);

            for (let aa = 0; aa < count.awardAssignments; aa++) {
              data = {
                recipientId: groupRegistration.id,
                awardId: sample(ids.awards) ?? "",
                state: randNumber({ min: 1, max: 1000 }),
                createdAt: now,
                updatedAt: now,
              };
              awardAssignment = await activityDb.client.awardAssignment.create({
                data,
              });
              logger.info(`award assignment ${awardAssignment.id}`);
            } // end award assignments loop

            for (let ra = 0; ra < count.recordAssignments; ra++) {
              data = {
                recipientId: groupRegistration.id,
                rosterId: roster.id,
                recordId: sample(ids.records),
                recordSetDate: now,
                result: randNumber({ min: 1, max: 1000 }),
                state: randNumber({ min: 1, max: 1000 }),
                bannerYear: now.getFullYear().toString(),
                createdAt: now,
                updatedAt: now,
              };
              recordAssignment =
                await activityDb.client.recordAssignment.create({ data });
              logger.info(`record assignment ${recordAssignment.id}`);
            } // end record assignments loop
          } // end group registrations loop
        } // end rosters loop
      } // end group loop

      ids.ventures = [];
      for (let v = 0; v < count.ventures; v++) {
        data = {
          activityId: activity.id,
          name: randCatchPhrase(),
          description: randSentence(),
          type: randWord(),
          gender: randGender(),
          grade: randWord(),
          basePrice: randNumber({ min: 1, max: 1000 }),
          nonDistrictBasePrice: randNumber({ min: 1, max: 1000 }),
          registrationStart: randFutureDate(),
          registrationEnd: randFutureDate(),
          director: randFullName(),
          directorBio: randSentence(),
          registerable: randBoolean(),
          maxNumberOfParticipants: randNumber({ min: 1, max: 1000 }),
          location: randStreetAddress(),
          cancelled: randBoolean(),
          state: randNumber({ min: 1, max: 1000 }),
          season: sample(seasons),
          sourceVentureId: randNumber({ min: 1, max: 1000 }),
          createdAt: now,
          updatedAt: now,
        };
        venture = await activityDb.client.venture.create({ data });
        ids.ventures.push(venture.id);
        logger.info(`venture ${venture.id}: ${venture.name}`);

        for (let o = 0; o < count.occurances; o++) {
          data = {
            from: randRecentDate(),
            to: randFutureDate(),
            ventureId: venture.id,
            createdAt: now,
            updatedAt: now,
          };
          occurance = await activityDb.client.occurance.create({ data });
          logger.info(`occurance ${occurance.id}`);
        } // end occurances loop

        for (let ct = 0; ct < count.campTShirts; ct++) {
          // coach
          data = {
            userName: randEmail(),
            passWord: randPassword(),
            schoolId: school.id,
            firstName: randFirstName(),
            lastName: randLastName(),
            createdAt: now,
            updatedAt: now,
          };
          const coach = await schoolDb.client.person.create({ data });

          data = {
            type: sample(phoneTypes) ?? PhoneTypeEnum.OFFICE,
            number: randPhoneNumber(),
            createdAt: now,
            updatedAt: now,
          };
          phone = await schoolDb.client.phone.create({ data });
          logger.info(`phone ${phone.id}: ${phone.number}`);

          data = {
            personId: coach.id,
            phoneId: phone.id,
            createdAt: now,
            updatedAt: now,
          };
          personPhone = await schoolDb.client.personPhone.create({ data });
          logger.info(`coach phone ${personPhone.id}`);
          // tee
          data = {
            ventureId: venture.id,
            coachId: coach.id,
            schoolId: school.id,
            season: sample(seasons),
            organizationName: school.name,
            ventureName: venture.name,
            organizationColor1: randColor(),
            organizationColor2: randColor(),
            coachName: `${coach.firstName} ${coach.lastName}`,
            coachEmail: coach.userName,
            coachPhoneNumber: phone.number,
            deliveryDate: randFutureDate(),
            campDataSubmitted: randBoolean(),
            orderDate: now,
            template: randSentence(),
            topLineText: randCatchPhrase(),
            middleLineText: randCatchPhrase(),
            bottomLineText: randCatchPhrase(),
            tShirtColor: randColor(),
            orderOptions: randNumber({ min: 1, max: 1000 }),
            shirtSizes: sample(sizes),
            participants: randCatchPhrase(),
            tShirtQuantity: randNumber({ min: 1, max: 1000 }),
            overfillPercentage: randNumber({ min: 1, max: 1000 }),
            mascotFile: randFilePath(),
            createdAt: now,
            updatedAt: now,
          };
          campTShirt = await activityDb.client.campTshirtOrder.create({ data });
          // shorts
          data = {
            campTShirtOrderId: campTShirt.id,
            designLayout: randCatchPhrase(),
            designChoice: randCatchPhrase(),
            topLineText: randCatchPhrase(),
            bottomLineText: randCatchPhrase(),
            shortSizes: sample(sizes),
            participants: randCatchPhrase(),
            createdAt: now,
            updatedAt: now,
          };
          campShorts = await activityDb.client.campShortOrder.create({ data });
          logger.info(
            `coach ${coach.id}  tshirt ${campTShirt.id}  shorts ${campShorts.id}`
          );
        } // end camp t shirts loop
      } // end ventures loop

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

        data = {
          personId: sample(ids.people) ?? "",
          eventId: event.id,
          createdAt: now,
          updatedAt: now,
        };
        directingRole = await personDb.client.directingRole.create({ data });
        logger.info(`directing role ${directingRole.id}`);

        for (let t = 0; t < count.tickets; t++) {
          data = {
            eventId: event.id,
            kind: randCatchPhrase(),
            basePrice: randNumber({ min: 1, max: 1000 }),
            maxNumberOfTickets: randNumber({ min: 1, max: 1000 }),
            state: randNumber({ min: 1, max: 1000 }),
            title: randWord(),
            groupSize: randNumber({ min: 1, max: 1000 }),
            commentsEnabled: randBoolean(),
            createdAt: now,
            updatedAt: now,
          };
          ticket = await activityDb.client.ticket.create({ data });
          logger.info(`ticket ${ticket.id}: ${ticket.kind}`);

          // invoice and line item
          data = {
            personId: sample(ids.people),
            credit: ticket.basePrice,
            createdAt: now,
            updatedAt: now,
          };
          invoice = await personDb.client.invoice.create({ data });
          logger.info(`invoice ${invoice.id}: ${invoice.credit}`);

          data = {
            registrationId: sample(ids.registrations),
            ventureId: sample(ids.ventures),
            activityName: activity.kind,
            ventureName: randCatchPhrase(), // lookup too expensive
            price: invoice.credit,
            invoiceId: invoice.id,
            refunded: randBoolean(),
            paid: randBoolean(),
            refundAmount: randNumber({ min: 1, max: invoice.credit ?? 1 }),
            ticketKind: ticket.kind,
            eventName: event.name,
            ticketId: ticket.id,
            state: randNumber({ min: 1, max: 1000 }),
            createdAt: now,
            updatedAt: now,
          };
          lineItem = await activityDb.client.lineItem.create({ data });
          logger.info(`line item ${lineItem.id}: ${lineItem.price}`);
        } // end tickets loop

        for (let m = 0; m < count.messages; m++) {
          data = {
            schoolId: school.id,
            activityId: activity.id,
            ventureId: sample(ids.ventures),
            status: randWord(),
            message: randSentence(),
            groupId: sample(ids.groups),
            senderId: sample(ids.people),
            eventId: event.id,
            messageType: randNumber({ min: 1, max: 1000 }),
            superadminMessage: randBoolean(),
            documentFileName: randFilePath(),
            documentContentType: randAbbreviation(),
            documentFileSize: randNumber({ min: 1, max: 1000 }),
            createdAt: now,
            updatedAt: now,
          };
          message = await activityDb.client.message.create({ data });
          logger.info(`message ${message.id}`);

          for (let mr = 0; mr < count.messageRecipients; mr++) {
            data = {
              messageId: message.id,
              personId: sample(ids.people) ?? "",
              createdAt: now,
              updatedAt: now,
            };
            messagePerson = await personDb.client.messagePerson.create({
              data,
            });
            logger.info(`message person ${messagePerson.id}`);
          } // end message person loop
        } // end messages loop
      } // end events loop

      for (let f = 0; f < count.fees; f++) {
        data = {
          name: randWord(),
          type: sample(feeTypes) ?? FeeTypeEnum.FLAT,
          amount: randNumber({ min: 1, max: 100 }),
          createdAt: now,
          updatedAt: now,
        };
        fee = await schoolDb.client.fee.create({ data });
        logger.info(`fee ${fee.id}: ${fee.amount}`);

        data = {
          activityId: activity.id,
          feeId: fee.id,
          createdAt: now,
          updatedAt: now,
        };
        activityFee = await schoolDb.client.activityFee.create({ data });
        logger.info(`activity fee ${activityFee.id}`);
      } // end fees loop
    } // end activites loop
  } // end school loop
};

seed()
  .then(() => logger.info("seed complete"))
  .catch((e) => logger.error(e));

// clear().then(() => logger.info('data cleared'))
