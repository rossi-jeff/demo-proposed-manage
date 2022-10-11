export function updateArgs<T>(args: { id: string; updates?: T }) {
  const { id, updates } = args;
  if (!id || id === undefined) throw new Error("ID not specified");
  if (!updates || updates === undefined || !Object.keys(updates).length)
    throw new Error("Update arguments are not present");
  return { id, updates };
}
