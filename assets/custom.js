recharge.init({
  storeIdentifier: 'rise311.com', // On Shopify this should be your myshopify.com domain
  // required for Storefront API access
  storefrontAccessToken: 'strfnt_b7467748e933e884ff757e7be1a91c40207bd4a7e75307e2a9f188e6af98208b',
  appName: 'Bundle',
  appVersion: '1.0.0',
  loginRetryFn: () => {
    return recharge.auth.loginShopifyAppProxy().then(session => {
      return session;
    });
  },
});

//  jQuery(".variant_bundle_inner").click(function() {
//     $(".flavor_combination legend.form__label.step-2").css("color","rgb(243 65 53)");
//     // $('select.selling_plan option').prop('selected', false).eq(0).prop('selected', true);
//        ///show hide add to cart button on load
//      jQuery('.oldbtn').css('display','none');
//      jQuery('.newbtn').css('display','flex');
    
//      var variant_title = jQuery(this).attr("data-value");
//       jQuery(".variant_bundle").each(function( index ) {
//        var variant_option = jQuery(this).find('input').attr("data-option-value");
//           if(variant_title == variant_option) {
//               jQuery(this).find('input').trigger('click');
//           }
//       });
    
//       jQuery(".stock_ramaining .stock_inner span.pending_stock").each(function( index ) {
//          var pending_stock = jQuery(this).attr("data-title");
//             if(variant_title == pending_stock) {
//                 jQuery('.stock_ramaining .stock_inner span.pending_stock').css('display', 'none');
//                 jQuery(this).css('display', 'inline-block');;
//             }
//         });
    
//         // show variant active and set value zero in input box of flavor 
//         jQuery('.variant_bundle_inner').removeClass('active');
//         jQuery(this).addClass('active');
//         jQuery('.qty,.chocolate,.vanilla').val(0); 

//        //////////////////////////////////////////////subscription widget
//         jQuery(".selling_plan").each(function( index ) {
//          var sub_option = jQuery(this).attr("data-variant");
//             if(variant_title == sub_option) {
//                 jQuery(this).css('display', 'block');
//                 jQuery(this).addClass('active');
//                 var sub_price = $(this).find(':selected').attr('price');
//                 $('span.selling_price').html(sub_price);  
//                 var sub_discount = $(this).find(':selected').attr('discount');
//                 $('span.discount_price').html("("+sub_discount+")"); 
//             }
//           else {
//             jQuery(this).removeClass('active');
//             jQuery(this).css('display', 'none');
//           }
//         });
    
//     var var_current_price = jQuery(this).attr('data-price');
//     jQuery('.one_time_subscription .pro_price').html(var_current_price);
     
    
//     setTimeout(function() {
//       var selected_val = $('select.selling_plan.active option:nth-child(1)').attr('value');
//       $('.shopify-product-form input[name="selling_plan"]').attr('value',selected_val);
//     }, 100);
    
     
//       //////////////////////////////////////////////subscription widget end

//     var pro_price_text = $(".pro_price").text().replace(/[$Rs.£,]/g, '').trim();
//     var selling_price_text = $(".selling_price").text().replace(/[$Rs.£,]/g, '').trim();
    
//     var pro_price = parseFloat(pro_price_text);
//     var selling_price = parseFloat(selling_price_text);
    
//     var total = (pro_price - selling_price)/100;
//     var currency_symbol = $(".pro_price").text().match(/[$Rs.£]/) ? $(".pro_price").text().match(/[$Rs.£]/)[0] : '$';
//     $(".selling_label span.save").text(currency_symbol + total.toFixed(2));

    
//     });
//   /////////////////////////////////
//   jQuery(".selling_plan").click(function() {
//      $(this).parents('.selling_plans_inner ').trigger('click');
//   });

//   $(".custom_product_gallery .variant_bundle_inner.variant.active").trigger("click");

