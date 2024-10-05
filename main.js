var app = new Vue({
    el: '#app',
    data: {
      respuesta: 0,
      numero1 :null,
      numero2 :null,
      nameButton :'Suma',
      arrayFrutas:['manzana','Pera','Melocoton'],
      info:[{"nombre":"Oscar","perfil":"Programador de Software e instructor","img":"./img4.png","hobby":['Juegos','Nadar']},
         {"nombre":"Luciana","perfil":"Estudiante de Software ADSO","img":"./img2.jpg","hobby":['Juegos','Ajedrez']},
         {"nombre":"Sara","perfil":"Estudiante de Software ADSO","img":"./img3.jpg","hobby":['Pescar','Estudiar']}
      ],
      cocteles:[]
    },
    methods:{
        sumar(){
           this.respuesta= this.numero1+this.numero2
        },
        restar(){
           this.respuesta= this.numero1-this.numero2
        },
        getDataCoktail(){
          const url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
          axios.get(url)
          .then(response=>{
            this.cocteles= response.data.drinks
          })
          // fetch(url)
         //  .then(response=>{
         //    return response.json();
         //  })
         //  .then(data=>{
         //    this.cocteles=data.drinks || []
         //  })
         //  .catch(error=>{
         //    console.log('Error ',error);
         //  })
        }
    },
    mounted(){
      this.getDataCoktail()
    }

  })