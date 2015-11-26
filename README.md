#React Accordionlly
An Accessible Accordion React JS Component

##Synopsis

React Accordionlly is a flexible and a11y accessible accordion component written using [React JS](https://facebook.github.io/react/).

##Code Example

```
require('react-accordionlly');

...

render() {

  var Sections = [
    {
      id: 1,
      fruit: "Apple"
    },
    {
      id: 2,
      fruit: "Banana"
    },
    {
      id: 3,
      fruit: "Clementine"
    }
  ];

  return (

    <Accordion showAll={true} hTag={'h2'} dividers={true}>
      {Sections.map((section, index) => {
        return (
          <AccordionSection key={index} title={`Section ${ section.fruit }`}>
            This is the {section.fruit} Section!
          </AccordionSection>
        )
      })}
    </Accordion>

  );

}

...

```

##Motivation

At the time of initial development, there were few, if any, accordion components that offered the flexibility and accessibility that was required for the larger project the component was to be used in. The accordion needed to consume data from an API and populate the sections accordingly. Each section also needed to have the ability to change size in order to fit dynamic and interactive page elements that, when clicked within a section, would show or hide in a visibly pleasing way. Finally, it needed to comply with a11y web accessibility standards.

##Installation

Install using Node Package Manager (npm):

```
npm install react-accordionlly
npm install style-loader css-loader --save-dev
```

*The style-loader is necessary as this component uses css styling, primarily for the arrow indicators in the section heading.*

##PropTypes

+ `showAll` (boolean): Users can show all or show none of the sections on page load (default: `false`)
+ `hTag` (string): Users can choose what header (h1, h2, h3, h4, h5, h6) the accordion section title should be (default: `h3`)
+ `dividers` (boolean): Users can choose to have dividers between each section (default: `false`)

##License

Copyright (c) 2015 Lumen, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
