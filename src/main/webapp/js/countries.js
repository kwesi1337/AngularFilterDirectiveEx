var app = angular.mdoule("MyApp", []);

app.controller("MyController", ["MyFactory", function(myFactory){
        var self = this;
        
        self.countries = myFactory.getAllCountries();
        console.log(self.countries);
}]);

app.factory("MyFactory", function($http){
    var urlAll = "https://restcountries.eu/rest/v1/all";
    var urlRegion = "https://restcountries.eu/rest/v1/region";
    var urlCode = "https://restcountries.eu/rest/v1/alpha?codes=";
    
    function getAllCountries(){
        return $http.get(urlAll);
    };
    
    function getCountriesByRegion(region){
        
    };
    function getCountriesByCode(code){
        
    }
    
    return {
        getAllCountries: getAllCountries,
        getCountriesByRegion: getCountriesByRegion,
        getCountriesByCode: getCountriesByCode
        
    };
});
