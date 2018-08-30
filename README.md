# __NAME__

This is the amazing __NAME__ microservice.

## Install
Required:
- node > 8 and NPM
- serverless (`npm install -g serverless`)

```bash
npm install
```

## Develop
```bash
npm run start  # micro will take handler.js and spin up a server
npm run dev    # development server watches files
```

## Test 
```bash
npm run test -- --watchAll
```

## Deploy
```bash
# first time, deploy entire stack
serverless deploy --stage=staging

# second time, only update function code
serverless deploy --function __NAME__ --stage=staging
```