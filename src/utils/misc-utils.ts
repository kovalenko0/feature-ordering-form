export function throwOnNull<Subject>(value: Subject | null): Subject {
  if (value == null) {
    throw new Error(`Value can't be null or undefined`)
  }
  return value
}
