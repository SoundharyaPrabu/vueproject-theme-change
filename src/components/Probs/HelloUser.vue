<template>
    <div>
        <h2>Message</h2>
        <p>Hello {{  username }}</p>
    </div>
</template>

<script>
    export default{
        name:'HelloUser',
        props:['username']
    };
</script>