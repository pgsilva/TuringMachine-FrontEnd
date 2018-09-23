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
        _($scope.json2send);
        $scope.celulas =[];
        $scope.json2send ='';
        // $scope.show=true;
        //  $scope.responses.length;
        // document.querySelector('#tam').textContent = angular.toJson($scope.responses[$scope.responses.length - 1]);
    }

    $scope.geraJson=(str)=>{
        str.split('').forEach( (...spread) =>{
            let celula =  celulaP(spread[1],spread[0],'DIREITA');
            $scope.celulas.push(celula);
        });
        _($scope.celulas.length)
        _(11-$scope.celulas.length)
        if($scope.celulas.length<11){
            let takeOff = 11 - $scope.celulas.length;
            let tam = $scope.celulas.length;
            for (let index = 0; index < takeOff; index++) {
                $scope.celulas.push(celulaP(tam + index, "",'DIREITA'));  
            }
        }
    }
    
    $scope.enviaJson = ()=>{
        $http.post(
            "http://localhost:8080/turingMachineAPI/api/verificaFita",
            $scope.json2send
        ).then((response)=>{
            _(response.data);
            $scope.responses.push(response.data);
            localStorage.setItem('response', angular.toJson(response.data));
            //  document.querySelector('#tam').textContent = angular.toJson(response.data)
            document.querySelector('#msg').textContent =response.data.msg;
            if ('discagem incorreta' !== response.data.msg){
                document.querySelector('#telefone').textContent = response.data.telefone;
                document.querySelector('#identificao').textContent = response.data.identificacao;
                document.querySelector('#destino').textContent = response.data.destinoRegiao;
                return 0;
            }
            _('eerrr');
            document.querySelector('#telefone').textContent = "";
            document.querySelector('#identificao').textContent = "";
            document.querySelector('#destino').textContent = "";

            return 0;
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