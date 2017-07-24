import { JsWeekThreeFridayPage } from './app.po';

describe('js-week-three-friday App', () => {
  let page: JsWeekThreeFridayPage;

  beforeEach(() => {
    page = new JsWeekThreeFridayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
