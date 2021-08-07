theme: jekyll-theme-modernist

# Operations (Cont.), Expressions and Loops

*JavaScript has both Binary and Unary operators and 1 special ternary operator (**conditional**).*

**Binary**- requires two operands: 1 before the operator and 1 after the operator.
*example*: 3 + 4 (operand operator operand)

**Unary**- requires single operand *either* before or after the operator.
*example*: i++ / --i (operand operator / operator operand)

**_Bitwise_**: treat their operand as a set of 32 bits (zeros & ones).

* *Bitwise Logical*: operands are converted into 32 bit integers and expressed by a series of bits. Numbers with more than 32 bits get their most significant bits discarded. 
 
* *Bitwise Shift*: takes two operands- the first is a quantity to be shifted and the second specifies the number of bit postions by which the 1st operand is to be shifted. Direction of the shift is controlled by the operator used. 

**_Logical_**: typically used with Boolean values- if boolean will return boolean value, if non-boolean will return non-boolean value. 

**_Comma_**: evaluates both of its operands and returns the value of the last operand. These are primarily used inside a "for loop", to allow multiple variables to be updated each time through the loop.

**_Delete_**: deletes an object's property. *(deleting array elements is regarded as bad practice because the array length is not affected & other elements are not re-indexed, avoid it!)

* *Splice*: method changed the content of an array by removing or replacing existing elements. 

* *Slice*: method returns a shallow copy of a portion of an array into a new array object selected from start TO end (end not included).

**_Relational_**: compares its operands and returns a Boolean value based on whether the comparison is true. 

* *In*: returns true if the specified property is in the specified object.

* *instance of*: returns true if the specified onject is of the specified object type. 
 
**Operator Precendece**: determines the order they are applied when evaluating an expression. You can override by using parentheses. 

# Expressions 

**Expressions**: **ANY** valid unit of code that resolves to a value. 

## Expression Categories

* **Arithmetic**: evaluates numbers. 

* **String**: Evakuates to a character string. 

* **Logical**: evaluates to true or false. 


*Primary*: Basic Keywords and general expressions in JS.

- *this*: refers to the calling object in a method. Use this either with the dot or the bracket notation.

*Left-hand-side*: Left values are the destination of an assignment. 

- *new*: create an instance of a user-defined object type or of one of the built-in object types

- *super*: used to call functions on an object's parent. It is useful with classes to call the parent constructor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators


# Loops 

**Loops**: offer a quick and easy way to do something repeatedly. There are different kinds of loops but generally they do the same thing.. repeat an action some number of times. The Mechanisms offer different ways to determine the start and end points in the loop. 

**_FOR_**: Loop that repeats until a specified condition is false. 

		ex.) for ([initialExpression]; [conditionExpression]; [incrementExpression])
 			 statement

**_Do...While_**: statement repeats until a specified condition evaluates to false. // statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ ... }) to group those statements.)

		ex.) 	do
  				statement
			while (condition);

**_WHILE_**: statement executes its statements as long as a specified condition evaluates to true. // The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again.

		ex.) 	while (condition)
  			  statement

**_Labeled_**: provides a statement with an identifier that lets you refer to it elsewhere in your program.

		ex,) label :
   			statement

**_Break_**: statement to terminate a loop, switch, or in conjunction with a labeled statement

		ex.) break;
			break [label];

**_Continued_**:  statement can be used to restart a while, do-while, for, or label statement.

		ex.) continue [label];

**_FOR...IN_**: statement iterates a specified variable over all the enumerable properties of an object.

		ex.) for (variable in object)
  			statement

**_FOR....OF_**: statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
