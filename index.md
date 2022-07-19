---
layout: layout.njk
title: Knaackbuilt.dev
---
 {% from './_includes/_components.njk' import topic  %}
<h1 class="text-3xl font-bold"><a href="/"> {{title}}</a></h1>
<p class="my-4"> I'm building this site in the open so it's gonna be a bit of a mess for a while </p>
{{ topic({
    title:"Topics I'm interested in",
    topics:[
        {
            title:"First Topic",
            text:"A description"
        },
        {
            title:"Second Topic",
            text:"Something very interesting!"
        },
        {
            title:"Third Topic",
            text:"One more for the road"
        }
    ]

})}}