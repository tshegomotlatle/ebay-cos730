import { getGreeting } from '../support/app.po';

describe('ebay-frontend', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.login("tshego.motlatle.dev@gmail.com", "Password@1")
  });

  it('should display browseNFT page with details', () => {
    cy.visit('http://localhost:4200/browseNFT')
    cy.get('.row > :nth-child(1)').contains("Previous Owners")
    cy.get('.row > :nth-child(1)').contains("Rarity")
    cy.get('.row > :nth-child(1)').contains("ZAR")
    cy.get('.row > :nth-child(1)').contains("Background")
    cy.get('.row > :nth-child(1)').contains("Eyes")
    cy.get('.row > :nth-child(1)').contains("Nose")
    cy.get('.row > :nth-child(1)').contains("Skin")
    cy.get('.row > :nth-child(1)').contains("Mouth")
    cy.get('.row > :nth-child(1)').contains("Wishlist")
    cy.get('.row > :nth-child(1)').contains("Buy NFT")
  });

  it('should filter brosweNFT page', () => {
    cy.visit('http://localhost:4200/browseNFT')
    cy.get(':nth-child(1) > #flexCheckDefault').click();
  });

  it('should add to wishlist on brosweNFT page', () => {
    cy.visit('http://localhost:4200/browseNFT')
  });


  it('should buy NFT on brosweNFT page', () => {
    cy.visit('http://localhost:4200/browseNFT')
  });

});
