module.exports = {

    get: (key, initVal) => {

        const saved = JSON.parse(localStorage.getItem(key));
        console.log(saved);
        if (saved  !== undefined && saved !== null ) return saved
        // return saved ?? initVal 
        return initVal
      
    },
      
    set: (key, val) => {
        
        localStorage.setItem(key,val)
      
    }
}