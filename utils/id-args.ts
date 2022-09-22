export const idArgs = (args: { id: string }): { id: string } => {
  const { id } = args;
  if (id === undefined || id === "") throw new Error("ID not specified");
  return { id };
};
