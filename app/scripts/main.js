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
                itemDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros leo, facilisis rhoncus neque eu, posuere pulvinar ligula. Quisque varius, nulla eget dapibus pellentesque, justo purus tristique mi, quis luctus neque arcu sit amet sem. Vestibulum sollicitudin non ligula a porttitor. Nam vitae fermentum quam, in elementum libero. In et arcu lacus. Pellentesque id varius purus. Vivamus iaculis, ex sit amet sagittis malesuada, felis lectus hendrerit quam, at venenatis mauris nisl eu libero. Etiam ullamcorper nisl ac augue ultrices eleifend.'
            },
            {
                itemId: 'project2',
                itemImgUrlBase : 'images/project2',
                itemName : 'Project #2',
                itemUrl : 'http://github.com/davcs86/fakeproject2',
                itemDescription : 'Donec rhoncus, lorem molestie venenatis vestibulum, leo ipsum commodo orci, vitae convallis ex neque ut est. Nulla tristique ornare turpis non molestie. In vel varius dui. Nulla tincidunt, leo eget congue malesuada, justo ex sodales tellus, vitae gravida quam lorem et ipsum. Vestibulum fermentum elementum lorem, nec convallis ex volutpat nec. Proin at dictum nunc. Nulla facilisi. Praesent efficitur eros at est iaculis, sed interdum enim sollicitudin. Praesent sodales ex id fringilla mattis. Phasellus aliquam viverra ipsum, ac pharetra tortor placerat ac. Duis a nibh sed diam ornare facilisis.'
            },
            {
                itemId: 'project3',
                itemImgUrlBase : 'images/project3',
                itemName : 'Project #3',
                itemUrl : 'http://github.com/davcs86/fakeproject3',
                itemDescription : 'Fusce convallis cursus mattis. Duis eleifend ullamcorper elit, sed vestibulum est dignissim eget. Proin sem diam, molestie ac eros quis, euismod dictum diam. Nam magna erat, faucibus sed euismod sed, scelerisque at lacus. Proin vel leo ac mauris interdum ultricies eu eget orci. Maecenas euismod pulvinar neque. Praesent efficitur arcu in mauris laoreet, in convallis mauris sollicitudin. Fusce non mi dignissim, vestibulum ipsum ac, mattis purus. Sed diam lacus, porta eu tellus et, eleifend pretium nisi. Vestibulum non sodales nunc. Ut et dui posuere nulla sollicitudin malesuada ultrices ac neque. Suspendisse porta pharetra nisl. Cras imperdiet rutrum nisl, eu varius elit mattis nec. Fusce eget dui vel lacus feugiat pulvinar eget et lorem. Aliquam tempor cursus libero.'
            },
            {
                itemId: 'project4',
                itemImgUrlBase : 'images/project4',
                itemName : 'Project #4',
                itemUrl : 'http://github.com/davcs86/fakeproject4',
                itemDescription : 'Integer vehicula viverra elit, vulputate malesuada lorem dictum in. Etiam a diam at magna dignissim finibus eu et turpis. Aliquam accumsan lorem id sem faucibus, vel sodales massa imperdiet. Nulla a rhoncus felis, non pharetra nisi. Donec faucibus libero quis sollicitudin gravida. Sed egestas eleifend dolor, sit amet tristique nibh aliquam sit amet. Proin nec mollis risus. Phasellus enim orci, commodo euismod dictum ut, vehicula et sapien. Cras sagittis aliquam dolor at eleifend. Sed quis libero luctus, maximus elit ac, tempus diam. Nunc eleifend purus in leo aliquet auctor. Cras eget hendrerit odio. Mauris cursus efficitur dui non volutpat. Nulla a augue eu ex vulputate ultrices quis eget urna. Ut nisl augue, pulvinar nec ultrices volutpat, dignissim in lectus.'
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
