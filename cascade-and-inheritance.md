# Cascade and inheritance
- [The cascade](#the-cascade)
  - [Importance](#importance)
  - [Specificity](#specificity)
  - [Source order](#source-order)
  - [A note on rule mixing](#a-note-on-rule-mixing)
- [Inheritance](#inheritance)
  - [Controlling inheritance](#controlling-inheritance)
  - [Resetting all property values](#resetting-all-property-values)
___
## Inheritance

CSS inheritance là phần cuối cùng chúng ta cần để điều tra để lấy tất cả các thông tin và hiểu style nào được áp dụng cho một element. Ý tưởng là một số property values được áp dụng cho một element sẽ được kế thừa bởi con của element đó, và một số thì không.
- Ví dụ, nó đúng với `font-family`và `color` để được kế thừa, khi nó làm cho bạn dễ để cài đặt độ rộng ban đầu cho font bởi áp dụng font-family to phần tử `\<html\>`; sau đó bạn có thể override the fonts trên từng elements những chỗ bạn cần thay đổi. Nó sẽ thực sự khó chịu để cài đặt base font riêng biệt cho mỗi phần tử.
- Một ví dụ khác, `margin`, `padding`, `border` và `background-image` không được kế thừa. Hình dung một layout hay styling hỗn độn cái sẽ xảy ra nếu bạn cài đặt những thuộc tính này trên một container element và chúng được kế thừa bởi mỗi phần tử con đơn lẻ, và say đó chúng ta phải unset tất cả chúng trên từng individual element!

Những tính chất được kế thừa bởi default và những cái không? Nếu bạn muốn chắc chắn, tuy nhiên bạn có thể tham khảo [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) - mỗi separate property page contains một bảng tóm tắt bao gồm nhiều chi tiết khác nhau về element đó, bao gồm nó có hay không được inherited.

### Controlling inheritance

CSS cung cấp 4 giá trị tính chất phổ cập đặc biệt (special universal property) cho chỉ định inheritance:

`inherit`
 Tập hợp các property value được áp dụng cho những phần tử được chọn để giống như cái của cha nó
 
`initial`
Tập hợp các property value được áp dụng cho 1 phần tử được chọn để có gía trị cho phần tử đó giống với trong browser's default style sheet. Nếu không có giá trị được cài đặt bởi browser's default style sheet và tính chất được kế thừa một cách tự nhiên thì giá trị của tính chất đó sẽ được set thành `inherit`.

`unset`
Resets tất cả các tính chất về giá trị tự nhiên của nó, có nghĩa rằng nếu tính chất được kế thừa tự nhiên nó hành động như `inherit`, nếu không nó hành động như `initial`.

`revert`

Hoàn tính chất đến giá trị nó đã có nếu nguồn gốc hiện tại không áp dụng bất kì styles nào vào nó. Nói cách khác, giá trị của tính chất được set to stylesheet's value cho tính chất (nếu cái được set), nếu không giá trị của tính chất được lấy từ user agent's default stylesheet

Xem [Origin of CSS declarations](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#Origin_of_CSS_declarations) trong [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) để biết thêm thông tin về mỗi cái và cách mà chúng làm việc.

> __Note__: `initial` và `unset` không được hỗ trợ trên IE.

Trong số chúng, `inherit` thường thú vị nhất - nó cho phép chúng ta tạo ra một cách rõ ràng một phần tử kế thừa một tính giá trị tính chất từ cha của nó.

Hãy nhìn vào ví dụ sau:
```HTML
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```
Và CSS for styling:
```CSS
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```
Giải thích:
- Đầu tiên cài đặt `color` cho `<body>` thành màu green.
- Bởi vì `color` là về bản chất thì nó là một property kế thừa một cách tự nhiên, tất cả các phần tử con của nó sẽ có cùng màu green. Nhưng nó sẽ không có tác dụng vì browsers đã cài đặt màu cho links có màu blue mặc định thay vì cho phép nó kế thừa tự nhiên, cho nên link đầu tiên của chúng ta sẽ có màu blue.
- nhóm thứ 2 được ghi giá trị `inherit` để kế thừa màu từ cha nó. Trong trường hợp này, link kế thừa màu từ cha nó là thẻ `<li>`, thẻ `li` lại có màu được kế thừa tử cha nó là thẻ `ul` và cuối cùng thẻ `ul` được kế thừa màu thẻ `body`. Từ thẻ `li` đến `body` là theo bản chất kế thừa tự nhiên của `color`
- cái thứ 3 được để giá trị `initial`. Thông thường, initial value set bởi browsers cho text color là black, cho nên nó chuyển về black.
- cái cuối cùng được cài đặt `unset`. nếu property đó được kế thừa tự nhiên về thì nó sẽ hoạt động như `inherit` còn nếu tính property đó không kế thừa tự nhiên thì nó hoạt động như initial, trong trường hợp này thì property là color là một property kế thừa tự nhiên từ `body` cho nên nó hoạt động như inherit và chuyển link sang màu green.

### Reseting all property values

property `all` có thể sử dụng để áp dụng 1 hoặc những inheritance values to (almost) tất cả các tính chất. Giá trị của có thể là 1 trong 4 cái `inherit`, `initial`, `unset` hoặc `revert`. Là một cách tiện để undo các thay đổi đã được tạo, do đó bạn có thể quay trở lại thời điểm chưa style gì.











