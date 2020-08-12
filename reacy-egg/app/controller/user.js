'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      hello: 'world',
    };
  }
}

module.exports = UserController;
