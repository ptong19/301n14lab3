let allHorns = [];
let allKeys = [];
var fileName = '../data/page-1.json'

const MyHorns = function(image_url, title, description, keyword, horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allHorns.push(this);
  allKeys.push(this.keyword);
}

// PT adding new handlebarline
MyHorns.prototype.tohtml=function(){
  let $target=$('#handlebar').html();
  let $source=Handlebars.compile($target);
  return $source(this);
};

MyHorns.readJson = function(filename){
  $.get(filename,'json').then(myHornsJson => {
    myHornsJson.forEach(horn => {
      new MyHorns(horn.image_url, horn.title, horn.description, horn.keyword, horn.keyword)
    });
    allHorns.forEach(MyHorn => {
      let keyword = MyHorn.keyword;
      MyHorn.render(keyword);
    });
  });
};

$(()=>MyHorns.readJson(fileName));

$('select').on('change',function(){
  $('div').hide();
  console.log($(this).val());
  $('div.' + $(this).val()).show();
});

MyHorns.prototype.render = function(keyword) {
  minOp(keyword);
  $('select').append($('<option>', {text:keyword}).attr('class',this.keyword));
  $('main').append('<div class="clone"></div>');
  let hornClone=$('div[class="clone"]');
  let hornHtml=$('#photo-template').html();
  hornClone.html(hornHtml);
  hornClone.find('h2').text(this.title);
  hornClone.find('img').attr('src',this.image_url);
  hornClone.removeClass('clone');
  hornClone.attr('class',this.keyword);
}

// PT add page one
$('#one').on('click',function(){
  fileName = '../data/page-1.json'
  console.log('hit1');
  $('div').remove();
  //clear the dropdown list
  $('option').remove();
  allHorns=[];
  allKeys=[];

  //load the page
  $(()=>MyHorns.readJson(fileName));
});

// PT adding page two
$('#two').click(function(){
  fileName = '../data/page-2.json'
  console.log('hit');
  //clear the div
  $('div').remove();
  //clear the dropdown list
  $('option').remove();

  allHorns=[];
  console.log(MyHorns.allHorns)
  allKeys=[];
  //load the page
  $(()=>MyHorns.readJson(fileName));
});

function minOp(keyword) {
  $('option.' + keyword).remove();
}