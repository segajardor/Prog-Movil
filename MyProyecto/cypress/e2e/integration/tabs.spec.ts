describe('Ionic Tabs Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100/tabs/home');
    });
    
    it('should have home selected be default', () => {
        cy.get('ion-tab-button[tab="home"]').should('have.attr', 'aria-selected', 'true');
        cy.get('ion-tab-button[tab="profile"]').should('not.have.attr', 'aria-selected', 'true');
        cy.get('ion-tab-button[tab="category"]').should('not.have.attr', 'aria-selected', 'true');
        cy.get('ion-tab-button[tab="breeds"]').should('not.have.attr', 'aria-selected', 'true');
        cy.get('ion-tab-button[tab="location"]').should('not.have.attr', 'aria-selected', 'true');
    });
});