app.controller('homeController',['$http','$scope',($http,$scope)=>{
    let _ = console.log;
    $scope.Teste="sa";
    $scope.tell="";
    $scope.celulas=[];
    $scope.json2send;
    $scope.responses=["dsa",'ds'];
    $scope.show=false;
    _($scope.responses.length)
    $scope.imprime =()=>{
        $scope.geraJson($scope.tell);
        $scope.json2send = jsonP($scope.celulas,0);
        $scope.enviaJson();
        $scope.celulas =[];
        $scope.json2send ='';
        $scope.show=true;

    }

    $scope.geraJson=(str)=>{
        str.split('').forEach( (...spread) =>{
            let celula =  celulaP(spread[1],spread[0],'DIREITA');
            $scope.celulas.push(celula);
        });
    }
    
    $scope.enviaJson = ()=>{
        $http.post(
            "http://localhost:8080/turingMachineAPI/api/verificaFita",
            $scope.json2send
        ).then((response)=>{
            _(response.data);
            $scope.responses.push(response.data);
            localStorage.setItem('response', angular.toJson(response.data));
        });
    }

    $scope.respose  =()=>{
        _($scope.responses);
        _($scope.responses.length);
        _($scope.show);
    }



    var celulaP = (indice, estado, direcao ) =>{
        return { "indice": indice,
        "estado":estado,
        "direcao":direcao}
    };
    var jsonP  = (celulas,indice)=>{
            _(celulas);
        return{
            "celulas":celulas,
            "indice":indice
        } 
    }
}]);