

const ErrorCodes = {
    EMAIL_ALREADY_REGISTERED_WITH_GOOGLE:{
        code:12,
        message:"Email already registered with a google account"
    },
    EMAIL_ALREADY_EXISTS:{
        code:12,
        message:"Email already Registered"
    },
    EMIAL_NOT_FOUND:{
        code:12,
        message:"Email address not found"
    }, 
    PASSWORDS_DONT_MATCH:{
        code:12,
        message:"Password dont match"
    },
    PASSWORDS_NOT_CORRECT:{
        code:12,
        message:"Email address not found"
    },
    INVALID_EMAIL_ADDRESS:{
        code: 12,
        message: "Invalid email address!",

    },
    INVALID_PASSWORD:{
        code: 13,
        message: "Invalid password! Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    },
    CREDENTIALS_UPDATES_NOT_ALLOWED:{
        code: 13,
        message: "Password Or Email Updates Not Allowed",
    },

    NO_ACTIVE_SUBSCRIPTIONS: {
        message: "Don't have any active subscriptions",
        code: 1000
    },
    INCOMPLETE_PAYMENT: {
        code: 400,
        message: "Subscription payment is incomplete. Please update payment information.",
    },
    INCOMPLETE_EXPIRED: {
        code: 400,
        message: "Subscription payment is incomplete and has expired. Please contact support.",
    },
    TRIALING: {
        code: 400,
        message: "Subscription is still in trial period.",
    },
    PAUSED: {
        code: 400,
        message: "Subscription is paused. Please update payment information to resume.",
    },
    PAST_DUE: {
        code: 400,
        message: "Subscription payment is past due. Please update payment information.",
    },
    UNPAID: {
        code: 400,
        message: "Subscription payment is unpaid. Please update payment information.",
    },
    CANCELED: {
        code: 400,
        message: "Subscription has been canceled. Please contact support for assistance.",
    },

};



export {
    ErrorCodes
} 