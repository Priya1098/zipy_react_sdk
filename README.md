# Ecommerce Sample App

A React App to try out **Zipy SDK**

### Pre-requisites:

1. Node should be installed on your system. Install Node from [here](https://nodejs.dev/en/)

### Follow these steps to try out Zipy

1. Clone this repository
2. Navigate to the app's directory and run the command 
```bash
npm install
```
3. Add the following in the <head> tag of index.html file in public folder with your Project SDK key found in project settings of your **Zipy** account.
  
  ```bash
  <script src="https://cdn.zipy.ai/sdk/v1.0/zipy.min.umd.js" crossorigin="anonymous"></script> <script> window.zipy && window.zipy.init('PROJECT_SDK_KEY');</script>
  ```
  
4. Run the command
```bash
npm start
```
5. Clone and run [Error Thrower](https://github.com/sandeshmurdia/Error-thrower)(which will throw random network errors for your app) and run it. 

6. Perform some actions in the App and start seeing your session on your **Zipy Dashboard**.

### To generate errors try
1. Click on products.
2. Increasing and decreasing quantity.
3. Click on Add to Cart or Buy Now.
4. Go to cart and click on buttons.
5. Signin and Signout to use Identify and Anonymise
  