//   jQuery(document).ready(function(){
// $(".flavor_combination legend.form__label.step-2").css("color","#f34035")
// jQuery('.thumbnail--1.thumbnail-list__item button').trigger('click');

//     ///show hide add to cart button on load
//  jQuery('.oldbtn').css('display','none');
//  jQuery('.newbtn').css('display','flex');
    
    
//     // This button will increment the value
//     $('.qtyplus').click(function(e){
//       // Stop acting like a button
//       e.preventDefault();
     
      
//         fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val());
//         //console.log(currentVal);
//         // If is not undefined
//         if (!isNaN(currentVal)) {
          
//           // Increment
//            var var_total = $('.variant_bundle_inner.variant.active').attr('data-limit');
//             // Get the field name 
//           const quantities = document.querySelectorAll('.qty');
//           const qty1 = parseInt(quantities[0].value, 10);
//           const qty2 = parseInt(quantities[1].value, 10);
//           const totalSum = qty1 + qty2;
//            console.log(totalSum);
//            if(var_total == totalSum) {
//               console.log('done'+totalSum);
//            }
//            else {
//               console.log('not done'+totalSum);
//               $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(currentVal + 1);
//            }
//         } else {
//           // Otherwise put a 0 there
//           $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(0);
//         }
//     });
//     // This button will decrement the value till 0
//     $(".qtyminus").click(function(e) {
//       // Stop acting like a button
//       e.preventDefault();
//       // Get the field name
//       fieldName = $(this).attr('field');
//       // Get its current value
//       var currentVal = parseInt($(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val());
//       // If it isn't undefined or its greater than 0
//       if (!isNaN(currentVal) && currentVal > 0) {
//         // Decrement one
//         $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(currentVal - 1);
//       } else {
//         // Otherwise put a 0 there
//         $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(0);
//       }
//     });



//   /////////////////////////////////new code for checkout button hide

//     $('.qtyminus').click(function(){
//         $(".combination_inner_col").each(function(){
//         var aa = $(this).find(".qty").val();
//          $(this).find(".selling_plan_custom option").each(function(){
//            var preorder = $(this).attr("frequency");
//            if(preorder == "preorder"){
//              var qty = $(this).parents(".combination_inner_col").find(".qty").val();
//              if(qty<=0){
//                 $(".newbtn, .oldbtn").text("ADD TO CART");
//                 $(".card-text").hide();
//               }
//              }
//          });
//         });
//       });
    
//    $('.qtyplus, .qtyminus').click(function(e){
//      var a = $(this).parents(".product-form__item--quantity").find(".qty").val();
//      if(a>0){
//       var preorder = $(this).parents(".combination_inner_col").find(".selling_plan_custom option:nth-child(2)").attr("frequency");
//         if(preorder == "preorder"){
//           $(".newbtn, .oldbtn").text("Pre-order now");
//           $(".card-text").show();
//           $(".shopify-payment-button").hide();
//         }
//         // else{
//         //   $(".oldbtn").text("ADD TO CART");
//         //   $(".card-text").hide();
//         // }       
//      }
//      setTimeout(function() {
//        var var_total = $('.variant_bundle_inner.variant.active').attr('data-limit');
//         // Get the field name 
//       const quantities = document.querySelectorAll('.qty');
//       const qty1 = parseInt(quantities[0].value, 10);
//       const qty2 = parseInt(quantities[1].value, 10);
//       const totalSum = qty1 + qty2;
//        console.log(totalSum);
//        if(var_total == totalSum) {
//           console.log('co'+totalSum);
//          jQuery('.oldbtn').css('display','flex');
//          jQuery('.newbtn').css('display','none');
//          jQuery('.flavor_combination legend.form__label').css('color','#222121');
//        }
//        else {
//          console.log('noooo');
//          jQuery('.oldbtn').css('display','none');
//          jQuery('.newbtn').css('display','flex');
//          jQuery('.flavor_combination legend.form__label').css('color','#f34135');
//        }
       
