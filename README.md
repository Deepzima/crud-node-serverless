# Crud node serverless

I've made this project for test some technologies. 
I want to test and wrap TDD or BDD behaviour in a Serverless HTTP project.

First we made a boilerplate and then we've to made a chapters with cloud items like:
 - `DynamoDB`
 - `Cognito`
 - `S3` class storage
 - `SNS` SMS interface (why no)


#### Why JS for this project?
I've made in the time a lot of stuff in js, python and why no rust. 
At the moment JS is a "suittable" environment for lambda serverless with a good 
ecosystem and it's good to archieve a proof-of concepts.

### What we need?

#### Node kind

* `Serverless Framework`, a good choise if you don't need o want to use a serius IaaC provisioner like Terraform or you need to the SAM architetture for the code in cloud aws(but we use terraform for external resource, serverless is pure shit for doing it)

* `Express/serverless-http` a most popular HTTP framework in node.js with a wrapper allowing us to use express to serverless use.(because we don't having HTTP servers, port or sockets to handle but cloud events)

* `Serverless-offline` like `nodemon`, this start the handling of the express app in your localport: `:5000`

* `Webpack` and `webpack-serverless` if you want to use the latest ecma version, use loaders and manage the bundle of your code.

* `Mocha` testing framework

* `Chai` Our TDD/BDD assertion library

* `SuperTest` HTTP server testing library 

* `Dynamoose` An ORM for DynamoDB key-value database

* `aws-sdk` A javascript sdk for use AWS APIs, because our intentions are making a lot of(a sirena) code for basics services used with lambda in aws.

#### Cloud provisioning and Docker stuff

* `Docker` or `docker-compose` we have to test or mocking some resources, because may we don't have an aws account or just we don't need to provision simple resources for basic development.

* `Terraform` we are a cool guys right yet? And we need to be sure if the resources like Databases, Storages, User directories and Topics are correctly managed (see cloudformation drift and tfstate with S3 backend in terraform docs for more). So, for this reason we have to get a look to basics in Terraform.

### What we are making with this stuff?

Basically, we are going to made an app can use the APIGW aws service managed by 
an express app.
 


