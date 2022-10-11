export function createArgs<T>(args: { input?: T }) {
  const { input } = args;
  if (!input || input === undefined || !Object.keys(input).length)
    throw new Error("Input arguments are not present");
  return { input };
}
