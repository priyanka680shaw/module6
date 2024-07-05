const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio')
const xlsx = require('xlsx');

const data = "./data2.txt"
//const pageurl = `https://www.amazon.in/s?k=phone&page=2&crid=1USBP91SEGTPC&qid=1719566147&sprefix=pho%2Caps%2C267&ref=sr_pg_2`;
const pageurl = 'http://books.toscrape.com/'
const getpageData = async () => {
    try {
        const response = await fetch(pageurl, {
            headers: { "content-type": "text/html" }
        });

        const data = await response.text();
        console.log("amazon" , data)
        // Extract specific data using regex or a parser
        // const productTitles = data.match(/<span class="a-size-medium a-color-base a-text-normal">([^<]+)<\/span>/g)
        //     .map(title => title.replace(/<\/?[^>]+(>|$)/g, "")); // Remove HTML tags

        // Format the data as a readable string
        // const formattedData = productTitles.join('\n');

        // Write the formatted data to a text file
        fs.writeFileSync("data2.txt", data);

        console.log("Data has been written to data.txt");
    } catch (err) {
        console.log("Error occurred:", err);
    }
}

//getpageData();

//readding file
const rd = fs.readFileSync(data)
//console.log(rd.toString());
const $ = cheerio.load(rd.toString());
//console.log($)
const price = $(".price_color")
//console.log(price);
price.each((idx , ele)=>("getting Ele" ,$(ele).text()))
//ratings booksname price
//img url
const imgUrl = $(".image_container img");
//imgUrl.each((idx , ele)=>console.log("img" , $(ele).attr('src')))
//console.log("image Link" ,  imgUrl)
//collectData
const collectData = {
        "imgUrl" : imgUrl.each((idx , ele)=>("img" , $(ele).attr('src')))
    }

console.log("coll" , collectData)
// //exele file created
// //workbook
// const workbook = xlsx.utils.book_new();
// //sheets
// const sheet = xlsx.utils.json_to_sheet(collectData);
// //attach the workbook top the seet
// xlsx.utils.book_append_sheet(workbook , sheet , "sheet1")
// //save workbook to the file 
// xlsx.writeFile(workbook , "Output.xlsx")
// console.log('XLSX file created successfully!');