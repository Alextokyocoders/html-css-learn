# Fundamental text and font styling

- [What is involved in styling text in CSS?](#what-is-involved-in-styling-text-in-css)
- [Fonts](#fonts)
  - [Color](#color)
  - [Font families](#font-families)
  - [Font size](#font-size)
  - [Font style, font weight, text transform, and text decoration](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Font_style_font_weight_text_transform_and_text_decoration)
  - [Text drop shadows](#text-drop-shadows)
- [Text-layout](#text-layout)
- [Font-shorthand](#font-shorthand)

___

## What is involved in styling text in CSS?

CSS propertise được sử dụng để style text được chia làm 2 loại:

- __Font-style:__ Các thuộc tính ảnh hưởng đến phông chữ được áp dụng cho văn bản, ảnh hưởng đến: phông chữ nào được áp dụng, độ to của nó, xem nó bold hay italic, etc.
- __Text-layout-styles:__ Các thuộc tính ảnh hướng đến spacing và các layout khác của text, cho phép thao tác, ví dụ, khoảng cách giữa các lines và letters, và cách text được căn chỉnh trong box.

>__Note__: Bear in mind that the text inside an element is all affected as one single entity. You can't select and style subsections of text unless you wrap them in an appropriate element (such as a `<span>` or `<strong>`), or use a text-specific pseudo-element like `::first-letter` (selects the first letter of an element's text), `::first-line` (selects the first line of an element's text), or `::selection` (selects the text currently highlighted by the cursor.)

___

## Fonts

### Color

Thẻ `color` set color cho text, underline hoặc overline nếu có (trong `text-decoration`)

### Font families

Thẻ: `font-family`, font chỉ được sử dụng nếu có font đó trong machine của website được thông qua, nếu không sẽ sử dụng defaul font của trang web.

#### Web safe fonts

Có một số loại font có trong tất cả các system, cho nên có thể sử dụng mà ko cần lo lắng, chúng được gọi là __web safe fonts__

Bảng safe-fonts

| __Name__        | __Generic type__ | __Notes__                                                                                                                                                                                                                                 |
|-----------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arial           | sans-serif       | It's often considered best practice to also add Helvetica as a preferred alternative to Arial as, although their font faces are almost identical, Helvetica is considered to have a nicer shape, even if Arial is more broadly available. |
| Courier New     | monospace        | Some OSes have an alternative (possibly older) version of the Courier New font called Courier. It's considered best practice to use both with Courier New as the preferred alternative.                                                   |
| Georgia         | serif            |                                                                                                                                                                                                                                           |
| Times New Roman | serif            | Some OSes have an alternative (possibly older) version of the Times New Roman font called Times. It's considered best practice to use both with Times New Roman as the preferred alternative.                                             |
| Trebuchet MS    | sans-serif       | You should be careful with using this font — it isn't widely available on mobile OSes.                                                                                                                                                    |
| Verdana         | sans-serif       |                                                                                                                                                                                                                                           |

#### Default fonts
Có 5 tên chung gồm `serif`,`sans-serif`, `monospace`, `cursive` và `fantasy`.
Trong đó `monospace` là font có các chữ có cùng width hay dùng cho số hoặc coding. `cursive` là dạng chữ viết tay, uốn lượn, có thể có kết nối giữa các chữ, `fantasy` dùng trong rang trí.

#### Font stacks

```CSS
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

viết nhiều font, nếu ko dùng đc font nào thì dùng font tiếp sau.

> __Note__: font nào mà tên dài hơn 2 chữ thì phải để trong ngoặc kép, `"Trebuchet MS"`.

 #### A font-family example
 ```CSS
 p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
 ```
### Font-size

học trong unit rồi

### [Font style, font weight, text transform, and text decoration](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Font_style_font_weight_text_transform_and_text_decoration)
### Text drop shadows
___

## Text layout

### Text aligment

keywords: `text-align` gồm các value `left`, `rìght`, `center`, `justify`

### Line height

Là chiều cao của mỗi dòng, nên đặt 1.5 (=1.5x font-size) vì 1 là font rồi, thêm 0.5 là khoảng cách giữa 2 dòng.

### Letter and word spacing
```CSS
p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

có thể dùng giá trị âm

### Other properties worth looking at

Font styles:

font-variant: Switch between small caps and normal font alternatives.

font-kerning: Switch font kerning options on and off.

font-feature-settings: Switch various OpenType font features on and off.

font-variant-alternates: Control the use of alternate glyphs for a given font-face.

font-variant-caps: Control the use of alternate capital glyphs.

font-variant-east-asian: Control the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.

font-variant-ligatures: Control which ligatures and contextual forms are used in text.

font-variant-numeric: Control the usage of alternate glyphs for numbers, fractions, and ordinal markers.

font-variant-position: Control the usage of alternate glyphs of smaller sizes positioned as superscript or subscript.

font-size-adjust: Adjust the visual size of the font independently of its actual font size.

font-stretch: Switch between possible alternative stretched versions of a given font.

text-underline-position: Specify the position of underlines set using the text-decoration-line property underline value

text-rendering: Try to perform some text rendering optimization

Text layout styles

text-indent: Specify how much horizontal space should be left before the beginning of the first line of the text content.

text-overflow: Define how overflowed content that is not displayed is signaled to users.

white-space: Define how whitespace and associated line breaks inside the element are handled.

word-break: Specify whether to break lines within words.

direction: Define the text direction (This depends on the language and usually it's better to let HTML handle that part as it is tied to the text content.)

hyphens: Switch on and off hyphenation for supported languages.

line-break: Relax or strengthen line breaking for Asian languages.

text-align-last: Define how the last line of a block or a line, right before a forced line break, is aligned.

text-orientation: Define the orientation of the text in a line.

word-wrap: Specify whether or not the browser may break lines within words in order to prevent overflow.

writing-mode: Define whether lines of text are laid out horizontally or vertically and the direction in which subsequent lines flow.

___
## Font shorthand

Many font properties can also be set through the shorthand property font. These are written in the following order:  font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family.

Among all those properties, only font-size and font-family are required when using the font shorthand property.

A forward slash has to be put in between the font-size and line-height properties.

A full example would look like this:


```CSS
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;

```












