//        /*set card-copy text */
//         var card_text = $(".oldbtn").text();
//         if(card_text.includes("Pre-order now")){
//             $(".card-text").show();
//         }
//         else{
//             $(".card-text").hide();
//         }
//       },500); 
     
//     });  


//     ////
//     $(document).on("click", ".newbtn", function() {
//     // $(".newbtn").click(function() {
//         $('html,body').animate({
//             scrollTop: $(".reviews_col").offset().top},
//             'slow');
//         jQuery('.flavor_combination legend.form__label').css('color','#f34135');
//     });

    

// ///////// main product qty box of product
//     $(document).on("click", '.quantity__button[name="plus"]', function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get its current value
//         var currentVal = parseInt($(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val());
//         //console.log(currentVal);
//         // If is not undefined
//         $(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val(currentVal + 1);
        
//     });

//     // This button will decrement the value till 0
//     $(document).on("click", '.quantity__button[name="minus"]', function(e) {
//       // Stop acting like a button
//       e.preventDefault(); 
//       // Get its current value
//       var currentVal = parseInt($(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val());
//       // If it isn't undefined or its greater than 0
//       if (!isNaN(currentVal) && currentVal > 1) {
//         // Decrement one
//         $(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val(currentVal - 1);
//       } else {
//         // Otherwise put a 0 there
//         $(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val(1);
//       }
      
//     });
    


    
//   });

//    ///////////////
//   jQuery(".line-item-property__field.vanilla .qty_box button").click(function() {
//     setTimeout(function() {
//       var countv = jQuery('.vanilla input.qty').val();
//       console.log(countv);
//       jQuery('input.vanilla').val(countv);
//     }, 100); 
//   });
//   jQuery(".line-item-property__field.darkchocolate .qty_box button").click(function() {
//     setTimeout(function() {
//       var countv1 = jQuery('.darkchocolate input.qty').val();
//       console.log(countv1);
//       jQuery('input.chocolate').val(countv1);
//       }, 100); 
//   });


//   /*add another two product*/
    
//   $(document).on("change", ".selling_plans_sec .selling_plan", function() {
//       var index = $(this).find("option:selected").index() + parseInt(1);
//      $(".selling_plan_custom").each(function(){
//       $(this).find("option").each(function(){
//        var preorder = $(this).attr("frequency");
//        var index_2 = $(this).index();
//         if(preorder == "preorder"){
//           $(this).prop("selected", true);
//           return false;
//         }else{
//         if(index == index_2){
//             $(this).prop("selected", true);
//         }
//         }
       
//       });
//     });
//   });
  
//   $(document).on('click', '.qty_box button', function(){
//    var a = $(this).closest(".combination_inner_col").index() + parseInt(1);
//    var qty = $(this).closest(".product-form__item").find(".qty").val();
//    var main_qty = $(".product-form__quantity .quantity__input").val();
//    var total_qty = parseInt(qty) * parseInt(main_qty);

//    if(qty != 0){
//     var data = "";
//     var p_id = $(this).closest(".combination_inner_col").find(".selling_plan_custom option:selected").attr("p_id");
//     var s_id = $(this).closest(".combination_inner_col").find(".selling_plan_custom").val();
//     var one_p_id = $(this).closest(".combination_inner_col").find(".one_time_product").val();
//     if(s_id){
//       var data = "<div class='custom_prduct"+a+"'><input type='hidden' name='items["+ p_id +"][id]' value='"+p_id+"'><input type='hidden' name='items[" + p_id + "][quantity]' class='chocolate_qty' value='"+total_qty+"' /><input name='items["+ p_id + "][selling_plan]' type='hidden' value='"+s_id+"'>";
//     }
//      else{
//        var data = "<div class='custom_prduct"+a+"'><input type='hidden' name='items["+ one_p_id +"][id]' value='"+one_p_id+"'><input type='hidden' name='items[" + one_p_id + "][quantity]' class='chocolate_qty' value='"+total_qty+"' /></div>";
//      }
//      var b = $(".custom_prduct"+a).length;
//      if(b == 0){
//      $(data).insertBefore(".product-form__buttons");
//      }
//      else{
//        $(".custom_prduct"+a).remove();
//        $(data).insertBefore(".product-form__buttons");
//      }
//    }
//     else{$(".custom_prduct"+a).remove();}

    
      
