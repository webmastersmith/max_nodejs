import http from 'http'
import fs from 'fs'

export function requestHandler(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const method = req.method

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

  // redirect to index.html
  if (req.url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    return req.on('end', () => {
      //node will keep going below if this is not returned.
      const parseBody = Buffer.concat(body)
      const data = decodeURIComponent(parseBody.toString())
        .replaceAll('+', ' ')
        .split('=')[1]
      console.log(data)
      fs.writeFile('./message.txt', data, (err) => {
        if (err) console.log(err)
        res.writeHead(302, {
          Location: '/',
        })
        return res.end()
      })
    })
  }

  //no match send this
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Node.js</title></head>')
  res.write('<body><h1>Hello from Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
}
