import { ICashflowPage } from './app.po';

describe('i-cashflow App', () => {
  let page: ICashflowPage;

  beforeEach(() => {
    page = new ICashflowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