//     // $(this).parents(".combination_inner_col").find(".selling_plan_custom option").each(function(){
//       // var preorder = $(this).attr("frequency");
//       //   if(preorder == "preorder"){
//       //     $(".newbtn,.oldbtn").text("Pre-order now");
//       //     $(".card-text").show();
//       //     $(".shopify-payment-button").hide();
//       //     return false;
//       //   }
//       //   else{
//       //     $(".oldbtn").text("ADD TO CART");
//       //     $(".card-text").hide();
//       //   }
//       // });
    
    
//   });

//   $(".selling_plans_sec .selling_plans_inner").click(function(){
//     $(".combination_inner_col").each(function(){
//     var a = $(this).index() + parseInt(1);
//     var qty = $(this).find(".variant_qty .qty").val();
//     var main_qty = $(".product-form__quantity .quantity__input").val();
//     var total_qty = parseInt(qty) * parseInt(main_qty);
//     if(qty > 0){
//     var s_id = $(this).find(".selling_plan_custom").val();
//     var p_id = $(this).find(".selling_plan_custom option:selected").attr("p_id");
//     var data = "<div class='custom_prduct"+a+"'><input type='hidden' name='items["+ p_id +"][id]' value='"+p_id+"'><input type='hidden' name='items[" + p_id + "][quantity]' class='chocolate_qty' value='"+total_qty+"' /><input name='items["+ p_id + "][selling_plan]' type='hidden' value='"+s_id+"'>";
//     $(".custom_prduct"+a).remove();
//     $(data).insertBefore(".product-form__buttons");
//       }
//    });
//     var plan_id = $(".selling_plan.active").val();
//     setTimeout(function() {
//         $('input[name="selling_plan"]').val(plan_id);
//     }, 500);
//   });

//   $(".selling_plans_sec .one_time_subscription").click(function(){
//     $(".combination_inner_col").each(function(){
//     var a = $(this).index() + parseInt(1);
//     var qty = $(this).find(".variant_qty .qty").val();
//     var main_qty = $(".product-form__quantity .quantity__input").val();
//     var total_qty = parseInt(qty) * parseInt(main_qty);
//     if(qty > 0){
//     var p_id = $(this).find(".one_time_product").val();
//     var data = "<div class='custom_prduct"+a+"'><input type='hidden' name='items["+ p_id +"][id]' value='"+p_id+"'><input type='hidden' name='items[" + p_id + "][quantity]' class='chocolate_qty' value='"+total_qty+"' /></div>";
//     $(".custom_prduct"+a).remove();
//     $(data).insertBefore(".product-form__buttons");
//       }
//    });
//   });


//   $(".selling_plan_custom").each(function(){
//     $(this).find("option").each(function(){
//       var a = $(this).attr("frequency");
//       if(a == "preorder"){
//           $(this).prop("selected", true);
//           return false;
//         }
//       else{
//         if(a === "1 month"){
//             $(this).prop("selected", true);
//             $(this).trigger("click");
//         }
//       }
//     });
//   });
  
//   var plan_id = "";
  $(".selling_planscol .selling_plan").each(function(){
    $(this).find("option").each(function(){
       var a = $(this).attr("frequency").toLowerCase();
        if(a === "1 month"){
            $(this).prop("selected", true);
            $(this).trigger("click");
        }
    });
  });
