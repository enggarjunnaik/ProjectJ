describe("Unit Testing for the game guessparser function", function() {

  beforeEach(angular.mock.module('Jgameplay'));

  it('should return correct row and column number', function() {
    expect(Jgameplay.parseGuess).toBeDefined();
  });

  it('should have a working LoginService service', inject(['guessInput',
    function(parseGuess) {
      expect(guessInput.isValidInput).not.to.equal(null);

      // test cases - testing for success
      var validinputs = [
        A0,A1,A2,A3,A4,A5,A6,
        B0,B1,B2,B3,B4,B5,B6,
        C0,C1,C2,C3,C4,C5,C6,
        D0,D1,D2,D3,D4,D5,D6,
        E0,E1,E2,E3,E4,E5,E6,
        F0,F1,F2,F3,F4,F5,F6,
        E0,E1,E2,E3,E4,E5,E6,
        
      ];

        
      // you can loop through arrays of test cases like this
      for (var i in validinputs) {
        var valid = parseGuess.guessinput(validinputs[i]);
        expect(valid).toBeTruthy();
      }
      

    }])
  );
});
