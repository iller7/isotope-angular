import angular from 'angular';
import 'angular-mocks';
import {sofas} from './sofas';

const sofasJson = [
  {
    key: 'gulp',
    title: 'Gulp',
    logo: 'http://fountainjs.io/assets/imgs/gulp.png',
    text1: 'The streaming build system',
    text2: 'Automate and enhance your workflow'
  },
  {
    key: 'react',
    title: 'React',
    logo: 'http://fountainjs.io/assets/imgs/react.png',
    text1: 'A JavaScript library for building user interfaces',
    text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
  },
  {
    key: 'angular1',
    title: 'Angular 1',
    logo: 'http://fountainjs.io/assets/imgs/angular1.png',
    text1: 'HTML enhanced for web apps!',
    text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
  }
];

describe('sofas component', () => {
  beforeEach(() => {
    angular
      .module('fountainSofas', ['app/sofas/sofas.html'])
      .component('fountainSofas', sofas);
    angular.mock.module('fountainSofas');
  });
  it('should render 3 elements <fountain-sofa>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'app/sofas/sofas.json').respond(sofasJson);
    const element = $compile('<fountain-sofas></fountain-sofas>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const sofas = element.find('fountain-sofa');
    expect(sofas.length).toEqual(3);
  }));
});
