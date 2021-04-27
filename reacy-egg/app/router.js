'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/captchaImage', controller.util.captchaImage);
  router.post('/login', controller.login.index);
  router.get('/user/:id', jwt, controller.sysUser.index);
};
