import { faker } from "@faker-js/faker";

export default class UserCreator {
  static createUser() {
    const genders = ["Male", "Female", "Other"];
    const randomIndex = Math.floor(Math.random() * genders.length);
    const gender = genders[randomIndex];

    const firstName = faker.person.firstName(gender.toLowerCase());
    const lastName = faker.person.lastName(gender.toLowerCase());

    return {
      firstName: firstName,
      lastName: lastName,
      userName: `${firstName} ${lastName}`,
      phoneNumber: faker.string.numeric(10),
      gender,
    };
  }
}
