---
layout: layout.njk
title: Projects and How I Contributed
---
{% from './_includes/_components.njk' import topic, taglist  %}

<h2 class=" uppercase font-bold py-2 md:text-center">{{title}}:</h2>

<div class="" x-data="">    
<form class="md:text-center">
<label for="frontend" class="font-espy text-sm">Front-end Web Development</label>
<input type="checkbox" id="frontend" class="border border-black rounded" @click="findfront()">
<label for="product" class="font-espy text-sm ml-4">Product Management</label>
<input type="checkbox" id="product" class="border border-black rounded" @click="findproduct()">
</form>
{{ taglist({
    tags:[
        {
            title:"The Official Website of the State of New York - ny.gov",
            categories:[
                    {
                        text:"frontend"
                    },
                    {
                        text:"product"
                    }
                ],
            link:"https://ny.gov"
        },
        {
            title:"The Official Website of the Governor State of New York - governor.ny.gov",
            categories:[
                    {
                        text:"frontend"
                    },
                    {
                        text:"product"
                    }
                ],
            link:"https://governor.ny.gov"
        },
        {
            title:"Office of General Services - ogs.ny.gov",
            categories:[
                    {
                        text:"content"
                    },
                    {
                        text:"product"
                    }
                ],
            link:"https://ogs.ny.gov"
        },
        {
            title:"NYS Digital Services Utilities - nysds.dev",
            categories:[
                    {
                        text:"fullstack"
                    }
                ],
            link:"https://nysds.dev"
        }
    ]
})
}}
</div>
<script>
    function findfront(){
        const front = document.querySelectorAll('.frontend');
        console.log(front)
            for (let i = 0; i < front.length; i++) {
                        front[i].classList.toggle('bg-yellow-500')
                    }
    }
    function findproduct(){
        const product = document.querySelectorAll('.product');
            for (let i = 0; i < product.length; i++) { 
                        product[i].classList.toggle('bg-yellow-500')
                    }
    }  
</script>