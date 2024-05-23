///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade: cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    it('Deve fazer o pedido de ponta a ponta', () => {

        //login usando fixture
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, bruno.teste (não é bruno.teste? Sair)')
        })
      
    })
        //selecionando produtos
          it('deve selecionar produtos', () => {
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.contains('Aero Daily Fitness Tee').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Brown').click()
            cy.get('.input-text').clear().type(2)

            //carrinho
            cy.get('.single_add_to_cart_button').click()
            cy.get('#primary-menu > .menu-item-629 > a').click()

            //checkout
            cy.contains('Arcadio Gym Short').click()
            cy.get('.button-variable-item-34').click()
            cy.get('.button-variable-item-Black').click()
            cy.get('.input-text').clear().type(2)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#billing_first_name').type('Bruno')
            cy.get('#billing_last_name').type('rafael')
            cy.get('#select2-billing_country-container').click()
            cy.get('.select2-search__field').type('Brasil')
            cy.get('#billing_city_field > label').click()
            cy.get('#billing_address_1').type('teste123')
            cy.get('#billing_city_field > label').click()
            cy.get('#billing_city').type('caieiras')
            cy.get('#billing_state_field > label').click()
            cy.get('#select2-billing_state-container').type('Sãopaulo').click()
            cy.get('#billing_postcode_field > label').click()
            cy.get('#billing_postcode').type('00000000')
            cy.get('#billing_phone_field > label').click()
            cy.get('#billing_phone').type('1100110011')
            cy.get('#billing_email_field > label').click()
            cy.get('#billing_email').clear().type('rafael.sales@gmail.com')
            cy.get('#payment_method_bacs').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()    

            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
       });
           
   });
    