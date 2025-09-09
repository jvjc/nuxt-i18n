<template>
    <div>
        <h2 class="mb-3">{{ $t('subtitle') }}</h2>
        <p class="mb-2">
            <v-btn :to="$localePath('/dog')">{{ $t('dog') }}</v-btn>
        </p>
        <p class="mb-2">
            <v-btn :to="$localePath('/cat')">{{ $t('cat') }}</v-btn>
        </p>
        <p>
            Sin usar <code>$localePath</code>
        </p>
        <p>
            <v-btn to="/hamster">{{ $t('hamster') }}</v-btn>
        </p>
    </div>
</template>