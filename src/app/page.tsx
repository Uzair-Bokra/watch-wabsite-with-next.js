import Link from "next/link";
import Logo from "/public/Logo.png"
import Download from "/public/download.jpeg"
import Download1 from "/public/download (2).jpeg"
import Download2 from "/public/download (1).jpeg"
import Image from "next/image";
const Home = () => {
  return (
    <div className="bg-gray-100 w-full">
      {/* Navbar */}
      <nav className=" w-full h-24 sticky inset-y-0 bg-white/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
          <div>
            <Image src={Logo} alt="logo" className="h-15 w-20" />
          </div>
          <div>
          <ul className="flex space-x-6 text-gray-700">
            <li className=" hidden sm:block hover:text-red-600 transition duration-300 cursor-pointer">
              <Link href="/">Home</Link>
              </li>
            <li className=" hidden sm:block hover:text-red-600 transition duration-300 cursor-pointer">
              <Link href="/">About</Link>
              </li>
            <li className=" hidden sm:block hover:text-red-600 transition duration-300 cursor-pointer">
              <Link href="/">Contact Us</Link>
              </li>
          </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-red-600 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold">Delicious Pizza, Delivered to Your Doorstep</h1>
        <p className="mt-4 text-lg">Fresh ingredients, fast service, and pizza that melts in your mouth!</p>
        <button className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300">Order Now</button>
      </header>

      {/* Featured Pizzas */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Amazing Pizzas</h2>
          <p className="text-lg text-gray-600 mt-2">Created with love and fresh ingredients</p>

          {/* Pizza Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Pizza 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="bg-gray-300 h-48 mb-4">
              <Image src={Download1} alt="panaverse logo" className="bg-cover w-full h-full" />
                </div> {/* Image Placeholder */}
              <h3 className="text-xl font-bold text-gray-800">Classic Margherita</h3>
              <p className="text-gray-600 mt-2">A perfect blend of cheese, tomato, and basil.</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300">Order Now</button>
            </div>

            {/* Pizza 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="bg-gray-300 h-48 mb-4">
              <Image src={Download2} alt="panaverse logo" className="bg-cover w-full h-full" />
                </div> {/* Image Placeholder */}
              <h3 className="text-xl font-bold text-gray-800">Pepperoni Paradise</h3>
              <p className="text-gray-600 mt-2">Topped with a generous amount of pepperoni and cheese.</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300">Order Now</button>
            </div>

            {/* Pizza 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="bg-gray-300 h-48 mb-4">
              <Image src={Download} alt="panaverse logo" className="bg-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Veggie Delight</h3>
              <p className="text-gray-600 mt-2">Loaded with fresh veggies for a healthier option.</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300">Order Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us - Expanded */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">About PizzaTo</h2>
          <p className="text-lg text-gray-600 mt-4 text-center">
            At PizzaPlace, we believe that pizza is an art. Our team of dedicated chefs handcraft each pizza with the
            freshest ingredients, ensuring every bite is a burst of flavor. With a passion for pizza that spans years, we
            strive to bring a touch of culinary excellence to every meal. Whether you’re dining in or ordering out, our
            commitment to quality and customer satisfaction remains the same.
          </p>
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us - Expanded */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg mt-2">Have a question or want to share your pizza experience? We'd love to hear from you!</p>

          {/* Contact Form */}
          <div className="mt-8 max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded focus:outline-none text-gray-900"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded focus:outline-none text-gray-900"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded focus:outline-none text-gray-900"
                  rows={5}
                />

              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-white text-red-600 font-semibold rounded hover:bg-gray-100 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 PizzaPlace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
