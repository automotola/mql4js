describe('MQL4.js supports', function () {
  describe('conversion\'s', function () {
    var mql4 = new MQL4();
    it('charArrayToString function', function () {
      expect(mql4.charArrayToString([84, 101, 115, 116])).toBe("Test");
      expect(mql4.charArrayToString([84, 101, 115, 116], 1)).toBe("est");
      expect(mql4.charArrayToString([84, 101, 115, 116], 1, 2)).toBe("es");
      expect(mql4.charArrayToString([84, 101, 115, 116], 0, 2)).toBe("Te");
    });

    it('doubleToString function', function () {
      expect(mql4.doubleToString(1234.5678)).toBe("1234.56780000");
      expect(mql4.doubleToString(1234.5678, 1)).toBe("1234.6");
      expect(mql4.doubleToString(1234.5678, -1)).toBe("1.2e+3");
      expect(mql4.doubleToString(0.005, -1)).toBe("5.0e-3");
    });


  });
});