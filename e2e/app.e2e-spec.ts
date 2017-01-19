import { ComponentsInComponentsPage } from './app.po';

describe('components-in-components App', function() {
  let page: ComponentsInComponentsPage;

  beforeEach(() => {
    page = new ComponentsInComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
