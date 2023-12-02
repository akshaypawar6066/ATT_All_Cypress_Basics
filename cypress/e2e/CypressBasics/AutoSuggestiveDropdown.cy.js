describe('Autosuggestive DropDowns', ()=>
{
    it('Handling Auto Suggestive DropDowns', ()=>
    {
        cy.visit("https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html");
        cy.get('#myInput').should('be.visible').type('c');

       // cy.get('#myInputautocomplete-list>div').contains('Chicken').click();
       cy.get("#myInputautocomplete-list>div").each(($ele, index, $elements)=>
       {
        if($ele.text()=='Chicken')
        {
            cy.wrap($ele).click();
        }
       })


        cy.get('#submit-button').click();
        cy.url().should('include','Chicken');
        cy.url().should('contain','Chicken');
   
    });


    it('Handling Auto Suggestive DropDowns using Custom Commands', ()=>
    {
        cy.visit("https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html");
        cy.selectApprirateValueFromAutoSuggestiveDropdown();
    });


})