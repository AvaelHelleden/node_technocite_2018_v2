const fs= require('fs')
module.exports = (req, res) => {
    fs.readFile(`${process.cwd()}/templates/index.html`,{ encoding:'utf-8'},(err,data)=>{
        if(err) {
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end('The server has a problem please try later')
        }else{
            fs.readFile(`${process.cwd()}/template`,{encoding: 'utf-8'},(err,data)=>{
                if(err){
                    res.writeHead(404,{'Content-TYpe':'text/html'})
                    res.end('File Not found')
                } else {
                    res.end(generateHtml(data,json))
                }
            })
        }
    })
}