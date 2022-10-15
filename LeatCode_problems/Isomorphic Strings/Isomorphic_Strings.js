function isIsomorphic(s, t) {
    let ob={}
    let bool
    for(let i=0;i<s.length;i++){
        if(s[i] in ob){
            console.log(ob[s[i]])
            console.log(t[i])
            if(ob[s[i]] != t[i]){
                bool = false
                break;
            }
        }
        else{
            ob[s[i]]=t[i]
            let key = Object.keys(ob).find(key => ob[key] === t[i])
            console.log(key)
            if(key != s[i]){
                bool = false
                delete ob[ s[i] ] // delete key from object
            }
            else{
                bool = true
            }

         }
    }
    console.log(ob)
    return bool
};

 //console.log(isIsomorphic("badc" , "baba"))
//  console.log(isIsomorphic("foo" , "bar"))
 console.log(isIsomorphic("egg" , "add"))
 //console.log(isIsomorphic("paper" , "title"))
//console.log(isIsomorphic("32767" , "65535"))
//console.log(isIsomorphic("leet" , "code"))