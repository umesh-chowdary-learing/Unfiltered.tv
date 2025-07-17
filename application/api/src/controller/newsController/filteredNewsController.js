const dotenv = require("dotenv");
dotenv.config();

const filteredNewsController=async(req,next)=>{
    try {
        //console.log(`https://newsapi.org/v2/everything?q=${req.keyword}&apiKey=${process.env.API_KEY}`)
        const data=(await fetch(`https://newsapi.org/v2/everything?q=${req.keyword}&apiKey=${process.env.API_KEY}`)).json(); 

        return data
    } catch (error) {
        next(error)
    }
    

}

// {
//     "source": {
//         "id": null,
//         "name": "The New Republic"
//     },
//     "author": "Theda Skocpol",
//     "title": "How to Take Heart From What Really Worked in the First Resistance",
//     "description": "For\nmany Americans who voted against Donald Trump, the national news right now is\nhard to take, as Republican winners make over-the-top claims, business leaders bow\ndown, and U.S. senators endorse dangerously unqualified Cabinet nominees. Worst\nof all are hea…",
//     "url": "https://newrepublic.com/article/190574/trump-second-resistance-playbook",
//     "urlToImage": "https://images.newrepublic.com/e77426d90c4d9316af83d962bb84c11018f01d7a.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
//     "publishedAt": "2025-01-24T11:00:00Z",
//     "content": "Women and men in these grassroots\r\ngroups met regularly, informed themselves about the local implications of Trump\r\ninitiativesabove all about his push with Republicans to repeal Obamas\r\nAffordable C… [+1720 chars]"
// },



module.exports={filteredNewsController}