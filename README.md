# html-css-learn

1 div bao gồm: content-padding-border-margin

+ vị trí của 1 div trong html sẽ bắt đầu từ vị trí (0,0) của content trong parent của div đó.
  => 2 `div` con cùng 1 `div parent` thì thì `div` trên (được viết thứ tự trước trong html) có thể đẩy `div` dưới bằng `padding-bottom` hoặc `margin-bottom`
  => nếu `div` dưới `margin-top` hoặc `margin-top` thì sẽ làm cho div dưới bị thụt xuống
+ nested div: `div child` sẽ nằm ở layout trên `div parent`
+ 2 div parent ngang hàng:
  `parent 1` và `paretn 2` ngang hàng, và `parent 2` ở dưới (được viết thứ tự sau trong html) sẽ nằm ở layout trên tất cả mọi cấp `child` của `parent 1`
 

FIX:

+ vị trí của 1 div trong html sẽ bắt đầu từ vị trí (0,0) của content trong parent của div đó. ( Still right)

+ layout trong html giống hoàn toàn trong design:
  + tức là div viết sau sẽ nằm trên layout của div viết trước
  + ví trí của div viết sau sẽ là ngay dưới div viết trước, lấy điểm đó làm (0,0)
  
* Áp dụng ?

+ Như vậy, ta hình dung khi làm desgin thì sau khi viết component xong ta mới bố trí, còn trong html thì khi đánh ra 1 div thì nó tự bố trí cho ta ở ngay phía dưới rồi. 
=> Vậy trước khi viết html, clone 1 trang web nào đó, ta phải chia bố cục của trang đó, header =container{ (band, navbar...)}, section = container{(showcases,..)}
