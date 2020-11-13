# stripe-function #
Automated deployment of stripe services in an Azure Function
![Logo](http://pjdecarlo.com/wp-content/uploads/2017/06/stripefunction.png)

## Background ##
Allows for hosted payment processing using [Stripe](http://stripe.com).  A great solution for pages created with static-site generators, that require some form of payment services.  

For more information refer to this blog post:

[Ridiculously Cheap Subscription and Payment Services with Stripe and Azure Functions](http://pjdecarlo.com/2017/06/super-cheap-subscription-and-payment-services-with-stripe-on-microsoft-azure-using-serverless-code-via-azure-functions-node-js.html)

## Features ##

Out the box support for monthly subscription and redirection to host domain.  The deployment will likely require manual modification to meet desired functionality.  Use this to get started, then visit the deployed function in Azure to modify to your needs.

## Usage ##
Deploy the function to Azure by clicking the button below:

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://portal.azure.com/?WT.mc_id=iot-0000-pdecarlo#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ftoolboc%2Fstripe-function%2Fmaster%2Fazuredeploy.json)

You can test the deployed function by creating an html file with the following:

	<form action="URL_TO_YOUR__AZURE_FUNCTION (will look something like this: https://MYFUNCTIONDOMAIN.azurewebsites.net/api/FUNCTIONNAME?code=TMU4yAbRxEPq8/aHAjW2naiGYp27ja6rJYUQahSSRbbjkPP5NoYkfg==" method="POST">
	
	  <script
	
	src="https://checkout.stripe.com/checkout.js" class="stripe-button"
	
	data-key="pk_live_YOUR_STRIPE_KEY"
	
	data-image="images/marketplace.png"
	
	data-name="My Online business"
	
	data-description="1-Week Subscription Plan"
	
	data-amount="350"
	
	data-label="Sign Up Now For Only Tree-Fiddy!">
	
	  </script>

	</form>

You can then test that processing works using any of the test card values available @ https://stripe.com/docs/testing#cards

![Logo](http://pjdecarlo.com/wp-content/uploads/2017/06/html.png)
