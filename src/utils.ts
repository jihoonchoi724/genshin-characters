export const capitalize = (str: string) => {
  const firstLetter = str.charAt(0).toUpperCase()
  const restOfWord = str.substring(1).toLowerCase()
  return firstLetter + restOfWord
}