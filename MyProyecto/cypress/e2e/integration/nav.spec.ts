describe('Navigation Tests', () => {
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:8100/login');

        cy.get('ion-button').contains('INGRESAR').click();
    });
});