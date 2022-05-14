/// <reference types="Cypress" />

describe('login', () => {
  it('should successfully log into our app', () => {
    cy.login()
      .then((resp) => {
        return resp.body;
      })
      .then((body) => {
        const { access_token, expires_in, id_token } = body;
        const auth0State = {
          nonce: '',
          state: 'some-random-state',
        };
        const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
        cy.log(callbackUrl);
        cy.visit(callbackUrl, {
          onBeforeLoad(win) {
            win.document.cookie =
              'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
          },
        });
      });
  });
});

// HACK: This is the old test and it's not useful for our use case
// because the login strategy is not local, might need this when implementing
// passport
// cy.clearCookies();
// cy.visit('http://localhost:3000');
// cy.contains('sign in').click();
// cy.writeFile;
// cy.get('#username')
//   .type('farouk_mimi1@hotmail.fr')
//   .should('have.value', 'farouk_mimi1@hotmail.fr');
// cy.get('#password').type('16/04/2002Farouk{enter}');
// cy.get('#first_name').type('FaroukForTesting');
// cy.get('#last_name').type('HamadiForTesting{enter}');
// cy.get('a > .fill-discord > path').click();
// cy.url().contains('http://localhost:3000');