//   $(document).on("click",".variant_bundle_inner",function() {
//     setTimeout(function() {
//       if($(".oldbtn").hasClass("hengam-preorder-button")){
//       }
//       else{$(".custom-btns").load(location.href + " .custom-btns");}
//     }, 500);
//     //$(".product-form__buttons").load(location.href + " .product-form__buttons");
//     var index = $(this).index();
//     // $(".selling_planscol .selling_plan").each(function(){
//     $(".selling_planscol .selling_plan").eq(index).find("option").each(function(){
//        var a = $(this).attr("data-value").toLowerCase();
//         if(a === "1 month"){
//           plan_id = $(this).val();
//           setTimeout(function() {
//             $('input[name="selling_plan"]').val(plan_id);
//           }, 500);
//         }
//     });
//     // });
//      /*set card-copy text */
//     setTimeout(function() {
//     var card_text = $(".oldbtn").text();
//     if(card_text.includes("Pre-order now")){
//       $(".card-text").show();
//       $(".oldbtn").show();
//       $(".newbtn").hide();
//     }
//     else{
//         $(".card-text").hide();
//         $(".oldbtn").hide();
//         $(".newbtn").show();
//       }
//     }, 1000);
//   });

  
//     setTimeout(function() {
//       /*set card-copy text */
//       var card_text = $(".oldbtn").text();
//       if(card_text.includes("Pre-order now")){
//         $(".card-text").show();
//         $(".oldbtn").show();
//         $(".newbtn").hide();
//       }
//       else{
//         $(".card-text").hide();
//         $(".oldbtn").hide();
//         $(".newbtn").show();
//       }
//       $(".variant_bundle_inner.variant:nth-child(2n)").trigger("click");
//     }, 900);
  
//   /*inventory calculation*/
//   setTimeout(function() {
//     var invSum = 0;
//     $(".one_time_product").each(function(){
//         var inv = parseInt($(this).attr("inventory"), 10);
//         invSum += inv;
//     });
//     var avl = "{{ product.metafields.custom.percent_available_ }}";
//     var total = (invSum / avl) * 100;
//     var percentage = Math.round(total);
//     if (percentage > 75){$(".stock_inner > span").append("73% STOCK REMAINING");}
//     else if(percentage <= 0){
//       $(".stock_inner > span").append("Out of Stock");
//       $(".newbtn.product-form__submit.button").hide();     
//     }
//     else{$(".stock_inner > span").append("<sapn>"+percentage+"% STOCK REMAINING</span>");}
//   }, 1000); 

//   $(document).on("click",".product-form__quantity .quantity .quantity__button",function(e) {
//     e.preventDefault();
//     var element = $(this);
//     setTimeout(function() {
//     var qty = element.parents(".quantity").find('input#Quantity-buy_buttons').val();
//     $(".variant_qty .qty").each(function(){
//       var cho_qty = $(this).val();
//       if(cho_qty >= 1){
//       var total = parseInt(cho_qty) * parseInt(qty);
//       $(".chocolate_qty").val(total);
//       }
//     });
//       }, 500);
//   });


