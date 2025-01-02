import express, { NextFunction, Request, Response } from "express";
import path from "path";

// 監聽埠號
const PORT = 9527;

//
let app = express();

// 跨域訪問
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 
app.use(express.static(path.join(__dirname)));

// 註冊請求
app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

// 監聽
app.listen(PORT, () => {
    console.log(`start listen port ${PORT}`);
});