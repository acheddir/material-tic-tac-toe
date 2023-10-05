declare namespace Cypress {
    interface Chainable {
        getByDataCy(dataCyAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
        getByDataCyLike(dataCyPrefixAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
    }
}