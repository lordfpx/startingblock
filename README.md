Starting-Block
==============
Yet another CSS framework which will let you start your projects with a solid base. It's inspired by other great projects such as:
- http://www.knacss.com/ by Raphaël Goetter
- http://rocssti.nicolas-hoffmann.net/ by Nicolas Hoffmann

You can use it, change it, take only some parts of it freely. I will be very pleased if you mention me somewhere anyway (with a link to my GIT repository).

Browser support: Internet Explorer 8+, Firefox 3.6+, Safari 3+, Google Chrome 16+.


DOCUMENTATION AND DEMO
----------------------
http://www.thierryphilippe.fr/projects/startingblock/


WHY ?
-----
A LESS/CSS micro-framework is a good and fast way to start a new front-end. You will be able to prototype quickly and it will not give you headache when you will be adding you own design (unlike Twitter Bootstrap for exemple).


ADVANTAGES
----------
- Mobile first
- Border-box ready
- Nested grid (with the same gutter size whatever the level!)
- Different gutter sizes depending on media-queries
- You can remove gutters on any columns as you wish
- "all-***" allows you to define the same style to all direct children (for exemple, .all-inline-block will give display: inline-block to every direct child of this element)
- GRUNT ready (in your terminal, cd to the startingblock folder and type "grunt" to build and start the watcher, you will find in the dist folder both LESS and CSS files) 


HOW ?
------
If you only plan to use it has-is:
- Download the full archive here: https://github.com/lordfpx/startingblock/archive/master.zip

If you plan to work on it, start your terminal and:
- `cd` your working directory
- Clone the repo: `git clone https://github.com/lordfpx/startingblock.git`
- install nodeJS (http://nodejs.org/) if you don't have it
- Install GRUNT with `npm install -g grunt-cli`
- run `npm install`
- run `grunt` and start playing!

Remember to @import _variables.less file to use variables in your own Less files.
