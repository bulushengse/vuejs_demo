/* 单元测试 */
<template>
  <div id="vvv">
<!--     cnpm install --save-dev jest @vue/test-utils
    cnpm install --save-dev vue-jest
    cnpm install --save-dev babel-jest

    //在 .babelrc 中:
    {
      "presets": [["env", { "modules": false }]],
      "env": {
        "test": {
          "presets": [["env", { "targets": { "node": "current" } }]]
        }
      }
    }

    //在 package.json 中定义一个单元测试的脚本
    "scripts": {
      //...
      "test": "jest"
    },

    //在 package.json 中创建一个 jest 块：
    "jest": {
      "moduleFileExtensions": [
        "js",
        "json",
        "vue"   // 告诉 Jest 处理 `*.vue` 文件
      ],
      "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1"  // 支持源代码中相同的 `@` -> `src` 别名
      },
      "transform": {
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest", // 用 `vue-jest` 处理 `*.vue` 文件
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"  // 用 `babel-jest` 处理 js
      }
    }
  
  
    测试js，详细mmm.spec.js
    -->

    <br> <br> <br>
    
  </div>
</template>

<script>

export default ({
  name:'demo16',
  data () {
    return {
      name: "zhoubc"
    }
  }
}) 

</script>

