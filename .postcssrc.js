//ESM node x import / export 브라우저에서
//CommonJs : require() / module.exports 노드 환경

// import autoprefixer from 'autoprefixer'
//const autoprefixer = require('autoprefixer')

//export
module.exports = {
  plugins:[
    require('autoprefixer')
  ]
}