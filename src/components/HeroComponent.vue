<template>
    <section id="hero" class="hero section">
        <div class="background-image">
            <img src="../assets/images/Visitors-1-min.png" alt="visitors 1">
        </div>
        <div class="container">
            <div class="row justify-content-left text-center">
                <div>
                    <h2><span>Access our extensive eBook library and eStudy Bible software</span></h2>
                    <p>Gain exclusive access to a wealth of digital resources curated to
                        enrich your reading experience and deepen your
                        understanding of scripture.
                    </p>
                    <ReusableButton buttonClass="btn-primary">Join Now!</ReusableButton>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import ReusableButton from '../components/forms/ReusableButton.vue'

export default {
    name: 'SectionOne',
    components: {
        ReusableButton,
    }
}
</script>

<style scoped>
.hero img {
    width: 100%;
    height: 100vh;
}
</style>