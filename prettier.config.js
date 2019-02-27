/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/10/13
 * Time: 17:18
 *
 */
module.exports = {
    printWidth: 120, // 换行字符串阈值
    semi: true, // 句末加分号
    singleQuote: true, // 用单引号
    trailingComma: 'none', // 最后一个对象元素加逗号
    bracketSpacing: true, // 对象，数组加空格
    jsxBracketSameLine: false, // jsx > 是否另起一行
    arrowParens: 'avoid', // (x) => {} 是否要有小括号
    requirePragma: false, // 是否要注释来决定是否格式化代码
    proseWrap: 'preserve', // 是否要换行
    tabWidth: 4,
    overrides: [
        {
            files: ['*.json', '.tslintrc', '.prettierrc', '.tern-project'],
            options: {
                parser: 'json',
                tabWidth: 4
            }
        },
        {
            files: '*.{css,sass,scss,less}',
            options: {
                parser: 'postcss',
                tabWidth: 4
            }
        },
        {
            files: '*.ts',
            options: {
                parser: 'typescript'
            }
        }
    ]
};
