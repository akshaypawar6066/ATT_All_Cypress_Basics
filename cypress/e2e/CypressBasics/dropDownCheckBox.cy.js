describe('Basic Element Testing', () => {
    beforeEach(() => {

        //beforeAll & afterAll
        //beforeEach & //afterEach

        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

    })
    it('DropDown Handling', () => {

        cy.get("#dropdowm-menu-1").select('SQL');   //Select by visible text
        cy.get("#dropdowm-menu-2").select(1);      //select by index
        cy.get("#dropdowm-menu-3").select('jquery');   //Select by value
        cy.wait(2000);
        cy.get("#dropdowm-menu-3").should('have.text', "Akshay")

    })

    it('CheckBox Handling', () => {
        cy.get("input[value='option-1']").should('not.be.checked').check();
        cy.get("input[value='option-3']").should('be.checked').uncheck();
    })

    it.skip('Radio Button Handling', () => {
        cy.get("[value='blue']").click();

    })

    //it.skip()--->To SKip any It block
    //it.only()----.To Execute any specific it block.



})