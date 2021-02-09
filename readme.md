# A Sample Palindrome Checker

A palindrome checker built as a part of [**Learn Enough JavaScript To Be Dangerous**](https://www.learnenough.com/javascript).

## Installation
*Note: This command assumes that a version of nodejs and npm are installed.
If not, please see the documentation of nodejs [here](https://nodejs.org/en/download/).
Otherwise, the following command will NOT WORK!*

You can install it with the following command in the terminal:

```npm install axarva-palindrome```


*WARNING: Browsers don't support including files within a JavaScript file. To avoid this, you need to "browserify" your code, probably with the `browserify` node package. For more info, visit [this page](https://www.npmjs.com/package/browserify)*

<h2>Usage</h2>
This package is not available as a CLI program. It can be included in JavaScript files with the following code:
In your file, add:

```let Phrase = require("axarva-palindrome");```

Now you can happily define a string as a Phrase object as follows (Also in the file):
```let x = new Phrase("Harry Potter is Parry Otter");```
