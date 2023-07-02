<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div class="px-5">
        <section id="introduction">
            <h1 class="uppercase animate-text bg-gradient-to-r from-lime-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold
            text-4xl md:text-8xl
            ">
                Missingno.io
            </h1>
            <p>By <nuxtLink class="hover:underline hover:from-yellow-500 hover:via-lime-500 hover:to-pink-500 animate-text bg-gradient-to-r from-yellow-500 via-pink-500 to-lime-500 bg-clip-text text-transparent" to="/about">Chris Stage</nuxtLink></p>
        </section>
        <section id="intoduction-tldr" class="max-w-4xl mt-8">
            <div aria-hidden="true" class="text-gray-200">
                ~/intro --tldr
            </div>
            <div aria-hidden="true" class="flex items-center">
                <span class="text-xs text-pink">i</span>
                <span class="pl-2 text-lime">Serving Intro in TL;DR mode</span>
                <span class="ml-2 text-yellow">:</span>
            </div>
            <p class="mt-4">
                Hi. Welcome to missingno.io. This is a website I have around to tell people a bit more about myself.
                If you didn't get it already, the
                <a href="https://en.wikipedia.org/wiki/MissingNo." class="hover:text-yellow-100 underline text-yellow">name comes from a glitch in the original Pokemon games</a>.
                I've been using it as a call sign of sorts.
            </p>
            <p class="mt-4">
                I'm a software developer, and I've been working in the industry for about 10 years now. I'm not a fan of
                the term "full stack developer", but I would consider myself one. I've worked on front-end, back-end,
                databases, and have provisioned my fair share of servers.
            </p>
            <a
                href="#"
                class="mt-6 animate-border inline-block bg-white from-pink-500 via-lime-500 to-yellow-500 p-0.5 hover:bg-gradient-to-r">
                <span class="block bg-purple-900 px-5 py-3 text-white"><span class="underline">More about me</span> -></span>
            </a>
        </section>
    </div>
</template>
