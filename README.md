# The Balaji Group

The Balaji Group website is built with React, TypeScript, and Vite.

## Local development

Requirements: Node.js 20 and npm.

```sh
npm ci
npm run dev
```

## Checks

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

GitHub Actions runs these checks on pushes and pull requests targeting `main`.

## Production deployment

Pushes to `main` deploy the validated `dist/` build to the IIS site using FTPS. The host must have FTPS enabled; plaintext FTP is intentionally not used. Configure the repository variable `IIS_FTPS_ENABLED` as `true` and add these repository actions secrets:

- `FTP_SERVER`: the FTP hostname
- `FTP_USERNAME`: the deployment account
- `FTP_PASSWORD`: the deployment password
- `FTP_SERVER_DIR`: the website's publish directory, including its trailing slash

Until FTPS is enabled and these settings are configured, CI still runs but the deploy job is skipped.
