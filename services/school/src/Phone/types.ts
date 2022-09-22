import { Phone } from "../../generated/school-db";

export type PhoneType = Phone;

export enum PhoneTypeEnum {
  HOME = "HOME",
  OFFICE = "OFFICE",
  FAX = "FAX",
  CELL = "CELL",
}
