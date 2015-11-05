var App = {
    $portfolioContainer: null,
    $data: null,
    Init: function(){
        App.$portfolioContainer = $('#portfolio-container');
        App.$data = [
            {
                itemId: 'project1',
                itemImgUrlBase : 'images/project1',
                itemName : 'Project #1',
                itemUrl : 'http://github.com/davcs86/fakeproject1',
                itemDescription : 'AAAAA'
            },
            {
                itemId: 'project2',
                itemImgUrlBase : 'images/project2',
                itemName : 'Project #2',
                itemUrl : 'http://github.com/davcs86/fakeproject2',
                itemDescription : 'AAAAA'
            }
        ];
        App.Render();
    },
    Render: function(){
        for (var i in App.$data){
            var portfolioItem = $('<portfolio-item/>');
            portfolioItem.attr(App.$data[i]);
            App.$portfolioContainer.append(portfolioItem);
        }
    }
};

App.Init();
