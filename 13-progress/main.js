$(function(){
  let t = $("progress"),
      n = 0,
      c = 0;
  $("#start").click(()=>{
    0===n&&(n=window.setInterval(()=>{
      t.attr("value",c++)
    },100))
  });
  $('#stop').click(()=>{
    window.clearInterval(n);
    n=0;
  });
  $('#reset').click(()=>{
    t.attr("value",c=0)
  });
});
