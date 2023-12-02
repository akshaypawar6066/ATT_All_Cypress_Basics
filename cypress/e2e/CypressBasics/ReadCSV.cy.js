describe('Reading CSV File', ()=>
{
    it.skip("Reading Data from CSV File", () => {
        const fileName="./cypress/fixtures/SampleDataRead.csv";
        cy.task("readFromCSV",fileName).then((csvdData)=>
        {

           console.log(csvdData);
           cy.log(readData.Sheet1[1].A);
         
   
        })
       });
})