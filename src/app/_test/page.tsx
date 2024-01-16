/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0Dd7tUa9moh
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center space-x-4">
          <Link className="text-2xl font-bold" href="#">
            Shopify
          </Link>
          <div className="relative">
            <Input
              className="pl-10 pr-4 py-2 rounded-md w-64"
              placeholder="Search products..."
              type="search"
            />
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="#">
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart</span>
          </Link>
          <Link className="flex items-center space-x-2" href="#">
            <UserIcon className="h-6 w-6" />
            <span>Account</span>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r p-4 overflow-auto">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <Accordion collapsible type="single">
            <AccordionItem value="fashion">
              <AccordionTrigger className="text-base font-medium">
                Fashion
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-4">
                  <Accordion collapsible type="single">
                    <AccordionItem value="men">
                      <AccordionTrigger className="text-base font-medium">
                        Men
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4">
                          <Link className="block py-1 text-sm" href="#">
                            Ethnic Wear
                          </Link>
                          <Link className="block py-1 text-sm" href="#">
                            Casual Wear
                          </Link>
                          <Link className="block py-1 text-sm" href="#">
                            Formal Wear
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="women">
                      <AccordionTrigger className="text-base font-medium">
                        Women
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4">
                          <Link className="block py-1 text-sm" href="#">
                            Ethnic Wear
                          </Link>
                          <Link className="block py-1 text-sm" href="#">
                            Casual Wear
                          </Link>
                          <Link className="block py-1 text-sm" href="#">
                            Formal Wear
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="electronics">
              <AccordionTrigger className="text-base font-medium">
                Electronics
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-4">
                  <Link className="block py-1 text-sm" href="#">
                    Mobiles
                  </Link>
                  <Link className="block py-1 text-sm" href="#">
                    Laptops
                  </Link>
                  <Link className="block py-1 text-sm" href="#">
                    Cameras
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
        <section className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="card">
              <img
                alt="Product Image"
                className="w-full h-48 object-cover"
                height="200"
                src="https://media.istockphoto.com/photos/book-cover-picture-id182732882?k=6&m=182732882&s=170667a&w=0&h=SQHKizPZ2m1U4AJcSptz3wE18g6IwHjVDOKyKP9HQQY="
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Men's Ethnic Wear
                </h3>
                <p className="text-gray-500 mb-2">
                  High quality ethnic wear for men.
                </p>
                <span className="text-lg font-bold">$49.99</span>
              </div>
            </div>
            <div className="card">
              <img
                alt="Product Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Women's Casual Wear
                </h3>
                <p className="text-gray-500 mb-2">
                  Stylish and comfortable casual wear for women.
                </p>
                <span className="text-lg font-bold">$59.99</span>
              </div>
            </div>
            <div className="card">
              <img
                alt="Product Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Latest Mobile</h3>
                <p className="text-gray-500 mb-2">
                  Latest mobile with advanced features.
                </p>
                <span className="text-lg font-bold">$699.99</span>
              </div>
            </div>
            <div className="card">
              <img
                alt="Product Image"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  High Performance Laptop
                </h3>
                <p className="text-gray-500 mb-2">
                  High performance laptop for professionals.
                </p>
                <span className="text-lg font-bold">$1299.99</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
