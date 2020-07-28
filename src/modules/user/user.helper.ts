export function getUserFirstName (fullName: string): string {
  const [, ...firstName] = fullName.split(' ').reverse();
  return firstName.reverse().join(' ');
}