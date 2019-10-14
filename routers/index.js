const Router = require('koa-router')
const trans = require('./trans')
const page = require('./page')

let router = new Router()
router.use('/trans', trans.routes(), trans.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

module.exports = router