## React Redux Demo 2
### Overview
This is React-Redux Demo application which adds the redux connect method to manage store updates.
It's very similar to React Demo 1 (https://github.com/slackhack/ReduxDemo1), and could have been added to that project,
but this way its simpler and self contained.

### Technology
* react-redux
* webpack


Redux Features:
* Addition of react-redux connect() method react-redux's 'connect' function
* combineReducers is used, even though I only have a single reducer function.


### How to Run

Clone the project and install webpack (linux command line versions shown ... use -g or --save-dev flags to your taste):

```
sudo npm install webpack
sudo npm install webpack webpack-dev-server
sudo npm install webpack css-loader style-loader
sudo npm install json-loader
```

Then run:
```
webpack
```

```
open build/index.html in your browser
```

#### Hot Module Replacement

run the batch file
```
run_dev_webpack_server
```
The server will host the index.html page at (http://localhost:8080)

### Directories

   build/ ==> location of HTML, CSS and generated javascript files

   src/	  ==> All the source in single directory (rather than usual directory structure)


#### Feedback

If you have gotten this far down the document or even cloned the project - that make two of us. Hope it was useful.
If you have found an issue or are annoyed at something, send me an email at  **smerzlia**  SECRET_EMAIL_THINGY_SYMBOL **gmail.com**.
