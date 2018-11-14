export function updateData(location, key, values){
    //location = main node
    let ref = db.ref(location);
    return ref.child(key).update(values).then((data)=>{
        console.log('common.js: Save result object follows below');
        return console.log(data);
    }).catch((error)=>{
        console.log('common.js: Save error object follows below');
        return console.log(error);
    });
}