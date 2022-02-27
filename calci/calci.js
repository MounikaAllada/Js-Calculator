let allbuttons=document.querySelectorAll('.button')

for(let a of allbuttons)
{
    a.addEventListener('click',function()
    {
        key=this.innerHTML

        if(key=='AC')
        {
            document.querySelector('#screen').innerHTML =' '  
        }
        else if(key=='C')
        {
            let c=document.querySelector('#screen').innerHTML.slice(0,-1) 
            document.querySelector('#screen').innerHTML =c
        }

        else if(key == '=')
        {
            let result= document.querySelector('#screen').innerHTML
            let c =eval(result)
            document.querySelector('#screen').innerHTML =c
        }
        else
        {
        document.querySelector('#screen').innerHTML +=key
        }
    })
}