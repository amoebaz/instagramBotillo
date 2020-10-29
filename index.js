/* instagramBotillo */
/* type decode:
    1 - Like
    3 - Follow
    */


const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

const { username, password } = process.env

console.log(username)
console.log(password)
 

const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username, password, cookieStore })
 
;(async () => {
    await client.login()
    //  const profile = await client.getProfile()
    const activity = await client.getActivity()
        
    //  console.log(profile)
//    console.log(activity)
    
//    console.log(activity.activity_feed)

    
        var a = []
//        console.log(item[0].node)
        for (i=0; i<100; i++) {
            item = activity.activity_feed.edge_web_activity_feed.edges[i]
//            console.log(item)
            const b = {}
            b.id = item.node.id
            b.type = item.node.type
            b.timestamp = item.node.timestamp
            b.__typename = item.node.__typename
            b.user = item.user
            b.media = item.media
            a.push(b);
        }
        console.log(a)


})()