var price = $(".pouch-col.active input.bndl_variant").attr("price");
$(".pro_price").text(price);
$(document).on("click", '.pouch-col', function(e) {
  var price = $(this).find(".bndl_variant").attr("price");
  $(".pro_price").text(price);
});

 $(".newbtn").addClass("disable");
  $(".steel-scoop .oldbtn").removeClass("disable");
  $("legend.form__label.step-2").css("color","rgb(243 65 53)");
  // $(".first-variant").remove();
  ///////// main product qty box of product
    $(document).on("click", '.quantity__button[name="plus"]', function(e) {
        e.preventDefault();
        var currentVal = parseInt($(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val());
        $(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val(currentVal + 1);
        
    });
    $(document).on("click", '.quantity__button[name="minus"]', function(e) {
      e.preventDefault(); 
      var currentVal = parseInt($(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val(currentVal - 1);
      } else {
        $(this).parents('quantity-input.quantity').find('input#Quantity-buy_buttons').val(1);
      }
    });
  
  /*inventory calculation*/
    var inv = 0;
    var sum_inv = 0;
    $(".combination_inner_col").each(function(){
       var inventory = $(this).find(".collection_product").attr("inventory");
      sum_inv += parseInt(inventory);
    });

    var avl = $(".flavor_combination").attr("store-inventory");
    inv = parseInt(sum_inv);
    var total = (inv / avl) * 100;
    var percentage = Math.round(total);
    if (percentage > 75){
      $(".stock_inner > span").append("73% STOCK REMAINING");
    }
    else if(percentage <= 0){
      $(".stock_inner > span").append("Out of Stock");
    }
    else{
      $(".stock_inner > span").append("<sapn>"+percentage+"% STOCK REMAINING</span>");
    }

    $(document).on("click", '.pouch-col', function(e) {
      var index = $(this).index();
      $(".selling_planscol .selling_plan").each(function(i) {
        if (i === index) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
      setTimeout(function() {
        var price = $('.selling_plan.active option:selected').attr("price");
        var discount = $('.selling_plan.active option:selected').attr("discount");
        $(".discount_price").text(discount);
        $(".selling_price").text(price);
      }, 50);
      var selling_id = $('.selling_plan.active option:selected').val();
      var variant_id = $(this).find(".bndl_variant").attr('value');
      var p_id = $(this).find(".bndl_variant").attr('p-id');
      $('product-form input[name="id"]').val(variant_id);
      $('product-form input[name="product-id"]').val(p_id);
      $('product-form input[name="selling_plan"]').val(selling_id);
      
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      jQuery('.variant_qty input').val(0);
      $("legend.form__label.step-2").css("color","rgb(243, 65, 53)");
      // $(".oldbtn").addClass("disable");
      // $(".cus_pdt").remove();
    });

   $(document).on("click", '.qtyplus', function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val());
        if (!isNaN(currentVal)) {
          var var_total = $('.pouch-col.active').attr('limit');
         const quantities = document.querySelectorAll('.qty');
         const qty1 = parseInt(quantities[0].value, 10);
         const qty2 = parseInt(quantities[1].value, 10);
         const totalSum = qty1 + qty2;
         if(var_total == totalSum) {
        }
        else {
          $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(currentVal + 1);
        }
      } else {
        $("legend.form__label.step-2").css("color","rgb(243, 65, 53)");
        $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(0);
      }
    });

    // This button will decrement the value till 0
      $(document).on("click", '.qtyminus', function(e) {
        e.preventDefault();
        $("legend.form__label.step-2").css("color","#222121");
        var currentVal = parseInt($(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val());
        if (!isNaN(currentVal) && currentVal > 0) {
          $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(currentVal - 1);
        } else {
          $(this).parents('.product-form__item.product-form__item--quantity').find('input.qty').val(0);
        }
      });

      $(document).on("click", '.qtyplus, .qtyminus', function(e) {
         setTimeout(function() {
          var var_total = $('.pouch-col.active').attr('limit');
           const quantities = document.querySelectorAll('.qty');
           const qty1 = parseInt(quantities[0].value, 10);
           const qty2 = parseInt(quantities[1].value, 10);
           const totalSum = qty1 + qty2;
           if(var_total == totalSum) {
             $(".newbtn").removeClass("disable");
            jQuery('legend.form__label.step-2').css('color','#222121');
          }
          else {
            $(".newbtn").addClass("disable");
           jQuery('legend.form__label.step-2').css('color','#f34135');
         }
        },50); 
      }); 

      $(document).on("click", ".newbtn.disable", function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".reviews_col").offset().top},
        'slow');
    });

    // $(".qty-1 .qty_box button").click(function(){
    //   var element = $(this);
    //   setTimeout(function() {
    //        var a = element.parents(".product-form__item").find(".qty").val();
    //        $(".line_items input.vanilla").attr("value",a);
    //     },50); 
    // });
  
    // $(".qty-2 .qty_box button").click(function(){
    //   var element = $(this);
    //   setTimeout(function() {
    //      var a = element.parents(".product-form__item").find(".qty").val();
    //      $(".line_items input.chocolate").attr("value",a);
    //   },50); 
    // });

  // $(document).on('click', '.qty_box button', function(){
  //  $(".shopify-payment-button__button").attr("disabled",false);
  //  var a = $(this).closest(".combination_inner_col").index() + parseInt(1);
  //  var qty = $(this).closest(".product-form__item").find(".qty").val();
  
  //  if(qty != 0){
  //   $(".first-variant").remove();
  //   var data = "";
  //   var s_id = $(this).closest(".combination_inner_col").find(".selling_plan").val();
  //   var p_id = $(this).closest(".combination_inner_col").find(".combination_img input").val();
  //   var label = $(this).closest(".combination_inner_col").find(".variant-label").text();
  //   var quantity = $(".quantity__input").val();
  //   var frequency = $(this).closest(".combination_inner_col").find(".selling_plan option:selected").attr("frequency");
  //   var seliing_plan_group = $(".sls-option-container.seal-table.sls-active").attr("data-selling-plan-group-id");
  //    if(seliing_plan_group){
  //     var data = "<div class='cus_pdt custom_prduct"+a+"'><input type='hidden' name='items["+ p_id +"][id]' value='"+p_id+"'><input name='items["+ p_id +"][selling_plan]' class='selling-plan' frequency='"+frequency+"' type='hidden' value='"+s_id+"'> <input type='hidden' name='items[" + p_id + "][properties]["+label+"]' value='"+qty+"'><input name='items["+p_id+"][quantity]' type='hidden' class='qty' value='"+quantity+"'></div></div>";
  //    }
  //    else{
  //     var data = "<div class='cus_pdt custom_prduct"+a+"'><input type='hidden' name='items["+ p_id +"][id]' value='"+p_id+"'> <input type='hidden' name='items[" + p_id + "][properties]["+label+"]' value='"+qty+"'><input name='items["+p_id+"][quantity]' type='hidden' class='qty' value='"+quantity+"'></div>";
  //    }
  //    var b = $(".custom_prduct"+a).length;
  //    if(b == 0){
  //    $(data).insertBefore(".product-form__buttons");
  //    }
  //    else{
  //      $(".custom_prduct"+a).remove();
  //      $(data).insertBefore(".product-form__buttons");
  //    }
  //  }
  //   else{$(".custom_prduct"+a).remove();}

  //   /*change preorder btn text*/
  //     var element = $(this);
  //       setTimeout(function() {
  //         var preorder = element.parents(".combination_inner_col").find(".selling_plan option:first-child").attr("frequency");
  //           if(preorder == "preorder"){
  //             var a = element.parents(".product-form__item--quantity").find(".qty").val();
  //             if(a > 0){
  //               $(".newbtn").text("Pre-order now");
  //               $(".card-text").show();
  //             }
  //             else{
  //               $(".newbtn").text("Add to cart");
  //               $(".card-text").hide();
  //             }
  //           }
  //         var sum = "";
  //         $(".combination_inner_col").each(function(){
  //           var fre = $(this).find(".selling_plan option:first-child").attr("frequency");
  //           if(fre == "preorder"){
  //             var qty = $(this).find(".product-form__item--quantity").find(".qty").val();
  //             var sum =+ qty;
  //             if(sum > 0 ){
  //               $(".newbtn").text("Pre-order now");
  //               $(".card-text").show();
  //             }
  //           }
  //         });
  //       },500);
    
  // });
  
  /*update quantity*/
  $(".quantity .quantity__button").click(function(){
    var element = $(this);
    setTimeout(function() {
    var qty = element.parents(".quantity").find(".quantity__input").val();
    $(".cus_pdt .qty").attr("value",qty);
    },500);
  });

  /*add remove selling plan*/
  // $(document).on('click', '.seal-table', function(){
  //   var seliing_plan_group = $(this).attr("data-selling-plan-group-id");
  //   if(!seliing_plan_group){
  //     $(".cus_pdt .selling-plan").remove();
  //   }
  //   else{
  //     $(".combination_inner_col").each(function(){
  //       var a = $(this).index() + parseInt(1);
  //       var qty = $(this).find(".product-form__item").find(".qty").val();
  //       if(qty != 0){
  //         $(".first-variant").remove();
  //         var data = "";
  //         var s_id = $(this).find(".selling_plan").val();
  //         var p_id = $(this).find(".combination_img input").val();
  //         var label = $(this).find(".variant-label").text();
  //         var quantity = $(".quantity__input").val();
  //         var frequency = $(this).closest(".combination_inner_col").find(".selling_plan option:selected").attr("frequency");
  //         var data = "<div class='cus_pdt custom_prduct"+a+"'><input type='hidden' name='items["+ p_id +"][id]' value='"+p_id+"'><input name='items["+ p_id +"][selling_plan]' class='selling-plan' frequency='"+frequency+"' type='hidden' value='"+s_id+"'> <input type='hidden' name='items[" + p_id + "][properties]["+label+"]' value='"+qty+"'><input name='items["+p_id+"][quantity]' type='hidden' class='qty' value='"+quantity+"'></div></div>";
  //          var b = $(".custom_prduct"+a).length;
  //          if(b == 0){
  //          $(data).insertBefore(".product-form__buttons");
  //        }
  //        else{
  //          $(".custom_prduct"+a).remove();
  //          $(data).insertBefore(".product-form__buttons");
  //         }
  //       }
  //     });
  //   }
  // });

  // $(".newbtn").click(function(){
  //  $(".oldbtn").trigger("click");
  // });
  
