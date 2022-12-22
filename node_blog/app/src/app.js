const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req,res) => {
  const [ path,queryString = '' ] =  req.url.split('?')
  let query = querystring.parse(queryString)
  const result = {
    path,
    query
  }
  console.log(result)
  res.setHeader("Content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(result))
})

server.listen(3000,() => {
  console.log(`server listen on 3000`)
})