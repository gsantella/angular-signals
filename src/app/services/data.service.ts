export class DataService {
  private _firstname: string = '';
  private _lastname: string = '';
  private _age: number = 0;
  private _email: string = '';
  private _webhookUrl: string = '';

  constructor() {}

  firstname() {
    return this._firstname;
  }

  lastname() {
    return this._lastname;
  }

  age() {
    return this._age;
  }

  email() {
    return this._email;
  }

  webhookUrl() {
    return this._webhookUrl;
  }

  updateField(field: string, value: string | number) {
    if (field === 'firstname') {
      this._firstname = value as string;
    } else if (field === 'lastname') {
      this._lastname = value as string;
    } else if (field === 'age') {
      this._age = value as number;
    } else if (field === 'email') {
      this._email = value as string;
    } else if (field === 'webhookUrl') {
      this._webhookUrl = value as string;
    }
  }
}
