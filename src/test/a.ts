import {Container, Inject, Service} from "typedi";

@Service()
class BeanFactory {
  create() {
  }
}

@Service()
class SugarFactory {
  create() {
  }
}

@Service()
class WaterFactory {
  create() {
  }
}

@Service()
class CoffeeMaker {

  @Inject()
  beanFactory: BeanFactory;

  @Inject()
  sugarFactory: SugarFactory;

  @Inject()
  waterFactory: WaterFactory;

  make() {
    this.beanFactory.create();
    this.sugarFactory.create();
    this.waterFactory.create();
  }

}

let coffeeMaker = Container.get(CoffeeMaker);
coffeeMaker.make();