// rotate slider
  $(".pouch-col").click(function(){
   var a = $(this).index();
   $(".thumbnail-list .thumbnail-list__item").each(function(){
      var b = $(this).index();
       if(a == b){
           $(this).find("button").trigger("click");
       }
   });
  });

$(".pouch-col.active").trigger("click");

// bundle add to cart

document.getElementById('addToCart').addEventListener('click', async () => {
var limit = $(".pouch-col.active").attr("limit");
var collection_id = $(".flavor_combination").attr("collection-id");
var v_id = $(".pouch-col.active input.bndl_variant").attr("value");
var p_id = $(".pouch-col.active input.bndl_variant").attr("p-id");
var s_id = $("select.selling_plan.active option:selected").attr("value");

var quantity = $("#Quantity-buy_buttons").val();
let selections = [];
var sum = 0;
var content = "";
$(".combination_inner_col").each(function(){
   var qty = $(this).find(".qty").val();
  if(qty>0){
      var var_id = $(this).find(".collection_product").attr("value");
      var p_id = $(this).find(".collection_product").attr("pid");
      var qty = qty;
      selections.push({
      collectionId : collection_id,
      externalProductId: p_id,
      externalVariantId: var_id,
      quantity: parseInt(qty),
    });
    var lable = $(this).find(".variant-label").text();
    content += qty + "x " + lable + "\n";
  }
  sum += parseInt(qty);
});
if(limit == sum){
  let bundleProductData = null;
  if($(".selling_plans_inner").hasClass("active")){
     bundleProductData = {
      variantId: v_id,
      productId: p_id,
      sellingPlan: s_id,
    };
  }
  else{
     bundleProductData = {
      variantId: v_id,
      productId: p_id,
    };
  }   
    const bundle = {
      externalVariantId: bundleProductData.variantId,
      externalProductId: bundleProductData.productId,
      selections: selections,
    };
    const rbId = await recharge.bundle.getBundleId(bundle);    
    const cartData = {
      items: [
        {
          id: bundleProductData.variantId,
          quantity: quantity,
          selling_plan: bundleProductData.sellingPlan,
          properties: { contents: content,_rb_id: rbId },
        },
      ],
    };
    await fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartData),
    });
    $("#cart-icon-bubble").trigger("click");
}
});
