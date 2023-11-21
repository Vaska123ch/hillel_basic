let y;
do {
let x = prompt('Введіть будь - яке число?', 0);
y = x * 1;

if (isNaN (y))
{
    alert ('Only number, please');
    y = 0;
}
else if (y < 123)
{
    alert ('Should continue');
}
else if (y >= 123)
{
    alert ("Wow , you've ended this endless cycle!");
}
}
while (y <123);

