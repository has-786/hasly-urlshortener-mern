
           export default function debounce(fun,d){
            let timer;
            return function(){
              let context=this;
              clearTimeout(timer)
              timer=setTimeout(()=>{
                fun.apply(context,arguments)
              },d)
           }
        }