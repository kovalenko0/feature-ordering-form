export function keyValuePairs<Subject extends Object>(subject: Subject) {
  return Object
    .keys(subject)
    .map((key: keyof Subject) => ({
      key,
      value: subject[key]
    }))
}