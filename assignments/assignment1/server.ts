import http from 'http'

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const bodyParser = Buffer.concat(body).toString()
      const user = bodyParser.split('=')[1].replaceAll('+', ' ')
      console.log(user)
      res.writeHead(302, {
        Location: './users',
      })
      return res.end()
    })
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>assignment 1</title></head>')
    res.write('<body>')
    res.write('<ul><li>Bob</li><li>John</li><li>Bill</li></ul>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>assignment 1</title></head>')
  res.write('<body>')
  res.write('<h1>hello bryon</h1>')
  res.write(
    '<form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Submit</button></form>'
  )
  res.write('</body>')
  res.write('</html>')
  res.end()
})

server.listen(3000)
