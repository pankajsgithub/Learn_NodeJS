const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

// fs.readFile(path.join(path.dirname('starter.txt'), 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data); // returns buffered data
//     // but if we define incoming as UTF-8 as second arg (Buffer Encoding) in readfile, then no issue
//     // console.log(data.toString()) // to get actual data, if no buffer encoding passed in 2nd arg
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Message to write into the file', (err, data) => {
//     if (err) throw err
//     console.log('Write Complete');
// })

// fs.appendFile(path.join(__dirname, "files", 'testfile'), 'This content is added to the file' , (err) => {
//     if (err) throw err
//     console.log('Append Complete');
// })

// process.on('uncaughtException', error => {
//     console.error('There was an uncaught error : ', error);
//     process.exit(1)
// })

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, '.', 'starter.txt'), 'utf-8')
        console.log('Data : ', data);
        
        await fsPromises.writeFile(path.join(__dirname, 'files', 'replytest.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'replytest.txt'), '\n\n This new content is added')
        await fsPromises.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'replynew.txt'))
        const newdata = await fsPromises.readFile(path.join(__dirname, 'files', 'replytest.txt'), 'utf-8')
        console.log('New Data : ', newdata);
    }
    catch (error) {
        console.log(error);
    }
}

fileOps()