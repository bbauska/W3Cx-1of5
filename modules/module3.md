# Module 3: Specific HTML element targeting with CSS selectors   3.1 Introduction   Welcome to Module 3

# Welcome to Module 3

In this module, we'll learn:

> - How to use classes and IDs to independently target HTML elements of the same type
> - How to apply different style to the same element based on the way the user interacts with that element using pseudo-classes
> - How to scope style rules using contextual selectors and the HTML inheritance structure of your document
> - What the "Cascading" part of "Cascading Style Sheets" means

# Module 3: Specific HTML element targeting with CSS selectors   3.1 Introduction   The power of selectors

# The power of selectors
Video: the power of selectors

Code mentioned in above video

```[css]
p {
    color: white;
    background-color: midnightblue;
    font-size: large;
}
.middle {
    color: darkviolet;
    background-color: lightgray;
    padding-left: 120px;
    padding-right: 120px;
    font-size: large;
}
#bottom {
    background-color: transparent;
    color: black;
    font-family: 'Franklin Gothic Medium';
}
```

#  Module 3: Specific HTML element targeting with CSS selectors   3.2 Using HTML classes and IDs   Meet IDs and classes

# Meet IDs and classes
 Bookmark this page
Video: meet IDs and classes
 
 
Classes and IDs

Classes and IDs are "attribute selectors". This means that you can attach style to HTML elements based on that element's attributes. This empowers you to apply different style to items of the same HTML type.

Classes

Classes are an HTML attribute that specifies a name for a group of elements on the page. You can apply the class name to as many elements as you like, even if they are of different HTML tag types. You can use the class name with a period in front as the selector like so:

```[html]
<p class="className">The intro paragraph</p>
```

Class names must be single words, but you can include digits and dashes as long as the name begins with a letter. Note that names are case sensitive. 

To apply a CSS rule to a class you use the class name preceeded by a period (".") like in the code below:

```[css]
.className {
    color: blue;
}
```

Documentation

IDs

An ID is an HTML attribute that specifies a name or unique identifier for a particular HTML element. They are like classes with a very important distinction: the value of the ID attribute must be unique throughout the document. This lets you target a single HTML element for styling. You use the name with a hashtag in front as the selector like so:

<p id="MyFirstId"> This is an extra special paragraph </p>
ID names have the same rules as class names: start with a letter, can include numbers and dashes, no spaces. The way to create a selector for an ID is also similar to how you create a selector for a class, except you replace the period with a hash symbol ("#") like in the code below:

```[css]
#MyFirstId {
    color: blue;
}
```

Documentation

Example


HTML code:

```[html]
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Classes and IDs</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Title</h1>
        <p id="intro">
            Classes and IDs are "attribute selectors". This means that you can attach style to HTML elements based on that element's attributes. This empowers you to apply different style to items of the same HTML type.
        </p>
        <p class="odd">
            Classes are an HTML attribute that specifies a name for a group of elements on the page. You can apply the class name to as many elements as you like, even if they are of different HTML tag types. You can use the class name with a period in front as the selector like so:
        </p>
        <p class="even">
```   

Class names must be single words, but you can include digits and dashes as long as the name begins with a letter. Note that names are case sensitive. 
To apply a CSS rule to a class you use the class name preceeded by a period (".") like in the code below:

```[html]
        </p>
        <p class="odd">
            An ID is an HTML attribute that specifies a name or unique identifier for a particular HTML element. They are like classes with a very important distinction: the value of the ID attribute must be unique throughout the document. This lets you target a single HTML element for styling. You use the name with a hashtag in front as the selector like so:
        </p>
        <p class="even">
            ID names have the same rules as class names: start with a letter, can include numbers and dashes, no spaces. The way to create a selector for an ID is also similar to how you create a selector for a class, except you replace the period with a hash symbol ("#") like in the code below:
        </p>
    </body>
</html>
```

CSS code:

```[css]
#intro {
    color: green;
}
.odd {
    color: blue;
}
.even {
    color: red;
}
```
Output:

Sample Classes and IDs output

# Module 3: Specific HTML element targeting with CSS selectors   3.2 Using HTML classes and IDs   Activity 3.2 and discussion
# Activity 3.2 - Add your own classes and ids

Here is some HTML and CSS. As you can see it's not too interesting, because not all of the styles are applied to the HTML.

