let a= 36;
let b = 64;
let i=1;
let gcd = 1;
if(a>b)
{
    while(i<=b)
    {
        if((a%i==0) && (b%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
else
{
    while(i<=a)
    {
        if((a%i==0) && (b%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
console.log(gcd);