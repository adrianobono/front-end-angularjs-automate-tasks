describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://localhost:8090/');
      element(by.model('check')).click();
      expect(browser.getTitle()).toEqual('Test Cinq');
      browser.sleep(3000);

    });
  });