```[css]
body {
   background-color: #00ccff;
   color: white;
   font-family: Helvetica, sans-serif;
   margin: 35px 25px 0px 25px;
}
p,h2 {
   padding: 10px;
}
.topSection{
   background-color: #3300cc;
   color: #cccccc;
}
.bottomSection {
   background-color: #cccccc;
   color: #3300cc;
}
#importantItem {
   text-decoration: underline;
   color: #99ff99;
}
#unimportantItem {
   color: gray;
}
```

In this activity, your job is to add the HTML id and class attributes to the correct elements so that you get a final result that looks like this:

Apply Classes and IDs final image

Discusión
Tema: Module 3 / Activity 3.2 - Add your own classes and ids
Mostrar Discusión

# Module 3: Specific HTML element targeting with CSS selectors   3.3 CSS pseudo-classes   Meet CSS pseudo-classes

# Meet CSS pseudo-classes

Video: CSS pseudo-classes
 
CSS pseudo-classes

Pseudo-classes are a way to select HTML elements based on their state as opposed to their HTML structure. You can read more about pseudo-classes here.

Pseudo-classes must always be applied to an existing selector. Their "flag character" is the colon (":"), as you can see used in the below examples. Here are some of the most popular pseudo-classes.

```[css]
:link and :visited

a:visited {
   color: gray;
   font-style: italic;
}
```

These pseudo classes are the ones you are probably most familiar with. Even on this page you've probably noticed that links have different style than paragraph text. The <a> tag by default sets the text color to blue with an underline, but have you ever seen a purple link? This is the "visited" pseudo-class that applies a different style to links that the user has already clicked. The opposite of visited is "link" which is a link a user has not yet clicked. These two states are mutually exclusive, meaning a link cannot be both at the same time.

Documentation

```[css]
:hover

li:hover {
   background-color: yellow;
}
```
The hover pseudo-class is applied when the user points at an object but doesn't activate it, most commonly when they let their mouse cursor lay on top of an element without clicking. Some form factors don't support this, such as touch devices or pen surfaces. This is a really good way to encourage a user to click a link and you will often see it used in navigation bars. 
```[css]

:focus

input:focus {
   background-color: blue;
}

```
The focus pseudo class is when a user has chosen to begin interacting with an element, often when the click into a form input such that the input is then ready to accept keyboard input.
```[css]

:active

p:active {
   color: red;
}
```

The active pseudo-class applies when an element is activated. This happens in the time between when the user clicks their mouse and they release it.

Documentation

# Module 3: Specific HTML element targeting with CSS selectors   3.3 CSS pseudo-classes   Activity 3.3 and discussion

# Activity 3.3 - Applying pseudo classes

Now it's your turn to try out some pseudo classes. Here is a Web page.

See the Pen Practice with Pseudoclasses

```[html]
body {
   background-color: #006666;
   color: white;
}
h1 {
   text-decoration: underline;
}
input {
   border: 3px white solid;
}
input {
   border: 3px yellow solid;
}
input {
   background-color: yellow;
   border: 3px yellow solid;
}
button {
   background-color: white;
   color: #006666;
   border: 3px white solid;
}
button {
   background-color: #006666;
   color: white;
}
button {
   background-color: #33cc99;
}
li {
   background-color: white;
   color: #006666;
}
li {
   background-color: #33cc99;
   color: white;
}
a {
   color: white;
}
a {
   color: #33cc99;
}
``` 

If you look at the CSS for this page you'll notice there are multiple CSS rules with the same selectors. That is because some of these rules need to have pseudo classes applied.

Please add pseudo-classes to the existing rules so that:

The title is underlined when the user hovers their mouse over the text
The input box gets a yellow border when the user hovers their mouse over the box
The input box has a yellow background when the user clicks inside the box
When the user hovers over the button it gets a background color of #006666 (dark green) and a text color of white
When the user clicks the button it gets a background color of #33cc99 (light green)
The background color of the list elements turns white and the text turns #006666 (dark green) when the user hover overs them
When clicked, the list elements get a background color of #33cc99 (light green) while the text stays white
The links at the bottom of the page start out as white in color and then when they are clicked they turn #33cc99 (light green)
The resulting output should look like this when the user has not interacted with the page in any way:

Pseudo Class final image no interaction

Use the discussion below to share your experiences

Discusión
Tema: Module 3 / Activity 3.3 - Applying pseudo classes

