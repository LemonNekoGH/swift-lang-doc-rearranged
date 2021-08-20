const path = require('path')

module.exports = {
    title: '百合喵都能看懂的 Swift 文档',
    description: '专门给百合喵写的 Swift 文档，目标是让百合喵能看懂并学会',
    dest: path.resolve('../../dist'),
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: '相关链接', link: '/links' },
            { text: 'GitHub', link: 'https://github.com/swift-lang-doc-rearranged' }
        ],
        sidebar: require('./sidebar')
    },
    extractWatch: [
        path.resolve('./styles/index.styl'),
        path.resolve('./styles/platte.styl')
    ]
}
