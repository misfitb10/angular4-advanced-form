import { Angular4AdvancedFormPage } from './app.po';

describe('angular4-advanced-form App', () => {
  let page: Angular4AdvancedFormPage;

  beforeEach(() => {
    page = new Angular4AdvancedFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
