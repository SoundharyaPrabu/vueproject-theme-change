<template>
    <div class="card">
        <input v-model="name" type="text" placeholder="Product Name" />
        <input v-model="Price" type="number" placeholder="Product Price" />
        <input v-model="Stock" type="number" placeholder="Stock Count" />

        <!-- <p><strong>Name:</strong> {{ productName }}</p>
        <p><strong>Price:</strong> {{ productPrice }}</p>
        <p><strong>Stock:</strong> {{ stockCount }}</p> -->
    </div>
</template>

<script>
import { watch,ref } from 'vue';
    export default{
        name:'StockProduct',
        setup(){
            const name=ref("");
            const Price=ref("");
            const Stock=ref("");
            watch(
                [name,Price,Stock],
                ([newname,newprice,newstock],[oldname,oldprice,oldstock]) =>{
                    console.log('name changed:',newname);
                    console.log('price changed:',newprice);
                    console.log('stock changed',newstock);
                    console.table([
                        {field:'name',old:oldname,new:newname},
                        {field:'Price',old:oldprice,new:newprice},
                        {field:'Stock',old:oldstock,new:newstock}
                    ]);
                }
            )
            return {
                name,
                Price,
                Stock
            };
        }
    };
</script>