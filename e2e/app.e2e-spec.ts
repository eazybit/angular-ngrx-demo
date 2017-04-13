import { AngularNgrxDemoPage } from './app.po';

describe('angular-ngrx-demo App', function() {
  let page: AngularNgrxDemoPage;

  beforeEach(() => {
    page = new AngularNgrxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