# Module 3: Specific HTML element targeting with CSS selectors   3.4 Combining selectors   Meet contextual selectors

# Meet contextual selectors
 Añadido a marcadores
Video: contextual selectors
 Contextual selectors

When you use two selectors separated by a space on a rule, you scope the rule to the elements that correspond to the selector on the right that are INSIDE the elements that correspond to the selector on the left. Let's say we have the following HTML:

```[html]
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <img src="images/pic1.jpg" alt="pic 1" />
        <p>
            This is my paragraph full of useful information
            <img src="images/pic2.jpg" alt="pic 2" />
            Since there is text around these images they should be styled a little differently.
            <img src="images/pic3.jpg" alt="pic 3" />
        </p>
        <img src="images/pic4.jpg" alt="pic 4" />
    </body>
</html>
```

If we applied the following CSS rule then the images INSIDE the paragraph would be set to a width of 100px, but that rule would not apply to the images outside the paragraph. 

```[css]
p img {
    width: 100px;
}

```

Below is a diagram of the given HTML with the two imgs that will styled by the above rule are indicated by the red arrows. 

Diagram pointing out which img tags will be styled

As your Web pages get more complex, contextual selectors become more important, because it won't scale to apply classes and IDs to each individual item. Contextual selection becomes especially useful when you structure your HTML with section tags like header, section, article and footer. 

Pay attention to the styles of the paragraphs and lists in the following example:


Contextual selector example output

#  Module 3: Specific HTML element targeting with CSS selectors   3.4 Combining selectors   Activity 3.4.1 and discussion

# Activity 3.4.1 and discussion
 Bookmark this page
Activity 3.4.1 - Contextual selectors

For practice, we are going to learn how to better scope CSS without the crutch of classes and IDs. 


Look carefully at the CSS code:

```[css]
body {
    font-family: Tahoma, sans-serif;
}
header, article, footer {
    border: 10px #E9B000 solid;
    margin: 30px;
}
h1 {
    color: #E86E80;
}
h1 {
    background-color: #E86E80;
    color: #FFFFFF;
}
p {
    background-color: #008F95;
    color: #FFFFFF;
}
p {
    background-color: #FFFFFF;
    color: #008F95;
}
 
ol {
    background-color: #E24E43;
    color: #FFFFFF;
}
ol {
    background-color: #FFFFFF;
    color: #E24E43;
}
ol {
    border: 5px solid #E24E43;
}
```

As you can see there are CSS rules with duplicate selectors. You'll need to add some extra selectors to the existing CSS rules so that instead of duplicate rules, you have rules that address different instances of the HTML elements based on the structure of the HTML.

Your final site should look like this:

contextual selectors result part 1

contextual selectors result part 2

contextual selectors result part 3

 Use the discussion below to share your experiences.

Discusión
Tema: Module 3 / Activity 3.4.1 - Contextual selectors

# Module 3: Specific HTML element targeting with CSS selectors   3.4 Combining selectors   Cascading styles
# Cascading styles
 Bookmark this page
Video: C is for "Cascading"
 
Cascading styles

Now that you've learned all these different selectors, you've probably noticed that there is nothing preventing one from creating rules that overlap, meaning creating rules that apply style to the same HTML elements. In fact, it's very common for HTML elements on a page to have multiple CSS rules competing for importance. 

Thanks to the "cascading" part of "Cascading Style Sheets", this isn't a problem. That is because CSS has a way to figure out which rule "wins" when styles are conflicting. CSS actually computes a "weight" for each style rule and the one with the greatest weight wins. If you want all the specifics on how this weight is computed you can read more here. For simplicity's sake, the most specific rule wins! 

A rule is generally more specific if it applies to a fewer number of elements than another rule that encompasses those elements. The more facets a rule has the more specific it is.
When pseudo-classes are applied this is more specific than without the pseudo-class. For example, p:hover will win over just p. 
Contextual selection is more specific because it scopes the rule to elements within a certain subset of those on the page. For example, a rule that applies to all the paragraphs within articles is more specific than a rule that applies to all the paragraphs on the page.
IDs are most specific because you are directly applying them to the desired HTML element. The rule based on an ID will always win over other rules
If two rules have the exact same weight, the one that comes later in the CSS document is what is applied.
You can use the "!important" modifier on a CSS property so that it will guarantee that style will be applied. This is a way for you to override the calculated weight.
Look at the corresponding HTML and CSS, where code showing how Cascading order applies with many overlapping rules:

