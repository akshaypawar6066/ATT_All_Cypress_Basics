describe('Use Of Invoke', () => {

    let contactData;
    before(() => {
        cy.fixture('example.json').then((data) => {
            contactData = data;
        })
    })


    it("Fill the form in the same tab", () => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get("a#contact-us").invoke('removeAttr', 'target').click();
        cy.get("input[name='first_name']").type('Akshay');
        cy.get("input[name='last_name']").type('Pawar');
        cy.get("input[name='email']").type('AkshayPawar123@gmail.com');
        cy.get("textarea[placeholder='Comments']").type('Demo_Comment');
        cy.get("[type='submit']").click();
        cy.wait(2000);    //To Wait for the fixed time
        let expectaedText = 'Thank You for your Message!';
        cy.get("div#contact_reply h1").invoke('text').then((text) => {
            let actulText = text;
            cy.log("Actual Test is:" + actulText);
            expect(actulText).to.equal(expectaedText);
        })

    });
    it("Test Data Taken from Fixtures folder", () => {

        cy.visit('https://www.webdriveruniversity.com/');
        cy.get("a#contact-us").invoke('removeAttr', 'target').click();
        cy.get("input[name='first_name']").type(contactData.firstName);
        cy.get("input[name='last_name']").type(contactData.lastName);
        cy.get("input[name='email']").type(contactData.Email);
        cy.get("textarea[placeholder='Comments']").type(contactData.Comment, {delay:100});
        cy.get("[type='submit']").click();
        cy.wait(2000);    //To Wait for the fixed time
        let expectaedText = 'Thank You for your Message!';
        cy.get("div#contact_reply h1").invoke('text').then((text) => {
        let actulText = text;
        cy.log("Actual Test is:" + actulText);
        expect(actulText).to.equal(expectaedText);
        })
    })

});