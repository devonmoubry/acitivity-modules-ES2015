// YOUR IMPORTS BELOW:
//  WARMUP
import warmUp from ./utils/warmup.js;
// DATEANDTIME
// Import  using the * operator (as = allfunctions).
import * as allfunctions from ./utils/dateAndTime.js;
// MATH
// Import only square and round, using { }.
import { square, round } from ./utils/math.js;
// ARRAYS
// Import each function individually using { }.
import { mapper } from ./utils/arrays.js;
import { concatArrays } from ./utils/arrays.js;
// UTILITIES
// Import both using the * operator (as = utilities).
import * as utilities from ./utils/utilities.js

// YOUR FUNCTION CALLS BELOW:
//  WARMUP
warmUp(warmUp);
// DATEANDTIME
allfunctions.getCurrentTime();
allfunctions.getCurrentDate();
// MATH
power(8,2);
square(64);
round(6.234);
// ARRAYS
mapper();
concatArrays();
// UTILITIES
utilities.iterator(myObject.array);
utilities.myObject.greeting('Matt');
