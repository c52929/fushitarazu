'use strict';

document.getElementById("button").addEventListener("click",()=>{
	let n=Number(num1.value)+Number(num2.value);
	let txt="";
	// console.log(a+b);

	// 3の倍数
	txt+=["","あやまりなさい<br>","あやまりなさい<br>"][n%3];
	
	// 素数判定
	let isPrime=1;
	for(let i=2; i<Math.sqrt(n); i+=2){
		if(n%i==0){
			isPrime=0;
		}
		if(i==2){
			i--;
		}
	}
	txt+=["","ありがとう<br>"][isPrime];
	
	// mod 6
	txt+=`完全に${n%6}<br>`;

	// 7セグ
	let seg=[6,2,5,5,4,5,6,3,7,6];
	let s=n.toString();
	let sum=0;
	for(let i=0; i<s.length; i++){
		sum+=seg[Number(s.charAt(i))];
	}
	txt+=`${sum}本<br>`;

	// mod 21の元素(0->該当なし)
	let elm=["該当なし","H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca"];
	txt+=elm[n%21];

	document.getElementById("output").innerHTML=txt;
})