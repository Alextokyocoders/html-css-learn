# html-css-learn

1 div bao gồm: content-padding-border-margin

+ vị trí của 1 div trong html sẽ bắt đầu từ vị trí (0,0) của content trong parent của div đó.
  => 2 `div` con cùng 1 `div parent` thì thì `div` trên (được viết thứ tự trước trong html) có thể đẩy `div` dưới bằng `padding-bottom` hoặc `margin-bottom`
  => nếu `div` dưới `margin-top` hoặc `margin-top` thì sẽ làm cho div dưới bị thụt xuống
+ nested div: `div child` sẽ nằm ở layout trên `div parent`
+ 2 div parent ngang hàng:
  `parent 1` và `paretn 2` ngang hàng, và `parent 2` ở dưới (được viết thứ tự sau trong html) sẽ nằm ở layout trên tất cả mọi cấp `child` của `parent 1`
 
