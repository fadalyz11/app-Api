import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://c17a53a5e1eb47dd8f987bc3f006f4a0@sentry.io/1406937",
    maxBreadcrumbs: 50,
    debug: true
  });
}

function log(error) {
  Sentry.captureMessage("Something went wrong");
}

export default {
  init,
  log
};
