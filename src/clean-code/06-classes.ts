(() => {
  type Gender = "M" | "F";


  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(_name: string, _gender: Gender, _birthdate: Date) {
      this.name = _name;
      this.gender = _gender;
      this.birthdate = _birthdate;
    }
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const person = new Person("Alejandro", "M", new Date("2000-01-28"));
  console.log({ person });

  const userSettings = new UserSettings(
    "/user/home",
    "/home",
    "altovoy@gmail.com",
    "Admin",
    "Alejandro Torres",
    "M",
    new Date("2000-01-28")
  );

  console.log({ userSettings });
})();
