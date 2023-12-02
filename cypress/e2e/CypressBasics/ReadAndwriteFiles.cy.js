describe('Write and Rad Files in Cypress', ()=>
{
    it('Writing of files in text file in Cypress', ()=>
    {
        cy.writeFile('./cypress/fixtures/testFileForWriteData.txt', 'This is file created for writing data into it', )

    });

    
    it('Writing of files in JSON File in  Cypress', ()=>
    {
        cy.writeFile('./cypress/fixtures/testFileForWriteData.json', {"Username":"Akshay", "password":"Akshay@6066", "pin":"143"} )

    });

   it('Reading Data from the JSON file', ()=>
   { 
    cy.readFile("cypress/fixtures/testFileForWriteData.json").then((fileContent)=>
    {
        cy.wrap(fileContent.Username).should('eq', "Akshay");
        expect(fileContent.Username).to.equal('Akshay');
        const jsonString = JSON.stringify(fileContent, null, 2); // The third argument (2) is for indentation
        cy.log(jsonString);
        cy.wrap(fileContent.pin).should('eq', "143");
        cy.wrap(fileContent).should('have.property', 'password');
        cy.readFile('cypress/fixtures/testFileForWriteData.json').should('have.property', 'password');
    

    })
   });

   it('Reading data from text file', ()=>
   {
    cy.readFile('cypress/fixtures/testFileForWriteData.txt').then((fileContent)=>
    {
        cy.log(fileContent);
    })
   })

})