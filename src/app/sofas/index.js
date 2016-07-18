import angular from 'angular';

import {sofa} from './sofa';
import {sofas} from './sofas';

export const sofasModule = 'sofas';

angular
  .module(sofasModule, [])
  .component('fountainSofa', sofa)
  .component('fountainSofas', sofas);
