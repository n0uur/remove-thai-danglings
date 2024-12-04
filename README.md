# Remove Thai Danglings

Remove Thai non-base characters at the beginning of text.

ลบสระลอยข้างหน้าประโยคภาษาไทย

## ตัวอย่าง / Usage

```js
import removeThaiDangling from "remove-thai-danglings";

removeThaiDangling("ีกินข้าวเหนียวไก่ย่าง"); // => "กินข้าวเหนียวไก่ย่าง"
```

## ติดตั้ง / Installation

```bash
npm install remove-thai-danglings
yarn add remove-thai-danglings
pnpm add remove-thai-danglings

# or if you love Bun like me!
bun add remove-thai-danglings
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Any contributions you make are **greatly appreciated**.

## Acknowledgments

Thanks [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) Team for code base in Python. All of the credits goes to them!
