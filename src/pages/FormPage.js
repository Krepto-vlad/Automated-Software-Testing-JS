import {BasePage} from './index';
import UserCreator from "../helpers/UserCreator";
import DataStorage from "../helpers/DataStorage";

export default class FormPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameField = page.locator('//input[@placeholder="First Name"]');
    this.lastNameField = page.locator('//input[@placeholder="Last Name"]');
    this.genderRadioButton = gender => page.locator(`//label[contains(., "${gender}")]`);
    this.mobileNumberField = page.locator('//input[@placeholder="Mobile Number"]');
    this.modalWindowlocator = page.locator('//div[@class="modal-content"]');
    this.modalWindowFormField = field => page.locator(`//td[contains(text(), "${field}")]/following-sibling::*`);
  }
 async fillMandatoryFields(userName, userNumber) {
    const user = UserCreator.createUser();
    await DataStorage.setNamespace(userName, userNumber, user);
    await this.firstNameField.fill(user.firstName);
    await this.lastNameField.fill(user.lastName);
    await this.mobileNumberField.fill(user.phoneNumber);
    await this.genderRadioButton(user.gender).click();
 }

}