$(function(){
  let $btn = $("input"),
      delay = 6,
      timer = null;
  $btn.val(`同意（`+delay+`s)`);
  $btn.attr('disabled','disabled');
  timer = setInterval(()=>{
    $btn.val(`同意（`+ --delay +`s）`);
    if(delay===0){
      clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  },1000)
  $btn.click(()=>{
    alert('button click!')
  })
});
