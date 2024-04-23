const INSTANCE_SUBSCRIPTION_STATUS = [
    {
        id: 1,
        name: "incomplete",
        color: '#ef4444',
        message: "Your subscription setup is incomplete. Please complete the setup process."
    },
    {
        id: 2,
        name: "incomplete_expired",
        color: '#ef4444',
        message: "Your subscription setup has expired. Please restart the setup process."
    },
    {
        id: 3,
        name: "trialing",
        color: '#fbbf24',
        message: "You are currently in a trial period."
    },
    {
        id: 4,
        name: "paused",
        color: '#fbbf24',
        message: "Your subscription is currently paused."
    },
    {
        id: 5,
        name: "active",
        color: '#10b981',
        message: "Your subscription is active."
    },
    {
        id: 6,
        name: "past_due",
        color: '#ef4444',
        message: "Your subscription payment is past due. Please update your payment information."
    },
    {
        id: 7,
        name: "canceled",
        color: '#ef4444',
        message: "Your subscription has been canceled."
    },
    {
        id: 8,
        name: "unpaid",
        color: '#ef4444',
        message: "Your subscription payment is unpaid. Please update your payment information."
    }
];

function GET_SUBSCRIPTION_STATUS(status){

    return INSTANCE_SUBSCRIPTION_STATUS.find(subscription => subscription.name === status)
}





export {

    GET_SUBSCRIPTION_STATUS,

}