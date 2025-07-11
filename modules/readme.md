## W3Cx-1of5-CSS.0x/modules/module1.md thru module5.md
<h1>Module 1: Getting started with CSS</h1>

<h3>Definitions</h3>
<p>
CSS, or Cascading Style Sheets, is a style sheet language used to describe the way an HTML or XML document should look to a user. CSS is where you specifiy the color, size, spacing, font and other visual aspects of the content that you create in your markup language document.

Most often you will see CSS used alongside HTML to describe the way a Web page looks and feels. You can have a Web page without CSS, but it would be very difficult to make it look the way you want with just HTML. This is why almost every Web page is a combination of HTML and CSS.
</p>
<h3>CSS • /si-ɛs-ɛs/ • noun </h3>
<p>
Stands for "Cascading Style Sheets". A style sheet language for describing how to display an HTML document.
</p>
Sample CSS document:

```[css]
body {
   background-color: #d0e4fe;
}
h1 {
   color: orange;
   text-align: center;
}
p {
   font-family: "Times New Roman";
   font-size: 20px;
}
```

<h3>HTML • /eɪʧ-ti-ɛm-ɛl/ • noun </h3>
<p>
Stands for "HyperText Markup Language", and it is the primary document format on the Web. It is a standardized system for tagging content on a web page so that a web browser knows how to present it properly to the viewer. It is a standardized way to describe a document's structure and the roles of the different parts of that document.
</p>
Sample HTML document:

```[html5] 
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My HTML page</title>
    </head>
    <body>
        <p> This is an HTML document </p>
    </body>
</html>
```

<h3>Web page • /wɛb peɪʤ/ • noun </h3>
<p>
A hypertext document connected to the World Wide Web.
synonyms: website, home page, landing page
Internet

A global system of computer networks that connect to one another so that billions of different devices all over the world can share data. The internet is a collection of smaller networks that all combined create one large, all-inclusive global network.
</p>
<h3>World Wide Web</h3>
<p>
A collection of documents linked together by hypertext links, addressed using Uniform Resource Locators (URLs) accessible on the Internet. The World Wide Web is an application of the internet. 
abbreviated as WWW or "the Web".
</p>
<h3>Web browser • /wɛb ˈbraʊzər/ • noun </h3>
<p>
A software application for retrieving, presenting and traversing information resources on the World Wide Web.
examples: edge, chrome, Firefox, internet explorer, safari, opera

<h3>HTTP</h3>
<p>
Stands for "Hypertext Transfer Protocol". It is a protocol managed by the W3C to dictate the manner in which Web pages share data on the World Wide Web. You might recognize this from the start of many Web addresses.
</p>
<h3>HTTPS</h3>
<p>
Stands for "Hypertext Transfer Protocol Secure". It  is the secure version of HTTP, the protocol over which data is sent between your browser and the Web site that you are connected to. It means all communications between your browser and the Web site are encrypted. Some examples of sites that use HTTPS include the W3C and Microsoft Web sites: https://www.microsoft.com/ - https://www.w3.org/
</p>

<h2>Module 1: Getting started with CSS   1.2 What is CSS?</h2>

<h2?Activity 1.2 - The Web before CSS</h2>
<p>
Now it's your turn to do some exploration! For this activity, your job is to find examples of Web sites before and after CSS.

A great place to start is at archive.org (aka, the "WayBack machine") which stores copies of web pages throughout history. You can search for some of your favorite websites and see if they have stored copies older than 1996. You should find that any Web page made before 1996 will look very different than Web sites we typically see today. When you find a real retro gem, please share it in this week's discussion (see below).

Here's one of my personal favorite vintage sites (which is still live!): http://www.warnerbros.com/archive/spacejam/movie/jam.htm
</p>
<h2>Module 1: Getting started with CSS   1.3 Why CSS is important   Separating content from presentation</h2>

<h2>Separating content from presentation</h2>
<p>
Up until now, we have been discussing CSS's role within a Web site as the "presentation" component, but what is that and why is it so important?

From the history of CSS, we learned why CSS came about, but the short answer is simply because HTML was never designed to describe the way a Web page was supposed to look. When we use HTML for what it was intended to do, describe content, it leaves space for CSS to properly control a page's visuals. This makes it very easy to update or add content without having to even touch the style. 
</p>
<h3>Some benefits of CSS:</h3>
<p>
CSS has a host of specialized tools to give you powerful control over the look and feel of your Web site, much more powerful than the tools provided by HTML.

