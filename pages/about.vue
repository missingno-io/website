<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div class="px-5">
        <section id="heading">
            <h1 class="uppercase animate-text bg-gradient-to-r from-lime-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold
            text-4xl md:text-8xl
            ">
                About
                <span class="block text-2xl md:text-4xl">Chris Stage</span>
            </h1>
        </section>
        <section id="introduction" class="max-w-4xl mt-8">
            <div class="text-gray-200">
                <span aria-hidden="true" class="bg-pink-950">~{{ $route.path }}></span>
                <h2 class="inline"> chris</h2> <span aria-hidden="true">--tldr</span>
            </div>
            <div aria-hidden="true" class="flex items-center">
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-lime">Serving Intro in TL;DR mode</span>
                <span class="text-yellow">:</span>
            </div>
            <p class="mt-4">
                I'm a web developer based out of Minneapolis, MN. I've been working on this site for a few hours so I
                think I'll let chatGPT take it from here (for now).
            </p>
        </section>
        <section id="gpt-summery" class="max-w-4xl mt-8">
            <div class="text-gray-200">
                <span aria-hidden="true" class="bg-pink-950">~{{ $route.path }}></span>
                <h2 class="inline"> chatgpt prompt</h2> <span aria-hidden="true">--model=gpt-4 </span>
                <span aria-hidden="true">--mode=continuous</span>
            </div>
            <div aria-hidden="true" class="flex items-center">
                <span class="text-lime">✔</span>
                <span class="pl-2 text-lime">Connected to ChatGPT</span>
            </div>
            <div>
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Using model: 'gpt-4'</span>
            </div>
            <div>
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Enter prompt:</span>
                <span class="bg-pink-950"> |</span>
            </div>
            <p class="mt-4">
                My name is Chris Stage and I'm a web developer with 10 years of experience working primarily with php
                and javascript but have extensive knowledge as a full stack engineer due to working on over 60 website
                launches and building about a dozen web applications. Can you write me compelling and interesting copy
                to share on my personal website where I explain my career?
            </p>
            <div class="pt-4">
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Generating response...</span>
            </div>
            <div aria-hidden="true" class="flex items-center">
                <span class="text-lime">✔</span>
                <span class="pl-2 text-lime">Generated</span>
            </div>
            <div>
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Output:</span>
                <span>
                    Absolutely, Chris! Here's a proposal for your website's copy:
                </span>
            </div>
            <div>
                <h3 class="font-bold animate-text bg-gradient-to-r from-lime-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mt-8">Welcome to the Digital Domain of Chris Stage: Master Web Craftsman</h3>

                <p class="mt-4">Hello and welcome, curious visitor! You've just landed in the digital realm of a seasoned web
                    developer, Chris Stage, who's been scripting stories in PHP and JavaScript for over a decade. In
                    this span, I've had the privilege of launching more than 60 unique websites, each narrating its own
                    tale of functionality and elegance, and crafting a dozen impactful web applications that have
                    transformed ideas into reality.</p>

                <p class="mt-4">As a self-proclaimed <span class="font-bold animate-text bg-gradient-to-r from-pink-500 via-lime-500 to-purple-500 bg-clip-text text-transparent">Full Stack Virtuoso</span>, my expertise is not just limited to PHP and JavaScript.
                    I've journeyed through the layers of the web, from the cavernous backend databases to the vibrant
                    front-end interfaces, understanding and mastering each part that makes up the whole. My diverse
                    skill set and comprehensive knowledge have enabled me to ensure that the digital solutions I deliver
                    are not only efficient but also aesthetically pleasing.</p>

                <p class="mt-4">But, what does this mean for you? Well, it means I can bring your vision to life. Whether you're
                    looking for a sleek, intuitive website to mesmerize your audience, or a robust web application that
                    transforms complex tasks into simple clicks, I can make it happen. I build not just websites, but
                    complete user experiences that engage, impress, and deliver results.</p>

                <p class="mt-4">The world of web development is dynamic, constantly shifting and evolving. And so have I. Over these
                    10+ years, I've adapted, learned, and grown alongside the industry, continuously updating my toolbox
                    with the latest trends and technologies to bring you the best of the digital world.</p>

                <p class="mt-4">I invite you to navigate through my portfolio, a digital gallery that showcases my journey and
                    achievements in web development. Each project encapsulates my passion for coding, my commitment to
                    delivering high-quality results, and my incessant pursuit of innovation.</p>

                <p class="mt-4">Ready to bring your next digital dream to life? Let's connect and write your web story together.</p>

                <p>I hope you find this compelling and interesting! Remember, the above is just a draft. Don't hesitate
                    to tweak it or provide feedback for any changes you might want.</p>
            </div>
        </section>
        <section id="follow-up" class="mt-8">
            <div>
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Enter prompt:</span>
                <span class="bg-pink-950"> |</span>
            </div>
            <p class="mt-4">
                Thanks
            </p>
            <div class="pt-4">
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Generating response...</span>
            </div>
            <div aria-hidden="true" class="flex items-center">
                <span class="text-lime">✔</span>
                <span class="pl-2 text-lime">Generated</span>
            </div>
            <div>
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-yellow">Output:</span>
                <span>
                    You're welcome, Chris! If you have any other requests or need further assistance, feel free to ask. Good luck with your website!
                </span>
            </div>
            <div class="mt-8">
                🤫
            </div>
        </section>
        <div class="py-6">

        </div>
    </div>
</template>
