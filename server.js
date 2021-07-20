const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) // 미들웨어에 실행시켜주기 

app.get('/api', (req, res) => {
    // 데이터는 DB에 접속해서 select -> 객체로 만들어서 응답 주기 
    res.json([{
        userid: '아이디',
        content: '댓글',
        date: '2021-07-15',
    }])
})

app.listen(3000, () => {
    console.log(`server port : 3000`)
})