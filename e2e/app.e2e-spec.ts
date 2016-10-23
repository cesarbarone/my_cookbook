import { MyCookbookFirebasedPage } from './app.po';

describe('my-cookbook-firebased App', function() {
  let page: MyCookbookFirebasedPage;

  beforeEach(() => {
    page = new MyCookbookFirebasedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
