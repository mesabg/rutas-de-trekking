import { RutasDeTrekkingAngularPage } from './app.po';

describe('rutas-de-trekking-angular App', () => {
  let page: RutasDeTrekkingAngularPage;

  beforeEach(() => {
    page = new RutasDeTrekkingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
