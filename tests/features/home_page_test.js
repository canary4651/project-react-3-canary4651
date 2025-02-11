Feature('Home page');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('오늘은 어떤 하루였나요?');

  I.click('선택하기');

  // planets page

  I.see('행성을 클릭해주세요');

  I.see('행복');

  I.click('행복');

  // planets/:id page

  I.see('오늘은 행복 행성이네요');

  I.see('기록하기');

  I.click('기록하기');
});
