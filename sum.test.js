import sum from './sum';
import { calculate, capitalize,reverseString } from './strings';
import { analyzeArray} from './integers';
import cesar from './cesar';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

  describe('strings.js',()=>{

    test('capitalize', () => {
        expect(capitalize("hello")).toMatch("Hello");
      });

      test('reverseString', () => {
        expect(reverseString("hello")).toMatch("olleh");
      });

      test('basic math, addition', () => {
        const data = calculate(2,3);
        expect(data.add()).toEqual(5);
      });
      test('basic math, multiplication', () => {
        const data = calculate(2,3);
        expect(data.multiply()).toEqual(6);
      });
      test('basic math, subtraction', () => {
        const data = calculate(2,3);
        expect(data.subtract()).toEqual(-1);
      });
      test('basic math, addition', () => {
        const data = calculate(2,3)
        expect(data.divide()).toBeCloseTo(0.66666);
      });
      
      
  });


  describe('strings.js',()=>{

    test('min of array',()=>{
        const obj = analyzeArray([1,8,3,4,2,6])
        expect(obj.min).toEqual(1)
    })

    test('max of array',()=>{
        const obj = analyzeArray([1,8,3,4,2,6])
        expect(obj.max).toEqual(8)
    })
    test('length of array',()=>{
        const obj = analyzeArray([1,8,3,4,2,6])
        expect(obj.length).toEqual(6)
    })
    test('average of array',()=>{
        const obj = analyzeArray([1,8,3,4,2,6])
        expect(obj.average).toEqual(4)
    }) 

    test('the array object',()=>{
        const obj = analyzeArray([1,8,3,4,2,6])
        expect(obj).toEqual({average:4,length:6,max:8,min:1})
    }) 
  })

  describe("cesar.js",()=>{

    test("cesar encryption check ",()=>{

        expect(cesar("hello",3)).toEqual("khoor")
    })

    test("cesar encryption check ",()=>{

        expect(cesar("hello",4)).toEqual("lipps")
    })

    test("cesar encryption check ",()=>{

        expect(cesar("idi rana rangama ",17)).toEqual("zuz irer irexrdr ")
    })

    test("cesar encryption check ",()=>{

        expect(cesar("men will be men",52)).toEqual("men will be men")
    })

    test("cesar encryption check ",()=>{

        expect(cesar("men will be men&#$%^",78)).toEqual("men will be men&#$%^")
    })

  })


