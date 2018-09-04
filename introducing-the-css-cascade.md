# Introducing the CSS Cascade

- [Which CSS entities participate in the cascade](#which-css-entities-participate-in-the-cascade)
- [Origin of CSS declarations](#origin-of-css-declarations)
  - [User-agent stylesheets](user-agent-stylesheets)
  - [Author stylesheets](#author-stylesheets)
  - [User stylesheets](#user-stylesheets)
- [Cascading order](#cascading-order)
- [Resetting styles](#resetting-styles)
- [CSS animations and the cascade](#CSS-animations-and-the-cascade)
- [Example](#example)

The `cascade` là một thuật toán xác định cách kết hợp các giá trị tính chất có nguồn gốc từ các nguồn khác nhau. Nó nằm trong lõi của CSS, như nhấn mạnh bởi tên: Cascading Style Sheets. Bài viết này giải thích cascade là gì, thứ tự trong đó CSS declarations cascade, và nó anhr hưởng như nào đến bạn, web developer.
# Which CSS entities participate in the cascade

Chỉ những khai báo CSS, cái mà cặp tính chất/ giá trị tham gia trong cascade. Có nghĩa là [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) chứa những phần tử khác với declarations chẳng hạn như [@font-face] chứa descriptor, không tham gia trong cascade. Trong những trường hợp đó,  only the at-rule as a whole participates in the cascade: ở đây, the `@font-face` được xác định bởi bộ mô tả descriptor `font-family` của nó. Nếu một vài `@font-face` rules với cùng bộ mô tả được xác định, chỉ những `@font-face` phù hợp nhất, as a whole, là được xem xét.

Trong khi declarations chứa hầu hết at-rules như là trong `@media`, `@document` hoặc `@supports` tham gia trong cascade, declarations chứa trong `@keyframes` là không. Như với `@font-face`, chỉ những at-rule as a whole là được chọn thông qua cascade algorithm.

Cuối cùng, chú ý rằng `@import` và `@charset` tuân theo một thuật toán cụ thể và không ảnh hưởng bởi cascade algorithm.
___
## Origin of CSS declarations 

Công việc của thuật toán cascade là chọn những khai báo CSS để xác định xem values nào là chính xác cho những property. CSS declarations có nguồn gốc từ các nguồn gốc khác nhau: [User-agent stylesheets], the [Author stylesheets] và [User stylesheet]

Mặc dù style sheet đến từ nhiều nguồn khác nhau, chúng chồng lên nhau trong không gian; để nó hoạt động, thuật toán cascade xác định cách chúng tương tác.

### User-agent stylesheets

Browser có style sheet cơ bản tạo ra default style cho mọi tài liệu. Những style này có tên là __user-agent stylesheet__. Một số browsers sử dụng actual style sheets cho mục đích này, trong khi những cái khác mô phỏng chúng trong code, nhưng kết quả cuối cùng là như nhau.

Một số browsers cho người dùng chỉnh sửa user-agent stylesheet. Mặc dù một số ràng buộc trên user-agent stylesheets được đặt theo đặc tả bởi HTML, browsers vẫn có nhiều bề ngang: có nghĩa là có sự khác nhau lớn giữa các browser. Để đơn giản trong quá trình dev, Web dev thường sử dụng một CSS reset style sheet, ép các giá trị tính chất chung về 1 trạng thái ban đầu để tạo ra sự thay thế để phù hợp với nhu cầu nhất định.

### Author stylesheets

__Author stylesheets___ là những kiểu phổ biến nhất của style sheet. được xác định như phàn của thiết kế. Tác giả của page xác định các styles cho document using 1 hoặc nhiều stylesheets, cái xác định cái nhìn và cảm giác của 1 trang web - themme của nó.

### User stylesheets

Người dùng (hoặc người đọc) của trang web có thể chọn cách để override styles trong nhiều browsers sử dụng một custom __user stylesheets__ được thiết kế để điều chỉnh (tailor) trải nghiệm theo mong muốn của người dùng.

### Cascading order

Thuật toán cascading xác định cách để tìm giá trị áp dụng vào mỗi tính chất cho mỗi element.
1. Đầu tiên nó lọc tất cả các rules từ các nguồn khác nhau để chỉ giữ nhưng rules áp dụng vào phần tử đang cần xem xét. Có nghĩa là những rules có seletor matches với phần tử đã cho và đó là những phần của một media at-rule thích hợp.
2. Sau đó nó sắp xếp những rules đó theo sự quan trọng, đó là, có hay không chúng được theo sau bởi `!important`, và bởi nguồn gốc của chúng. The cascade là thứ tự tăng dần, có nghĩa là `!important` từ user-defined style sheet có sự ưu tiên cao hơn những giá trị thông thường có nguồn gốc từ 1 user-agent style sheet.

|     | Origin                             |Importance                     |
|-----|------------|------------|
|1    |  user agent          |   normal         |
|2    |     	user       |       normal     |
|3    |       author     |      normal      |
|4    |     Animations       |         *see below*   |
|5    |       author     | `!important`   |
|6    |    user        |`!important`|
|7    |     user agent	       |`!important`|

Trong trường hợp bằng nhau thì ta phải dùng đến [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) để xác định

## Resetting styles
After your content has finished altering styles, it may find itself in a situation where it needs to restore them to a known state. This may happen in cases of animations, theme changes, and so forth. The CSS property all lets you quickly set (almost) everything in CSS back to a known state.

all lets you opt to immediately restore all properties to any of their initial (default) state, the state inherited from the previous level of the cascade, a specific origin (the user-agent stylesheet, the author stylesheet, or the user stylesheet), or even to clear the values of the properties entirely.

## CSS animations and the cascade

[CSS animations](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations), using `@keyframes` at-rules, define animations between states. Keyframes don't cascade, meaning that at any given time CSS takes values from only one single @keyframes, and never mixes multiple ones together.

When several keyframes are appropriate, it chooses the latest defined in the most important document, but never combined all together.

Also note that values within @keyframes at-rules overwrite all normal values but are overwritten by !important values.

## Example

Hãy nhìn và một ví dụ liên quan đến nhiều nguồn css across các nguồn gốc khác nhau; ở đây gồm có user style sheet, 2 author style sheets, a user stylesheets, và 1 inline styles within the HTML:

__User-agent CSS:__
```CSS
li { margin-left: 10px }
```
__Author CSS 1:__
```CSS
li { margin-left: 0 } /* This is a reset */

```
__Author CSS 2:__
```CSS
@media screen {
  li { margin-left: 3px }
}

@media print {
  li { margin-left: 1px }
}
```
__User CSS:__

```CSS
.specific { margin-left: 1em }

```
__HTML__

```HTML
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```
Trong thường hợp này, khai báo `li` và `.specific` rules nên được áp dụng. Không có khai báo `!important` nào, cho nên thứ tự ưu tiên là author sytle sheets trước user style sheets hoặc user-agent stylesheet.

Có 3 declaration cạnh tranh:

```CSS
margin-left: 0
```

```CSS
margin-left: 3px
```

```CSS
margin-left: 1px
```
Cái cuối cùng bị bỏ qua (on a screen). 2 cái đầu có cùng selector do đó có cùng specificity. Do đó cái nào viết sau thì cái đó được chọn

```CSS
margin-left: 3px
```
Chú ý rằng declaration xác định trong user CSS, mặc dù có greater specifity, nhưng cascade algorithm được áp dụng trước the specifity algorithm.





















































































































