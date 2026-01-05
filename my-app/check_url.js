const https = require('https');

const url = "https://kalinga.dupebox.com/api/news-events/legal-aid-cell-commemorates-the-76th-year-of-the-indian-constitution/";

https.get(url, (res) => {
    console.log('StatusCode:', res.statusCode);
    console.log('Headers:', res.headers);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Body:', data.substring(0, 500)); // First 500 chars
    });

}).on('error', (e) => {
    console.error(e);
});
