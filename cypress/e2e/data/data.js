import { faker } from '@faker-js/faker';


module.exports={
     elements : {
        langButton : '#languages',
        langList : 'ul[aria-labelledby="languages"]',
        currencyButton: '#currency',
        currencyList: 'ul[aria-labelledby="currency"]',
        signUp:{
            signUpButton: 'a[href="https://www.phptravels.net/signup"][class="theme-btn theme-btn-small waves-effect"]',
            firstNameField:'[name=first_name]',
            lastNameField:'[name=last_name]',
            phoneField:'[name=phone]',
            emailField:'[name=email]',
            passwordField:'[name=password]',
            accountType:'#account_type',
            signUpFormButton:'button[type="submit"]',
            signUpSuccessMessage: 'div[class="alert alert-success signup"]',
            signUpSuccessMessageText: 'Signup successfull please login.'
        },
        login:{
            loginButton : 'a[href="https://www.phptravels.net/login"][class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]',
            emailField : 'input[type="email"][class="form-control"]',
            passwordField : 'input[name="password"]',
            loginFormButton :'button[type="submit"][class="btn btn-default btn-lg btn-block effect ladda-button waves-effect"]',
            firstNameStrong : 'strong[style="text-transform:capitalize"]',
            firstName : 'span[style="text-transform:capitalize"]',
            loginFailed : 'div[class="alert alert-danger failed"]',

        },
        logoutButton:'[href="https://www.phptravels.net/account/logout"][class=" waves-effect"]',
        hotel:{
            nextScrollHotels:'div[class="owl-next"]',
            hotelsButton:'[href="https://www.phptravels.net/hotels"]',
            hotelPrice: 'div[class="owl-stage"]>div:nth-child(11)>div',
            bookButton: '[class="col-md-3 booked_27"]>div[class="borders p-4"]>div>button',
        },
        book:{
            userTitle_1:'[name="title_1"]',
            userFirstName_1:'[name="firstname_1"]',
            userLastName_1:'[name="lastname_1"]',
            userTitle_2:'[name="title_2"]',
            userFirstName_2:'[name="firstname_2"]',
            userLastName_2:'[name="lastname_2"]',
            childAge_1:'[name="child_age_1"]',
            childFirstName_1:'[name="child_firstname_1"]',
            childLastName_1:'[name="child_lastname_1"]',
            childAge_2:'[name="child_age_2"]',
            childFirstName_2:'[name="child_firstname_2"]',
            childLastName_2:'[name="child_lastname_2"]',
            agreeCheckbox:'[type="checkbox"]',
            confirmBooking:'[type="submit"]',
        }
      },

      data:{
        first :faker.name.firstName(),
        last : faker.name.lastName(),
        phone : faker.phone.number('011########'),
        email : faker.internet.email(),
        password : faker.random.alpha(15),
        accountType : "agent",
    },
}

