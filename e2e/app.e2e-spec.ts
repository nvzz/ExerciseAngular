import { ExerciseAngularPage } from './app.po';

describe('exercise-angular App', function() {
  let page: ExerciseAngularPage;

  beforeEach(() => {
    page = new ExerciseAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
