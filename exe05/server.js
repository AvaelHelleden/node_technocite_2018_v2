const fs= require('fs')

// fs.readFile(`${process.cwd()}/datas/file1.txt`,(err,data)=>{
//     let allData = ''
//     allData += data
//     fs.readFile(`${process.cwd()}/datas/file2.txt`,(err,data)=>{
//         allData += data
//         console.log(allData)
//     })
// })
const readFile = (file)=>{
    // let filePromise = new Promise((resolve,reject)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,{encoding:'utf-8'},(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
    // return filePromise;
}

// readFile(`${process.cwd()}/datas/file1.txt`)
//     .then(data=>{
//         console.log(data)
//         readFile(`${process.cwd()}/datas/file2.txt`)
//             .then(data=>{
//                 console.log(data)
//             }).catch(err=>{
//                 console.log(err)
//             })
//         })

Promise.all([readFile(`${process.cwd()}/datas/file1.txt`), readFile(`${process.cwd()}/datas/file2.txt`)])
    .then(results=>{
        console.log(results)
    }).catch(err=>{
            console.log(err)
    })
        