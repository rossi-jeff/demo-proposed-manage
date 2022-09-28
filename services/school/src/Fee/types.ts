import { Fee } from "../../generated/school-db";

export type FeeType = Fee;

export enum FeeTypeEnum {
  FLAT = "FLAT",
  PERCENTAGE = "PERCENTAGE",
}
