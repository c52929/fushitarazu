'use strict';

let n;
let seg=[6,2,5,5,4,5,6,3,7,6];
let elm=["該当なし","H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca"];

document.getElementById("button").addEventListener("click",()=>{
	if(num1.value>0 && num2.value>0){
		n=Number(num1.value)+Number(num2.value);
		document.getElementById("output").innerHTML=fushitarazu(n);
	}else{
		document.getElementById("output").innerHTML='<p class="red">Invalid Number</p>';
	}
})

function fushitarazu(n){
	// 3の倍数
	let txt=["","<p>あやまりなさい</p>","<p>あやまりなさい</p>"][n%3];
	
	// 素数判定
	let isPrime=1;
	for(let i=2; i<=Math.sqrt(n); i+=2){
		if(n%i==0){
			isPrime=0;
			break;
		}
		if(i==2){
			i--;
		}
	}
	txt+=["","<p>ありがとう</p>"][isPrime];
	
	// mod 6
	txt+=`<p>完全に${n%6}</p>`;

	// 7 segment
	let s=n.toString();
	let sum=0;
	for(let i=0; i<s.length; i++){
		sum+=seg[Number(s.charAt(i))];
	}
	txt+=`<p>${sum}本</p>`;

	// mod 21の元素(0->該当なし)
	txt+=`<p>${elm[n%21]}</p>`;

	// binary
	let bin="";
	while(n>1){
		bin=`${n%2}${bin}`;
		n=Math.floor(n/2);
	}
	if(n==1){
		bin=`1${bin}`;
	}
	txt+=`<p>${bin}</p>`;

	return txt;
}