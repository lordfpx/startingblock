Starting-Block
==============

WARNING - NOT READY FOR PRODUCTION YET !

Yet another CSS framework which will allow you to start your projects with a solid base. It's inspired by other great projects such as:
- http://www.knacss.com/ by Raphaël Goetter
- http://rocssti.nicolas-hoffmann.net/ by Nicolas Hoffmann

You can use it, change it, take only some parts of it freely. I will be very pleased if you mention me somewhere anyway (with a link to the GIT repository).

Browser support: Internet Explorer 7+, Firefox 3.6+, Safari 3+, Google Chrome 16+.


WHY ?
-----
A CSS micro-framework is a good and faster way to start a new front-end. You will be able to prototype quickly and it will not give you headache when you will be adding you own design (unlike Twitter Bootstrap for exemple).


ADVANTAGES
----------
- Mobile first
- Border-box ready (even for IE 7 !)
- Nested grid, padding based system that will keep the same gut size !
- Different gut sizes depending on media-queries
- You can remove guts on any columns as you wish
- "all-***" allows you to define the same style to direct children (for exemple, .all-ilbl will give display: inline-block to every direct child of this element)
- GRUNT ready !


DOCUMENTATION AND DEMO
----------------------
http://lordfpx.github.io/startingblock/


HOW ?
------
If you only plan to use it has-is:
- Download the full archive here: https://github.com/lordfpx/startingblock/archive/dev.zip

If you plan to work on it, start your terminal and:
- `cd` your working directory
- Clone the repo: `git clone https://github.com/lordfpx/startingblock.git`
- install nodeJS (http://nodejs.org/) if you don't have it
- Install GRUNT globally with `npm install -g grunt-cli`
- run `npm install`
- run `grunt` and start playing!