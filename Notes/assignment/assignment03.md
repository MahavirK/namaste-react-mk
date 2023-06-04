# 1. What is JSX?

JSX allows developers to write HTML-like code in their JavaScript code. JSX is commonly used in combination with React,a popular JavaScript library for building user interfaces. With JSX, developers can write code that looks like HTML but is actually JavaScript, allowing for more efficient and readable code. When the JSX code is compiled, it is transformed into regular JavaScript code that can be executed by the browser or server.

Example with using JSX

`const heading1=<h1>Hello world!<h1>; const root = ReactDOM.createRoot(document.getElementById('root')); root.render(myElement);`

Example with react

 `const heading1=React.createElement("h1",{},"Hello world"); const root = ReactDOM.createRoot(document.getElementById('root')); root.render(myElement);`

# 2. Superpowers of JSX
 *  Easy to write: JSX makes it easy for developers to write HTML-like code in their JavaScript, which can lead to more efficient and readable code. JSX is easy to maintain and debug.
 * Component-based: JSX works well with component-based architecture, allowing developers to create reusable and modular code.
 * Integrates with JavaScript: JSX integrates well with standard JavaScript code, allowing developers to use all the powerful features of JavaScript in their JSX code. 

 # 3. Role of type attribute in script tag? What options can I use there?
 The type attribute in the <script> tag is used to specify the MIME type of the script. The MIME type is a standard that identifies the format of the content, and it tells the browser how to handle the script.

There are several values that can be used for the type attribute in the <script> tag, including:

text/javascript: This is the default value if the type attribute is not specified. It indicates that the content of the script is JavaScript code.

text/html: This value indicates that the content of the script is HTML code.

text/css: This value indicates that the content of the script is CSS code.

application/json: This value indicates that the content of the script is JSON data.

module: This value tells the browser that the script is a module that can import or export other files or modules inside it.

# Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

Example

<TitleComponent> <FirstChildComponent /> <SecondChildComponent /> <ThirdChildComponent /> </TitleComponent>

if there are no child elements, then we can write <TitleComponent />

