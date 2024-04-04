

const INSTANCE_STATUS = [

    {
        id: 0,
        name: "Credentials Required",
        color: '#fb923c'
    },
    {
        id: 1,
        name: "Initializing Instance",
        color: '#60a5fa'
    },
    {
        id: 2,
        name: "Working",
        color: '#34d399'
    },
   
];

const INSTANCE_SUBSCRIPTION_STATUS = [

    {
        id: 1,
        name: "incomplete",
        color: '#ef4444'
    },
    {
        id: 2,
        name: "incomplete_expired",
        color: '#ef4444'
    },
    {
        id: 3,
        name: "trialing",
        color: '#fbbf24'
    },
    {
        id: 4,
        name: "paused",
        color: '#fbbf24'
    },
    {
        id: 5,
        name: "active",
        color: '#10b981'
    },
    {
        id: 6,
        name: "past_due",
        color: '#ef4444'
    },
    {
        id: 7,
        name: "canceled",
        color: '#ef4444'
    },
    {
        id: 8,
        name: "unpaid",
        color: '#ef4444'
    }
];


function GET_SUBSCRIPTION_STATUS(status){

    return INSTANCE_SUBSCRIPTION_STATUS.find(subscription => subscription.name === status)
}


export {

    INSTANCE_STATUS,GET_SUBSCRIPTION_STATUS

}