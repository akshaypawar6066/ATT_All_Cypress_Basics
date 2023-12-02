describe('WebTables Handling',()=>
{
    beforeEach('Navigating To table', ()=>
    {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#data-table").invoke('removeAttr', 'target').click();
    })
    it('Handling of WebTables in Cypress and adding the Ages ', () => {
        let sumOfAges = 0;
        let age;
    
        cy.get('#thumbnail-1 td:nth-child(3)').each(($col, index, $cols) => {
            let no = $col.text().trim();
            age = parseInt(no, 10);
            if (!isNaN(age)) {
                sumOfAges = sumOfAges + age;
            }
        
        }).then(() => {
            cy.log(("Sum Of ll the Ages are: " + sumOfAges));
            expect(sumOfAges).to.equal(322);
            cy.wrap(sumOfAges).should('eq', 322);
            
        })

        //But here we used "#thumbnail-1 td:nth-child(3)" this css but there is possibility that any header of the table can be removed.
        //So another way is to iterate all the elements from the table and store it in array and slect only numbers from the array
      
        
    })
    it('Counting Age by considering all the table elements', ()=>
    {
        let age=0;
        let tableElements=[];
        cy.get('#thumbnail-1>table>tbody>tr>td').each(($ele, index, $list)=>
        {
            tableElements[index] = $ele.text();
        }).then(()=>
        {
            for(let i=0; i<tableElements.length; i++)
            {
               if(Number(tableElements[i]))
               {
                age=age+Number(tableElements[i]);
               }
            }

            cy.log('Addition of all the age is:'+age);
            expect(age).to.equal(322);
        })
    })
})

