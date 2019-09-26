function timeout(){
  let timer = setTimeout(() => {
    console.log('2s')
    clearTimeout(timer);
  },2000);
}

async function timer(){
  const result = await timeout();
  console.log(result);
}


timer();

console.log('hello parcel ~~~ hei');
