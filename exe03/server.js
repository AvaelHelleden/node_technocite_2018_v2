// récupération donnee
//
// const http = require('http')
// const fs = require('fs')
// http.get('http://www.pass.be',res => {
//     res.setEncoding('utf-8')
//     let body = ''
//     res.on('data', donnee =>{
//        body += donnee
//     })
//     res.on('end',()=>{
//         console.log('end')
//         fs.writeFile('index.html', body,(err)=>{
//             if (err) console.log(err)
//             console.log('file generated')
//         })
//     })
// })

// const http = require('http')
// const fs = require('fs')
// // http.get('http://www.pass.be',res => {
// // http.get('http://www.triptyk.eu',res => {
// http.get('http://www.mons.be',res => {
//     res.setEncoding('utf-8')
//     let body = ''
//     res.on('data', donnee =>{
//        body += donnee
//     })
//     console.log('ok1')
//     res.on('end',()=>{
//         http.get('http://www.triptyk.eu',res => {
//             res.setEncoding('utf-8')
//             res.on('data', donnee =>{
//             body += donnee
//             })
//             console.log('ok2')
//             res.on('end',()=>{
//                 http.get('http://www.pass.be',res => {
//                     res.setEncoding('utf-8')
//                     res.on('data', donnee =>{
//                     body += donnee
//                     })
//                     console.log('ok3')
//                     res.on('end',()=>{
//                         console.log('end')
//                         fs.writeFile('index.html', body,(err)=>{
//                             if (err) console.log(err)
//                                 console.log('file generated')
//                         })
//                     })
//                 })        
//             })        
//         })
//     })
// })

// ou

const http = require('http')
const fs = require('fs')
const values = []
const sitesToHack = ['http://www.pass.be', 'http://www.triptyk.eu', 'http://www.mons.be']
let sitesLoaded = 0
const getPageFromSiteAndStock = (url)=>{
    http.get(url,res=>{
        let body =''
        res.on('data', data=>{
            body += data
        })
        res.on('end',()=>{
            console.log(`end of loading ${url}`)
            values.push(body)
            checkFinishedProcess()
        })
    })
}
const checkFinishedProcess =() => {
    sitesLoaded++
    if(sitesLoaded === sitesToHack.length){
        console.log('all page are saved in the file')
        const tmpStr = values.reduce((prev,current)=>{
            return `${prev}\n${current}`
        })
        fs.writeFile('results.html',tmpStr,(err)=>{
            if (err) console.log(err)
            console.log('all sites are saved')
        })
    }
}
const init = ()=>{
    sitesToHack.map(item => getPageFromSiteAndStock(item))
}
init()