class Person {
  #name;
  #dateOfBirth;
  #placeOfBirth;

  constructor(name, dateOfBirth, placeOfBirth) {
    this.#name = name;
    this.#dateOfBirth = dateOfBirth;
    this.#placeOfBirth = placeOfBirth;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get dateOfBirth() {
    return this.#dateOfBirth;
  }

  get placeOfBirth() {
    return this.#placeOfBirth;
  }

  talk() {
    return `Hi my name is ${this.name} and I was born in ${this.placeOfBirth}.`;
  }
}

class AdaStaff extends Person {
  #role;
  #base;

  constructor(name, dateOfBirth, placeOfBirth, role, base) {
    super(name, dateOfBirth, placeOfBirth);
    this.#role = role;
    this.#base = base;
  }

  get base() {
    return this.#base;
  }

  set base(base) {
    this.#base = base;
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    this.#role = role;
  }

  talk() {
    return `Hi my name is ${this.name}. I work in ${this.base} and my role is ${this.role}.`;
  }
}

class AdaStudent extends Person{
  #company;
  #pathway;
  #yearStarted;

  constructor(name, dateOfBirth, placeOfBirth,company,pathway,yearStarted){
    super(name, dateOfBirth, placeOfBirth);
    this.#company=company;
    this.#pathway=pathway;
    this.#yearStarted=yearStarted;
  }

  get company(){
    return this.#company;
  }

  set company(company) {
    this.#company = company;
  }

  get pathway() {
    return this.#pathway;
  }

  set pathway(pathway) {
    this.#pathway = pathway;
  }

  get yearStarted() {
    return this.#yearStarted;
  }

  set yearStarted(yearStarted) {
    this.#yearStarted = yearStarted;
  }

  talk() {
    return `Hi my name is ${this.name}. I work in ${this.company}, my pathway is ${this.pathway} which I started on ${this.yearStarted}.`;
  }
}

class Cohort {

  _cohortCode;
    
  constructor(cohortCode){
    this._cohortCode = cohortCode;
    this.cohort = [];
  }
  
  add(adaStudent) {
    this.cohort.push(adaStudent);
    return this.cohort.length;
  }

  list() {
    this.cohort.forEach(member => {
      console.log(member.name);
    });
  }

  // Method to remove a student by name using splice
  removeStudentByName(name) {
    const index = this.cohort.findIndex(student => student.name === name);
    if (index !== -1) {
      return this.cohort.splice(index, 1); // Remove the student and return the removed object
    } else {
      console.log(`${name} not found in the cohort.`);
      return null;
    }
  }

  // Method to search for students by name using map
  searchStudentByName(name) {
    return this.cohort
      .map(student => student.name === name ? student : null)
      .filter(student => student !== null); // Filter out null values
  }

}

// Test the new functionality

const october24 = new Cohort("24-10-LDN-MCR");

const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "PwC", "TC", 2024);
const jessF = new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024);
const darpit = new AdaStudent("Darpit Shah", "13/01/1992", "Dubai", "59A", "Data Analyst", "2024");

october24.add(sumilA);
october24.add(jessF);
october24.add(darpit);

// List current cohort
console.log("Current cohort:");
october24.list();

// Remove a student by name
console.log("Removing Sumil Aryin...");
october24.removeStudentByName("Sumil Aryin");

// List cohort after removal
console.log("Cohort after removal:");
october24.list();

// Search for a student by name
console.log("Searching for Jess Fryer:");
const searchResult = october24.searchStudentByName("Jess Fryer");
console.log(searchResult);
