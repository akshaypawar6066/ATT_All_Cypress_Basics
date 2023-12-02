import '@4tw/cypress-drag-drop'
describe("Mouse actions Handling In Cypress", ()=>
{
    it('Handling Of Mouse Actions--->Drag-n-Drop Using Built in trigger event in cypress', ()=>
    {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#actions").invoke('removeAttr', 'target').click();

        //Mouse Down----->Move the Mouse uptp Traget---->MouseUp
        cy.get('#draggable').trigger('mousedown',{which:1});
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true});
    })

    it('Handling Of Mouse Actions--->Drag-n-Drop Using drag-n-drop plugin', ()=>
    {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#actions").invoke('removeAttr', 'target').click();


        cy.get('#draggable').drag('#droppable',{force:true});
    })
})