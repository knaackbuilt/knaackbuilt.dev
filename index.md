---
layout: layout.njk
title: Knaackbuilt.dev
---
 {% from './_includes/_components.njk' import topic, randomizer  %}
<h1 class="text-3xl font-bold py-4"><a href="/"> {{title}}</a></h1>
{{ randomizer({})}}
{{ topic({
    title:"The internets",
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
            text:"default way to show I technically 'work'"
        },
        {
            title:"Things I've contributed to",
            text:"list of projects you can disregard"
        }
    ]

})}}