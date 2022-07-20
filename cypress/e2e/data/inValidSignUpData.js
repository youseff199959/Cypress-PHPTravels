import { faker } from '@faker-js/faker';

module.exports=[
    {
        testCase : "Fill the form without providing the first name",
        firstName: "{backspace}",
        lastName: faker.name.lastName(),
        phone: faker.phone.number('011########'),
        email: faker.internet.email(),
        password: faker.random.alpha(15),
        accountType: "Agent"
    },
    {
        testCase : "Fill the form without providing the last name",
        firstName: faker.name.firstName(),
        lastName: "{backspace}",
        phone: faker.phone.number('011########'),
        email: faker.internet.email(),
        password: faker.random.alpha(15),
        accountType: "Agent"
    },
    {
        testCase : "Fill the form without providing the phone",
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: "{backspace}",
        email: faker.internet.email(),
        password: faker.random.alpha(15),
        accountType: "Agent"
    },
    {
        testCase : "Fill the form without providing the email",
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number('011########'),
        email: "{backspace}",
        password: faker.random.alpha(15),
        accountType: "Agent"
    },
    {
        testCase : "Fill the form without providing the password",
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number('011########'),
        email: faker.internet.email(),
        password: "{backspace}",
        accountType: "Agent"
    },
]