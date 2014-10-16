/**
 * Created by muyi on 14-9-25.
 */
var path = require('path');

// 规范化路径
console.log(path.normalize('/foot/bar/baz//test/'));    // /foot/bar/baz/test/
console.log(path.normalize('/foot/bar/baz//test/..'));    // /foot/bar/baz

// 组合参数中的所有路径，返回规范化后的路径。
console.log(path.join('aaa', 'bbb', 'cc.txt'));     // aaa/bbb/cc.txt

// path.resolve([from ...], to)  将 to 参数解析为一个绝对路径。
console.log(path.resolve('aaa', 'bbb', 'cc.txt'));  // /Users/muyi/node/workspace/sudy/node/aaa/bbb/cc.txt