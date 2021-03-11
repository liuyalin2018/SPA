$(function(){
  let $range = $('input'),
      $age   = $('span');
  $range.change(()=>{
    $age.html($range.val());
  })
});
