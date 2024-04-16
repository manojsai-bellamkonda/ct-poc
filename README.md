# Turborepo starter

This is an monorepo developed with Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a readme docs. You can add any readme files in it like how to contribute etc.
- `web`: A Next js 13 app.
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications.
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: `tailwind.config.js` is used through out the repo.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Setup

Once the project is cloned, run the below command to setup the project.

```
npm run setup
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```
