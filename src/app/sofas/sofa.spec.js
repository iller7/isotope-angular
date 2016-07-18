import angular from 'angular';
import 'angular-mocks';
import {sofa} from './sofa';

describe('sofa component', () => {
  beforeEach(() => {
    angular
      .module('fountainSofa', ['app/sofas/sofa.html'])
      .component('fountainSofa', sofa);
    angular.mock.module('fountainSofa');
  });

  it('should render Gulp', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    const element = $compile('<fountain-sofa sofa="fixture"></fountain-sofa>')($scope);
    $scope.$digest();
    const sofa = element.find('h3');
    expect(sofa.html().trim()).toEqual('Gulp');
  }));
});
