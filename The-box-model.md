# The box model

- [Box properties](#box-properties)
- [Advanced box manipulation](#advanced-box-manipulation)
  - [Overflow](#overflow)
  - [Background clip](#background-clip)
  - [Outline](#outline)
- [Types of CSS boxes](#types-of-css-boxes)
- [See also](see-also)
CSS box model là nền tảng của layout trên Web, mỗi phần tử được đại diện như là một box chữ nhật, với nội dung của box, padding, border và margin được xây dựng bao lấy nhau như cấu trúc của củ hành. Khi browser (renders) hiển thị bố cục trang web, nó làm cho styles nào áp dụng cho nội dung của box đó, độ to bao nhiêu xung quanh một onion layers và vị trí tương đối của các box với nhau. Trước khi hiểu cách tạo CSS layouts, bạn cần hiểu box model.

> __Mục tiêu__: học về cách CSS box model hoạt động, và cách các phần tử được bố trí trên web.

## Box properties

Mỗi phần tử trong một tài liệu được cấu trúc như một hình chữ nhật bố trí trong tài liệu, kích cỡ và "onion layers" của nó có thể được tweaked (tinh chỉnh) sử dụng một số đặc tính CSS. Các tính chất liên quan gồm có:

__width__ và __height__

__width__ và __height__ properties cài đặt chiều rộng và chiều cao của __context box__, đó là phần trong đó nội dung của box được thể hiện - nội dung này bao gồm cả text trong box và các boxes khác là phần tử con nằm trong box đó.

__Note__: Other properties exist (vẫn còn các tính chất khác) cho phép xử lý content box size tinh tế - cài đặt các ràng buộc về kích cỡ mà không phải là một kích cỡ tuyệt đối. Việc đó có thể thực hiện với `min-width`, `max-width`, `min-height` và `max-height`.

__padding__

__padding__ đề cập đến *inner* margin (lề bên trong) của một CSS box - giữa cạnh ngoài của nội dung và cạnh trong của border. Kích cỡ của lớp này có thể được cài đặt 4 phía một lúc (at once) với `padding` shorthand property, hoặc một phía với `padding-top, padding-right`, `padding-bottom` và `padding-left`.

__border__

__border__ của một CSS box ở giữa cạnh ngoài của padding và cạnh trong của margin. Một cách mặc định, border có cỡ là 0, làm nó cho nó bị ẩn, nhưng bạn có thể cài đặt độ dày, kiểu dáng và màu cho nó để làm cho nó xuất hiện. `border` shorthand property cho phép bạn cài đặt tất cả 4 phía cùng một lúc, ví dụ :`border: 1px solid black`. Nó có thể tách thành nhiều các longhand properties khác nhau cho sự styling (tạo kiểu) khác nhau.

- `border-top`, `border-right`, `border-bottom`, `border-left:` cài đặt chiều rộng, kiểu và màu sắc cho 1 phía của border.
- `border-width`, `border-style`, `border-color`: cài đặt chỉ chiều dày, kiểu dáng, màu sắc, nhưng cho cả 4 phía.
- Bạn có thể cài đặt một trong 3 tính chất cho 1 side của border sử dụng `border-top-width`, `border-top-style`, `boder-top-color`, etc.

__margin__
Lề xung quanh một CSS box, và đẩy các CSS box khác trong layout, nó hoạt động khá giống padding; shorthand là `margin` và từng phía là: `margin-top`, `margin-right`, `margin-bottom` và `margin-left`.

>__Note__: Margins có các specific behavior (hành vi riêng) gọi là [margin collapsing](#https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing): Khi 2 box cạnh sát nhau, khoảng cách giữa 2 cái là giá trị lớn nhất của 2 margin chứ không phải tổng của chúng.
 
 - Khi chúng ta không set `width` cho một box, thì content của nó nó mặc định = 100% của khoảng trống còn thừa (sau khi margin, border và padding lấy phần của chúng), nếu bạn thay đổi chiều rộng của của sổ trình duyệt thì box sẽ to ra hoặc co lại đảm bảo nó nằm trong window.
 - `height` của content mặc định là chiều cao nội dung bên trong nó.
 - Khi set `width = 60%` tức có nghĩa là content sẽ có chiều rộng bằng 60% của chiều rộng của content của element cha chứa nó.
 - Khi set `margin = 5%` cho cả 4 phía của box, thì có nghĩa là giá trị đó sẽ bằng 5% của __chiều rộng (width)__ của phần tử cha chứa nó. Giả sử cha nó là body thì khi kéo hoặc co màn hình trình duyệt thì `margin` cũng to và nhỏ theo.
 - `margin` có thể chấp nhận giá trị âm điều đó có thể gây ra chồng lấn lên các box khác.
 
__Some new note and ideas__:
 - Một cách mặc định `background-color/background-image` mở rộng đến cạnh của border. Hành vi này có thể thay đổi bằng sử dụng `background-clip`, cái mà bạn sẽ học trong phần [Background_clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip).
 - Nếu nội dung của box trở nên rộng hơn window, thì sẽ xuất hiện scroll bars cho phép bạn scroll window để xem phần còn lại của box. Bạn có thể control overflow với `overflow`.
 - Box heigts không nhận giá trị phần trăm, chiều cao của box thông qua (adopts) chiều cao của content, trừ phi chiều cao tuyệt đối được set (e.g pixels, rems ...). Điều này là thuận tiện hơn là cho chiều cao mặc định của mỗi box = 100% chiều cao của viewport.
 - Các borders cũng ignore percentage width.
 - Bạn nên để ý tới tổng chiều rộng của một box là sum of = `width` + `padding-right` + `border-right`+`padding-left` + `border-left`. Trong một số trường hợp nó gây ra khó chịu (ví dụ, nếu bạn muốn một box có total width bằng 50% với border và padding được thể hiện bằng pixels?) Để tránh các trường hợp như vậy, có thể tinh chỉnh box model với tính chất `box-sizing` và để value là `border-box`. Nó thay đổi box model thành một cái mới: mà `width` lúc này không phải `width` của content mà là `width = width's (content + padding + border)`.
 ___
 ## Advanced box manipulation
 
 Ngoài cài đặt về width, height, border, padding và margin của boxes, có một số tính chất khác để thay đổi hành vi của box. Phần này thảo luận về những tính chất đó.
 
 ### Overflow
 Khi bạn set size của 1 box với giá trị absolute (ví dụ pixel width/height), content có thể không vừa bên trong kích cỡ cho phép, trong trường hợp đó nội dung tràn ra khỏi box. Để kiểm soát cái xảy ra trong các trường hợp đó, chúng ta có thể sử dụng `overflow` property. Nó nhận 1 vài values, nhưng hay gặp nhất là:
 
 - `auto`: nếu có quá nhiều content, nội dung tràn sẽ bị ẩn và xuất hiện scroll bar để người cùng kéo và xem toàn bộ content.
 - `hidden`: làm hidden phần content overflowing
 - `visible`: Nếu có quá nhiều content, phần content bị tràn vẫn hiện ngoài box (đây cũng chính là chế độ default)
 
 ### Background clip
 
 Box background được tạo bởi colors và images, xếp chồng lên nhau (`background-color`, `background-image`) Chúng được cài đặt cho box và được vẽ phía dưới hộp (drawn under that box - chắc là layout phía dưới).
 
  __Note__ :  `background-image > background-color`: chẳng hạn viết `background-image` trước, viết `background-color` sau thì background vẫn là ảnh chứ không phải là màu, nhưng nếu viết `background: red` thì background sẽ chuyển sang màu đỏ. Nếu viết 
```CSS
  background: red;
  background-image: url('https://www.w3schools.com/w3images/fjords.jpg');
```
Tức là cho màu của background trước thì nó sẽ hiện ảnh ở kích thước đúng, và ở góc trên bên trái thôi, chứ không thu nhỏ ảnh lại và cover cả ảnh như bình thường `background-image` thường làm.
  
 By default, backgrounds mở rộng đến cạnh ngoài của border. Điều này bình thường là tốt, nhưng trong một số trường hợp nó có thể gây ra khó chịu (nếu bạn có một titled background image mà bạn chỉ muốn mở rộng đến cạnh của content thôi?) Hành vi này có thể chỉnh bằng cài `background-clip` Tức là chỉnh cỡ của background, có 3 value: 
 - `border-box`: background chạy đến hết border (defaul!)
 - `padding-box`: background chạy đến padding thôi
 - `content-box`: background chạy nhỏ hơn nữa, chỉ đến hết content thôi.
 
### Outline

Last but not least (Cuối cùng nhưng không kém phần quan trọng), `outline` của một box là cái gì đó giống như border nhưng nó không phải là một phần của box model (mô hình box). Nó hoạt động như border nhưng được vẽ lên top của box không có thay đổi kích cỡ của box (cho rõ ràng hơn, outline là được vẽ ngoài border box, trong phần margin).

__Note__: Cẩn thận khi sử dụng outline property. Nó được sử dụng trong một số trường hợp để hightlight active parts của một trang web chẳng hạn các links khi người dùng click vào. Nếu bạn định dùng outline thì đừng làm nó giống vs các link highlights nếu không sẽ gây ra nhầm lãn.
___
## Types of CSS boxes

Tất cả những thứ chúng ta vừa nói đến h áp dụng cho các phần tử cấp độ box ( box level elements). Tuy nhiên CSS có các loại box mà hoạt động khác, loại của box được áp dụng cho element được xác định bởi property `display`. Có nhiều các giá trị khác nhau cho `display` nhưng trong bài này chỉ chú tâm vào `block`, `inline`, `inline-block`. 

- Một `block` box được xác định như một box chèn lên trước các box khác (ví dụ content trước và sau box xuất hiện trên các dòng riêng), cài được width, height, áp dụng được tất cả cái vùa học trên box-model
- `inline` box thì đối nghịch với box, nó chảy cùng các text khác (xuất hiện cùng dòng, có thể bị bao xung quanh bởi các box khác, nội dung có thể bị break trong dòng chảy text khi xuống dòng, y hệt như paragraph. Width và height cài đặt không có tác dụng. Margin chỉ tác dụng với left và right, padding có tác dụng về các phía nhưng mà chỉ đẩy text xung quanh 2 bên chứ không đẩy được text dòng dưới hoặc trên. và Padding và Margin không có tác dụng với các box dạng `block` khác.
- `inline-block` ở dạng khác, lai giữa 2 cái trên, cũng như `inline` chảy cùng text nhưng lại giống `block` ở chỗ là chỉnh được `width` và `height`, padding và margin vẫn có tác dụng y hệt `block`, nó sẽ không bị chảy như `inline` kiểu như nếu `inline` có xuống dòng thì bị break, còn `inline-block` dài và thiếu chỗ thì thay vì break và phải xuống dòng như `inline` thì nó sẽ bỏ luôn hẳn 1 dòng, xuống dòng mới luôn.

__Note__: Mặc định thì các block level elements có `display: block` còn các inline elements có `display: inline` cài đặt lên chúng.
___
## See also
__phần nâng cao__
- [Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context): The technical term for a CSS box laid out on a web page.
- [Visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model): An in depth explanation of the algorithm that lays out CSS boxes on a web page.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 










































