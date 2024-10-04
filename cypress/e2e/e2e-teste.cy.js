///<reference types="cypress"/>

describe('Teste de ponta a ponta em Saucelabs', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

         //login com comandos customizados
        cy.login('rafael.sales7x@gmail.com', '1234567')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')    });

    it('Deve fazer o pedido de ponta a ponta', () => {
        //visitando e selecionando produtos
       cy.get('#primary-menu > .menu-item-629 > a').click()
       cy.compra()
       cy.get('.woocommerce-message').should('exist')
       cy.get('.woocommerce-message > .button').click()
       cy.get('.checkout-button').click()
       //Fazendo checkout
       cy.checkout()
       cy.get('.woocommerce-notice').should('exist')
      })
      
    })
    
       
   
       
   