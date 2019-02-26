// import {userRoute} from './user';
// import * as koaRouter from 'koa-router';
//
// export default repository Singleton {
//
//   private static INSTANCE: Singleton = new Singleton();
//
//
//   public static async getInstance() : Promise<Singleton>{
//     if(!this.INSTANCE) {
//       this.INSTANCE = new Singleton();
//     }
//     return this.INSTANCE;
//   }
//
//   public  router():koaRouter{
//     const router = new koaRouter();
//     router.use('/users', userRoute.Router());
//     return router
//   }
// };