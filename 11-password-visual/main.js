$(function(){
  let n = $('#pwd'),
      o = $('.pwd-text'),
      e = $('#eye');
  n.on("input",() => {
    o.val(n.val());
  });
  e.mouseover(()=>{
    o.css("z-index","10")
  });
  e.mouseout(()=>{
    o.css("z-index","-10")
  });
});
