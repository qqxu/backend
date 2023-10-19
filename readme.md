### 启动

```
npm i

npm run dev
```


### 跨域

通过使用中间件，允许来自所有源的请求。

```
const express = require('express');
const app = express();

const cors = require('cors'); // 允许跨域
app.use(cors())

```
