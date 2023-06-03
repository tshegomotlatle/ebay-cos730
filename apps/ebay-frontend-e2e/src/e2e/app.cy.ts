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
    cy.get('#flexCheckDefaultNose0').click({ force: true });
    cy.contains('Previous owners').should('not.exist')
    cy.contains('Rarity').should('not.exist')
    cy.contains('ZAR').should('not.exist')
  });

  it('should add to wishlist on brosweNFT page', () => {
    cy.visit('http://localhost:4200/browseNFT')
    cy.get(':nth-child(1) > .buttonContainer > :nth-child(1)').click({ force: true });
    cy.get('.modal-footer > .btn').click({ force: true });
  });


  it('should buy NFT on brosweNFT page', () => {
    cy.visit('http://localhost:4200/browseNFT')
    cy.get(':nth-child(1) > .buttonContainer > :nth-child(3)').click({ force: true });
    cy.get('.col-5').contains("NFT Name")
    cy.get('.col-5').contains("Description")
    cy.get('.col-5').contains("Atrributes:")
    cy.get('.col-5').contains("Skin Colour")
    cy.get('.col-5').contains("Eyes")
    cy.get('.col-5').contains("Nose")
    cy.get('.col-5').contains("Mouth")
    cy.get('.col-5').contains("Rarity")
    cy.get('.col-5').contains("ZAR")
  });

  it('should mint NFT', () => {
    cy.visit('http://localhost:4200/mintNFT')
    cy.get('.col-5').contains("NFT Name")
    cy.get('.col-5').contains("Description")
    cy.get('.col-5').contains("Atrributes:")
    cy.get('.col-5').contains("Skin Colour")
    cy.get('.col-5').contains("Eyes")
    cy.get('.col-5').contains("Nose")
    cy.get('.col-5').contains("Mouth")
    cy.get('.col-5').contains("Rarity")
  });

  it('should show myNFT component', () => {
    cy.visit('http://localhost:4200/myNFT')
    cy.get('.row > :nth-child(1)').contains("Previous Owners");
    cy.get('.row > :nth-child(1)').contains("Rarity");
    cy.get('.row > :nth-child(1)').contains("Favourites");
    cy.get('.row > :nth-child(1)').contains("Sell NFT");
    cy.get('.row > :nth-child(1)').contains("Skin")
    cy.get('.row > :nth-child(1)').contains("Eyes")
    cy.get('.row > :nth-child(1)').contains("Nose")
    cy.get('.row > :nth-child(1)').contains("Mouth")
    cy.get('.row > :nth-child(1)').contains("Rarity");
  });

  it('should add to favourites', () => {
    cy.visit('http://localhost:4200/myNFT')
    cy.get(':nth-child(1) > .buttonContainer > :nth-child(3)').click({ force: true });
    cy.get('.modal-footer > .btn').click({ force: true });

  });

  it('should sell an NFT', () => {
    cy.visit('http://localhost:4200/myNFT')
    cy.get(':nth-child(1) > .buttonContainer > .cart').click({ force: true });
    cy.get('.col-5').contains("NFT Name")
    cy.get('.col-5').contains("Description")
    cy.get('.col-5').contains("Atrributes:")
    cy.get('.col-5').contains("Skin Colour")
    cy.get('.col-5').contains("Eyes")
    cy.get('.col-5').contains("Nose")
    cy.get('.col-5').contains("Mouth")
    cy.get('.col-5').contains("Rarity")
  });

  it('should logout the user', () => {
    cy.visit('http://localhost:4200/myNFT');
    cy.get('.last > .nav-link').click({ force: true });
    cy.get('.border').contains("Email")
    cy.get('.border').contains("Password")
  });





});