```[css]
section {
   color: red;
}
section section {
   color: orange;
}
section section section {
   color: green;
}
#section {
   color: blue;
}
section:hover {
   color: purple;
}
section:hover section:hover {
   color: pink;
}
section:hover section:hover section:hover {
   color: yellow;
}
```

Cascading order demo

Things to observe about the above:

the rule based on an ID isn't even overwritten by the pseudo class
when you hover over the sections within other sections, multiple hover rules apply!

# Module 3: Specific HTML element targeting with CSS selectors   3.4 Combining selectors   Activity 3.4.2 and discussion

# Activity 3.4.2 - Cascading order

Cascading order can be difficult to manage.

Look at the corresponding some HTML and CSS:


Look at the CSS code:

```[css]
body {
    background-color: #F8EEE7;
}
p {
    background-color: #F4DECB;
}
p {
    background-color: #94618E;
    color: #F8EEE7;
}
p {
    background-color: #49274A;
}
p {
    background-color: #FFFFFF;
    color: #49274A;
}
p {
    background-color: #B4DBC0 !important;
    border: 2px dashed black;
}
```

As you can see, there are a lot of repeat CSS rules. For this activity, you cannot change any of the HTML (meaning you cannot add any IDs), but you'll need to change the CSS to make some of the rules more specific so that you achieve this final result:

Cascading order final solution no interaction

The image below shows when you hover "paragraph 4". The same hover should apply to ALL p tags.

cascading style practice with hover

Use the discussion board below to share your experiences.

Discusión
Tema: Module 3 / Activity 3.4.2 - Cascading order

# Module 3: Specific HTML element targeting with CSS selectors   3.5 Style studies   Images

# Images

Images are an extremely important part of your page, not only as part of your content but as a key way to help style your page. Before you even get to styling them you need to put considerable thought into what type of images to include in your page. One of the easiest ways to slow down your site's performance is to include lots of large, high-quality images. There are two general things to consider when picking your images: what format and how large are they? 

Formats

JPEG - Possibly the most common image format used on the web, because it does a good job of compressing colorful, complex images into reasonably sized files. JPEG is often used for photos because otherwise, photos can take a very long time to load. 
PNG - Provides a higher quality image, but you pay for it with a larger file size. PNG also has the ability to have transparent backgrounds, so you'll often see this used for graphics as part of the page's layout. 
GIF - Supports moving images and transparent backgrounds. These can be especially large files so try to use sparingly!
Sizing

It's important to format and size your image before uploading it to your site, because while you can use CSS to resize it, the browser will download the full image even if you've chosen to display it smaller than it is. 

You can resize images using the width or height properties of CSS like so:

```[css]
img {
    width: 100px;
    height: 100px;
}
```

In Module 4, we will discuss width and height in detail, but for the purpose of images, know that if you only set one of these two properties the image will scale according to its original dimensions. If you set both width and height, CSS will stretch your image to fit whatever you specify. 

Spacing

Rarely does it look nice when your content images touch your text content. You'll often want to give your images a good amount of white space surrounding them, and you can do this with padding and/or margin. In the examples below, you can see how you can even use padding and margin to achieve some interesting stylistic effects with your images. 

Border Radius

In Module 2, we saw how you can use the "border-radius" property to make a button with rounded corners. You can do the same to images. You might even notice that it has become popular to turn square images into perfect circles, especially for icons or profile photos.

Images as Design Elements

When you see complicated styles as part of a Web page's design, chances are there are images as a foundational element. For example, you will often see images set as backgrounds or as a link. Remember that you can put an <img> tag within an anchor tag to turn it into a link. You can also use the background-image CSS property to set an image as a background instead of just using a solid color. You can read more about background images here. 

Text in images

It is best to overlay real text rather than use pixelated text. This makes it possible to search, copy and style the text, as well as making translation much easier. It also has accessibility benefits and makes translation much easier.

Examples

As you can see, there are a lot of things to consider, and if you do not plan out your images carefully they can end up looking very disruptive, like this example:

Image without proper formatting

Images 1

This design shows some of the basics in properly incorporating images. It uses the colors from the image in the design of the overall page to help the image look as if it belongs. It also uses padding to give the image a "polaroid-style" border.

Well balanced image design 1

Images 2

