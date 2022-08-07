export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rAQxs9uiRLFrrYqliOqRq1cTCcd5uq38&q=${category}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        img: img.images.downsized_medium.url
    }))
    return gifs;    
}