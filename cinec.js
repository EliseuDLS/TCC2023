    // Back to top button
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 5, 'easeInOutExpo');
        return false;
    });

    //modal análise filme1
    $("#botaoAna").on("click", function(){
      filhos=$('#filme1').children();
        $(filhos).each(function(){
            $(this).hide();
        });

        $(filhos[0]).show();

        $("#sim").on("click",function(){
            $(filhos[1]).show();
            $(filhos[2]).hide();

        });
        $("#nao").on("click",function(){
            $(filhos[2]).show();
            $(filhos[1]).hide()
        });
    });

    //modal análise filme2
    $("#botaoAna2").on("click", function(){
        filhos=$('#filme2').children();
          $(filhos).each(function(){
              $(this).hide();
          });
  
          $(filhos[0]).show();
  
          $("#sim2").on("click",function(){
              $(filhos[1]).show();
              $(filhos[2]).hide();
  
          });
          $("#nao2").on("click",function(){
              $(filhos[2]).show();
              $(filhos[1]).hide()
          });
    });

    //modal análise filme3
    $("#botaoAna3").on("click", function(){
        filhos=$('#filme3').children();
          $(filhos).each(function(){
              $(this).hide();
          });
  
          $(filhos[0]).show();
  
          $("#sim3").on("click",function(){
              $(filhos[1]).show();
              $(filhos[2]).hide();
  
          });
          $("#nao3").on("click",function(){
              $(filhos[2]).show();
              $(filhos[1]).hide()
          });
    });

    //modal análise filme4
    $("#botaoAna4").on("click", function(){
        filhos=$('#filme4').children();
          $(filhos).each(function(){
              $(this).hide();
          });
  
          $(filhos[0]).show();
  
          $("#sim4").on("click",function(){
              $(filhos[1]).show();
              $(filhos[2]).hide();
  
          });
          $("#nao4").on("click",function(){
              $(filhos[2]).show();
              $(filhos[1]).hide()
          });
    });

    //modal análise filme5
    $("#botaoAna5").on("click", function(){
        filhos=$('#filme5').children();
          $(filhos).each(function(){
              $(this).hide();
          });
  
          $(filhos[0]).show();
  
          $("#sim5").on("click",function(){
              $(filhos[1]).show();
              $(filhos[2]).hide();
  
          });
          $("#nao5").on("click",function(){
              $(filhos[2]).show();
              $(filhos[1]).hide()
          });
    });

    //modal análise filme6
    $("#botaoAna6").on("click", function(){
        filhos=$('#filme6').children();
          $(filhos).each(function(){
              $(this).hide();
          });
  
          $(filhos[0]).show();
  
          $("#sim6").on("click",function(){
              $(filhos[1]).show();
              $(filhos[2]).hide();
  
          });
          $("#nao6").on("click",function(){
              $(filhos[2]).show();
              $(filhos[1]).hide()
          });
    });
