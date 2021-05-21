import ExpenseTotal from "../../selectors/Expenses-total";
import expenses from "../fixtures/expenses"

test("should setup expense to by default value i.e passing the empty array and expecting 0 to return",()=>{
    const total=ExpenseTotal([])

    expect(total).toBe(0);
})

test("should handle correctly one expenses",()=>{
  const total=ExpenseTotal([expenses[1]]);
  expect(total).toBe(2500);
}); 
 
test("should handle correctly multiple expenses",()=>{
  const total=ExpenseTotal(expenses);
  expect(total).toBe(3130);
});