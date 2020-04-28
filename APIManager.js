class APIManager {
    constructor(user_data) {
        this.user_data=this.User()
        this.qoute_data=this.Quote()
        this.pokemon_data=this.Pokemon()
        this.content_data=this.Content()
    }
    User() {
        let result;
        $.ajax({
             method: "GET",
             url: "https://randomuser.me/api?results=7",
             async: false, 
             success: function(data){
                 result = data;
                 //renderUser(data)
                 //renderFriends(data)
                 },
             error: function(xhr,text,error){
                 console.log(text);
                }
            })
            return result;
        }
    Quote(){
        let result;
        $.ajax({
            method: "GET",
            url: "https://api.kanye.rest",
            async: false,
            success: function(data){
                result = data;
                //renderQuotes(data)
            },
            error: function(xhr,text,error){
                console.log(text);
            }
        })   
            return result;
    }
    Pokemon(){
        let result;
        let num= Math.floor((Math.random() * 100) + 1);
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
            async: false,
            success: function(data){   
                result = data;   
                //renderPokemon(data)
            },
            error: function(xhr,text,error){
                console.log(text);
            }
        })           
            return result;
    }
    Content(){
        let result;
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=meat-and-filler`,
            async: false,
            success: function(data){    
                result = data;
                //renderContent(data)
            },
            error: function(xhr,text,error){
                console.log(text);
            }
        })           
            return result;
    }
}