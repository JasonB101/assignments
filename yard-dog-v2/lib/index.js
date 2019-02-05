const request = require("request")
module.exports = (() => {
    //write methods here
    const convertVIN = vin => {
        return new Promise((res, rej) => {
            request(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`, (err, response) => {
                if (err) rej(err);

                const data = JSON.parse(response.body).Results[0]
                const carData = {
                    vin: vin,
                    year: data.ModelYear,
                    make: data.Make,
                    model: data.Model,
                    series: data.Series,
                    parts: []
                }

                res(carData);
            })
        })
    }

    const getFromEbay = data => {
        
        const keywords = `${data.year}%20%22${data.make}+${data.model}%22`
        const filters = ["categoryId=6030", "sortOrder=PricePlusShippingHighest", "itemFilter(0).name=Condition", "itemFilter(0).value=Used", "itemFilter(1).name=MaxPrice", "itemFilter(1).value=300.00", "itemFilter(2).name=HideDuplicateItems", "itemFilter(2).value=true", "itemFilter(3).name=SoldItemsOnly", "itemFilter(3).value=true", "itemFilter(4).name=FreeShippingOnly", "itemFilter(4).value=true"].reduce((sum, x, i, a) => {
            return i !== a.length - 1 ? sum + x + "&" : sum + x
        }, "")
        const url = `https://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findCompletedItems&SECURITY-APPNAME=JasonBro-TestDriv-PRD-360b9b3c7-e7c866e5&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=100&keywords=${keywords}&${filters}`

        return new Promise((res, rej) => {
            request(url, (err, response) => {
                if (err) rej(err);
                const parts = JSON.parse(response.body).findCompletedItemsResponse[0].searchResult[0].item || [];
                const ebayData = {
                    ...data,
                    parts
                }
                
                res(ebayData)
            })
        })
    }

    return {
        // reference methods here
        convertVIN,
        getFromEbay
    }
})()