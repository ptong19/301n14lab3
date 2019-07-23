$('select').on('change',function(){
  $('div').hide();
  console.log($(this).val());
  $('div.' + $(this).val()).show();
});

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
