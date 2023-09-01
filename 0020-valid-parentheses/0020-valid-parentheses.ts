function isValid(s: string): boolean {
    const VALID = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    const TEMP = []

    if(s.length % 2 > 0){
        return false
    }

    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i)

        if(char === '(' || char === '{' || char === '['){
            TEMP.push(char)
        }else{
            if(TEMP.length === 0 || TEMP.pop() !== VALID[char]){
                return false
            }
        }
    }

    return TEMP.length === 0
};