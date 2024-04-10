# LibreForge Dashboard / Google SSO Demo

Once built and started, as described in `development.md` go to http://localhost:3000/ and see the result, click on components, go to other pages, etc.

To fully experience the implementation, check https://getlibreforgedemo.github.io/ - this one allows to test the Google SSO, as http://localhost:3000/ isn't registered as allowed redirect uri.

# Dependencies

This project depends on
- [demo_dashboard.json](https://github.com/getlibreforge/libreforge-templates/blob/main/demo_dashboard.json) - portal configuration, components, actions, etc
- [@libreforge/librepackage-security-oauth2-google](https://github.com/getlibreforge/librepackage-security-oauth2-google) - 3rd party dependency, Google OAuth 2.0 Implementation
- [libreforge-integration-app-all](https://github.com/getlibreforge/libreforge-integration-app-all) - integration layer, exposes non-SSO /api/auth/login REST API
