import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import * as Sentry from "@sentry/browser";
// Sentry.init({
//   dsn: "https://03e510d2daf34beb81634749daa88aaf@o346096.ingest.sentry.io/5238822",
//   integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