Designers can style many HTML pages with a single CSS document for a consistent look and feel across an entire Web page and less code to maintain.

Separation of content and presentation makes Web site maintenance much simpler as you can address updates in isolation.

Over time more and more devices have become internet-capable, and now there are so many different orientations in which your user can view your content. With CSS, you can specifically cater the style to each device to ensure an optimal experience.

Some users have specific presentation needs based on personal or technological limitations or preferences. Separating content from presentation allows these users the option to control how they view content.

Before CSS visual elements were almost always achieved with static images, which can have a big affect on network performance. CSS provides an optimized way to style your page so it can load complex visuals quickly. 
</p>
<h4>External resources:</h4>

<h3>CSS design principles</h3>
<p>
Effective Use of Style Sheets (updated regularly since 1997!)
Repurposing of content
</p>

<h2>Module 1: Getting started with CSS   1.3 Why CSS is important</h2>

<h3>Meet CSS Zen Garden</h3>
<p>
These videos will introduce you to a web project titled "CSS Zen Garden". You can explore the project here: http://www.csszengarden.com/

Here is a bit about the project in their own words:

"CSS Zen Garden is a demonstration of what can be accomplished through CSS-based design. Littering a dark and dreary road lay the past relics of browser-specific tags, incompatible DOMs, broken CSS support, and abandoned browsers. We must clear the mind of the past. Web enlightenment has been achieved thanks to the tireless efforts of folk like the W3C, WASP, and the major browser creators. There is a continuing need to show the power of CSS. The Zen Garden aims to excite, inspire, and encourage participation".
- Dave Shea, Creator of CSS Zen Garden

<h3>Meet CSS Zen Garden</h3>

<h3>View source and browser tools</h3>
<p>
In the above demo, you saw me using what is called the "developer tool" within my Edge Web browser to inspect and real-time change the style of a page's CSS. You can actually right click on any site and choose to look at the code that creates it. This feature exists in both Chrome and Firefox. Here is what I see when I right click on a Web page in my browser.

Right click menu in Edge Web browser

As you can see, in this right click menu, there are two options: "Inspect element" and "View source". When you select view source, you can see the HTML and CSS powering that Web page. Here is what it looks like when I view the source of W3C's Web site:

Edge Web browser with view source window open

You can see a window that popped up from the bottom with all the HTML code for that site. Other Web browsers might pop this up in a separate window. 

You can also get more specific and look at individual HTML elements with the "Inspect element" option. Here is what it looks like in Edge when I inspect a specific title:

Edge inspect element view highlighting a specific title

As you can see, not only is the element highlighted on the page, but this also highlights the HTML code and shows you the CSS for that element on the right-hand side. In the video above, you can see me use this view to change the CSS and HTML real-time, which can be a very convenient way to play around with your designs.

As you work in your own sites you might want to use both of these features of your browser to understand what is happening in your own code, or in Web pages you find on the internet.
</p>
<h2>Module 1: Getting started with CSS   1.3 Why CSS is important   Activity 1.3 and discussion</h2>

<h2>Activity 1.3 - CSS Zen Garden critique</h2>
<p>
Now that you’ve gotten a good idea of what CSS Zen Garden is, take a closer look. Go to http://www.csszengarden.com/203/ and look through the different CSS Zen Garden designs for inspiration. Which is your favorite design? Pick one design and share your critiques with the discussion. 
http://www.csszengarden.com/221/
</p>
The following is the CSS for Zen Garden

INSERT CSS CODE SHORTCUT HERE

For your chosen design, please answer the following questions:

What made this design stand out to you?
What do you like best about this design?
What is one thing you don't like about this design?

<h2>Module 1: Getting started with CSS   1.4 Project - your first CSS   "Hello beautiful world"</h2>

<h4>"Hello beautiful world" Intro</h4>

Here is the HTML part:

```[html5]
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>
            Hello Beautiful World
        </p>
    </body>
</html>
```
... and the CSS file (style.css) is below:

```[CSS]
      p {
        color: blue;
        font-family:Helvetica;
      }
```

... and here is the "output":


Blue Helvetica text "Hello Beautiful World" in a browser window

