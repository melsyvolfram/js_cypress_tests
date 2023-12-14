const { faker } = require('@faker-js/faker');

module.exports = {

  build({ firstName, lastName, email, phone } = {}) {
    return {
      firstName: (firstName !== undefined ? firstName : faker.person.firstName()),
      lastName: (lastName !== undefined ? lastName : faker.person.lastName()),
      email: (email !== undefined ? email : faker.internet.email()),
      phone: (phone !== undefined ? phone : faker.helpers.fromRegExp('020[0-9]{8}')),
    }
  },

}
