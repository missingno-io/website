<template>
    <div class="md:h-screen md:flex">
        <aside class="h-full min-w-80 bg-purple-950 mb-6 md:mb-0 overflow-y-auto">
            <div class="bg-gray-100 py-5 px-5 hidden md:block">
                <NuxtLink to="/">
                    <img src="/images/missingno.webp" alt="Missingno Logo">
                </NuxtLink>
            </div>
            <div class="py-4 px-5">

            </div>
        </aside>
        <div class="w-full h-full overflow-y-auto">
            <nav class="md:flex items-center">
                <div class="px-5 md:flex items-center">
                    <div class="flex items-center">
                        <span aria-hidden="true" class="text-xs text-pink">i</span>
                        <span class="pl-2 text-lime">Missingno.io</span>
                        <span aria-hidden="true" class="ml-2 text-lime">✔</span>
                        <span aria-hidden="true" class="ml-2 text-yellow">Running...</span>
                    </div>
                    <div class="md:ml-4 text-gray-200">
                        ~/
                    </div>
                </div>
                <div class="border-y-2 border-lime-800 md:border-0 mb-6 md:mb-0 px-5 py-4 mt-6 md:mt-0 ml-auto">
                    <ul>
                        <li class="flex space-x-4">
                            <nuxtLink to="/" class="hover:text-gray-50">Home</nuxtlink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="h-full">
                <main class="h-full">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>