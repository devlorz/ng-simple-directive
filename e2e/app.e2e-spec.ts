import { NgSimpleDirectivePage } from './app.po';

describe('ng-simple-directive App', () => {
  let page: NgSimpleDirectivePage;

  beforeEach(() => {
    page = new NgSimpleDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
