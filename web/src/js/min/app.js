var cachedModules=[],app=angular.module("test",[]);app.controller("MainCtrl",function(r,a){let e=this;e.array_1=[],a({method:"GET",url:"http://localhost:8090/rest/people"}).then(function(r){e.array_1=r.data,e.array_1.sort(function(r,a){return r.name<a.name?-1:r.name>a.name?1:0})},function(r){alert("Server or Internet error")})});
//# sourceMappingURL=UGLIFY_SOURCE_MAP_TOKEN