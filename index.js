

console.log("hello")
const button = document.querySelector('button');

  async function fetchData() {
    document.getElementById("urldisplay").innerHTML = "Plz Wait For The Short Url"
    let longurl = document.getElementById("url").value
    document.getElementById("url").value = " "
      console.log(longurl)
    let url = "https://yjbh6npq8c.execute-api.us-east-1.amazonaws.com/production/url/shorten"

    let data = await axios({
        method: 'post',
        url: url,
        data: {
            longUrl: longurl
        }
    });
     let shortUrl = data.data.data.shortUrl
     console.log(shortUrl)
    
     document.getElementById("urldisplay").innerHTML= shortUrl 
     
}


button.addEventListener("click",fetchData)
