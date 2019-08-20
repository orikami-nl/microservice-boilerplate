# **NAME**

This is the amazing **NAME** microservice.

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
# Deploy with orikami-cli and gitops
ok k8s deploy
```
