// Test dynamic apps efficiently
// Asynchronous apps
// - Smart commands wait for application to update
// - If assertion following a DOM query command fails - Keep retrying until timeout
//
// Default Timeout is 4000ms

// Caveats
// Cypress only retries commands that query the DOM
// .get(), .find(), .contains(), etc.
//
// Commands that may change the state of the application are not retried
// .click(), .type(), etc.
//
// Only last command before assertion is retried