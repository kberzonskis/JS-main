let a=5, b=3

let k;

k = a;
a = b;
b = k;
console.log(a+b)



 g='5'
 j='5'
 i='5'

 console.log (g+j+i)

 p= 6

 o=12
console.log(p+o)

console.log(b+p+j)

let h=2 
console.log(h/Infinity)

const b1 = `Vienguba (') kabute.`;
console.log(b1);

const b2 = `Dviguba (") kabute.`;
console.log(b2);

const b3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(b3);

const b4 = `Backtick (\`) kabute.`;
console.log(b4)

const b5 = 'Backtick (`) kabute.';
console.log(b5)

const b6 = "Backtick (`) kabute.";
console.log(b6)


// Maryte yra viena is 4 legendiniu studentu.
const studentName = 'Maryte';
const reiksme = 4;

const student = studentName + ' yra viena/s is ' + reiksme + ' legendiniu studentu.';
const student2 = `${studentName} yra viena/s is ${reiksme}studentu.`;

console.log(student);
console.log(student2);

const demo = `Labas, ${studentName}.`;
console.log(demo);

 // Antanas turi 12 obuliu

 const vyras = 'Antanas'; 
 const skaičiai = 12 

 const sakinys = vyras +  ' turi '  + skaičiai +  ' obuoliu.';

 console.log (sakinys); 




/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/ 


const ki = 2 
console.log=(ki);

const ki2 = 6 
console.log =(ki2);

const ki3= 8 
console.log=(ki3);


console.clear();


//Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500)


for(let i = 1; i<=500; i++)
{
    if(i === 1 || i ===2 || i=== 5 || i===10 || i===20  || i===50 || i===100  || i===200 || i===500)
    {
        console.log(i)
    }
}

//Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį Žodis, kurio reikšmė yra ‘Labas’

const Raidės = [ 'L', 'a', 'b', 'a', 's'];

let zodisLabas = '';

for(let i= 0; i<Raidės.length; i++)
{
    zodisLabas +=Raidės[i];
}

console.log(zodisLabas)

//Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas raidę.

let zodisP = 'Programavimas';

for (let i = 0; i<zodisP.length; i++)
{
    console.log(zodisP[i]);
}


//Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į consolę reikšmę

// ats = 2*3*4*5*6*7*8*9*10

let Daugyba = 2;

for (let i = 3; i<=10; i++)
{
    Daugyba = Daugyba * i;
}

console.log(Daugyba);


//Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10


for(let i= 20; i>=10; i--)
{
    console.log(i);
}


//Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]  elementus vienas po kito nuo galo iki pradžios

const RaidėsAtbulai = ['s', 'a', 'b', 'a', 'L'];

for(let i = RaidėsAtbulai.length-1; i>=0; i--)
{
    console.log(RaidėsAtbulai[i])
}


//Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = ‘samivamargorP’  atskiras raides vieną po kitos



let ŽodisAtbulas = 'samivamargorP'

for(let i= 0; i<ŽodisAtbulas.length; i++)
{
    console.log(ŽodisAtbulas[i]);
}


//Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’


for(let i = 1; i<=100; i++)
{
    
    if(i%7==0)
    {
        console.log("lucky " + i);
    }
    else
    {
        console.log(i);
    }
    
}


//Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)

const Dvigubinti = [2, 3, 6, 8];

for(let i = 0; i<Dvigubinti.length; i++)
{
    console.log(Dvigubinti[i]*2);
}


//Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų visus skaičius, kurie yra mažesni už 100


const DaugSkaičių = [2, 14, 10, 1000, 503, 8, 0]

for(let i = 0; i<DaugSkaičių.length; i++)
    {
        if(DaugSkaičių[i]<100)
        {
            console.log(DaugSkaičių[i]);
        }
    }
    


//Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą


let NelSuma = 0;

for(let i =1; i<30; i+=2)
{
    NelSuma = NelSuma + i;
}

console.log(NelSuma);









//Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis).


function Ar18(skaicius)
{
    if(skaicius>18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(Ar18(25));
console.log(Ar18(5));
console.log(Ar18(18));


//Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.


function arLabas (zodis)
{
    if(zodis ==='labas')
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(arLabas('Labas'));


//Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.


function Ar5 (zodis)
{
    if(zodis.length>5)
    {
        console.log('Ilgesnis negu 5')
    }
    else
    {
        console.log('Trumpesnis negu 5')
    }
}

Ar5('Iki');


//Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.


function PirmaRaide (zodis)
{
    return zodis[0];
}


console.log(PirmaRaide('Apelsinas'));

//Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.


function PaskutineRaide (zodis)
{
    return zodis[zodis.length-1];
}


console.log(PaskutineRaide("Ananasas"));

//Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.


function PirmaRaideA (zodis)
{
    if(zodis[0]==='A'||zodis[0]==='a')
    {
        return 'taip';
    }
    else
    {
        return 'nea';
    }
}


console.log(PirmaRaideA('Apelsinas'));


//Parašykite funkciją, kuri grąžina žodžio ilgį.


function ZodzioIlgis (zodis)
{
    return zodis.length;
}

console.log(ZodzioIlgis('labas'));


//Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba trumpesnis

function IlgasTrumpas (zodis)
{
    if(zodis.length>=7)
    {
        return "Ilgas";
    }
    else
    {
        return "trumpas";
    }
}


console.log(IlgasTrumpas("Pomidoras"))
console.log(IlgasTrumpas("Labas"))

//Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.


function duVienodi (zodis1, zodis2)
{

    if(zodis1===zodis2)
    {
        console.log("zodziai lygus");
    }
    else
    {
        console.log("zodziai nelygus");
    }

}


duVienodi("Labas", "labas");
duVienodi("Labas", "Labas");



//Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos valandos (0–23).

//Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi:
//Skaičius yra teigiamas, išveda į console ‘esu teigiamas’
//Skaičius yra neigiamas, išveda į console ‘esu neigiamas’
//Skaičius yra nulis, išveda į console ‘esu nulis’
//Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
//Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas


