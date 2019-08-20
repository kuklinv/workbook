// каррирование реализация IF через функции
/*
If(True)('one')('two');  // one
If(False)('one')('two'); // two

If(func)('one')('two'); // ?

const ConditionFunction = If(True);
ConditionFunction('one')('two'); // one

const ConditionFunction = If(False);
ConditionFunction('one')('two'); // two
*/

export const If = f => one => two => f(one)(two); 
export const True = one => two => one;
export const False = one => two => two;