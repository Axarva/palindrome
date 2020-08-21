<h1>A Sample Palindrome Checker</h1>

A palindrome checker built as a part of <a href="https://www.learnenough.com/javascript"><strong>Learn Enough JavaScript To Be Dangerous</strong></a>.

<h2>Installation</h2>
<h3>Note: This command assumes that a version of nodejs and npm are installed.
If not, please see the documentation of nodejs <a href="https://nodejs.org/en/download/">here</a>.
Otherwise, the following command will NOT WORK!</h3>

You can install it with the following command in the terminal:

```npm install axarva-palindrome```

<h2>Usage</h2>
This package is not available as a CLI program. It can be included in JavaScript files with the following code:
In your file, add:

```let Phrase = require("axarva-palindrome");```

Now you can happily define a string as a Phrase object as follows (Also in the file):
```let x = new Phrase("Harry Potter is Parry Otter");```

<h3>WARNING: Browsers don't support including files within a JavaScript file. To avoid this, you need to "browserify" your code, probably with the ```browserify``` node package. For more info, visit: https://www.npmjs.com/package/browserify.
