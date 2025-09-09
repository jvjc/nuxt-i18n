<template>
    <v-toolbar>
        <v-toolbar-title>
            <v-btn :to="$localePath('/')">{{ $t('title') }}</v-btn>
        </v-toolbar-title>
        <template v-slot:append>
            <div class="d-flex align-center">
                <v-select
                    style="width: 140px"
                    :label="$t('language')"
                    density="compact"
                    variant="outlined"
                    item-title="title"
                    item-value="value"
                    :items="availableLocales"
                    :hide-details="true"
                    v-model="currentLocale"
                ></v-select>
            </div>
        </template>
    </v-toolbar>
</template>
<script setup>
const { t, locale, setLocale } = useI18n();

const currentLocale = ref(locale.value || 'es');

const availableLocales = computed(() => [
  { title: t('spanish'), value: 'es' },
  { title: t('english'), value: 'en' }
])

watch(currentLocale, (value) => {
    setLocale(value);
})
</script>