///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    it('Deve fazer o pedido de ponta a ponta', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('senha123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

           ///Adicionar produto
           cy.contains('Aero Daily Fitness Tee').click()
           cy.get('.button-variable-item-S').click()
           cy.get('.button-variable-item-Brown').click()
           cy.get('.input-text').clear().type(2)
           cy.get('.single_add_to_cart_button').click()
           cy.get('#primary-menu > .menu-item-629 > a').click()
   
           cy.contains('Arcadio Gym Short').click()
           cy.get('.button-variable-item-34').click()
           cy.get('.button-variable-item-Black').click()
           cy.get('.input-text').clear().type(2)
           cy.get('.single_add_to_cart_button').click()
           cy.get('.woocommerce-message > .button').click()
   
           ///concluindo compra
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


           






         
       });
   });
    
    
