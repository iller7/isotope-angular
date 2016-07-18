class SofasController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/sofas/sofas.json')
      .then(response => {
        this.sofas = response.data;
      });
  }
}

export const sofas = {
  templateUrl: 'app/sofas/sofas.html',
  controller: SofasController
};
