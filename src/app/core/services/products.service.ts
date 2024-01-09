import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProduct: Product[] = []
  constructor(private toast: ToastrService, private http: HttpClient) { }
  allproducts = [
    { productid: 7, type: `Bed`, productname: 'Cartlon Woodwine Bed', productdesc: `Experience the warmth and comfort of our luxurious down comforter. This comforter is filled with premium down and feathers, providing exceptional insulation and loft. The comforter is also available in a variety of weights to suit your climate and preferences.`, productprice: 17999, productimage: './../assets/products/cartlon woodwine bed.webp', quantity: 1 },
    { productid: 8, type: `Bed`, productname: 'Godrej V2.0 Bed', productdesc: `Upgrade your sleep experience with our luxurious Egyptian cotton sheets. These sheets are made from the finest cotton fibers, providing a soft, smooth, and breathable feel. The sheets are also available in a variety of colors and patterns to match your décor.`, productprice: 17999, productimage: './../assets/products/godrej v2.webp', quantity: 1 },
    { productid: 9, type: `Bed`, productname: 'Metallika Bed', productdesc: `Enjoy the comfort and support of our bamboo pillows. These pillows are filled with shredded bamboo, providing a cool, breathable feel. The pillows are also hypoallergenic, making them ideal for allergy sufferers.`, productprice: 17999, productimage: './../assets/products/metallika.webp', quantity: 1 },
    { productid: 1, type: `Bed`, productname: 'Orian bed', productdesc: 'A without storage metal bed is a simple yet stylish bed frame that is designed to provide a comfortable and sturdy support for your mattress. It is made of high-quality metal materials that ensure durability and longevity. This type of bed frame does not come with any built-in storage units, so its ideal for those who have limited space and prefer a minimalist look in their bedroom decor.', productprice: 25999, productimage: './../assets/products/orian bed.webp', quantity: 1 },
    { productid: 2, type: `Bed`, productname: 'Trevi Bolton Bed', productdesc: `Bharat Lifestyle Amsterdam king Size Wenge & Highland Pine Color Bed Will Give A Complete Look And Class To Your Bedroom. This Bed Is From Contemporary Range Of Furnitures. It has combination of adorable color and the beautiful paneling with matte finishing.`, productprice: 17999, productimage: './../assets/products/trevi-bolton.webp', quantity: 1 },
    { productid: 3, type: `Bed`, productname: 'Lifestyle Amster Bed', productdesc: `Indulge in the ultimate sleep experience with our luxurious memory foam mattress. This mattress conforms to your body's unique curves, providing exceptional support and pressure relief. The plush foam top layer provides a cloud-like feel, while the deeper support layers ensure a restful night's sleep.`, productprice: 17999, productimage: './../assets/products/lifestyle-amstermdam.webp', quantity: 1 },
    { productid: 4, type: `Bed`, productname: 'Lampoc Foldable Bed', productdesc: `Elevate your sleep experience with our adjustable bed frame. This versatile frame allows you to customize your sleep position, whether you prefer to recline slightly or elevate your head and feet. The frame also features built-in massage functions to help you relax and unwind before bed.`, productprice: 2499, productimage: './../assets/products/Lampoc Foldable bed.webp', quantity: 1 },
    { productid: 5, type: `Bed`, productname: 'Trevi-Primus Bed', productdesc: `Add a modern touch to your bedroom with our sleek platform bed. This bed features a low-profile design and a sturdy frame that eliminates the need for a box spring. The platform bed is also available in a variety of colors and finishes to match your décor.`, productprice: 17999, productimage: './../assets/products/trevi-primus.webp', quantity: 1 },
    { productid: 6, type: `Bed`, productname: 'WakeFit Bed', productdesc: `Enhance the look of your bed with our stylish headboard and footboard set. This set is available in a variety of styles to suit your taste, from traditional to contemporary. The headboard and footboard are also made from high-quality materials that will last for years to come.`, productprice: 17999, productimage: './../assets/products/wake-fit bed.webp', quantity: 1 },
    { productid: 10, type: `Bed`, productname: 'SleepyHead Bed', productdesc: `Experience the benefits of deep pressure therapy with our weighted blanket. This blanket is filled with heavy glass beads, providing a sense of calm and relaxation. The weighted blanket is also available in a variety of weights to suit your needs.`, productprice: 6500, productimage: './../assets/products/sleepyhead2.webp', quantity: 1 },
    { productid: 11, type: `Bed`, productname: 'Marbito Bed', productdesc: `Block out distractions and improve your sleep quality with our sleep mask. This mask is made from soft, breathable fabric and features an adjustable strap for a comfortable fit. The mask also blocks out light, making it ideal for sleeping in bright rooms.`, productprice: 17999, productimage: './../assets/products/Marbito Bed.webp', quantity: 1 },
    { productid: 12, type: `Bed`, productname: 'Quilaa Bed', productdesc: `Create a soothing environment for sleep with our white noise machine. This machine features a variety of sounds to choose from, such as ocean waves and rain. The white noise can help to block out distractions and improve your sleep quality.`, productprice: 17999, productimage: './../assets/products/Quilaa Bed.webp', quantity: 1 },
    { productid: 13, type: `Sofa`, productname: 'Modern Leather Sofa', productdesc: 'Elevate your living room with our sleek and sophisticated modern leather sofa. This sofa features a low-profile design, clean lines, and tufted cushions for a stylish and inviting look. The high-quality leather upholstery is both durable and luxurious, making it a perfect choice for everyday use.', productprice: 16799, productimage: './../assets/products/sofas/arra sofa.webp', quantity: 1 },
    { productid: 14, type: `Sofa`, productname: `Plush Velvet Sofa`, productdesc: `Embrace a touch of luxury with our opulent plush velvet sofa. This sofa is upholstered in soft, velvety fabric that is both inviting and stylish. The deep cushions and tufted detailing provide a comfortable and inviting seating experience.`, productprice: 28750, productimage: './../assets/products/sofas/plush velvet.webp', quantity: 1 },
    { productid: 15, type: `Sofa`, productname: `Oversized Sect Sofa`, productdesc: `Create a cozy and inviting space for family and friends with our oversized sectional sofa. This sofa features ample seating space, making it ideal for large gatherings. The sectional design allows you to customize the layout to fit your space and needs.`, productprice: 21150, productimage: './../assets/products/sofas/oversized.webp', quantity: 1 },
    { productid: 16, type: `Sofa`, productname: 'Reclining Sofa', productdesc: `Kick back and relax in style with our luxurious reclining sofa. This sofa features plush cushions, adjustable backrests, and retractable footrests for ultimate comfort. The reclining function allows you to find the perfect position for watching TV, reading, or simply relaxing.`, productprice: 16689, productimage: './../assets/products/sofas/reclining.webp', quantity: 1 },
    { productid: 17, type: `Sofa`, productname: `Chesterfield Sofa`, productdesc: `Add a touch of classic elegance to your living room with our timeless Chesterfield sofa. This sofa features deep button-tufting, rolled arms, and a low-profile design for a traditional and sophisticated look. The high-quality leather upholstery ensures durability and a luxurious feel.`, productprice: 16999, productimage: './../assets/products/sofas/chester.webp', quantity: 1 },
    { productid: 18, type: `Sofa`, productname: `Chaise Lounge Sofa`, productdesc: `Indulge in ultimate relaxation with our luxurious chaise lounge sofa. This sofa features an extended chaise section that allows you to stretch out and unwind in comfort. The chaise section is perfect for reading, napping, or simply lounging.`, productprice: 15678, productimage: './../assets/products/sofas/chaise.webp', quantity: 1 },
    { productid: 19, type: `Sofa`, productname: `Sleep Sofa`, productdesc: `Transform your living room into a guest room with our versatile sleep sofa. This sofa features a pull-out bed that provides comfortable sleeping accommodations for guests. The sofa also features ample storage space for bedding or other essentials.`, productprice: 12400, productimage: './../assets/products/sofas/sleepsofa.webp', quantity: 1 },
    { productid: 20, type: `Sofa`, productname: `Modular Sofa`, productdesc: `Create a dynamic and adaptable living space with our modular sofa. This sofa features individual pieces that can be arranged in a variety of configurations to suit your space and needs. The modular design allows you to easily change the layout to accommodate different activities or guests.`, productprice: 15000, productimage: './../assets/products/sofas/modular.webp', quantity: 1 },
    { productid: 21, type: `Sofa`, productname: `Outdoor Sofa`, productdesc: `Enjoy the outdoors in style with our stylish and comfortable outdoor sofa. This sofa is made from weather-resistant materials that can withstand the elements. The plush cushions and supportive frame provide ample comfort for relaxing or entertaining guests.`, productprice: 18999, productimage: './../assets/products/sofas/outdoor.webp', quantity: 1 },
    { productid: 22, type: `Sofa`, productname: `Convertible Sofa Bed`, productdesc: `Enjoy the outdoors in style with our stylish and comfortable outdoor sofa. This sofa is made from weather-resistant materials that can withstand the elements. The plush cushions and supportive frame provide ample comfort for relaxing or entertaining guests.`, productprice: 9999, productimage: './../assets/products/sofas/convertable.webp', quantity: 1 },
    { productid: 23, type: `Sofa`, productname: `Loveseat Sofa`, productdesc: `This loveseat is a perfect choice for smaller spaces or for those who prefer a more intimate seating arrangement. The loveseat is designed for two people and features comfortable cushions and supportive armrests.`, productprice: 16780, productimage: './../assets/products/sofas/Loveseat.webp', quantity: 1 },
    { productid: 33, type: `Dining`, productname: `Utkarsh Dining Table`, productdesc: `Add a touch of warmth and charm to your dining room with our rustic dining table. This table features a distressed wood finish, metal accents, and a weathered look for a cozy and inviting feel. The rustic design is perfect for creating a farmhouse or country-style atmosphere.`, productprice: 22900, productimage: `./../assets/products/diningtables/utkarsh.webp`, quantity: 1 },
    { productid: 34, type: `Dining`, productname: `TeakWood Dining Table`, productdesc: `Enhance your dining room with our traditional and sturdy trestle dining table. This table features a trestle base that provides ample support for the tabletop. The trestle design adds a touch of classic elegance to your space.`, productprice: 27999, productimage: `./../assets/products/diningtables/teakwood.webp`, quantity: 1 },
    { productid: 35, type: `Dining`, productname: `Woodaffa Teak Table`, productdesc: `Complete your dining room with our stylish and functional dining table set. This set includes a dining table and chairs, all crafted from high-quality materials and designed to complement each other perfectly. The dining table set provides a comfortable and inviting space for dining and entertaining guests.`, productprice: 10999, productimage: `./../assets/products/diningtables/woodaffa.webp`, quantity: 1 },
    { productid: 36, type: `Dining`, productname: `Kook Dining Table`, productdesc: `Foster a sense of intimacy and conversation with our inviting round dining table. This table features a circular shape that encourages interaction and creates a warm and welcoming atmosphere. The table is also available in a variety of sizes and styles to suit your space and needs.`, productprice: 11999, productimage: `./../assets/products/diningtables/kook.webp`, quantity: 1 },
    { productid: 28, type: `Dining`, productname: `Jiomee Outdoor Table`, productdesc: `Foster a sense of intimacy and conversation with our inviting round dining table. This table features a circular shape that encourages interaction and creates a warm and welcoming atmosphere. The table is also available in a variety of sizes and styles to suit your space and needs. `, productprice: 18999, productimage: `./../assets/products/diningtables/jiomee.webp`, quantity: 1 },
    { productid: 29, type: `Dining`, productname: `Geomee Dining Table`, productdesc: `Foster a sense of intimacy and conversation with our inviting round dining table. This table features a circular shape that encourages interaction and creates a warm and welcoming atmosphere. The table is also available in a variety of sizes and styles to suit your space and needs`, productprice: 25000, productimage: `./../assets/products/diningtables/geomart.webp`, quantity: 1 },
    { productid: 24, type: `Sofa`, productname: `Armless Sofa`, productdesc: `This armless sofa is a stylish and modern choice for living rooms and other spaces. The armless design gives the sofa a sleek and streamlined appearance. The sofa is also comfortable and supportive, with plush cushions and a sturdy frame.`, productprice: 19999, productimage: './../assets/products/sofas/armless.webp', quantity: 1 },
    { productid: 25, type: `Dining`, productname: `Modern Dining Table`, productdesc: `Bring a touch of rustic charm to your dining room with our modern farmhouse dining table. This table features a distressed wood finish, weathered metal accents, and a clean-lined design for a stylish and inviting look. The table is also available in a variety of sizes to suit your needs.Bring a touch of rustic charm to your dining room with our modern farmhouse dining table. This table features a distressed wood finish, weathered metal accents, and a clean-lined design for a stylish and inviting look. The table is also available in a variety of sizes to suit your needs.`, productprice: 18999, productimage: `./../assets/products/diningtables/modern.webp`, quantity: 1 },
    { productid: 26, type: `Dining`, productname: `Glass Dining Table`, productdesc: `Create a sense of spaciousness and elegance in your dining room with our sleek glass dining table. This table features a glass top that allows light to pass through, creating a bright and airy feel. The table is also supported by a sturdy metal base that provides stability and style.`, productprice: 16700, productimage: `./../assets/products/diningtables/glass.webp`, quantity: 1 },
    { productid: 27, type: `Dining`, productname: `Loonart Dining Table`, productdesc: `Elevate your dining room with our sophisticated oval dining table. This table features an oval shape that is both stylish and space-saving. The oval design also allows for more legroom than a traditional rectangular table.`, productprice: 25600, productimage: `./../assets/products/diningtables/loonart.webp`, quantity: 1 },
    { productid: 30, type: `Dining`, productname: `Star Dining Table`, productdesc: `Accommodate your growing family and friends with our versatile extendable dining table. This table features an extension leaf that can be easily inserted or removed to accommodate different numbers of guests. The table is also available in a variety of styles and finishes to suit your taste.`, productprice: 67999, productimage: `./../assets/products/diningtables/starwooden.webp`, quantity: 1 },
    { productid: 31, type: `Dining`, productname: `Plastic Table`, productdesc: `Add a touch of traditional elegance to your dining room with our classic pedestal dining table. This table features a pedestal base that supports a round or oval top. The pedestal base provides a clean and streamlined look that complements a variety of décor styles.`, productprice: 2700, productimage: `./../assets/products/diningtables/plastic.webp`, quantity: 1 },
    { productid: 32, type: `Dining`, productname: `Wood Foldable Table`, productdesc: `Make a bold statement in your dining room with our industrial-chic concrete dining table. This table features a durable concrete top that is both stylish and functional. The concrete top is easy to clean and maintain, making it a great choice for everyday use.`, productprice: 12890, productimage: `./../assets/products/diningtables/foldable.webp`, quantity: 1 },
  ]

  addProduct(products: Product, image: File) {
    const formData: FormData = new FormData();
    formData.append('title', products.title.toString())
    formData.append('description', products.description)
    formData.append('price', products.price.toString())
    formData.append('image', image)
    formData.append('category', products.category)

    const headers: HttpHeaders = new HttpHeaders();

    this.http.post<Product>('http://localhost:9000/api/admin/products', formData, { headers })
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      }
      )
  }



  getAllProduct() {
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get<Product>('http://localhost:9000/api/admin/products')
  }

  getProductById(id: string) {
    return this.http.get<Product>(`http://localhost:9000/api/users/product/${id}`)
  }

  getProductByCategory(type: string) {
    return this.http.get<Product>(`http://localhost:9000/api/users/product/category/${type}`)
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(`http://localhost:9000/api/users/product/${id}`)
  }

  updateProduct(id: string, body: Product) {
    return this.http.patch<Product>(`http://localhost:9000/api/users/product/${id}`, body)
  }

}

