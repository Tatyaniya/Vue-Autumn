<template lang="pug">
    .tags-adder-components 
        addInput(
            title="Добавление тега"
            :value="currentTags"
            @input="inputTags"
            :error-message="errorMessage"
        )

            
        ul.tags
            li.tag(
                v-if="tag.trim()"
                v-for="(tag, index) in tagsArray" 
                :key="`${tag}${index}`"
                )
                tag(
                    interactive 
                    :title="tag"
                    @click="removeTag(tag)"
                )
</template>

<script>
import addInput from "../input";
import tag from "../tag";

export default {
    components: {
        addInput,
        tag
    },
    props: {
        tags: {
            type: String, 
            default: ""
        },
        errorMessage: {
            type: String,
            default: ""
        },
    },
    model: {
        prop: "tags",
        event: "change"
    },
    data() {
        return {
            currentTags: this.tags
        }
    },
    watch: {
        tags() {
            this.currentTags = this.tags;
        }
    },
    computed: {
        tagsArray() {
            return this.currentTags.trim().split(',');
        }
    },
    methods: {
        removeTag(tag) {
            const tags = [...this.tagsArray];
            const tagNdx = tags.indexOf(tag);

            if(tagNdx < 0) return;

            tags.splice(tagNdx, 1);
            this.currentTags = tags.join(", ");

            this.$emit('change', this.currentTags);
        },
        inputTags(val) {
            this.$emit('change', val);
        }
    }
}
</script>

<style lang="postcss" scoped>
    .tags {
        display: flex;
        margin-top: 20px;
    }
    .tag {
        margin-right: 10px;
    }
</style>