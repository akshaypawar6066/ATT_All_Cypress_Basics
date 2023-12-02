describe('Alerts Handling', ()=>
{
    beforeEach(()=>
    {
        cy.visit('https://www.webdriveruniversity.com/'); 
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
     })


     it('Handling Basic JS alerts', ()=>
     {
        cy.get('#button1').click();
        cy.on('window:alert', (t)=>
        {
            expect(t).to.equal('I am an alert box!');
        })
     });

     it('Handling Confrim JS Alert With Ok Button', ()=>
     {
         cy.get('#button4').click();

         cy.on('window:confirm', (t)=>
         {
            expect(t).to.equal('Press a button!');
         })
         cy.get('#confirm-alert-text').should('exist').and('have.text','You pressed OK!');
     });

     it.only('Handling Confrim JS Alert With Cancel Button', ()=>
     {
         cy.get('#button4').click();
         cy.on('window:confirm', (t)=>
         {
            expect(t).to.equal('Press a button!');
         })

         cy.on('window:confirm', (messageOnAlert)=>
         {
           expect(messageOnAlert).to.equal('Press a button!');
            return false
         });
          

         cy.get('#confirm-alert-text').should('exist').and('have.text','You pressed Cancel!');
     })

})