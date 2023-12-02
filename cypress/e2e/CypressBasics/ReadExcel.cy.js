describe('Excel to JSON Converter', () => {

    it("Read Excel File", () => {
     const filePath="C:/Users/Admin/OneDrive/Desktop/FileReadCypress.xlsx"
     cy.task("excelToJson",filePath).then((readData)=>
     {
        console.log(readData);
        cy.log(readData.Sheet1[2].A);
        cy.log(readData.Sheet1[2].B);
        cy.log(readData.Sheet1[2].C);


     })
    });
   

});