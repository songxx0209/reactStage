#### 前端 - 单元测试

主要测试什么，测试那些内容？

单元测试：指的是以原件的单元为单位，对软件进行测试。单元可以是一个函数，也可以是一个模块或一个组件，基本特征就是只要输入不变，必定返回同样的输出。一个软件越容易些单元测试，就表明它的模块化结构越好，给模块之间的耦合越弱。React的组件化和函数式编程，天生适合进行单元测试





## jest

### 一、了解jest的基本用法？

### 二、jest用于测试什么场景，它和enyzme的区别？

### 三、如何在react项目中配置jest？

**安装相关依赖：**

```
npm i -D jest @types/jest ts-jest babel-jest
```

配置启动、jest配置

我们还需要使用`ts`：

```
npm i -D ts-jest #因为我们已经用上了 TypeScript 所以不需要多装一次
```

```
// package.json
{
  ...
  "scripts": {
    "test": "jest", // 启动jest
    ...
  }
  ...
  "jest": {
      "moduleFileExtensions": [
          "ts",
          "tsx",
          "js",
          "jsx"
      ],
      "transform": {
          "^.+\\.tsx?$": "ts-jest"
      },
      // 统一提前执行文件
      "setupFiles": ["<rootDir>/test/step.js"],
      // 匹配测试根目录下test文件夹下的.test.ts/tsx文件
      "testMatch": [
          "<rootDir>/test/**/?(*.)(spec|test).ts?(x)"
      ]
  }
}
```

**知识点：**

- 异步代码测试
  - 分块（作用域）describe，



- 快照测试

  ```
  cnpm i react-test-renderer --save-dev
  ```

  ```
  // 更新快照
  npm run test -- -u
  ```






## 四、Enzyme

**安装配置：**

测试react组件建议使用Enzyme

```
npm i -D enzyme @types/enzyme
复制代码
```

回到`ydjnb.spec.ts`中，现在因为涉及到`JSX`所以应该改名为`*.tsx`了

```
// ydjnb.spec.tsx
import { shallow } from 'enzyme'

test('Jest-React-TypeScript 尝试运行', () => {
  const renderer = shallow(<div>hello world</div>)
  expect(renderer.text()).toEqual('hello world')
})
复制代码
```

当然`shallow`只是一种“浅渲染”，它只会对当前组件渲染，做断言。一般测试除了关心数据还会关心交互，所以还会有另外两个方法`render`, `mount`。

**enzyme主要是做什么的，为什么要使用它**

