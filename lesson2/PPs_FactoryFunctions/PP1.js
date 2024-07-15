/*
What are two disadvantages of working with factory functions?

1. All methods are completely copied to the instantiated object,
taking a toll on system memory.

2. Difficult debugging: Objects created by factory functions cannot easily
be distinguished from those instantiated from a simple object literal.
The factory function is difficult to retrace, as it doesn't have a "type" that
the instantiated object belongs to.


LS answers:
1. Each object created by the factory function has a copy of all the methods,
which can be redundant and memory intensive.

2. There is no way to tell which factory function created an object,
so there's no way to be sure that you're working with the right kind of object.
*/