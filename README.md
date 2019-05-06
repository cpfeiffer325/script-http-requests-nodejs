## Exercise Summary
Write an HTTPS client that reads and prints HTML from a specified host and path.

### Step 1 - Printing in chuncks
The first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.

### Step 2 - Printing in Buffered Strings
Create a second function, getAndPrintHTML, which will look very similar to your first function.
This function should use a buffering technique to append each chunk of data to a variable as it is received, and then console.log the data once all of the data has been received.

### Step 3 - Printing with Parameters
In another file, create a third function, getAndPrintHTML, which will look very similar to your second function, but accepts a paramater, options, which is an object that contains values for the host and path, exactly like requestOptions. Reuse whatever code you need from part 2 - we're still getting and printing the HTML.

### Step 4 - Printing with Callbacks
In another file, create a fourth function, getHTML. This function will look and behave almost the same as your third function, except:
- The function definition will now accept a callback as a second parameter.
- The function body will invoke (call) the callback when the data is fully received, in place of the original console.log.

### Step 5 - Make it a Module
- Make a new file for your module. You can call the file whatever you want, but for the purposes of the exercise we'll call it http-functions.js.
- Remember that your module needs to export the function so it is available via require. You can export an object with the function as a property if you prefer, but the example below exports the function directly for the sake of simplicty.

### Step 6 - Defining Callbacks
Make a new directory inside your working directory and call it callbacks (or whatever you wish, the name doesn't matter).
Inside that directory, create the files print_uppercase.js, print_lowercase.js, print_reverse.js and if you feel stretchy - print_1337.js.
Each of these files will need to require your http-functions module (or whatever you named it) so they have access to getHTML.
You may want to copy your http-functions.js module file into the same directory.
- If you leave it where it is you will need to change your require statement to use '../http-functions' instead of './http-functions'.
- While . represents the current working directory, .. represents the directory one level up (in other words, the parent).