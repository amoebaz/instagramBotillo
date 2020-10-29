/* instagramBotillo */
/* type decode:
    1 - Like
    3 - Follow
    */


const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

// password = s7VZYP3wpR9S8!

const { username, password } = process.env

// console.log(username)
// console.log(password)
 

const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username, password, cookieStore })
//const client = new Instagram('','');
 
;(async () => {

    // Challenge
    // La url que devuelve el fallo al hacer login. Ejemplo:
    // (node:2464) UnhandledPromiseRejectionWarning: StatusCodeError: 400 - 
    // {"message":"checkpoint_required","checkpoint_url":"/challenge/14316028942/WZAXheLy36/",
    // "lock":false,"flow_render_type":0,"status":"fail"}
    //    const challengeUrl = '/challenge/14316028942/WZAXheLy36/';
    // Choice 1: recibir por email
    //    await client.updateChallenge({ challengeUrl, choice: 1 })
    // Verificacion del codigo recibido por email
    //    await client.updateChallenge({ challengeUrl, securityCode: 879416  })

    await client.login()

    const lolo_es = await client.getUserByUsername({username: 'lolo_es'});
    
//    console.log(lolo_es.edge_related_profiles.edges[0]);
//    console.log(lolo_es);
// Obtener la info de otra cuenta
/*
    indice_followers = '';
    const followers = await client.getFollowers({ userId: lolo_es.id, first: 100, after: indice_followers});
    console.log(followers);
    console.log(indice_followers);
*/
// Activity
const activity = await client.getActivity()
console.log(activity);


/*        var a = []

        for (i=0; i<100; i++) {
            item = activity.activity_feed.edge_web_activity_feed.edges[i]
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
*/

})()

