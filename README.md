## 本地存储调用说明

### 若要支持IE8以下浏览器，需要添加JSON2.js

---

## 参数

```
[fileName]:"存储文件名"
[expires]:"存储时间,单位为天,默认为0."
[type]:"存储类型,默认为json."
```

## 调用方式

### babel

```
import StoragePolyfill from '@cnpm/storage';

let storage = new StoragePolyfill(fileName, expires, type);
```

### 普通引入方式

* #### 引入js文件

> `<script type="text/javascript" src="http://n3.static.pg0.cn/fp/storage/dist/storage.js">`

* #### 调用

> `var storage = new StoragePolyfill(fileName, expires, type);`


### AMD
```
require(['@cnpm/storage'], function(StoragePolyfill){

  var storage = new StoragePolyfill(fileName, expires, type);

})
```

### Node
  * #### 安装

  > `npm install '@cnpm/storage';`

  * #### 使用

  > `var StoragePolyfill = require('@cnpm/storage');`

## 设置方法
`storage.set(key, value, type);`

## 获取方法
`storage.get(key, type);`

## 删除方法
`storage.remove(key)`
