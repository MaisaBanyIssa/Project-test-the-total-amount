///<reference types= "cypress" />
describe('test the total amount', () => {
    it('mens-tops-hodies and Sweatshirts', () => {
        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html");
        cy.get(':nth-child(5) > .field > .control > #limiter').select("36")
        cy.get(".price-box .price-final_price").as("PriceOfTheHodies");
        cy.get("@PriceOfTheHodies").find(".price").invoke('text').as("ItemPrice");
        cy.get("@ItemPrice").then((pricetext)=>{
            let myPriceList=pricetext.split("$");
            let total=0
            for (let i = 0; i < myPriceList.length; i++) {
                total += Number (myPriceList[i]);
                
            }
            cy.get(total)
        })
        
    });
    
});