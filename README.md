1. 运行
``` js
$ npm start
```
2. 使用 swagger 接口获取 json 文件，修改
``` js
// 获取 json
function __readFileSync() {
	// swagger 接口获取 json
	// return getJsonByApiDocs()
	// 获取本地测试 json
	return getJsonByTestDocs()
}
```

3. windows 遇到的报错
``` js
UnhandledPromiseRejectionWarning: Error: EPERM: operation not permitted, mkdir 'C:\xxxx\xxxxxx\apis'
// 解决：
$ npm cache clean --force
```