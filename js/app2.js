
MyHorns.prototype.tohtml=function(){
  let $target=$('#handlebar').html();
  let $source=Handlebars.compile($target);
  return $source(this);
};

$('select').on('change',function(){
  $('div').hide();
  console.log($(this).val());
  $('div.' + $(this).val()).show();
});

MyHorns.prototype.render = function(keyword, hornsOp) {
  minOp(keyword);
  $('#filterName').append($('<option>', {text:keyword}).attr('class',this.keyword));
  $('main').append('<div class="clone"></div>');
  let hornClone=$('div[class="clone"]');
  let hornHtml=$('#photo-template').html();
  hornClone.html(hornHtml);
  hornClone.find('h2').text(this.title);
  hornClone.find('img').attr('src',this.image_url);
  hornClone.removeClass('clone');
  hornClone.attr('class',this.keyword);
}

$('#one').on('click',function(){
  fileName = '../data/page-1.json'
  $('div').remove();
  $('option').remove();
  allHorns=[];
  allKeys=[];
  $(()=>MyHorns.readJson(fileName));
});

$('#two').click(function(){
  fileName = '../data/page-2.json'
  console.log('hit');
  $('div').remove();
  $('option').remove();
  allHorns=[];
  allKeys=[];
  $(()=>MyHorns.readJson(fileName));
});

function minOp(keyword) {
  $('option.' + keyword).remove();
}

