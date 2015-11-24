import React                           from 'react';
import { Accordion, AccordionSection } from '../lib/accordion.js';

export default class AccordionDemo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    var Sections = [
      {
        id: 1,
        fruit: "Apple",
        description: "Apples have a rounded shape with a depression at the top where the stem is attached. Some apples are almost perfectly round, while others are more rounded at the top and narrower at the bottom.  In addition, some have knobby lobes at the calyx end (bottom) of the fruit.  Apple fruits are firm and the skin is shiny and smooth. The color of the skin can be red, green, yellow, or a combination of those colors. The flesh is white or ivory."
      },
      {
        id: 2,
        fruit: "Banana",
        description: "Bananas are in the shape of a long curving cylinder. The bottom end narrows to a point and the top end has a thick stem that attaches the fruit to the inflorescence stalk.  A small group of bananas is termed \"hands\".  Hands are collectively known as \"bunches\". Banana skin is smooth and thick, and often has a few vertical ridges that run the length of the fruit. The flesh is creamy white and soft."

      },
      {
        id: 3,
        fruit: "Clementine",
        description: "A clementine is a hybrid between a Mediterranean Citrus ×deliciosa and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel."

      }
    ];

    return (
      <Accordion showAll={true} hTag={'h2'} dividers={true}>
        {Sections.map((section, index) => {
          return (
            <AccordionSection key={index} title={`Section ${ section.fruit }`}>
              <p>
                This is the {section.fruit} Section!
              </p>
              <p>
                {section.description}
              </p>
            </AccordionSection>
          )
        })}
      </Accordion>
    );
  }

}
