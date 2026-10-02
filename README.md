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

The GitHub Actions workflow deploys the validated `dist/` build to [thebalajigroup.in](https://thebalajigroup.in) over FTPS after a successful push to `main`. Plain FTP is intentionally not used.

The current host is not ready for deployment: its FTP service rejects explicit TLS, HTTPS WebDAV does not allow file writes, SSH is unavailable, and the control panel is HTTP-only. Ask the hosting provider to enable explicit FTPS on port 21 and confirm the website's publish directory. The deploy job stays skipped until this is done.

Then configure the repository variable `IIS_FTPS_ENABLED` as `true` and add these repository actions secrets:

- `FTP_SERVER`: the FTP hostname
- `FTP_USERNAME`: the deployment account
- `FTP_PASSWORD`: the deployment password
- `FTP_SERVER_DIR`: the website's publish directory, including its trailing slash

Use a dedicated, least-privilege deployment account and new credentials stored only as Actions secrets. Never switch the workflow to plaintext FTP.
