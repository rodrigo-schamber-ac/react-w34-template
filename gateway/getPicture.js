const apiKey = "ZlbqCV1n2S3DRVHo9beHBqpTxhZHKuYMa90lMwsB";
const url = "https://api.nasa.gov/planetary/apod";

export default async function getPicture(date) {

    try {
    
        const content = await fetch(`${url}?api_key=${apiKey}&date=${date}`);
        
        return content.json()
    
    } catch (error) {
    
        console.log(error)
    
    };

};