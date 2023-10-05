// Cypress will automatically calculate a unique selector to use targeted element
// data-cy, data-test, data-testid
// id, class, tag, attributes, nth-child

// You can control how a selector is determined using Cypress.SelectorPlayground API

/**
 * <button
 *  id="main"
 *  class="btn btn-primary"
 *  name="submission"
 *  role="button"
 *  data-cy="submit"
 * >
 *   Submit
 * </button>
 */

// cy.get('button').click(), NO
// cy.get('.btn.btn-large').click(), NO
// cy.get('#main').click(), NO
// cy.get("[name='submission']").click(), NO
// cy.contains("Submit").click(), NO
// cy.get('[data-cy="submit"]').click(), YES

// Use data-* attributes to provide context to your selectors and isolate them from CSS or JS changes


