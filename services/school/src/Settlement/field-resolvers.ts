import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { SettlementType } from "./types";

export const getActivityId = (parent: SettlementType) => {
  return parent.activityId ?? null;
};
export const getActivityKind = (parent: SettlementType) => {
  return parent.activityKind ?? null;
};
export const getAmountCollected = (parent: SettlementType) => {
  return parent.amountCollected ?? null;
};
export const getAmountPaid = (parent: SettlementType) => {
  return parent.amountPaid ?? null;
};
export const getAmountRemaining = (parent: SettlementType) => {
  return parent.amountRemaining ?? null;
};
export const getAmountSettled = (parent: SettlementType) => {
  return parent.amountSettled ?? null;
};
export const getApproval = (parent: SettlementType) => {
  return parent.approval ?? null;
};
export const getCreatedAt = (parent: SettlementType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getEndDate = (parent: SettlementType) => {
  return parent.endDate?.toString() ?? null;
};
export const getFees = (parent: SettlementType) => {
  return parent.fees ?? null;
};
export const getFinal = (parent: SettlementType) => {
  return parent.final ?? null;
};
export const getFlatFee = (parent: SettlementType) => {
  return parent.flatFee ?? null;
};
export const getKind = (parent: SettlementType) => {
  return parent.kind ?? null;
};
export const getManualFee = (parent: SettlementType) => {
  return parent.manualFee ?? null;
};
export const getParticipantCount = (parent: SettlementType) => {
  return parent.participantCount ?? null;
};
export const getPercentage = (parent: SettlementType) => {
  return parent.percentage ?? null;
};
export const getPercentageFee = (parent: SettlementType) => {
  return parent.percentageFee ?? null;
};
export const getSchoolId = (parent: SettlementType) => {
  return parent.schoolId ?? null;
};
export const getStartDate = (parent: SettlementType) => {
  return parent.startDate?.toString() ?? null;
};
export const getUpdatedAt = (parent: SettlementType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Settlement: Resolvers["Settlement"] = {
  activityId: getActivityId,
  schoolId: getSchoolId,
  startDate: getStartDate,
  endDate: getEndDate,
  amountCollected: getAmountCollected,
  fees: getFees,
  amountSettled: getAmountSettled,
  percentage: getPercentage,
  amountPaid: getAmountPaid,
  amountRemaining: getAmountRemaining,
  final: getFinal,
  flatFee: getFlatFee,
  percentageFee: getPercentageFee,
  manualFee: getManualFee,
  participantCount: getParticipantCount,
  kind: getKind,
  approval: getApproval,
  activityKind: getActivityKind,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (parent) => {
    if (parent.activityId === null) return null;
    return await db.client.activity.findFirst({
      where: {
        id: parent.activityId,
      },
    });
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
