
const getStore=()=>
{
    const json = localStorage.get('store');
    if (json === null)
    {
        return[];
    }
    const store = JSON.parse(json);
    return store;
}
//recordstore
const setStore = (items)=>
{
    if (typeof(Storage) !== 'undefined') {
        // поддерживает localStorage
        try {
        const json = JSON.stringify(items);
        localStorage.setItem('store',json);
      } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          console.log('Не достаточно места в localStorage');
        }
      } 
    }else {
        // браузер не поддерживает веб-хранилище
        console.log('браузер не поддерживает веб-хранилище');
        
      }
    
    
}


const findItemById = ()=>
{
    const itemIdx=store.findIndex(el=>
        {
            return el.id ===id;
        });
        return itemIdx;
}
const addItem=(id)=>
{
    const itemIdx=store.findItemById(id);
    if(itemIdx===-1)
    {
        return false;
    }
    const store = getStore();
    store.push({id, count:1})
    setStore(store);
}
const removeItem=(id)=>
{
    const itemIdx=store.findItemById(id);
    if(itemIdx===-1)
    {
        return false;
    }
    const store = getStore();
    delete(store[itemIdx]);
    setStore(store);

}

module.exports={
    getStore,setStore
}