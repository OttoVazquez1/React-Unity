export const productos = [
    { id: '1', categoria: 'tees', name: 'Reflective Smile Tee', price: 2500, foto: 'https://imgv2.staticdj.com/836b5c6e84adc38b0317d73760a642d8_1080x.jpg', stock: 10},
    { id: '2', categoria: 'tees', name: 'Sakura Season Tee', price: 2500, foto: 'https://imgv2.staticdj.com/3324df59a2e3a6357b5ac71d870441ea_1080x.jpeg', stock: 15},
    { id: '3', categoria: 'tees', name: 'Luminous Smiley Print Tee', price: 3000, foto: 'https://imgv2.staticdj.com/86d66164676f17757f10f3d5f01fc771_1080x.jpeg', stock: 5},
    { id: '4', categoria: 'hoodie', name: 'Splice Red Hoodie', price: 5000, foto: 'https://imgv2.staticdj.com/289854cb077d0f1954bd7b5998884573_1080x.png', stock: 8},
    { id: '5', categoria: 'hoodie', name: 'Oversize Cat Print Hoodie', price: 5000, foto: 'https://imgv2.staticdj.com/b8c4ab4aea42e6033ed77e68cd1a15c6_1080x.png', stock: 13},
    { id: '6', categoria: 'hoodie', name: 'Paris Black/Orange Hoodie', price: 5000, foto: 'https://imgv2.staticdj.com/3c8d38de8a4c41fd228f7d242f5fefee_1080x.jpeg', stock: 10}
  ]

 export const getFetch = new Promise((resolve, reject) => {
      let condition = true;
      if (condition){
          setTimeout(() =>{
              resolve(productos)
          }, 2000) 
      } else{
          reject('400 Not Found')
      }
  })

  const producto =  { id: '1', categoria: 'tees', name: 'Reflective Smile Tee', price: 2500, foto: 'https://imgv2.staticdj.com/836b5c6e84adc38b0317d73760a642d8_1080x.jpg', stock: 10}

  export const getFetchOne = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(producto)
         }, 3000)
    } else {
        reject('400 not found')
        
    }
})
