import { db as adminDb } from "../services/admin/src/db";
import { db as schoolDb } from "../services/school/src/db";
import { School } from "../services/admin/generated/admin-db";
import { Activity } from "../services/school/generated/school-db";
import { logger } from "./logger";

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
} from "@ngneat/falso";

const count = {
  schools: 10,
  activities: 3,
};

const clear = async () => {
  // delete childeren first due to constraints
  // school db
  await schoolDb.client.activity.deleteMany({});
  // admin db
  await adminDb.client.school.deleteMany({});
};

const seed = async () => {
  let data: any;
  let school: School;
  let activity: Activity;
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
      logger.info(`activity ${activity.id}: ${activity.kind}`);
    } // end activites loop
  } // end school loop
};

clear().then(() => logger.info("Data cleared"));

seed().then(() => logger.info("seed complete"));
