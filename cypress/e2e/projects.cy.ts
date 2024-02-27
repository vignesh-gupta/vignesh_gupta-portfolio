describe('ProjectsPage E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/projects');
    cy.intercept('GET', '**/v2023-05-03/**', { fixture: 'projects' }).as(
      'projects'
    );
    cy.wait('@projects');
  });

  it('should render the page title', () => {
    cy.get('h3').contains('Projects').should('be.visible');
  });

  it('should render the ProjectsSection component with 6 projects', () => {
    cy.get('[data-cy=projects]').should('exist');
    cy.get('[data-cy=projects]')
      .children()
      .children('div.flex.flex-col.items-center.gap-1')
      .should('have.length', 6);
  });
});
