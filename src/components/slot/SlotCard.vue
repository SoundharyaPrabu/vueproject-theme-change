<template>
    <div>
        <h2>This is slotCard</h2>
        <slot name="customerContent" :info="message"></slot>
    </div>
</template>

<script>
    export default{
        name:"SlotCard",
        data(){
            return{
                message:"Hello from slotCard Component."
            };
        }
    };
</script>