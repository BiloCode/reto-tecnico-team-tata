import faker from 'faker';

class GetUserRandomWithFaker {

  public __invoke = () => {
    let gender = Math.round(Math.random() * 2);

    return {
      gender : gender === 1 ? "male" : "female",
      name : {
        first : faker.name.firstName(),
        last : faker.name.lastName(),
      },
      email : faker.internet.email(),
      location : {
        city : faker.address.city(),
        state : faker.address.state(),
        country : faker.address.country(),
        countrycode : faker.address.countryCode()
      },
      login : {
        username : faker.internet.userName(),
        password : faker.internet.password(),
      }
    }
  }

}

export default GetUserRandomWithFaker;