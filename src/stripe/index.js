module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var stripe = require('stripe')(process.env.StripeSecret);

    var qs = require('querystring');
    var post = qs.parse(req.body);


    //create a plan - technically this code only needs to ever be ran one-time to create the initial plan
    stripe.plans.create(
        {
            name: "Basic Plan",
            id: "basic-monthly",
            interval: "month",
            currency: "usd",
            amount: 0,
        },
        function (err, plan) {
            err; // null if no error occurred
            plan; // the created plan object
        });

    //create and subscribe customer to plan
    stripe.customers.create(
        { email: post.stripeEmail, source: post.stripeToken, plan: "basic-monthly" },
        function (err, customer) {
            err; // null if no error occurred
            customer; // the created customer object        	
        }
    );

    //Redirect back to origin
    context.res = {
        status: 302, headers: { "location": "https://www.example.com" },
        body: null
    };

    //Useful for debugging the actual body content sent from the Stripe Checkout form
    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: "Body: " + req.body
    // };

    context.done();
};