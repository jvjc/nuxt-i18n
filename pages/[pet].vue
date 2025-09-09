<template>
    <div>
        <h1>{{ $t(route.params.pet) }}</h1>
        <div class="d-flex justify-center">
            <div>
                <v-img :src="data.thumbnail.source" :width="data.thumbnail.width"></v-img>
            </div>
        </div>
        <h3>{{ data.title }}</h3>
        <p>{{ data.extract }}</p>
    </div>
</template>
<script setup>
const route = useRoute();
const { t, locale } = useI18n();
const { data, refresh } = await useFetch(`https://${locale.value}.wikipedia.org/api/rest_v1/page/summary/${t(route.params.pet)}`);

watch(locale, () => {
    refresh();
})
</script>