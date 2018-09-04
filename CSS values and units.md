# CSS values and units

- [Numeric values](#numeric-values)
  - [Length and size](#length-and-size)
  - [Unitless values](#unitless-values)
    - [Unitless line height](#unitless-line-height)
    - [Number of animations](#number-of-animations)
- [Percentages](#percentages)
- [Colors](#colors)
  - [Keywords](#keywords)
  - [Hexadecimal values](#hexadecimal-values)
  - [RGB](#rgb)
  - [HSL](#hsl)
  - [RGBA and HSLA](#rgba-and-hsla)
  - [Opacity](#opacity)
- [Function](#function)
___
Có rất nhiều kiểu của giá trị đặc tính CSS để xem xét, từ giá trị kiểu số của các màu cho đến các hàm thể hiện chính xác các hành động (như nhúng một ảnh nền, hoặc xoay một phần tử). Một số trong chúng phụ thuộc vào những đơn vị cụ thể cho việc chỉ định rõ giá trị chính xác cái mà chúng đang thể hiện - bạn có muốn cái box của bạn rộng 30 pixels, hoặc 30 cm, hoặc 30 ems? Trong hướng dẫn này, chúng ta đào sâu vào những giá trị chung như chiều dài, màu sắc, và các hàm đơn giản, cũng như tìm hiểu những đơn vị ít dùng như độ degrees, hoặc thậm chí những giá trị số không có đơn vị.
> __Mục tiêu__: học về những loại giá trị của các tính chất CSS và các đơn vị đi kèm

Có nhiều kiểu giá trị trong CSS, một số trong chúng rất quen thuộc và một số cái bạn sẽ hiếm khi đụng đến (come across). Chúng ta sẽ không đi qua tất cả chúng một cách đầy đủ trong bài viết này; chỉ những cái mà chúng ta có thể tìm thấy hữu dụng nhất để tiếp tục tiến đến con đường làm chủ CSS. Trong bài viết này chúng ta sẽ đi qua những giá trị CSS sau:
- Giá trị số (Numeric values): giá trị chiều dài chỉ định: ví dụ chiều rộng phần tử, chiều dày border hoặc font-size, hoặc những số nguyên không đơn vị chỉ định: ví dụ chiều rộng tương đối hoặc số lần để chạy một animation.
- Phần trăm (Percentages): Cũng có thể được sử dụng để xác định rõ cỡ hoặc chiều dài tương đối với chiều rộng hoặc chiều cao của phần tử cha (parent container) hoặc default font-size.
- Màu sặc: chỉ định màu nền, màu chữ ...
- Vị trí tọa độ (Coordinate positions): ví dụ chỉ định cho vị trí của một phần tử tương đối với top và left của màn hình.
- Hàm (Funcionts): Chỉ định ví dụ ảnh nền hoặc ảnh nền gradients.

Bạn cũng sẽ nhìn thấy những ví dụ sử dụng đơn vị trong tất cả các topic CSS. Bạn cũng sẽ làm quen với nó trong thời gian ngắn (You'll get used to it all __in no time__).

> __Note:__ Bạn có thể tìm toàn bộ các unit trong CSS trong link: [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference); các units là những mục được đặt trong trong dấu ngoặc nhọn, ví dụ [\<color\>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
___
## Numeric values
Bạn sẽ thấy những số được sử dụng nhiều trong CSS units. Phần này thảo luận các classes phổ biến nhất của giá trị số.
## Chiều dài và cỡ (Length and size)
Bạn sẽ sử dụng length/size units (xem [\<length\>](https://developer.mozilla.org/en-US/docs/Web/CSS/length) tham khảo) tất cả mọi lần bạn sử dụng CSS cho bố trí (layouts), kiểu chữ (typography) và các thứ khác. Hãy nhìn ví dụ đơn giản sau
Đầu tiên là HTML:
```HTML
<p>This is a paragraph.</p>
<p>This is a paragraph.</p>
<p>This is a paragraph.</p>
```
và CSS:
```CSS
p {
  margin: 5px;
  padding: 10px;
  border: 2px solid black;
  background-color: cyan;
}

p:nth-child(1) {
  width: 150px;
  font-size: 18px;
}

p:nth-child(2) {
  width: 250px;
  font-size: 24px;
}

p:nth-child(3) {
  width: 350px;
  font-size: 30px;
}
```
Trong đoạn code chúng ta làm:
- Đặt `margin`, `padding` và `border-width` cho mỗi đoạn văn 5 pixels, 10 pixels và 2 pixels tương ứng. Một đơn giá trị cho margin/padding có nghĩa rằng 4 phía của chúng được set cùng giá trị đó.
- Đặt `width` cho 3 đoạn văn khác nhau to dần giá trị pixels, có nghĩa là các boxes to dần ra.
- Đặt `font-size` là 3 giá trị pixesl to dần, có nghĩa là đoạn chữ to dần. `font-size` tương quan đến chiều cao của mỗi ký tự.

Pixels (px) được xem như các đơn vị tuyệt đối __absolute units__ bởi vì chúng luôn luôn có kích cỡ không đổi bất kể các cài đặt có liên quan khác. Các đơn vị tuyệt đối khác là:
- `mm`, `cm`, `in`: Milimeters, centimeters, hoặc inches.
- `pt`, `pc`: Points (1/72 của 1 inch) hoặc picas (12 points.)

Bạn có thể sẽ không sử dụng bất kỳ cái nào ở trên ngoại trừ pixels.
Có 2 đơn vị tương đối, chúng tương đối với `font-size` của  current element hoặc của viewport: 
- `em`: `1em` bằng với font-size của phần tử hiện tại (kỹ hơn là chiều rộng của chữ M viết hoa.) `font-size` mặc định cho các trang web bởi trình duyệt web trước khi tạo kiểu CSS được chèn vào thì là 16pixels, có nghĩa là giá trị được tính toán của 1 `em` là 16 pixels cho 1 phần tử ở chế độ mặc định. Nhưng để ý - font sizes được kế thừa bởi phần tử từ cha của chúng, cho nên nếu các font-sizes khác nhau được cài đặt lên các phần tử cha, thì giá trị pixel tương đương của 1 `em` có thể trở nên phức tạp. Không cần lo lắng quá nhiều về điều này, chúng ta sẽ lướt qua về inheritace và font-sizing kỹ hơn trong các bài viết sau và các modules. __ems are the most common relative unit you'll use in web development__
- `ex, ch`: một cách tương ứng là chiều cao của một chữ cái thường x, và chiều rộng của số 0. Chúng không được sử dụng nhiều cũng những như được hỗ trợ tốt như ems
- `rem`: The `rem` (root `em`) hoạt động chính xác như cách của `em`, ngọai trừ nó luôn luôn bằng cỡ mặc định; các font-sizes  được kế thừa sẽ không tác dụng (tức là các font-size của thằng cha sẽ không áp dụng cho thằng con, mà thằng con nếu có font-size của kiểu rem thì nó kế thừa của root chứ không phải cha nó), cho nên nó nghe vẻ tốt hơn ems, mặc dù rem không làm việc cho các phiên bản cũ hơn của IE
- `vw`, `vh`: Tương ứng là 1/100 của chiều rộng viewport, và 1/100 chiều cao viewport. Và chúng cũng không được hỗ trợ rộng rãi như rems

Sử dụng các đơn vị tương đối khá hữu dụng - bạn có thể size các phần tử HTML tương đối với font của bạn hoặc viewport, có nghĩa rằng layout sẽ vẫn nhìn đúng nếu cỡ chữ nhân đôi lên bởi một người dùng khiếm thị (a visuallly impaired user). (vì khi cho font chữ to lên thì các phần tử khác cũng to lên theo do nó được đặt theo đơn vị của font là rem hoặc em).

## Unitless values

Bạn sẽ có một vài lần gặp những giá trị số không có đơn vị trong CSS - điều đó không luôn luôn là lỗi, thực thế, nó là một sự cho phép hoàn hảo trong 1 số trường hợp. Ví dụ, nếu bạn muốn hoàn toàn loại bỏ `margin` hoặc `padding` từ một phần tử, bạn có thể sử dụng chỉ mỗi 1 số là `0` mà không cần đến bất kì đơn vị (unit) nào.
```CSS
margin: 0;
```
### Unitless line height
Một ví dụ khác là `line-height`, cái cài đặt làm sao chiều cao cho mỗi dòng trong một phần tử. Bạn có thể sử dụng units để set cho line height 1 gía trị cụ thể, nhưng nó thường sẽ hơn để sử dụng unitless value, cái mà hoạt động như một hệ số nhân đơn giản. Ví dụ:
```HTML
<p>Blue ocean silo royal baby space glocal evergreen relationship housekeeping
native advertising diversify ideation session. Soup-to-nuts herding cats resolutionary
virtuoso granularity catalyst wow factor loop back brainstorm. Core competency 
baked in push back silo irrational exuberance circle back roll-up.</p>
```
và CSS
```CSS
p {
  line-height: 1.5;
}
```
Thế thì ở đây `font-size` là 16px; còn line height sẽ là 1.5 lần nó, là 24px.

### Number of animations

CSS Animations cho phép bạn animate HTML elements trong trang. Hãy lấy 1 ví dụ đơn giản là gây ra chuyển động quay khi cho chuột đi qua.
```HTML
<p>Hello</p>
```
và CCS
```CSS
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

p {
  color: red;
  width: 100px;
  font-size: 40px;
  transform-origin: center;
}

p:hover {
  animation-name: rotate;
  animation-duration: 0.6s;
  animation-timing-function: linear;
  animation-iteration-count: 5;
}
```
Thì ở đây ta thấy số lần quay là 5, một giá trị mà không có đơn vị.

## Percentages
Bạn cũng có thể sử dụng gía trị phần trăm để chỉ định hầu hết các thứ có thể được chỉ định bằng các giá trị số (numeric values). Nó cho phép chúng ta tạo ra, ví dụ, các box mà chiều rộng của chúng luôn luôn chuyển sang một phần trăm nhất định của chiều rộng của cha chúng. Điều này có thể so sánh với các box cái mà có chiều rộng được cài đặt unit value (`px` hoặc `em`s), cái luôn luôn giữ nguyên chiều dài, thậm chí nếu parent chứa nó có width thay đổi.

```HTML
<div>
  <div class="boxes">Fixed width layout with pixels</div>
  <div class="boxes">Liquid layout with percentages</div>
</div>
```
và CSS
```CSS

div .boxes {
  margin: 10px;
  font-size: 200%;
  color: white;
  height: 150px;
  border: 2px solid black;
}

.boxes:nth-child(1) {
  background-color: red;
  width: 650px;
}

.boxes:nth-child(2) {
  background-color: blue;
  width: 75%;
}
```
div đầu tiên được cài đặt 650px, và cái thứ 2 được cài đặt width là 75%. Tác dụng của việc làm này là: div đầu tiên luôn luôn có width là 650px thậm chí khi viewport được thay đổi (nó sẽ bắt đầu biến mất phần thừa ra nếu như viewport trở nên hẹp nhỏ hơn màn hình), trong khi div thứ 2 luôn luôn = 75% width của thằng cha nó. Trong trường hợp này thì thằng cha nó là `body`. Phần tử `body` thì có width = 100% width of viewport.

Hai kiểu box layout trên được xem là __liquid layout__ (chuyển đổi khi viewport của browser thay đổi), và __fixed width layout__ (giữ không đổi). Cả 2 có tác dụng khác nhau, ví dụ:
- Một liquid layout được sử dụng để chắc chắn rằng 1 tài liệu chuẩn luôn luôn vừa trong màn hình và dễ nhìn đối với mọi loại màn hình thiết bị di động
- Một fixed layout có thể được sử dụng để giữ cho bản đồ online (online map) có cỡ ko đổi; browser viewport có thể scroll xung quanh map, chỉ nhìn một phần của map mỗi lần. Lượng bạn nhìn thấy tùy thuộc vào độ rộng vừa viewport của thiết bị. Bạn sẽ học nhiều về web layouts trong course này, trong CSS layout và Responsive design modules (__TBD__.)
___
## Colors
Có nhiều cách để xác chỉ định màu sắc trong CSS, một số trong đó được thực thi nhiều hơn những cái khác. Các giá trị màu giống nhau có thể được sử dụng bất kì đâu trong CSS, từ text, background hay bất kì đâu.

Hệ thống màu chuẩn trong máy tính hiện đại là 24 bit, nó cho phép màn hình 16.7 triệu màu khác nhau trông qua sự kết hợp của 3 kênh màu red, green và blue cùng với 256 giá trị khác nhau mỗi kênh, tức là tạo thành tổ hợp (256x256x256 = 16,777,216).

Cùng điểm qua một số giá trị màu khác nhau.
> __Note:__ để convert các hệ màu khác nhau dưới đây, bạn sẽ cần một [color converter](https://serennu.com/colour/hsltorgb.php)

### Keywords
Là dạng đơn giản nhất trong CSS - chính là strings đại diện cho màu, ví dụ:
```CSS
p {
  background-color: red;
}
```
Rất dễ hiểu. Có khoảng 165 keywords trong modern web browsers [full color keyword list](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)

Bạn sẽ có thể sử dụng màu nguyên chất như red, black, white thường xuyên trong công việc, nhưng ngoài ra bạn còn muốn sử dụng một hệ màu khác

### Hexadecimal values

Hệ thống màu phổ biến (ubiquitous) tiếp theo là hexadecimal color, hoặc hex codes. mỗi hex value chứa một hash/pound symbol (#) theo sau là 6 hexadecimal numbers, mỗi cái trong chúng lất giá trị từ 0 cho đến f (biểu thị 15) tức là 0123456789abcdef. Mỗi cặp giá trị đại diện cho một channels -red, green và blue - và cho phép chúng ta chỉ ra 256 values cho mỗi cái (16x16 = 256), tức mỗi kênh màu sẽ có 16 cách chọn giá trị thứ nhất và 16 cách chọn giá trị thứ 2.

Những giá trị này phức tạp hơn một chút và ko dễ để hiểu, nhưng chúng phong phú hơn so với keywords - bạn có thể sử dụng hex values để biểu diễn bất cứ màu nào bạn muốn sử dụng.

### RGB
The third scheme (kế hoạch thứ 3) chúng ta sẽ nói về là RGB. Một RGB giá trị là một hàm `rgb()` nhận 3 tham số đại diện cho các kênh __red__, __green__ và __blue__ giống với ở phần hex values. Chỉ khác là mỗi kênh không phải biểu diễn bằng 2 kí tự mà là 1 kí tự số từ 0 cho đến 255

Hệ thống RGB gần đây được hỗ trợ tốt cũng như hex values -  bạn có thể sẽ không động đến browser nào mà không hỗ trợ chúng. RGB values are arguably (được cho là) ituitive (trực quan) và dễ hiểu hơn hex values.

> __Note:__ Tại sao là 0 đến 255 mà không phải 1 đến 256? Hệ thống máy tính có xu hướng đếm từ 0, chứ không phải 1. Cho nên để có 256 giá trị thì các màu RGB lấy giá trị ở khoảng 0-255.

### HSL

Ít được hỗ trợ hơn một chút so với RGB là mô hình HSL (không có trên các phiên bản cũ của IE), cái được thực thi sau nhiều sự quan tâm của các người thiết kế -  thay vì red, green, blue values, cái `hsl()` function chấp nhận `hue` (màu sắc), `saturation` (sự bão hòa, sự thấm vào), `lightness` (sự nhẹ bớt, sự chiếu sáng) để phân biệt giữa 16.7 triệu màu nhưng theo một cách khác

1. `hue`: the base shade of color (sắc thái cơ bản của màu). Nó lấy giá trị từ 0 cho đến 360, đại điện cho các góc xunh quanh bánh xe màu (color wheel).
2. `saturation`: how saturated is the color? (độ đậm nhạt) Nó lấy giá trị từ 0 đến 100%, ở đây 0 là không màu (nó sẽ xuất hiện như sắc thái của màu xám), và 100% là full color saturation.
3. `lightness`: how light or bright is the color? (độ sáng) Nó lấy giá trị từ 0 đến 100%, ở đây 0 là 0 có ánh sáng (nó sẽ hoàn toàn đen) và 100% là full light (nó sẽ hoàn toàn trắng).

> __Note__: Một hình trụ HSLcó thể hữu dụng cho hình dung (visualising) cách mà mô hình màu này hoạt động. Xem [HSL and HSV article](https://en.wikipedia.org/wiki/HSL_and_HSV#Basic_principle) trên Wikipedia.
Ví dụ

```CSS
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: hsl(0,100%,50%);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: hsl(240,100%,50%);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: hsl(276,100%,85%);
}
```
Mô hình màu HSL là trực quan cho nhà thiết kế những người thường sử dụng mô hình màu này. Nó là hữu dụng cho, ví dụ, tìm một tập hợp sắc thái để đi cùng nhau trong một monochrome color scheme (bảng màu đơn sắc)

3 loại sắc thái màu của màu đỏ
```CSS
/* three different shades of red*/
background-color: hsl(0,100%,50%);
background-color: hsl(0,100%,60%);
background-color: hsl(0,100%,70%);
```
### RGBA và HSLA
Cả RGB và HSL có mô hình tương ứng - RGBA và HSLA cái cho phép bạn cài đặt không chỉ màu mà bạn muốn trình bày, mà cả transparency mà màu có. Hàm tương ứng với mô hình đó lấy thêm 1 tham số, có giá trị từ 0-1 cái cài cho độ trong suốt, hoặc kênh alpha. 0 là hoàn toàn sáng tỏ, và 1 là hoàn toàn opaque (mờ mịt).

### Opacity

Có một cách khác để chỉ định transparency thông qua CSS - the `opacity` property. Thay vì cài đặt transparency cho một màu cụ thể, nó cài đặt transparency cho tất cả các phần tử elements và con của nó. Chúng ta xem ví dụ sau để thấy sự khác nhau:

```HTML
<p>This paragraph is using RGBA for transparency</p>
<p>This paragraph is using opacity for transparency</p>
```
Và CSS:
```CSS
/* Red with RGBA */
p:nth-child(1) {
  background-color: rgba(255,0,0,0.5);
}

/* Red with opacity */
p:nth-child(2) {
  background-color: rgb(255,0,0);
  opacity: 0.5;
}
```
Để ý sự khác nhau - box đầu tiên sử dụng RGBA chỉ có background là có semi-transparent trong khi tất cả mọi thứ trong box 2 đều transparent, bao gồm cả text. Bạn sẽ cần suy nghĩ cẩn thận về khi nào thì sử dụng mỗi cái - ví dụ RGBA thì thuận tiện khi bạn muốn tạo một overlaid image caption (Chú thích phủ lên ảnh) ở đây ảnh hiển thị thông qua caption box nhưng text thì vẫn dễ đọc. opacity thì mặt khác lại hữu dụng khi bạn muốn tạo một animation effect khi cả UI (User Interface) elements đi từ visible cho đến hidden.

## Functions

Trong chương trình, một hàm là một phần code có thể dùng lại cái có thể chạy nhiều lần để hoàn thành những nhiệm vụ lặp lại với ít công sức trong phần của cả lập trình viên và máy tính. các hàm thường được liên kết với ngôn ngữ như JavaScript, Python hoặc C++ nhưng chúng cũng tồn tại trong CSS, như là property values (giá trị của đặc tính). Chúng ta đã thấy những hàm hoạt động trong phần Color, với `rgb()`,`hsl()`, ...
```CSS
background-color: rgba(255,0,0,0.5);
background-color: hsla(240,100%,50%,0.5);
```
Những hàm này tính toán màu để sử dụng.
Nhưng bạn sẽ nhìn thấy những hàm ở các chỗ khác - bất cứ khi nào bạn nhìn thấy một cái tên và cặp ngoặc đơn đằng sau nó. Chứa 1 hoặc nhiều giá trị ngăn cách nhau bởi các dấu phẩy thì tức là bạn đang làm việc với một hàm. Ví dụ:
```CSS
/* calculate the new position of an element after it has been rotated by 45 degress */
transform: rotate(45deg);
/* calculate the new position of an element after it has been moved across 50px and down 60px */
transform: translate(50px, 60px);
/* calculate the computed value of 90% of the current width minus 15px */
width: calc(90%-15px);
/* fetch an image from the network to be used as a background image */
background-image: url('myimage.png');
```
Có nhiều mảnh thú vị của hàm để sử dụng trong CSS, cái bạn sẽ học trong course này.













































































