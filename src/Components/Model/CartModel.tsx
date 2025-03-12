// react icons
import { RxCross1 } from "react-icons/rx";
const CartModel = () => {
  // outside click modal close

  return (
    <>
      <div className={` w-[90%] mx-auto flex items-end px-2`}>
        <div
          className={`
           w-full h-full bg-[#eceef6] transition-all duration-300 mx-auto mt-8`}
        >
          <div className="w-full flex items-end p-4 justify-end"></div>
          <div className="flex items-start md:flex-row flex-col justify-between gap-8">
            <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full md:w-[70%]">
              {/* steps */}
              <div className="flex items-center md:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                <div className="flex items-center gap-5">
                  <span className="text-[1rem] font-[500] text-[#3B9DF8] border-b border-[#3B9DF8] pb-3">
                    1.Cart
                  </span>
                  <span className="text-[1rem] font-[500] text-[#424242] pb-3">
                    2. Shipping & Payment
                  </span>
                  <span className="text-[1rem] font-[500] text-[#424242] pb-3">
                    3. Confimation
                  </span>
                </div>

                <a
                  href="#"
                  className="underline text-[#3B9DF8] font-[500] pb-3"
                >
                  Why is subscribing better?
                </a>
              </div>

              {/* products */}
              <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                <div className="flex items-start gap-5">
                  <img
                    src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                    alt="Still life of skincare products"
                    className="w-[90px] h-[60px] object-cover rounded-md"
                  />

                  <div className="">
                    <h2 className="text-[1.2rem] font-[600] text-[#3B9DF8]">
                      Still life of skincare products
                    </h2>
                    <p className="text-[1rem] font-[500] text-[#424242]">
                      25 items
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                    $32 <span className="text-[#3B9DF8] pl-1">$12</span>
                  </h3>

                  <RxCross1 className="text-[#6d6d6d]" />
                </div>
              </div>
              <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                <div className="flex items-start gap-5">
                  <img
                    src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                    alt="Levitating music headphones display"
                    className="w-[90px] h-[60px] object-cover rounded-md"
                  />

                  <div className="">
                    <h2 className="text-[1.2rem] font-[600] text-[#3B9DF8]">
                      Still life of skincare products
                    </h2>
                    <p className="text-[1rem] font-[500] text-[#424242]">
                      8 items
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                    $32 <span className="text-[#3B9DF8] pl-1">$12</span>
                  </h3>

                  <RxCross1 className="text-[#6d6d6d]" />
                </div>
              </div>
              <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                <div className="flex items-start gap-5">
                  <img
                    src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                    alt="Set of aloe vera cosmetic products"
                    className="w-[90px] h-[60px] object-cover rounded-md"
                  />

                  <div className="">
                    <h2 className="text-[1.2rem] font-[600] text-[#3B9DF8]">
                      Still life of skincare products
                    </h2>
                    <p className="text-[1rem] font-[500] text-[#424242]">
                      2 items
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                    $32 <span className="text-[#3B9DF8] pl-1">$12</span>
                  </h3>

                  <RxCross1 className="text-[#6d6d6d]" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[30%] mr-8">
              <div className="bg-[#fff] rounded-md p-6 ">
                <h3 className="text-[1rem] text-[#3B9DF8] font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                  Order Summary
                </h3>

                <div className="flex flex-col gap-5 mt-4">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-[1rem] font-[500] text-[#3B9DF8]">
                      Item Total
                    </h4>
                    <span className="text-text font-[500]">$180.00</span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-[1rem] font-[500] text-[#3B9DF8]">
                      Subcription savings (15% off)
                    </h4>
                    <span className="text-[#3B9DF8] font-[500]">- $18.00</span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-[1rem] font-[500] text-[#3B9DF8]">
                      Shipping
                    </h4>
                    <span className="text-[#3B9DF8] font-[500]">free</span>
                  </div>

                  <div className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                    <h4 className="text-[1rem] font-[500] text-text">
                      Order Total
                    </h4>
                    <span className="text-text font-[500]">$200.00</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-2 px-6 mt-6 tracking-widest bg-[#3B9DF8] rounded-md text-[#fff]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModel;
