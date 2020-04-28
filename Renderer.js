class Renderer {
    constructor(ApI) {
        this.renderUser(ApI.user_data)
        this.renderFriends(ApI.user_data)
        this.renderQuotes(ApI.qoute_data)
        this.renderPokemon(ApI.pokemon_data)
        this.renderContent(ApI.content_data)
    }
    renderUser=function(data){
        $(".user-container").empty();
        const arr1=data.results[0]
        const source1 = $('#user-template').html();
        const template1 = Handlebars.compile(source1);
        let newHTML1 = template1(arr1);
        $('.user-container').append(newHTML1);
    }
    renderFriends=function(data){
        $(".friends").empty();
        const arr=data.results.slice(1)
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({arr});
        $('.friends').append(newHTML);
    }
    renderQuotes=function(data){
        $(".quote-container").empty();
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(data);
        $('.quote-container').append(newHTML);
    }
    renderPokemon=function(data){
        $(".pokemon-container").empty();
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(data);
        $('.pokemon-container').append(newHTML);
    }
    renderContent=function(data){
        $(".content-container").empty();
        const source = $('#content-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(data);
        $('.content-container').append(newHTML);
    }
}
