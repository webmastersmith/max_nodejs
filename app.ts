import http from 'http'

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req.url, req.method, req.headers) //returns the request object
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html')
      res.write('<html>')
      res.write('<head><title>Node.js</title></head>')
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Send</button> </form></body>'
      )
      res.write('</html>')
      return res.end() //return stops code from continuing.
    }

    //no match send this
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node.js</title></head>')
    res.write('<body><h1>Hello from Node.js Server!</h1></body>')
    res.write('</html>')
    res.end()
  }
)

server.listen(3000) //port stays open
