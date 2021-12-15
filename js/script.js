// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            // Definisco randomEmail
            randomEmail: null,
            // Array vuoto per le 10 email
            emailList: [],
        },
        methods: {
        },
        created: function() {

            // Ciclo for per 10 volte
            for(let i=0; i<10; i++) {

                // Richiedo email all'api
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    const serverRandomEmail = response.data.response;
                    this.randomEmail = serverRandomEmail;
                    
                    // Push nell'array
                    this.emailList.push(this.randomEmail);
                    
                });
            }
            console.log(this.emailList);
        }
    }
);
