TypeScript Node VM Demo
===========================

可以利用node提供的vm在一个sandbox中执行代码。

如果需要使用`console`，可以将 console对象以context方式传进去。

```
npm install
npm start
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

