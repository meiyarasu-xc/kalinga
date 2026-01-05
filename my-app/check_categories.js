const https = require('https');

const url = "https://kalinga.dupebox.com/api/news-events/";

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.results) {
                const categories = [...new Set(json.results.map(item => `${item.category}: ${item.category_name}`))];
                console.log("Categories found:", categories);
            } else {
                console.log("No results found");
            }
        } catch (e) {
            console.error("Error parsing JSON", e);
        }
    });

}).on('error', (e) => {
    console.error(e);
});
