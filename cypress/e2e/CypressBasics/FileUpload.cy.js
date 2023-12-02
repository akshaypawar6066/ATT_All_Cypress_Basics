import 'cypress-file-upload';
describe('File Uplaoding', () => {
    let testData;
    before('Hook for Getting Test Data', () => {
        cy.fixture('example.json').then((data) => {
            testData = data;
        })
    })
    it.only('File Upload with selectFile Method', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").then(($ele) => {
            let newUrl = $ele.prop("href");
            cy.visit(newUrl);
        })

        cy.get("[id='myFile']").selectFile("cypress/fixtures/DemoFile.txt");
        cy.get("#submit-button").click();

        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(testData.expectedAlertText);
        })
    });

    it('File Upload With attachFile Method of cypress-file-Uplaod Plugin', () => 
    {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").then(($ele) => {
            let newUrl = $ele.prop("href");
            cy.visit(newUrl);
        })

        cy.get("[id='myFile']").attachFile('DemoFile.txt');
        cy.get("#submit-button").click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(testData.expectedAlertText);
        })


    });

    it('File Upload With attachFile Method of cypress-file-Uplaod Plugin with Rename', () => 
    {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").then(($ele) => {
            let newUrl = $ele.prop("href");
            cy.visit(newUrl);
        })

        cy.get("[id='myFile']").attachFile({filePath:"DemoFile.txt", fileName:"MyFile.txt"});
        cy.get("#submit-button").click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(testData.expectedAlertText);
        })


    });

    it('File Upload With attachFile Method Using Drap and Drop', () => 
    {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke('removeAttr', 'target').click();

        cy.get("[id='myFile']").attachFile('DemoFile.txt', {subjectType:"drag-n-drop"});
        cy.get("#submit-button").click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(testData.expectedAlertText);
        })


    });
    it('Multiple File Upload', () => 
    {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        
        //Before file uploading 'No File Selected' will be visible
      cy.xpath("//li[text()='No Files Selected']").should('be.visible');

      cy.get("[id='filesToUpload']").attachFile(['Test1.pdf', 'Test2.pdf']);

     //After file uploading 'No File Selected' will not be visible
      cy.xpath("//li[text()='No Files Selected']").should('not.exist');




    })
})