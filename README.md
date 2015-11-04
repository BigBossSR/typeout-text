#Typeout Text

Typeout Text is a tiny Javascript library that allows you to print out text letter-by-letter, just like in video games like Final Fantasy, Pokemon and Animal Crossing.

##Basic Functions

Typeout applies three simple functions: `typeOut`, `singleLine`, and `scrollingText` on a designated `Typee` element.

The Typee should be an html element with a set height and `overflow: scroll`. Declare a new Typee, with your element as a parameter in jQuery style: "#id-name" to select by ID, ".class-name" to select by class. Ex: `var myTarget = new Typee("#text-field")`

The functions operate as methods of the Typee constructor, and take a string and rate as arguments. The rate should be the number of milliseconds to wait before printing the next character. If you leave it blank it defaults to 45. Ex: `myTarget.typeOut("Watch me print!", 100)`

###typeOut
This will add a text in-line with any existing text. It is the basic function used within singleLine and scrollingText.

###singleLine
Clears the text-field before printing a new line.

###scrollingText
Keeps all existing text, but adds line-breaks to space out entries.

##Known Bugs

Optimized for working in a box with `overflow: scroll;`. If you prefer instead to have text run down the height of the window, it does not currently reset the scroll to follow.

##Feedback

This is my first Javascript library, and I'm looking foward to developing it further. Please feel free to send any comments about the existing code or requests for additional functionality. Thanks for trying it!