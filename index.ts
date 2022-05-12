import fs from 'node:fs/promises'
import path from 'path'
;(async function () {
  try {
    await fs.writeFile('./test.txt', 'hello world!')
  } catch (e) {
    console.error(e)
  }
})()
