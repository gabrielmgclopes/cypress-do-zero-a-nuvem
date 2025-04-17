describe( ' Testes - Central de Atendimento CACT - TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
        cy.title('Central de Atendimento ao Cliente TAT').should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatórios e envia formulário', () => {

        // Preenche o nome e valida se o valor digitado está correto.

        cy.get('#firstName')
        .as('nome')
        .should('be.visible')
        .type('Gabriel')
        cy.get('@nome')
        .should('have.value', 'Gabriel')

        // Preenche o sobre nome e valida se o valor digitado está correto.
        cy.get('#lastName')
        .as('sobrenome')
        .should('be.visible')
        .type('Mendonça')
        cy.get('@sobrenome')
        .should('have.value', 'Mendonça')

        // Preenche o e-mail e valida se está conforme o valor digitado
        cy.get('#email')
        .as('email')
        .should('be.visible')
        .type('gabrielmlopes97@gmail.com')
        cy.get('@email')
        .should('have.value', 'gabrielmlopes97@gmail.com')

        // Preenche o telefone e valida se número está conforme digitado.
        cy.get('#phone')
        .as('telefone')
        .should('be.visible')
        .type('62992177863', {delay: 0})
        cy.get('@telefone')
        .should('have.value', '62992177863')

        // Seleciona o tipo do produto  
        cy.get('#product')
        .as('produto')
        .should('be.visible')
        cy.get('@produto').select('Mentoria')

        // Escolhe o tipo de atendimento (Ajuda)
        cy.get('#support-type > :nth-child(2)').click()

        // Escolhe o contato preferencial
        cy.get('[for="email-checkbox"]').click()

        // Digita o feedback
        cy.get('#open-text-area').type('Muito obrigado pelo curso!!')

        // Envia formulário
        cy.get('.button')
        .click()

        // Valida se formulario foi enviado com sucesso
        cy.get('[class="success"]')
        .should('be.visible')
    }) 


        it('Preenche e-mail incorreto', () => {
             // Preenche o nome e valida se o valor digitado está correto.

        cy.get('#firstName')
        .as('nome')
        .should('be.visible')
        .type('Gabriel')
        cy.get('@nome')
        .should('have.value', 'Gabriel')

        // Preenche o sobre nome e valida se o valor digitado está correto.
        cy.get('#lastName')
        .as('sobrenome')
        .should('be.visible')
        .type('Mendonça')
        cy.get('@sobrenome')
        .should('have.value', 'Mendonça')

        // Preenche o e-mail e valida se está conforme o valor digitado
        cy.get('#email')
        .as('email')
        .should('be.visible')
        .type('gabrielmlopes97@Teste')
        cy.get('@email')
        .should('have.value', 'gabrielmlopes97@Teste')


         // Preenche o telefone e valida se número está conforme digitado.
         cy.get('#phone')
         .as('telefone')
         .should('be.visible')
         .type('62992177863', {delay: 0})
         cy.get('@telefone')
         .should('have.value', '62992177863')
 
         // Seleciona o tipo do produto  
         cy.get('#product')
         .as('produto')
         .should('be.visible')
         cy.get('@produto').select('Mentoria')
 
         // Escolhe o tipo de atendimento (Ajuda)
         cy.get('#support-type > :nth-child(2)').click()
 
         // Escolhe o contato preferencial
         cy.get('[for="email-checkbox"]').click()
 
         // Digita o feedback
         cy.get('#open-text-area').type('Muito obrigado pelo curso!!')
 
         // Envia formulário
         cy.get('.button')
         .click()


        // Valida se mensagem de erro apareceu ao enviar email incorreto
         cy.get('[class=error]').should('be.visible')
        })
        it('Preenche formulário com caracter no campo de telefone', () => {
            // Preenche o nome e valida se o valor digitado está correto.

       cy.get('#firstName')
       .as('nome')
       .should('be.visible')
       .type('Gabriel')
       cy.get('@nome')
       .should('have.value', 'Gabriel')

       // Preenche o sobre nome e valida se o valor digitado está correto.
       cy.get('#lastName')
       .as('sobrenome')
       .should('be.visible')
       .type('Mendonça')
       cy.get('@sobrenome')
       .should('have.value', 'Mendonça')

       // Preenche o e-mail e valida se está conforme o valor digitado
       cy.get('#email')
       .as('email')
       .should('be.visible')
       .type('gabrielmlopes97@Teste')
       cy.get('@email')
       .should('have.value', 'gabrielmlopes97@Teste')


        // Tenta preencher telefone com caracteres, sistema deve deixar campo vazio.
        cy.get('#phone')
        .as('telefone')
        .should('be.visible')
        .type('ANC', {delay: 0})
        cy.get('@telefone')
        .should('have.value', '')

       })
       
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {

        // Preenche o nome e valida se o valor digitado está correto.

        cy.get('#firstName')
        .as('nome')
        .should('be.visible')
        .type('Gabriel')
        cy.get('@nome')
        .should('have.value', 'Gabriel')
        cy.get('@nome')
        .clear()
        .should('have.value', '')

        // Preenche o sobre nome e valida se o valor digitado está correto.
        cy.get('#lastName')
        .as('sobrenome')
        .should('be.visible')
        .type('Mendonça')
        cy.get('@sobrenome')
        .should('have.value', 'Mendonça')
        cy.get('@sobrenome')
        .clear()
        .should('have.value', '')

        // Preenche o e-mail e valida se está conforme o valor digitado
        cy.get('#email')
        .as('email')
        .should('be.visible')
        .type('gabrielmlopes97@gmail.com')
        cy.get('@email')
        .should('have.value', 'gabrielmlopes97@gmail.com')
        cy.get('@email')
        .clear()
        .should('have.value', '')

        // Preenche o telefone e valida se número está conforme digitado.
        cy.get('#phone')
        .as('telefone')
        .should('be.visible')
        .type('62992177863', {delay: 0})
        cy.get('@telefone')
        .should('have.value', '62992177863')
        cy.get('@telefone')
        .clear()
        .should('have.value', '')
    }) 

})