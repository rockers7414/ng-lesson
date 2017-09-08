import { NgLessonPage } from './app.po';

describe('ng-lesson App', () => {
  let page: NgLessonPage;

  beforeEach(() => {
    page = new NgLessonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
