/*
 * yargs 是一个node工具,可以帮助你解析传入程序的参数
 * 下面是一些例子
 * */

var args = require('../node_modules/yargs')
    /* 计算boolean变量值 */
    .count('verbose')
    .alias('v', 'verbose')
    /* 参数需求说明 */
    .usage('参数说明: $0 -w [num] -h [num]')
    .demand(['w', 'h'])
    .argv;


/**
 * node yargs.js --a='hello' --b='world'
 */
tryYargs(args.a, args.b); // 简单试用一下

/**
 * node yargs.js -a 'Hello' -b 'World'
 */
shortArgs(args.a, args.b); // 使用参数的简化命令

/**
 * node yargs.js -a 'Hello' -b 'World' dreamapple
 */
restArgs(args.a, args.b); // 显示多余的程序参数

/**
 * node yargs.js -vvv
 * 布尔值的个数: 3
 */
countBoolean(args.v); // 计算布尔值的个数

testDemand(args.w, args.h); // 测试yargs的参数需求


/**
 * 简单试用一下插件
 * @param a 程序的入口参数
 * @param b 程序的入口参数
 */
function tryYargs(a, b) {
    if(a || b) {
        console.log('有参数: ', a, b);
    }
}

/**
 * 使用参数命令的简化形式
 * @param a
 * @param b
 */
function shortArgs(a, b) {
    console.log('参数命令简化: ', a, b);
}

/**
 * 使用 args._显示多余的参数
 * @param a
 * @param b
 */
function restArgs(a, b) {
    console.log('程序需求的参数: ', a, b);
    console.log('程序多余的参数: ', args._);
}

/**
 * 计算boolean值的个数
 * @param v
 */
function countBoolean(v) {
    console.log('布尔值的个数: ' + v);
}

/**
 * 测试yargs的参数需求功能
 * @param w
 * @param h
 */
function testDemand(w, h) {
    console.log('长方形的面积是: ' + w * h);
}

/**
 * ====================== 2016.1.2 =================
 */
