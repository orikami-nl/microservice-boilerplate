# __NAME__

This is the amazing __NAME__ microservice.

## Install
Required:
- node > 8 and NPM
- kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- ok (`npm install -g git+ssh://git@github.com:orikami-nl/orikami-cli.git`)

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
# ceeer nieuwe micro services
# run om kubernets.yml file aan te maken
# vul in kubernets.yml file
# check of het op port 3000 staat
ok k8s deploy


# creer Dockerfile
# check of het op port 3000 staat
ok docker init nodejs

# deploy microservice
ok k8s deploy kubernetes-staging.yml --env .\.env-staging --push

# second time, only update function code
ok k8s deploy kubernetes-staging.yml --env .\.env-staging --push 

# deploy new helm 
ok k8s deploy kubernetes-staging.yml --env .\.env-staging

 # deploy error message
 kubectl describe pod __NAME__
```

## Proudction & Staging files
To split up an production and staging environment you need to have the following files split up:
- `.env-(proudction || staging)`        env variable
- `kubernetes-(proudction || staging)`  correct deployment to Google Cloud Platform
- `auth0-(proudction || staging)`       setup security with Auth0