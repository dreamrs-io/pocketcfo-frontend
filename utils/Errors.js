

const ErrorCodes = {
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