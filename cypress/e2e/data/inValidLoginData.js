import { faker } from '@faker-js/faker';

module.exports=[
    {
        testCase : "Login with wrong email and password ",
        email: faker.internet.email(),
        password: faker.random.alpha(15),
    },
    {
        testCase : "Login with wrong email and empty password ",
        email: faker.internet.email(),
        password: "{backspace}",
    },
    {
        testCase : "Login with empty email and invalid password ",
        email: "{backspace}",
        password: faker.random.alpha(15),
    },
    {
        testCase : "Login with empty email and empty password ",
        email: "{backspace}",
        password: "{backspace}",
    },
    
]