const formatUtils = require('../src/utils/FormatUntils');

describe("FormatUtils testing:", () => {
    describe("formatUtils function testing:", () => {
  
      test("FormatUtils => Data type:", () => {
        expect(formatUtils(1000)).toBe("1,000")
      })

      test("FormatUtils => Data type 2:", () => {
        expect(formatUtils(1000000)).toBe("1,000,000")
      })

      test("FormatUtils => Data type 3:", () => {
        expect(formatUtils(300)).toBe("300")
      })

      test("FormatUtils => Data type 4:", () => {
        expect(formatUtils(30000)).toBe("30,000")
      })

      test("FormatUtils => Data type 5:", () => {
        expect(formatUtils(0.3)).toBe("0.3")
      })
    })
  
})