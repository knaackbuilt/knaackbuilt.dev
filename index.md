---
layout: layout.njk
title: Knaackbuilt.dev
---
 {% from './_includes/_components.njk' import topic, randomizer  %}
<h1 class="text-3xl font-bold py-4 font-espy"><a href="/"> {{title}}</a></h1>
{{ randomizer({})}}
{{ topic({
    title:"I like this stuff",
    topics:[
        {
            title:"HTML",
            text:"html is great"
        },
        {
            title:"Accessibility",
            text:"so much debate here"
        },
        {
            title:"Front-end Web Development",
            text:"thoughts on this in general"
        }
    ]

})}}

{{ topic({
    title:"Just the facts",
    topics:[
        {
            title:"Resume",
            text:"default way to show I technically 'work'",
            link: "/resume"
        },
        {
            title:"Things I've contributed to",
            text:"list of projects you can disregard",
            link: "/contrib"
        }
    ]

})}}