<h2>Module 1: Getting started with CSS   1.4 Project - your first CSS   Comments</h2>

<h4>Comments</h4>
<p>
As you write your CSS, you might end up with a pretty large document that can be hard to manage, or you might find yourself working on a team and having to read CSS someone else has written. In these cases, it helps to leave "notes" for the humans that read the file. 

There is a way to leave notes that the Web browser will ignore when it is reading your CSS code, they're called "comments". In fact, leaving comments in your code is considered a best practice by developers and is a habit we highly recommend you develop now. 

To add comments to your CSS file, you need to surround any text you want the computer to ignore with a set of slashes and asterisks like so:
</p>

```[css]
/* those two symbols start my comment block
 I can have more comment text here
and the following two symbols end my comment */
```
<p>
As you can see, you can put as much text between the open and close symbols as you need, you can even have multiple lines. If you are working in an editor like Visual Studio code, you will notice that when you turn text into a comment, it turns green to indicate that the computer ignores that code.

![image022-Image of Visual Studio Code Comments](https://user-images.githubusercontent.com/41387907/235211512-c9b4d5b0-c8cc-49c3-900e-762c5ca82dcd.png)

Generally, it is a good idea to put a comment at the top of each CSS rule, or at the very least at the top of sets of rules that apply to a single category or section of your Web page. 
</p>
<h2>Module 1: Getting started with CSS   1.4 Project - your first CSS</h2>

<h2>Module 1 project - Hello your world</h2>
<p>
It's finally time to write your own CSS! Open your code editor of choice and save the following code as a new HTML document.

Remember: to do this, you will need to give it a .html file extension when you are saving it. For example, you could call it index.html
</p>

```[html]
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
   </head>
   <body>
      <p>
         Hello Beautiful World
      </p>
   </body>
</html>
```

<p>Once you have your HTML document view it in a Web browser. It should look like this:</p>

![image023-An image of Hello Beautiful Worl in a web browser with black text](https://user-images.githubusercontent.com/41387907/235209931-567ccebe-7f81-468f-ae22-fcd00667fe72.png)

<p>Now it’s time to add some CSS. Here is the CSS we wrote in the "Hello Beautiful World" demo. Make a new file with this css and save it with a .css file extension. For example, you can call it styles.css
</p>

```[css]
p {
    color: blue;
}
```
<p>
This won’t change the look of your HTML until you link the two files with this HTML tag.

To do this:
</p>
<ul>
<li>Remember it should be placed in the header, that is between the <head> and </head> tags in the HTML file,</li>
<li>Place the HTML and CSS files in the same folder on your computer,</li>
<li>Add the linking code to the HTML header (that means after the &lt;head&gt; tag and before the &lt;head&gt; tag). If your css is called "styles.css", here is what it would look like:</li>
</ul>

```[html]
<link rel="stylesheet" href="styles.css">
```
<p>
Now change the HTML and CSS files so that it says “Hello <your name>, welcome to my first CSS Web page” in your favorite color! Here’s what mine looks like:

![image024-An image of Hello Kasey in green text](https://user-images.githubusercontent.com/41387907/235207674-0da8b38e-ba59-4134-98a1-3663503684b2.png)
<!-- https://github.com/bbauska/W3Cx-1of5/blob/master/images/image024.png?raw=true -->

HINT: Is your favorite color not working? Not all color names are recognized by CSS. Sometimes the best way is to use HEX. We'll talk in more detail about colors in the next module, but here is a list of colors you can use: Extended color keywords
</p>

<h2>Module 1: Getting started with CSS   1.5 Conclusion and exercises   Module learnings</h2>

<h3>After this module, you should feel comfortable…</h3>
<ul>
<li>Explaining what CSS is, and why is it important,</li>
<li>Opening HTML and CSS files in your chosen code editor,</li>
<li>Using browser tools to inspect the source of a Web page you wrote.</li>
</ul>
   
<h3>In next module, you will:</h3>
<ul>
<li>Review the basics of HTML,</li>
<li>Learn the anatomy of a CSS "rule",</li>
<li>Discover the concept of a property,</li>
<li>Get to know selectors and how you can directly attach them to HTML tags,</li>
<li>Finally, for your module project, you'll get a get a chance to build the CSS for an HTML page from scratch.</li>
</ul>
