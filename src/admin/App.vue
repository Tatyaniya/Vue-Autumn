<template lang="pug">
    .app-container
        router-view(name="header" @logout="logout")
        router-view
        .notify-container(:class="{active: isTooltipShown}")
            .notification
                notification(
                    :text="tooltipText"
                    :type="tooltipType"
                    @click="hideTooltip"
                )
</template>

<script>
import { mapActions, mapState } from 'vuex';
import notification from "./components/notification";

export default {
    components: { notification },
    computed: {
        ...mapState("tooltips", {
        isTooltipShown: state => state.isShown,
        tooltipText: state => state.text,
        tooltipType: state => state.type,
        }),
    },
    methods: {
        ...mapActions({
            logoutAction: 'user/userOut',
            hideTooltip: "tooltips/hide"
        }),
        async logout() {
            await this.logoutAction();
            this.$router.replace('/login');
        }
    }
}

</script>

<style lang="postcss">
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>