# **NAME**

This is the amazing **NAME** microservice.

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
# Deploy with orikami-cli and gitops
ok k8s deploy
```