This design is an example of an image gallery design. This gives all the images the same size and alignment while including plenty of white space to help the page not look too overwhelming despite having multiple photos. 

Images 2 design of photo gallery 

Images 3

This design demonstrates the use of an image both as a background as a link. When using images as design elements it's best to use simple images to let your content still be easily consumable.

Images 3 design using images as design elements

# Module 3: Specific HTML element targeting with CSS selectors   3.5 Style studies   Forms

# Forms

Forms can be a surprisingly tricky element to style because you are asking for a lot of interaction from your user, and the burden is on you as the designer to make it clear what exactly you are asking them to do. However, with a few simple design changes you can make it much easier for your user to navigate your form. Here are some key design elements to keep in mind when designing forms. 

white space - It is important to separate your form elements from your other content, otherwise it can easily be skipped over. It is also important to use white space surrounding each of your input elements to help draw your user's eye from the start to the end of your form. White space can also give the impression of simplicity and ease, an overcrowded form can seem daunting and tiring to fill out.
borders - Possibly one of the most important design elements of your forms are borders. Borders give your user a visual clue that they should enter text, or select something from a drop down. When you eliminate all borders it is impossible to tell what is a form and what is just static text.
labels - Each input should have a label communicating to the user what information you are asking them to submit. You will want to make sure this text is aligned and flows with the input element so it is clear what label is associated with which input. One of the easiest ways to make sure there is a label is to put the label inside the input text box as demonstrated in some of our sample designs. 
input sizes - You can help the user quickly assess how much text you are asking them to provide by how big your input element is. A very small input element will infer that you are only asking for a small number of characters, and a very large box with multiple lines can infer that you are asking a lot more from your user. It is also important to try and gauge the input size accordingly so your user doesn't run out of space as they are entering text.
pseudo-classes - Perhaps one of the best uses of pseudo-classes is with forms. Pseudo-classes can help provide extra feedback as your user interacts with each of your form elements. You'll often see hover used to expose more information, active used to help a user understand which element they are currently interacting with, and more.
submit button - Don't forget some of the lessons learned in Module 2: it is important to make your button look like a button. You will want to make sure that your submit button is placed so that it is obvious after a user has entered in all the requested info.
Here is an HTML/CSS form:

A form that is so unstyled it is impossible to use

You might never know it, but each of the 4 elements below the title are intended for the user to interact with. By stripping them of their styles you can see how important it is to add visual cues for your user. 

Form 1

The first form design uses basic layout to give each input element a clear label, space and area for input followed by a clear submit button. This design also used pseudo classes to engage the user, which you can see in action in the Code Pen

Form design #1

Form 2

This form design is more minimalist, using the clear and consistent design and layout to help the user feel like the form is extra short.

Form design #2

Form 3

This form design leaves lots of white space to help it feel clean and simple. 

Form 3 design

# Module 3: Specific HTML element targeting with CSS selectors   3.6 Project 3 - My profile   Module 3 project and discussion

# Module 3 project - My profile

Now that you have a host of new selectors available, you can style much more complicated HTML. Take your "about me page" from Module 2, and add to it so that it becomes more of a "profile". Your page must have the following elements:

header and footer tags
an education, work experience and favorite things sections
at least two subsections within each main section. You could use either the <section> tag, the <article> tag or the <div> tag for this. 
Each subsection should have its own title and two inner subsections 
Once you have all these elements, style them to look nice, but you must have each of the following:

1 ID
2 different classes, each with at least 2 members
1 special style applied when an element is hovered over by the user's cursor
1 special style applied when the user clicks an element
3 uses of contextual selectors
For reference here is what my solution looks like:

kasey's solution part 1
 Kasey's solution 2 Kasey's solution part 3

Discusión
Tema: Module 3 / Project - My profile

# Module 3: Specific HTML element targeting with CSS selectors   3.7 Conclusion and exercises   After this module you should be able to...

# After this module you should know how to...

- Specifically style any single element on a page using IDs
- Group HTML elements with similar style using classes
- Employ pseudo classes to make HTML elements more dynamic
- Scope CSS rules using contextual selection
- Build CSS rule sets with intention leveraging the cascading nature of CSS to manage conflicting rules

# In the next module,  you will:

- Learn about layout and positioning with CSS
- Understand the box model 
- Explore relative positioning
- Learn about the flow property

[Module 4](module4.md)
