/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */




console.log("Vue js ok", Vue)

const root = new Vue({
    el: "#root",
    data: {
        booleanString: "https://flynn.boolean.careers/exercises/api/random/mail",
        mails: [],
        mail: "",
    },

    created() {
        this.getMail()
    },

    methods: {

        getMail() {




            for (let i = 0; i <= 9; i++) {

                axios.get(this.booleanString).then((response) => {

                    console.log(response.data.response)

                    this.mail = response.data.response

                    console.log(this.mail)

                    this.mails.push(this.mail)

                })
            }


        },








    }

})

//for (let i = 0; i < 9; i++) 