import { AngularClassStylesPage } from './app.po';

describe('angular-class-styles App', function() {
  let page: AngularClassStylesPage;

  beforeEach(() => {
    page = new AngularClassStylesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
