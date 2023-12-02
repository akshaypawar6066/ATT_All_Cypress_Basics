import 'cypress-iframe';
describe('Iframe Handling', ()=>
{
  beforeEach('Naigating to required page:', ()=>
  {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#iframe').invoke('removeAttr', 'target').click();
  })
    it('Verify Iframe is handled or not', ()=>
    {
        /*
        
       cy.frameLoaded('#frame');
       cy.iframe('#frame').find('#button-find-out-more').should('have.text', 'Find Out More!').click();
       cy.iframe('#frame').find("div[class='modal-body'] p").should('include.text', 'laptops, game consoles, cameras...');
       cy.iframe('#frame').find("div[class='modal-footer'] button:nth-child(2)").should('be.visible');
       cy.wait(3000);
       cy.iframe('#frame').find("div[class='modal-footer'] button:nth-child(2)").should('be.visible').click();
    })
    */


cy.get('#frame').then((newFrame)=>
{
    const frame=newFrame.contents().find('body');
    cy.wrap(frame).as('iframe');

    cy.get('@iframe').find('#button-find-out-more').should('have.text', 'Find Out More!').click();
    cy.get('@iframe').find("div[class='modal-body'] p").should('include.text', 'laptops, game consoles, cameras...');
    cy.get('@iframe').find("div[class='modal-footer'] button:nth-child(2)").should('be.visible');
    cy.wait(3000);
       cy.get('@iframe').find("div[class='modal-footer'] button:nth-child(2)").should('be.visible').click();
})


})
})

 
    
