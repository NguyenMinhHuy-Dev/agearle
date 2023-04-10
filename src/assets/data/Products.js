import Pro_1 from '../img/Pro_1.png'
import Pro_2 from '../img/Pro_2.png'
import Pro_3 from '../img/Pro_3.png'
import Pro_4 from '../img/Pro_4.png'
import Pro_5 from '../img/Pro_5.png'
import Pro_6 from '../img/Pro_6.png'
import Pro_7 from '../img/Pro_7.png'
import Pro_8 from '../img/Pro_8.png'
import Pro_9 from '../img/Pro_9.png'
import Pro_10 from '../img/Pro_10.png'
import Pro_11 from '../img/Pro_11.png'

import ProD_1 from '../img/ProD_1.png'
import ProD_2 from '../img/ProD_2.png'
import ProD_3 from '../img/ProD_3.png'
import ProD_4 from '../img/ProD_4.png'
import ProD_5 from '../img/ProD_5.png'
import ProD_6 from '../img/ProD_6.png'
import ProD_7 from '../img/ProD_7.png'
import ProD_8 from '../img/ProD_8.png'
import ProD_9 from '../img/ProD_9.png'
import ProD_10 from '../img/ProD_10.png'
import ProD_11 from '../img/ProD_11.png'

const products = [
  {
    id: 1,
    title: 'Trending',
    imgUrl:  Pro_1,
    productName: 'Bàn phím AKKO ACR Pro 68',
    price: 2390000,
    category: 'Keyboard',
    shortDesc:'Nổi tiếng với những thiết kế đơn giản nhưng vẫn mang vẻ đẹp riêng dành cho những gaming gear của mình, Akko luôn tới những sản phẩm chất lượng. Hôm nay sẽ là chiếc bàn phím nhỏ nhắn, xinh xắn, AKKO ACR  Pro 68. ',
    description: ProD_1,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 2,
    title: 'Trending',
    imgUrl: Pro_2,
    productName: 'Chuột DareU RGB Superlight Wireless Pink',
    price: 690000,
    category: 'Computer Mouse',
    shortDesc:'Chuột DareU EM901X RGB Superlight Wireless Pink là một phiên bản nâng cấp chất lượng của DareU EM901. Được tích hợp một số tính năng nổi bật và phụ kiện đi kèm, chuột DareU EM901X RGB Superlight đang trở thành một gaming gear hot hit trong cộng đồng game thủ.',
    description: ProD_2,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 3,
    title: 'Trending',
    imgUrl: Pro_3,
    productName: 'Tai nghe Havit H2008D',
    price: 790000,
    category: 'Headphone',
    shortDesc:'Tai nghe Havit H2008D thu hút mọi ánh nhìn với ngoại hình mang đậm phong cách gaming. Phần đèn led logo đặt ở hai bên tô điểm nét ấn tượng thu hút mọi ánh nhìn. Với tông màu đen làm chủ đạo được điểm xuyên phần headband đỏ thể hiện được phong cách đầy cá tính. ',
    description: ProD_3,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 4,
    title: 'Trending',
    imgUrl: Pro_4,
    productName: 'Tai nghe gaming DareU EH925S Pink RGB',
    price: 890000,
    category: 'Headphone',
    shortDesc:'DareU EH925S Pink RGB là một trong những dòng sản phẩm tai nghe máy tính chơi game giá rẻ có hiệu ứng ánh sáng tuyệt vời được trang bị bộ điều khiển âm thanh đa chức năng Magic Box với điều khiển âm thanh đầy đủ. Hiệu ứng âm thanh chuyển đổi bằng một cú nhấp chuột mang lại trải nghiệm âm thanh vòm khác nhau, có thể cung cấp hiệu ứng âm thanh nổi hơn và khóa chính xác vị trí của đối thủ trong trò chơi.',
    description: ProD_4,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5, 
  },
  {
    id: 5,
    title: 'BestSales',
    imgUrl: Pro_5,
    productName: 'Bàn phím cơ AKKO 3084B Plus World Tour Tokyo R2',
    price: 2390000,
    category: 'Keyboard',
    shortDesc:'Bàn phím cơ AKKO có vẻ ngoài được lấy ý tưởng từ ngọn núi Phú Sĩ nổi tiếng tại Nhật Bản kết hợp với hoa anh đào vô cùng đẹp mắt. Giao diện nổi bật với tông màu hồng bao quát đã tạo nên tổng thể bắt mắt, đầy thu hút. Nếu bạn là người ưa chuộng vẻ ngoài hoàn hảo thì sản phẩm này quả thật là lựa chọn sáng suốt dành cho những góc máy chơi game và làm việc ấn tượng cùng các thiết bị khác như chuột máy tính, tai nghe,...cùng tone màu.',
    description: ProD_5,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 6,
    title: 'BestSales',
    imgUrl: Pro_6,
    productName: 'Chuột Logitech MX Anywhere 3',
    price: 1750000,
    category: 'Computer Mouse',
    shortDesc:'MX Anywhere 3 có độ linh hoạt tối ưu với hiệu suất đáng kể. Chuột bluetooth nhỏ gọn được thiết kế cho công việc di động – từ văn phòng tại nhà, tới quán cà phê, và tới phòng chờ ở sân bay.',
    description: ProD_6,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 7,
    title: 'BestSales',
    imgUrl:  Pro_7,
    productName: 'Màn hình ASUS VZ27EHE 27" IPS 75Hz viền mỏng',
    price: 3590000,
    category: 'Monitor',
    shortDesc:'Màn hình ASUS VZ27EHE 27 inch IPS 75Hz viền mỏng là một sản phẩm màn hình PC mới từ nhà Asus. ASUS VZ27EHE trình làng với một diện mạo mới vô cùng hút mắt khi sở hữu đường viền siêu mỏng chỉ 6.5mm giúp hình ảnh hiển thị được liền mạch và đẹp mắt hơn. Ngoài ra, ASUS cũng trang bị rất nhiều tính năng và công nghệ mới độc quyền trên chiếc màn hình Asus này để nâng cao trải nghiệm của người dùng.',
    description: ProD_7,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 8,
    title: 'New',
    imgUrl:  Pro_8,
    productName: 'Màn Hình Acer Nitro 23.8" VG240Y',
    price: 3190000,
    category: 'Monitor',
    shortDesc:'Một sản phẩm màn hình cao cấp đến từ thương hiệu nổi tiếng Acer. Nếu bạn đang cần tìm một màn hình chơi game chất lượng cao với kiểu dáng đẹp, màn hình hiển thị xuất sắc thì Acer 23.8″ Nitro VG240Y chính là sự lựa chọn hoàn hảo dành cho bạn.',
    description: ProD_8,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 9,
    title: 'Popular',
    imgUrl: Pro_9,
    productName: 'Màn hình LCD ACER KA272 (1920x1080/75Hz)',
    price: 3490000,
    category: 'Monitor',
    shortDesc:'Màn hình LCD Acer 27" KA272 mang đến tầm nhìn tuyệt đẹp với tấm nền IPS hiện đại, kết hợp nhiều công nghệ tiên tiến hỗ trợ bạn làm việc với không gian hiển thị sắc nét. Với mức giá phải chăng, đây sẽ là chiếc màn hình chất lượng đáng để bạn đầu tư cho công việc. ',
    description: ProD_9,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 10,
    title: 'Trending',
    imgUrl: Pro_10,
    productName: 'Tai nghe Corsair HS70 Pro Wireless Carbon',
    price: 1790000,
    category: 'Headphone',
    shortDesc:'Corsair HS70 Pro Wireless Carbon là dòng tai nghe máy tính có phần đệm tai mềm mại, dày dặn, độ sâu lớn, trùm kín tai hạn chế âm thanh từ bên ngoài lọt vào, cùng với độ bền cao, độ đàn hồi lớn ít bị biến dạng và khó rách. ',
    description: ProD_10,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 11,
    title: 'Trending',
    imgUrl:  Pro_11,
    productName: 'Bàn phím Leopold Bluetooth Blue Limited Edition',
    price: 3250000,
    category: 'Keyboard',
    shortDesc:'Chiếc bàn phím cơ Leopold FC750RBT Bluetooth Coral Blue Limited Edition hứa hẹn mang đến nhiều trải nghiệm gõ phím tuyệt vời cho người dùng. Không chỉ sở hữu vẻ đẹp thu hút mà còn mang lại cảm giác gõ phím thú vị. Khả năng đáp ứng nhanh và chính xác giúp mọi thao tác công việc đảm bảo được hiệu suất. ',
    description: ProD_11,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
]

export default products