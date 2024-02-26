describe('It should test all navigates navigates', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Checks About navigation', () => {
    cy.get('a[href="about"]').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', 'Full Stack Developer');
  });

  it('Checks Project navigation', () => {
    cy.get('a[href="projects"]').click();
    cy.url().should('include', '/projects');  
  });

  it('Checks Contact navigation', () => {
    cy.get('a[href="contact"]').click();
    cy.url().should('include', '/contact');
  });
});

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders the Hero component', () => {
    cy.get('[data-cy=hero]').should('exist');
  });

  it('renders the About component', () => {
    cy.get('[data-cy=about]').should('exist');
  });

  it('renders the Expertise component', () => {
    cy.get('[data-cy=expertise]').should('exist');
  });

  it('renders the Skills component', () => {
    cy.get('[data-cy=skills]').should('exist');
  });

  it('renders the Projects component', () => {
    cy.get('[data-cy=projects]').should('exist');
  });

  it('renders the Contact component', () => {
    cy.get('[data-cy=contact]').should('exist');
  });
});
