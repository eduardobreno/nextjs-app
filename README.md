This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

```bash
yarn build:dev
#or
yarn build:staging
#or
yarn build:production
#and
yarn start
```

## Docker build

```bash
docker build -t nextapp:develop . --build-arg SERVER=DEVELOP
#or
docker build -t nextapp:staging . --build-arg SERVER=STAGING
#or
docker build -t nextapp:production . --build-arg SERVER=PRODUCTION
#and
docker run -p 3000:3000 -d nextapp:develop
```
