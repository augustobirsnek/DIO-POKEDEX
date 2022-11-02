function convertPokemonIdtoOrderList(id){
    const arrayId = id.toString().split('');
    arrayId.reverse();
    const order = [];
    for(let i = 0; i < 3; i++){
        if(arrayId.length > i)
            order.push(arrayId[i]);
        else{
            order.push("0");
        }
    }
    order.push('#');
    return order.reverse().join('');
}
