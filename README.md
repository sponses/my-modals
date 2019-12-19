# 移动端弹出框

## 如何使用

``` 
import createModals from '代码存放路径'

//构造函数接收四个参数：
//标题（string），内容（string），确认回调（function），取消回调（function）
let modals = new createModals('title','content',canfirmCallback,cancelCallback)

//显示弹出框
modals.show()
```
