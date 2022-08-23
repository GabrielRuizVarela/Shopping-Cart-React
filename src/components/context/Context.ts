import React from 'react';
import miniMidnight from '../../images/mini/Midnight.png';
import miniBlue from '../../images/mini/Blue.png';
import miniRed from '../../images/mini/Red.png';
import miniPink from '../../images/mini/Pink.png';
import miniStarlight from '../../images/mini/Starlight.png';
import proSilver from '../../images/pro/Silver.png';
import proGraphite from '../../images/pro/Graphite.png';
import proGold from '../../images/pro/Gold.png';
import logo from '../../images/logo.svg';

const Context = React.createContext({
  logo,

  description: [
    {
      color: 'Midnight',
      description:
        "This is the classic black color we've all seen before -- just with a fancy name this time. Black is one of the most common colors for probably every phone out there, so if you want something not too flashy and doesn't stand out, you might want to go for this color. It's stealthy and the black frame certainly looks good, but the back will show your fingerprints easily.",
    },
    {
      color: 'Blue',
      description:
        "Apple introduced the blue color last year with the iPhone 12 and the fact they've retained it this year means it was well-received. The shade of blue has slightly changed this time though -- it's a lighter shade than what it was previously. We seem to like this better than last year as it's slightly more subtle and sober. It's also got a slight cyan tint to it. ",
    },
    {
      color: 'Red',
      description:
        'This is one of the most popular colors in the iPhone lineup mainly because it looks good and Apple also donates a percentage of earnings from all Red purchases to charity. Last year, they diluted the red to look slightly pinkish or even a little like peach. This time, however, the red is darker and looks more like true red which a lot of people will appreciate.',
    },
    {
      color: 'Pink',
      description:
        "This is the first new color that has been introduced this year with the iPhone 13 series. The pink variant replaces the green color scheme from last year and is a very subtle shade of pink, more commonly referred to as baby pink. The frame on this variant is reminiscent of Apple's Rose Gold color. This is a pretty color that will appeal to a lot of people. ",
    },
    {
      color: 'Starlight',
      description:
        "This is the second new color this year and just like how the Black variant was renamed to Midnight, the White variant has now been renamed to Starlight, with some small changes. The back isn't pure white now and is more like an off-white color with a creamish look. The edges of the phone lean more towards the silver color, similar to what it was on the white iPhone. ",
    },
    {
      color: 'Silver',
      description:
        "This is the second new color this year and just like how the Black variant was renamed to Midnight, the White variant has now been renamed to Silver, with some small changes. The back isn't pure white now and is more like an off-white color with a creamish look. The edges of the phone lean more towards the silver color, similar to what it was on the white iPhone. ",
    },
    {
      color: 'Graphite',
      description:
        'Graphite has arrived as the seventh color for the iPhone 13 series. Introduced in the March 2022 event, the Graphite color is quite interesting. It has a dark foresty hue for the main body with matching side rails, while the camera island takes on a lighter, pale green look. The iPhone is still as shiny as ever. ',
    },
    {
      color: 'Gold',
      description:
        'Gold has arrived as the eighth color for the iPhone 13 series. Introduced in the March 2022 event, the Gold color is quite interesting. It has a dark foresty hue for the main body with matching side rails, while the camera island takes on a lighter, pale green look. The iPhone is still as shiny as ever. ',
    },
  ],

  items: [
    {
      id: 1,
      name: 'Iphone 13 Mini',
      price: 1.0,
      colors: [
        {
          color: 'Midnight',
          image: miniMidnight,
        },
        {
          color: 'Blue',
          image: miniBlue,
        },
        {
          color: 'Red',
          image: miniRed,
        },
        {
          color: 'Pink',
          image: miniPink,
        },
        {
          color: 'Starlight',
          image: miniStarlight,
        },
      ],
    },
    {
      id: 2,
      name: 'Iphone 13',
      price: 1.0,
      colors: [
        {
          color: 'Midnight',
          image: miniMidnight,
        },
        {
          color: 'Blue',
          image: miniBlue,
        },
        {
          color: 'Red',
          image: miniRed,
        },
        {
          color: 'Pink',
          image: miniPink,
        },
        {
          color: 'Starlight',
          image: miniStarlight,
        },
      ],
    },
    {
      id: 3,
      name: 'Iphone 13 Pro',
      price: 1.0,
      colors: [
        {
          color: 'Silver',
          image: proSilver,
        },
        {
          color: 'Graphite',
          image: proGraphite,
        },
        {
          color: 'Gold',
          image: proGold,
        },
      ],
    },
  ],
});

export default Context;
