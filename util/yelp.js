const yelp = require('yelp-fusion');
let token;

//anonymous function stuff so we can get the async await in
(async function(){
    //should we store these passcodes on git? NO, will we do it anyway? yes...
    token = await yelp.accessToken('Ni4to9KYA2t2YSriASMoKQ', 'KXlRc44bytk7U8bpNunMZhQeTxU6C9KEmNtaHpd2fmdssiaNI8GqrordDZH4eZmR').jsonBody.access_token;
})()

const client = yelp.client(token);

const search = async function(category, latitude, longitude){
    let locations = await client.search({
        category: category,
        latitude: latitude,
        longitude: longitude
    }).jsonBody.businesses
    return locations;
}

const autocomplete = async function(){
    let suggestions = await client.autocomplete({
        text:'pizza'
    }).map()
}



module.exports = {
    search,

};