<template lang="pug">
    card(slim)
        editLine(
            slot="title" 
            v-model="categoryTitle" 
            :editModeByDefault="empty"
            @remove="$emit('remove', $event)"
            @approve="$emit('approve', $event)"
            )
        template(slot="content")
            ul.skills(v-if="empty === false")
                li.item(v-for="skill in skills" :key="skill.id")
                    skill(
                        :skill="skill"
                        @remove="$emit('removeSkill', $event)"
                        @approve="$emit('editSkill', $event)"
                        )
            .bottom-line
                skillAddLine(
                    @createSkill="$emit('createSkill', $event)"
                    :blocked="empty"
                )
</template>

<script>
import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

export default {
    components: {
        card,
        editLine,
        skill,
        skillAddLine
    },
    props: {
        empty: Boolean,
        title: {
            type: String,
            default: ""
        },
        skills: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            categoryTitle: this.title,
        }
    }
}
</script>

<style lang="postcss">
    .item {
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .bottom-line {
        padding-top: 70px;
        margin-top: auto;
        padding-left: 25%;
    }
</style>
