describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('contain', 'Full Stack Developer');
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
