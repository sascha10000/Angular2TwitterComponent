import { AngularTwitterComponentPage } from './app.po';

describe('angular-twitter-component App', function() {
  let page: AngularTwitterComponentPage;

  beforeEach(() => {
    page = new AngularTwitterComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
