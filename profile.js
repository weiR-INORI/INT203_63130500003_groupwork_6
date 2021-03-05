const constraints = {
    firstname: {
        presence: true,
        format: {
            pattern: "[a-z0-9]+",
            flags: "i",
            message: "can only contain a-z and 0-9"
          }
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 80,
            message: "You're not in the our segment"
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: {
            message: "doesn't look like a valid email"
        }
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,            
            message: "must be at least 10 digits"                                
        },  
        format: {
            pattern: "[0-9]+",            
            message: "can only contain and 0-9"
          }     
    }    
}    
    
    const app = {
        data() {
            return {                
                name: 'Kamolwish Woramethaleot',
                location: 'Thailand',
                follow: 'Follow',
                followers: 'Followers',
                followersdata: '8,789',
                projects: 'Projects',
                projectsdata: '142',
                ranks: 'Ranks',
                ranksdata: '129',
                image1: './images/image1.jpg',
                image2: './images/image2.jpg',

            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,

            errors: null
            }
        },
                
        methods:{
            checkForm(e){
                this.errors = validate({firstname: this.firstname,
                                        lastname: this.lastname,
                                        age: this.age,
                                        gender: this.gender,
                                        email: this.email,
                                        phone: this.phone,
                                        },
                                        constraints)
                if(this.errors){
                    e.preventDefault();                
                }
                else{
                    alert("Registered successfully.")
                }
            }
        }
    }
    var mountedApp = Vue.createApp(app).mount('#app')