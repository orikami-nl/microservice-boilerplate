# Discription
The plugin is schedule jobs. It can also do recurring jobs. This service runs on an Lambda by AWS. 

# Setup function
You need NPM & serverless install on your pc.

1) Run ``npm install`` in the root folder.
2) Create **.env-staging** and **.env-v1** file
3) Fill in the values from **.env-example**

# Run locally
Run ``cross-env --stage=<stage> micro``. You can now call it from **http://localhost:3000**

``--stage=staging`` for example if you want to test the function with the **.env-staging** file

# Deploy
Run ``serverless deploy --function schedule --stage=<stage>``.

# Test 
Run ``cross-env --stage=staging npm test -- --watchAll``

Developed by *Stijn Albers van der Linden*