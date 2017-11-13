const port = process.env.PORT || 3000
require('http')
  .createServer((req, res) => {
    console.log()
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.end('<h1>Hello World from CodeDeploy and CodePipeline</h1>')
  })
  .listen(port, (error)=>{
    console.log()
  })
